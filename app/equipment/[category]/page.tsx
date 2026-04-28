import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { siteContent } from "@/lib/content";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Generate static params for all categories
export function generateStaticParams() {
  return siteContent.equipment.categories.map((category) => ({
    category: category.id,
  }));
}

// Generate metadata for each category
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = siteContent.equipment.categories.find(
    (c) => c.id === params.category
  );

  if (!category) {
    return {
      title: "לא נמצא - טופ אש",
    };
  }

  return {
    title: `${category.title} - טופ אש`,
    description: category.description,
    openGraph: {
      title: `${category.title} - טופ אש`,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = siteContent.equipment.categories.find(
    (c) => c.id === params.category
  );

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-600 transition-colors hover:text-primary-red"
              >
                דף הבית
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link
                href="/equipment"
                className="text-gray-600 transition-colors hover:text-primary-red"
              >
                ציוד כיבוי אש
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="font-medium text-gray-900">{category.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${category.image})`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                אודות {category.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {category.details}
                </p>
              </div>

              {/* Features/Benefits */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  למה לבחור בנו?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-primary-red flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      מוצרים איכותיים מיצרנים מובילים
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-primary-red flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      התקנה מקצועית על ידי טכנאים מיומנים
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-primary-red flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      תמיכה ותחזוקה שוטפת
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 text-primary-red flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      עמידה בכל התקנים והדרישות
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 text-center rounded-md bg-primary-red px-6 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
                >
                  בקש הצעת מחיר
                </Link>
                <a
                  href={`tel:${siteContent.company.phone}`}
                  className="flex-1 text-center flex items-center justify-center gap-2 rounded-md border-2 border-primary-blue px-6 py-4 text-lg font-bold text-primary-blue transition-all hover:bg-primary-blue hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span>התקשר עכשיו</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            מוצרים נוספים
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.equipment.categories
              .filter((c) => c.id !== category.id)
              .slice(0, 3)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  href={`/equipment/${relatedCategory.id}`}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedCategory.image}
                      alt={relatedCategory.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-red transition-colors">
                      {relatedCategory.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {relatedCategory.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

