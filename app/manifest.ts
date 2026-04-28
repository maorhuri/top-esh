import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "טופ אש - ציוד כיבוי אש ושירותי הגנה מפני אש",
    short_name: "טופ אש",
    description:
      "טופ אש מספקת שירותי ייעוץ, תכנון, ביצוע ובדיקה של מערכות כיבוי אש",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#D8261E",
    icons: [
      {
        src: "/images/logo01.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}

