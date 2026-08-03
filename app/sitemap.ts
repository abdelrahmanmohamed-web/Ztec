import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://etec-one.vercel.app";

  return [
    {
      url: base,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${base}/products`,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${base}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
