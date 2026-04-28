import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function ContactCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(216, 38, 30, 0.9), rgba(33, 58, 143, 0.9)), url('/images/hero/contact-bg.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            צריכים ייעוץ או הצעת מחיר?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            צוות המומחים שלנו כאן כדי לעזור לכם. צרו קשר עוד היום!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={`tel:${siteContent.company.phone}`}
              className="flex items-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-bold text-primary-red transition-all hover:bg-gray-100 hover:shadow-xl min-w-[200px] justify-center"
            >
              <Phone className="h-5 w-5" />
              <span>התקשרו עכשיו</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-primary-blue min-w-[200px] justify-center"
            >
              <Mail className="h-5 w-5" />
              <span>שלחו הודעה</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              <a 
                href={`tel:${siteContent.company.phone}`}
                className="text-2xl font-bold hover:underline"
              >
                {siteContent.company.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6" />
              <a 
                href={`mailto:${siteContent.company.email}`}
                className="text-2xl font-bold hover:underline break-all"
              >
                {siteContent.company.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

