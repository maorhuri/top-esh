import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "תודה על פנייתך - טופ אש",
  description: "קיבלנו את פנייתך ונחזור אליך בהקדם",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17218925391/2tPfCKz9i8MbEM_mz5JA',
            'value': 1.0,
            'currency': 'ILS'
          });
        `}
      </Script>
    <section className="min-h-[70vh] flex items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-green-100 p-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          תודה על פנייתך!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          קיבלנו את ההודעה שלך ונחזור אליך בהקדם האפשרי.
          <br />
          בדרך כלל אנו מגיבים תוך 24 שעות בימי עסקים.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <p className="text-gray-700 mb-4">
            <strong>צריך תשובה דחופה?</strong>
          </p>
          <a
            href={`tel:${siteContent.company.phone}`}
            className="inline-flex items-center gap-2 text-xl font-bold text-primary-red hover:underline"
          >
            <Phone className="h-5 w-5" />
            {siteContent.company.phone}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-red px-6 py-3 text-white font-medium hover:bg-red-700 transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
            חזרה לדף הבית
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-100 px-6 py-3 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            צפה בשירותים שלנו
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
