import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-red mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          הדף לא נמצא
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          מצטערים, הדף שחיפשתם אינו קיים או שהועבר למיקום אחר.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-primary-red px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}

