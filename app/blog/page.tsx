import MainButton from "@/components/shared/button";

export default function ArticlesPage() {
  const articlesData = [];

  if (articlesData.length === 0) {
    return (
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center py-12 px-4 max-w-7xl mx-auto text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-stone-900">
            No articles yet
          </h1>
          <p className="text-stone-500 text-base">
            We haven&apos;t published any articles or news stories at the
            moment. Check back soon for updates!
          </p>
          <div className="pt-2">
            <MainButton text="Back to Home" href="/" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Our articles and news</h1>
    </section>
  );
}
