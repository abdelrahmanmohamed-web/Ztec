import { ProductDetails } from "@/features/product-details/index";
import type { Metadata } from "next";

import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select(
      `
      name,
      slug,
      description,
      thumbnail_url,
      product_images (
        url
      )
    `,
    )
    .eq("slug", slug)
    .single();

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const image =
    product.thumbnail_url ??
    product.product_images?.[0]?.url ??
    "/opengraph-image.png";

  return {
    title: product.name,

    description: product.description ?? `Buy ${product.name} online at Etec.`,

    keywords: [product.name, "electronics", "shopping", "Etec"],

    alternates: {
      canonical: `/products/${product.slug}`,
    },

    openGraph: {
      type: "website",
      url: `/products/${product.slug}`,
      title: product.name,
      description: product.description ?? `Buy ${product.name} online at Etec.`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description ?? `Buy ${product.name} online at Etec.`,
      images: [image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
}
