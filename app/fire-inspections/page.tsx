import type { Metadata } from "next";
import FireInspectionsLanding from "@/components/FireInspectionsLanding";

export const metadata: Metadata = {
  title: "בדיקות למערכות כיבוי אש | טופ אש - שירותי בדיקה מקצועיים",
  description:
    "בדיקות תקופתיות למערכות כיבוי אש ומערכות גילוי אש. שירות מקצועי ומהיר עם אישורים מהבדיקה. מומחים בבדיקות מערכות גילוי וכיבוי אש.",
  keywords: [
    "מערכת כיבוי אש",
    "מערכות גילוי אש",
    "מערכות כיבוי אש",
    "מערכות גילוי וכיבוי אש",
    "בדיקות כיבוי אש",
    "בדיקה תקופתית",
    "תחזוקת מערכות כיבוי",
  ],
  openGraph: {
    title: "בדיקות למערכות כיבוי אש | טופ אש",
    description:
      "בדיקות תקופתיות למערכות כיבוי אש ומערכות גילוי אש. צוות מקצועי ומנוסה לשירותכם.",
  },
};

export default function FireInspectionsPage() {
  return <FireInspectionsLanding />;
}

