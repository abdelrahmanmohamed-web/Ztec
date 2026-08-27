type ProductImageFolder = "displays" | "phones" | "headphones" | "watches";

const categoryImageFolders: Record<string, ProductImageFolder> = {
  display: "displays",
  displays: "displays",
  phone: "phones",
  phones: "phones",
  smartphone: "phones",
  smartphones: "phones",
  headphone: "headphones",
  headphones: "headphones",
  watch: "watches",
  watches: "watches",
};

const imageExtensions: Record<ProductImageFolder, readonly string[]> = {
  displays: ["jpg", "jpg", "png", "jpg"],
  phones: ["jpg", "jpg", "png", "jpg"],
  headphones: ["jpg", "jpg", "jpg", "jpg"],
  watches: ["png", "png", "png", "jpg"],
};

function getProductImageFolder(category?: string) {
  const categoryParts = category?.toLowerCase().split(/[^a-z]+/) ?? [];

  return categoryParts
    .map((part) => categoryImageFolders[part])
    .find(Boolean);
}

export function getProductFeatureImages(category?: string) {
  const folder = getProductImageFolder(category);

  if (!folder) return [];

  return imageExtensions[folder].map(
    (extension, index) => `/in-products/${folder}/${index + 1}.${extension}`,
  );
}
