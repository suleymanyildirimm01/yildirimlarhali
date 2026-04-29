import type { MetadataRoute } from "next";

const siteUrl = "https://www.yildirimlarhali.com";

const routes = [
  "",
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
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
