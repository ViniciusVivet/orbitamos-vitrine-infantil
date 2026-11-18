import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orbitamos-vitrine-infantil.vercel.app";

  return [
    { url: baseUrl, priority: 1 },
    ...products.map((product) => ({
      url: `${baseUrl}/produto/${product.slug}`,
      priority: 0.8,
    })),
  ];
}
