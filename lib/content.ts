// Content data structure for the Topesh website
// TODO: Replace with actual content from topesh.co.il

export const siteContent = {
  company: {
    name: "טופ אש",
    phone: "073-7794775",
    email: "top-esh@outlook.co.il",
    address: "פארק אופיר 147, באר שבע",
    whatsapp: "972737794775",
    facebook: "#", // TODO: Add actual Facebook link
  },

  home: {
    hero: {
      title: "טופ אש - מומחים בכיבוי אש והגנה",
      subtitle: "שירותי ייעוץ, תכנון, ביצוע ובדיקה של מערכות כיבוי אש",
      cta: "קבלת ייעוץ",
      image: "/images/hero/main.jpg",
    },
    about: {
      title: "אודות טופ אש",
      description:
        "טופ אש מתמחה במתן שירותים מקצועיים בתחום כיבוי אש והגנה מפני אש. אנו מספקים פתרונות מותאמים אישית לכל לקוח, החל משלב הייעוץ והתכנון, דרך הביצוע ועד לבדיקות תקופתיות ותחזוקה.",
      image: "https://www.bmfsolutions.com/wp-content/uploads/2025/02/Commercial-fire-sprinkler-495x400.jpg",
    },
    whyUs: [
      {
        title: "ייעוץ מקצועי",
        description: "ייעוץ מקצועי ומדויק לפי תקנים ודרישות",
        icon: "lightbulb",
      },
      {
        title: "תכנון מושלם",
        description: "תכנון מערכות מתקדמות ומותאמות אישית",
        icon: "drafting-compass",
      },
      {
        title: "ביצוע איכותי",
        description: "ביצוע מקצועי עם חומרים באיכות גבוהה",
        icon: "wrench",
      },
    ],
    servicesPreview: [
      {
        title: "בדיקה",
        description: "בדיקות תקופתיות ואישורים",
        image: "/images/services/img01.png",
        link: "/services#inspection",
      },
      {
        title: "ייעוץ",
        description: "ייעוץ מקצועי ותכנון מערכות",
        image: "/images/services/img02.png",
        link: "/services#consultation",
      },
      {
        title: "תכנון",
        description: "תכנון מערכות כיבוי אש",
        image: "/images/services/img04.png",
        link: "/services#planning",
      },
      {
        title: "ביצוע",
        description: "התקנה וביצוע מערכות",
        image: "/images/services/img03.png",
        link: "/services#execution",
      },
    ],
  },

  equipment: {
    hero: {
      title: "ציוד כיבוי אש",
      subtitle: "מגוון רחב של ציוד ומערכות כיבוי אש",
      image: "/images/products/bg01.png",
    },
    categories: [
      {
        id: "sprinklers",
        title: "ספרינקלרים",
        description: "מערכות ספרינקלרים מתקדמות לכיבוי אש אוטומטי",
        image: "/images/products/img01.png",
        details:
          "ספרינקלרים הם מערכות כיבוי אש אוטומטיות המותקנות בתקרות מבנים. במקרה של שריפה, הספרינקלרים מתפעלים אוטומטית ומזרימים מים לכיבוי האש. אנו מספקים מגוון רחב של ספרינקלרים מיבואנים מובילים.",
      },
      {
        id: "hose-reels",
        title: "גלגלונים",
        description: "גלגלוני כיבוי אש לשימוש ידני",
        image: "/images/products/img02.png",
        details:
          "גלגלונים לכיבוי אש הם ציוד חיוני במבנים ציבוריים ותעשייתיים. הגלגלונים מאפשרים שליפה מהירה של צינור מים לכיבוי שריפה ראשונית.",
      },
      {
        id: "pipes",
        title: "צנרת",
        description: "צנרת איכותית למערכות כיבוי אש",
        image: "/images/products/img03.png",
        details:
          "צנרת למערכות כיבוי אש בסטנדרטים הגבוהים ביותר. אנו מספקים צנרת מסוגים שונים המתאימים לכל סוג של מערכת כיבוי אש.",
      },
      {
        id: "fire-detection",
        title: "מערכות גילוי אש",
        description: "מערכות גילוי והתרעה מתקדמות",
        image: "/images/products/img04.png",
        details:
          "מערכות גילוי אש מתקדמות לזיהוי מוקדם של שריפות. המערכות כוללות גלאי עשן, גלאי חום ומערכות התרעה.",
      },
      {
        id: "valves",
        title: "שסתומים",
        description: "שסתומים ואביזרים למערכות כיבוי",
        image: "/images/products/img05.png",
        details:
          "שסתומים ואביזרים איכותיים למערכות כיבוי אש. אנו מספקים שסתומי בקרה, שסתומי ביטחון ועוד.",
      },
      {
        id: "fire-extinguishers",
        title: "מטפים",
        description: "מטפי כיבוי אש מכל הסוגים",
        image: "/images/products/img06.png",
        details:
          "מטפי כיבוי אש לשימוש ביתי, מסחרי ותעשייתי. מטפי אבקה, קצף, CO2 ועוד.",
      },
    ],
  },

  services: {
    hero: {
      title: "השירותים שלנו",
      subtitle: "שירותים מקצועיים בתחום כיבוי אש",
      image: "/images/services/img06.png",
    },
    items: [
      {
        id: "consultation",
        title: "ייעוץ",
        description:
          "ייעוץ מקצועי בתחום כיבוי אש והגנה מפני אש. אנו מספקים ייעוץ מקצועי בכל שלבי הפרויקט.",
        icon: "message-circle",
        image: "/images/services/img01.png",
        details: [
          "סקר מבנים והערכת סיכונים",
          "ייעוץ לבחירת מערכות מתאימות",
          "התאמה לתקנים ודרישות",
          "ליווי בקבלת אישורים",
        ],
      },
      {
        id: "planning",
        title: "תכנון",
        description:
          "תכנון מערכות כיבוי אש מותאמות אישית. צוות מהנדסים מנוסים לתכנון מדויק.",
        icon: "layout",
        image: "/images/services/img02.png",
        details: [
          "תכנון מערכות ספרינקלרים",
          "תכנון מערכות גילוי והתרעה",
          "חישובים הידראוליים",
          "הכנת תוכניות ביצוע",
        ],
      },
      {
        id: "execution",
        title: "ביצוע",
        description:
          "ביצוע והתקנה של מערכות כיבוי אש. עובדים מקצועיים ומיומנים.",
        icon: "hammer",
        image: "/images/services/img03.png",
        details: [
          "התקנת מערכות ספרינקלרים",
          "התקנת גלגלונים ומטפים",
          "התקנת מערכות גילוי אש",
          "התקנת צנרת ואביזרים",
        ],
      },
      {
        id: "inspection",
        title: "בדיקה",
        description:
          "בדיקות תקופתיות ותחזוקה של מערכות כיבוי אש. שמירה על תקינות המערכות.",
        icon: "search",
        image: "/images/services/img04.png",
        details: [
          "בדיקות תקופתיות לפי דרישות החוק",
          "בדיקות לחץ הידרוסטטי",
          "תחזוקה שוטפת",
          "הנפקת תעודות בדיקה",
        ],
      },
    ],
  },

  contact: {
    title: "צור קשר",
    subtitle: "נשמח לענות על כל שאלה ולתת שירות מקצועי",
    form: {
      name: "שם מלא",
      phone: "טלפון",
      email: 'דוא"ל',
      message: "הודעה",
      submit: "שלח הודעה",
      success: "ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.",
      error: "אירעה שגיאה בשליחת ההודעה. אנא נסה שנית.",
    },
    errors: {
      nameRequired: "שם מלא הוא שדה חובה",
      phoneRequired: "טלפון הוא שדה חובה",
      phoneInvalid: "מספר טלפון לא תקין",
      emailRequired: 'דוא"ל הוא שדה חובה',
      emailInvalid: 'כתובת דוא"ל לא תקינה',
      messageRequired: "הודעה היא שדה חובה",
      messageMin: "ההודעה חייבת להכיל לפחות 10 תווים",
    },
  },

  navigation: {
    home: "דף הבית",
    equipment: "ציוד כיבוי אש",
    services: "שירותים",
    contact: "צור קשר",
  },
};

