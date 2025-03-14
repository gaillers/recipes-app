import Link from "next/link";

export const EmptyFavorites: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-start">
      <div className="container mx-auto px-4 sm:px-8 py-8 pb-20">
        <h1 className="text-4xl font-markRegular text-center mb-4">
          Favorites
        </h1>
        <p className="text-lg text-center">No recipes in favorites</p>
        <div className="w-full flex justify-center mt-10">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
          >
            Go Back
          </Link>
        </div>
      </div>
    </section>
  );
};
