import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://topesh.co.il"),
  title: {
    default: "טופ אש - ציוד כיבוי אש ושירותי הגנה מפני אש",
    template: "%s | טופ אש",
  },
  description:
    "טופ אש מספקת שירותי ייעוץ, תכנון, ביצוע ובדיקה של מערכות כיבוי אש. ספרינקלרים, גלגלונים, צנרת ומערכות גילוי אש.",
  keywords: [
    "כיבוי אש",
    "ספרינקלרים",
    "מערכות גילוי אש",
    "גלגלונים",
    "ציוד כיבוי אש",
    "הגנה מפני אש",
    "באר שבע",
    "טופ אש",
  ],
  authors: [{ name: "טופ אש" }],
  creator: "טופ אש",
  publisher: "טופ אש",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://topesh.co.il",
    siteName: "טופ אש",
    title: "טופ אש - ציוד כיבוי אש ושירותי הגנה מפני אש",
    description:
      "שירותי ייעוץ, תכנון, ביצוע ובדיקה של מערכות כיבוי אש",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FireStation",
    name: siteContent.company.name,
    description: "חברת טופ אש מתמחה בציוד כיבוי אש ושירותי הגנה מפני אש",
    url: "https://topesh.co.il",
    telephone: siteContent.company.phone,
    email: siteContent.company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "פארק אופיר 147",
      addressLocality: "באר שבע",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.2518,
      longitude: 34.7913,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      siteContent.company.facebook,
      `https://wa.me/${siteContent.company.whatsapp}`,
    ],
  };

  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WNQNG4');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17218925391"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17218925391');
`,
          }}
        />
        {/* End Google tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WNQNG4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

