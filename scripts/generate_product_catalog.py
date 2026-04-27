from __future__ import annotations

import hashlib
import io
import re
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image, ImageOps
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
CACHE_DIR = ROOT / "tmp" / "catalog-cache"
OUTPUT_PDF = PUBLIC_DIR / "catalog" / "yildirimlar-urun-katalogu.pdf"
BASE_PRODUCTS_TS = ROOT / "src" / "components" / "products" / "data" / "products.ts"
EXTRA_PRODUCTS_TS = ROOT / "src" / "data" / "products.ts"
LOGO_URL = "https://i.hizliresim.com/toskx63.png"
DISPLAY_WEBSITE = "www.yildirimlarhali.com"
REQUEST_REFERER = "https://www.yildirimlarhali.com/"
LOCAL_LOGO_PATHS = [
    ROOT / "tmp" / "catalog-cache" / "logo.png",
    ROOT / "tmp" / "catalog-cache" / "footer-logo.png",
]

PAGE_WIDTH, PAGE_HEIGHT = landscape(A4)
MARGIN_X = 36
MARGIN_Y = 30
CARD_GAP_X = 16
CARD_GAP_Y = 18
HEADER_HEIGHT = 58
FOOTER_HEIGHT = 24
GRID_COLS = 3
GRID_ROWS = 2
CARD_WIDTH = (PAGE_WIDTH - (MARGIN_X * 2) - (CARD_GAP_X * (GRID_COLS - 1))) / GRID_COLS
GRID_HEIGHT = PAGE_HEIGHT - HEADER_HEIGHT - FOOTER_HEIGHT - (MARGIN_Y * 2)
CARD_HEIGHT = (GRID_HEIGHT - (CARD_GAP_Y * (GRID_ROWS - 1))) / GRID_ROWS
IMAGE_HEIGHT = CARD_HEIGHT - 48

PRODUCT_PATTERN = re.compile(
    r'\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*image:\s*"([^"]+)"\s*,?\s*\}',
    re.DOTALL,
)


def register_fonts() -> tuple[str, str]:
    regular = Path(r"C:\Windows\Fonts\arial.ttf")
    bold = Path(r"C:\Windows\Fonts\arialbd.ttf")

    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("CatalogArial", str(regular)))
        pdfmetrics.registerFont(TTFont("CatalogArialBold", str(bold)))
        return "CatalogArial", "CatalogArialBold"

    return "Helvetica", "Helvetica-Bold"


def fix_text(value: str) -> str:
    if any(marker in value for marker in ("\u00c3", "\u00c4", "\u00c5", "\u00c2")):
        try:
            return value.encode("latin1").decode("utf-8")
        except UnicodeError:
            return value
    return value


def parse_products(path: Path) -> list[dict[str, str]]:
    content = path.read_text(encoding="utf-8")
    items = []
    for product_id, name, image in PRODUCT_PATTERN.findall(content):
        items.append(
            {
                "id": product_id,
                "name": fix_text(name),
                "image": image,
            }
        )
    return items


def cache_remote_file(url: str) -> Path:
    parsed = urllib.parse.urlparse(url)
    extension = Path(parsed.path).suffix or ".img"
    filename = hashlib.sha256(url.encode("utf-8")).hexdigest() + extension
    target = CACHE_DIR / filename
    if not target.exists():
        request = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0",
                "Referer": REQUEST_REFERER,
            },
        )
        with urllib.request.urlopen(request) as response:
            target.write_bytes(response.read())
    return target


def resolve_image_path(image_value: str) -> Path:
    if image_value.startswith("http://") or image_value.startswith("https://"):
        return cache_remote_file(image_value)
    if image_value.startswith("/"):
        return PUBLIC_DIR / image_value.lstrip("/")
    return ROOT / image_value


def resolve_logo_path() -> Path:
    for path in LOCAL_LOGO_PATHS:
        if path.exists() and path.stat().st_size > 0:
            return path
    return cache_remote_file(LOGO_URL)


def cover_image_for_box(image_path: Path, width: int, height: int) -> Image.Image:
    with Image.open(image_path) as image:
        prepared = ImageOps.exif_transpose(image).convert("RGB")
        fitted = ImageOps.fit(prepared, (width, height), method=Image.Resampling.LANCZOS)
        return fitted


def image_reader_for_path(image_path: Path, width: int, height: int) -> ImageReader:
    image = cover_image_for_box(image_path, width, height)
    buffer = io.BytesIO()
    image.save(buffer, format="JPEG", quality=92)
    buffer.seek(0)
    return ImageReader(buffer)


def draw_header(
    pdf: canvas.Canvas,
    logo_reader: ImageReader,
    regular_font: str,
    bold_font: str,
    page_number: int,
) -> None:
    pdf.drawImage(
        logo_reader,
        MARGIN_X,
        PAGE_HEIGHT - 46,
        width=130,
        height=28,
        mask="auto",
        preserveAspectRatio=True,
    )
    pdf.setFont(bold_font, 18)
    pdf.setFillColor(colors.HexColor("#282e52"))
    pdf.drawString(MARGIN_X + 150, PAGE_HEIGHT - 30, "Y\u0131ld\u0131r\u0131mlar \u00dcr\u00fcn Katalo\u011fu")
    pdf.setFont(regular_font, 10)
    pdf.setFillColor(colors.HexColor("#6b7280"))
    pdf.drawRightString(PAGE_WIDTH - MARGIN_X, PAGE_HEIGHT - 28, f"Sayfa {page_number}")
    pdf.setStrokeColor(colors.HexColor("#d1d5db"))
    pdf.line(MARGIN_X, PAGE_HEIGHT - 54, PAGE_WIDTH - MARGIN_X, PAGE_HEIGHT - 54)


def draw_cover(
    pdf: canvas.Canvas,
    logo_reader: ImageReader,
    regular_font: str,
    bold_font: str,
    product_count: int,
) -> None:
    pdf.setFillColor(colors.white)
    pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)

    pdf.setFillColor(colors.HexColor("#282e52"))
    pdf.rect(0, PAGE_HEIGHT - 160, PAGE_WIDTH, 160, stroke=0, fill=1)
    pdf.drawImage(
        logo_reader,
        MARGIN_X,
        PAGE_HEIGHT - 112,
        width=210,
        height=50,
        mask="auto",
        preserveAspectRatio=True,
    )

    pdf.setFillColor(colors.HexColor("#282e52"))
    pdf.setFont(bold_font, 30)
    pdf.drawString(MARGIN_X, PAGE_HEIGHT - 220, "Y\u0131ld\u0131r\u0131mlar \u00dcr\u00fcn Katalo\u011fu")
    pdf.setFont(regular_font, 14)
    pdf.setFillColor(colors.HexColor("#4b5563"))
    pdf.drawString(MARGIN_X, PAGE_HEIGHT - 252, "\u00dcr\u00fcn Gruplar\u0131m\u0131z")
    pdf.drawString(MARGIN_X, PAGE_HEIGHT - 274, f"Toplam \u00fcr\u00fcn: {product_count}")

    pdf.setFillColor(colors.HexColor("#f3f4f6"))
    pdf.roundRect(MARGIN_X, 80, PAGE_WIDTH - (MARGIN_X * 2), 180, 16, stroke=0, fill=1)
    pdf.setFillColor(colors.HexColor("#282e52"))
    pdf.setFont(bold_font, 16)
    pdf.drawString(MARGIN_X + 28, 220, "\u0130leti\u015fim")
    pdf.setFont(regular_font, 12)
    pdf.setFillColor(colors.HexColor("#374151"))
    pdf.drawString(MARGIN_X + 28, 192, "Telefon: +90 505 431 51 01 / +90 537 741 06 20 / +0346 223 63 89")
    pdf.drawString(MARGIN_X + 28, 168, "E-posta: iletisim@yildirimlarhali.com")
    pdf.drawString(MARGIN_X + 28, 144, "Adres: Pulur Mah. 12. Sok. No:4 Sivas / Merkez")
    pdf.drawString(MARGIN_X + 28, 120, f"Web: {DISPLAY_WEBSITE}")
    pdf.showPage()


def split_lines(
    text: str,
    pdf: canvas.Canvas,
    font_name: str,
    font_size: int,
    max_width: float,
) -> list[str]:
    words = text.split()
    if not words:
        return [text]

    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        probe = f"{current} {word}"
        if pdf.stringWidth(probe, font_name, font_size) <= max_width:
            current = probe
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def draw_product_card(
    pdf: canvas.Canvas,
    product: dict[str, str],
    x: float,
    y: float,
    regular_font: str,
    bold_font: str,
) -> None:
    pdf.setFillColor(colors.white)
    pdf.setStrokeColor(colors.HexColor("#e5e7eb"))
    pdf.roundRect(x, y, CARD_WIDTH, CARD_HEIGHT, 10, stroke=1, fill=1)

    image_path = resolve_image_path(product["image"])
    reader = image_reader_for_path(image_path, int(CARD_WIDTH - 16), int(IMAGE_HEIGHT))
    pdf.drawImage(
        reader,
        x + 8,
        y + CARD_HEIGHT - IMAGE_HEIGHT - 8,
        width=CARD_WIDTH - 16,
        height=IMAGE_HEIGHT,
        mask="auto",
    )

    name = product["name"]
    pdf.setFillColor(colors.HexColor("#282e52"))
    pdf.setFont(bold_font, 11)
    lines = split_lines(name, pdf, bold_font, 11, CARD_WIDTH - 18)
    text_y = y + 24
    if len(lines) > 2:
        lines = lines[:2]
        if not lines[-1].endswith("..."):
            lines[-1] = lines[-1][: max(0, len(lines[-1]) - 3)].rstrip() + "..."

    for line in reversed(lines):
        pdf.drawString(x + 10, text_y, line)
        text_y += 13

    pdf.setFillColor(colors.HexColor("#6b7280"))
    pdf.setFont(regular_font, 9)
    pdf.drawString(x + 10, y + 10, f"Kod: {product['id']}")


def generate_catalog() -> None:
    regular_font, bold_font = register_fonts()
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)

    products = parse_products(BASE_PRODUCTS_TS) + parse_products(EXTRA_PRODUCTS_TS)
    logo_path = resolve_logo_path()
    logo_reader = image_reader_for_path(logo_path, 520, 120)

    pdf = canvas.Canvas(str(OUTPUT_PDF), pagesize=landscape(A4))
    pdf.setTitle("Y\u0131ld\u0131r\u0131mlar \u00dcr\u00fcn Katalo\u011fu")
    pdf.setAuthor("OpenAI Codex")
    pdf.setSubject("Y\u0131ld\u0131r\u0131mlar \u00fcr\u00fcn katalo\u011fu")

    draw_cover(pdf, logo_reader, regular_font, bold_font, len(products))

    page_number = 2
    products_per_page = GRID_COLS * GRID_ROWS
    for start in range(0, len(products), products_per_page):
        draw_header(pdf, logo_reader, regular_font, bold_font, page_number)
        batch = products[start : start + products_per_page]
        for index, product in enumerate(batch):
            row = index // GRID_COLS
            col = index % GRID_COLS
            x = MARGIN_X + col * (CARD_WIDTH + CARD_GAP_X)
            y = PAGE_HEIGHT - HEADER_HEIGHT - MARGIN_Y - ((row + 1) * CARD_HEIGHT) - (row * CARD_GAP_Y)
            draw_product_card(pdf, product, x, y, regular_font, bold_font)

        pdf.setStrokeColor(colors.HexColor("#d1d5db"))
        pdf.line(MARGIN_X, 24, PAGE_WIDTH - MARGIN_X, 24)
        pdf.setFont(regular_font, 9)
        pdf.setFillColor(colors.HexColor("#6b7280"))
        pdf.drawString(MARGIN_X, 10, "Y\u0131ld\u0131r\u0131mlar Cami Otel Kurs Medrese Hal\u0131lar\u0131")
        pdf.drawRightString(PAGE_WIDTH - MARGIN_X, 10, DISPLAY_WEBSITE)
        pdf.showPage()
        page_number += 1

    pdf.save()


if __name__ == "__main__":
    generate_catalog()
