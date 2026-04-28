import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "ציוד כיבוי אש - טופ אש",
  description:
    "מגוון רחב של ציוד ומערכות כיבוי אש: ספרינקלרים, גלגלונים, צנרת, מערכות גילוי אש ועוד",
  openGraph: {
    title: "ציוד כיבוי אש - טופ אש",
    description:
      "מגוון רחב של ציוד ומערכות כיבוי אש: ספרינקלרים, גלגלונים, צנרת, מערכות גילוי אש ועוד",
  },
};

export default function EquipmentPage() {
  return (
    <>
      <HeroSection
        title={siteContent.equipment.hero.title}
        subtitle={siteContent.equipment.hero.subtitle}
        backgroundImage={siteContent.equipment.hero.image}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              הציוד שלנו
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              אנו מספקים מגוון רחב של ציוד ומערכות כיבוי אש מהמובילים בתעשייה
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.equipment.categories.map((category) => (
              <Link
                key={category.id}
                href={`/equipment/${category.id}`}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-red font-medium">
                    <span>לפרטים נוספים</span>
                    <svg
                      className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-primary-red transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            לא מצאתם את מה שחיפשתם?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            צרו איתנו קשר ונשמח לעזור לכם למצוא את הפתרון המתאים ביותר
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-primary-red px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
          >
            צור קשר
          </Link>
        </div>
      </section>
    </>
  );
}

