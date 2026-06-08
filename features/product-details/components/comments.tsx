import reviews from "@/mokdata/customers.json";
import { getCategories } from "@/features/products";
import { Category } from "@/components/shared/types";
import { RelatedProductsProps } from "../type";

export async function Comments({ category_id }: RelatedProductsProps) {
  const categories: Category[] = await getCategories();
  const category = categories.find((cat) => cat.id === category_id);

  if (!category) {
    return null;
  }

  const categoryReviews =
    reviews.customer_reviews[
      category.slug as keyof typeof reviews.customer_reviews
    ] || [];

  return (
    <div className="py-16 border-b border-stone-300">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <h2 className="flex flex-col text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          What customers
          <span className="text-gray-400 font-medium">are saying</span>
        </h2>
        <p className="max-w-sm text-gray-500 text-sm leading-relaxed">
          Experience the convenience and satisfaction shared by our thriving
          community of shoppers who trust our ecommerce store for their every
          purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryReviews.map((i, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl flex flex-col justify-between min-h-[250px]"
          >
            <p className="text-gray-600 text-sm leading-6">{i.comment}</p>
            <span className="mt-6 font-semibold text-gray-800 text-sm">
              {i.author}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
