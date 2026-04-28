import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo01.jpg"
              alt={siteContent.company.name}
              width={150}
              height={75}
              className="h-24 w-auto mb-4 bg-white p-4 rounded-2xl shadow-lg"
            />
            <p className="text-gray-300 text-sm leading-relaxed text-center md:text-right">
              מומחים בכיבוי אש והגנה מפני אש. שירותי ייעוץ, תכנון, ביצוע ובדיקה.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">יצירת קשר</h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href={`tel:${siteContent.company.phone}`}
                className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 text-primary-red" />
                <span>{siteContent.company.phone}</span>
              </a>
              <a
                href={`mailto:${siteContent.company.email}`}
                className="flex items-center gap-3 text-gray-300 transition-colors hover:text-white break-all"
              >
                <Mail className="h-5 w-5 text-primary-red" />
                <span>{siteContent.company.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary-red flex-shrink-0" />
                <span>{siteContent.company.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <div className="space-y-2 mb-6 flex flex-col items-center md:items-start">
              <Link
                href="/"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                {siteContent.navigation.home}
              </Link>
              <Link
                href="/equipment"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                {siteContent.navigation.equipment}
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                {siteContent.navigation.services}
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                {siteContent.navigation.contact}
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={siteContent.company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-blue p-2 transition-all hover:bg-blue-700 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${siteContent.company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 p-2 transition-all hover:bg-green-700 hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {siteContent.company.name}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

