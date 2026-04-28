import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "צור קשר - טופ אש",
  description:
    "צרו קשר עם טופ אש לקבלת ייעוץ, הצעת מחיר או כל שאלה אחרת. אנחנו כאן כדי לעזור!",
  openGraph: {
    title: "צור קשר - טופ אש",
    description:
      "צרו קשר עם טופ אש לקבלת ייעוץ, הצעת מחיר או כל שאלה אחרת. אנחנו כאן כדי לעזור!",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[180px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(33, 58, 143, 0.8), rgba(216, 38, 30, 0.8)), url('/images/hero/contact-bg.jpg')`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl mb-4">
            {siteContent.contact.title}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                שלחו לנו הודעה
              </h2>
              <p className="text-gray-600 mb-8">
                מלאו את הטופס ונחזור אליכם בהקדם האפשרי
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                פרטי התקשרות
              </h2>
              <p className="text-gray-600 mb-8">
                ניתן ליצור איתנו קשר גם בדרכים הבאות:
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-red">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">טלפון</h3>
                    <a
                      href={`tel:${siteContent.company.phone}`}
                      className="text-primary-red text-lg font-medium hover:underline"
                    >
                      {siteContent.company.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      זמינים לשיחה בימים א׳-ה׳, 8:00-17:00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-blue">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">אימייל</h3>
                    <a
                      href={`mailto:${siteContent.company.email}`}
                      className="text-primary-blue text-lg font-medium hover:underline break-all"
                    >
                      {siteContent.company.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      נחזור אליכם תוך 24 שעות
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-red">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">כתובת</h3>
                    <p className="text-gray-700 text-lg">
                      {siteContent.company.address}
                    </p>
                    <a
                      href={`https://waze.com/ul?q=${encodeURIComponent(
                        siteContent.company.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary-blue hover:underline mt-2"
                    >
                      <span>נווט ב-Waze</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-blue">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">שעות פעילות</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>ראשון - חמישי: 08:00 - 17:00</p>
                      <p>שישי: 08:00 - 13:00</p>
                      <p className="text-sm text-gray-600">שבת: סגור</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

