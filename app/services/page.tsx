import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { MessageCircle, Layout, Hammer, Search } from "lucide-react";
import { siteContent } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "שירותים - טופ אש",
  description:
    "שירותי ייעוץ, תכנון, ביצוע ובדיקה של מערכות כיבוי אש. צוות מקצועי ומנוסה לשירותכם.",
  openGraph: {
    title: "שירותים - טופ אש",
    description:
      "שירותי ייעוץ, תכנון, ביצוע ובדיקה של מערכות כיבוי אש. צוות מקצועי ומנוסה לשירותכם.",
  },
};

const iconMap = {
  "message-circle": MessageCircle,
  layout: Layout,
  hammer: Hammer,
  search: Search,
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title={siteContent.services.hero.title}
        subtitle={siteContent.services.hero.subtitle}
        backgroundImage={siteContent.services.hero.image}
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              מה אנחנו מציעים
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              שירותים מקצועיים ומקיפים בכל שלבי הפרויקט
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {siteContent.services.items.map((service, index) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || MessageCircle;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/95 via-primary-blue/90 to-primary-red/85 group-hover:from-primary-red/95 group-hover:to-primary-blue/85 transition-all duration-500"></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 p-8 md:p-10">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 transition-all duration-300 group-hover:bg-white group-hover:scale-110 shadow-lg">
                        <Icon className="h-8 w-8 text-white transition-colors group-hover:text-primary-red" />
                      </div>

                      {/* Number Badge */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-2xl font-bold text-white transition-all group-hover:bg-white group-hover:text-primary-red shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/95 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="h-6 w-6 text-white flex-shrink-0 mt-0.5 drop-shadow-lg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-white/95 font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href={service.id === "inspection" ? "/fire-inspections" : "/contact"}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-red font-bold rounded-lg transition-all duration-300 group-hover:gap-4 hover:bg-gray-100 hover:shadow-xl"
                    >
                      <span>לפרטים נוספים</span>
                      <svg
                        className="h-5 w-5 transition-transform"
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
                    </Link>

                    {/* Decorative Corner Accent */}
                    <div className="absolute bottom-0 right-0 h-20 w-20 border-b-4 border-r-4 border-white/30 rounded-br-2xl transition-all duration-300 group-hover:border-white/60"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              תהליך העבודה שלנו
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              מהשלב הראשון ועד להשלמת הפרויקט
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-red hidden lg:block -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "יצירת קשר וסקר ראשוני",
                  description:
                    "נפגשים לסקר המבנה, הערכת צרכים וזיהוי הפתרון המתאים ביותר",
                },
                {
                  step: "2",
                  title: "תכנון והצעת מחיר",
                  description:
                    "הכנת תוכנית מפורטת והצעת מחיר שקופה ומדויקת",
                },
                {
                  step: "3",
                  title: "ביצוע והתקנה",
                  description:
                    "ביצוע המערכת על ידי צוות מקצועי עם ציוד מהמתקדמים בשוק",
                },
                {
                  step: "4",
                  title: "בדיקה ואישור",
                  description:
                    "בדיקות יסודיות, הפעלת המערכת והנפקת תעודות אישור",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <div
                      className={`rounded-lg bg-white p-6 shadow-lg ${
                        index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Step circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-primary-red text-5xl font-bold text-white shadow-lg hidden lg:flex z-10">
                    {item.step}
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 lg:w-1/2 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-l from-primary-red to-primary-blue p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">למה לבחור בטופ אש?</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3 justify-center">
                  <svg
                    className="h-6 w-6 flex-shrink-0 mt-1"
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
                  <span>
                    <strong>ניסיון עשיר:</strong> שנים של ניסיון בתחום כיבוי אש
                  </span>
                </p>
                <p className="flex items-start gap-3 justify-center">
                  <svg
                    className="h-6 w-6 flex-shrink-0 mt-1"
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
                  <span>
                    <strong>צוות מקצועי:</strong> טכנאים מוסמכים ומיומנים
                  </span>
                </p>
                <p className="flex items-start gap-3 justify-center">
                  <svg
                    className="h-6 w-6 flex-shrink-0 mt-1"
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
                  <span>
                    <strong>ציוד מתקדם:</strong> שימוש בטכנולוגיות ומוצרים מהמובילים
                    בתעשייה
                  </span>
                </p>
                <p className="flex items-start gap-3 justify-center">
                  <svg
                    className="h-6 w-6 flex-shrink-0 mt-1"
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
                  <span>
                    <strong>שירות מלא:</strong> ליווי צמוד לאורך כל תהליך הפרויקט
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-white px-8 py-4 text-lg font-bold text-primary-red transition-all hover:bg-gray-100 hover:shadow-xl"
                >
                  בואו נתחיל לעבוד ביחד
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

