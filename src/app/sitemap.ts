import type { MetadataRoute } from "next";

const siteUrl = "https://www.yildirimlarhali.com";

const routes = [
  "",
  "/cami-halisi",
  "/hakkimizda",
  "/urunler",
  "/referanslarimiz",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/cami-halisi" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/cami-halisi" ? 0.9 : 0.8,
  }));
}
