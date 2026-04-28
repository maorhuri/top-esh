"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle, Shield, Clock, Award, FileCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
}

export default function FireInspectionsLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://hook.eu2.make.com/2q2tmaaat9kqbvb4dosk069hkjqi16fg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: "בקשה לבדיקת מערכת כיבוי אש",
          source: "fire-inspections-landing",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        
        // Track conversion via GTM dataLayer
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            'event': 'fire_inspection_lead',
            'formData': {
              'source': 'fire-inspections-landing',
              'formName': 'Fire Inspection Quote Request',
              'leadType': 'inspection_request'
            },
            'conversionData': {
              'conversion_id': '17218925391',
              'conversion_label': '2tPfCKz9i8MbEM_mz5JA'
            }
          });
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Lead Form */}
      <section className="relative bg-gradient-to-br from-primary-blue via-primary-blue to-primary-red pt-4 pb-12 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/services/img04.png')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
              בדיקות למערכות<br className="md:hidden" /> כיבוי אש
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed px-2">
              שירותי בדיקה מקצועיים<br className="md:hidden" /> למערכות גילוי וכיבוי אש
              <br />
              <span className="font-bold">מהירות, מקצועיות ואמינות מובטחות</span>
            </p>
          </div>

          {/* Lead Form */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-6">
                קבלו הצעת מחיר תוך 24 שעות
              </h2>
              
              {submitStatus === "success" ? (
                <div className="rounded-xl bg-green-50 border-2 border-green-200 p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">תודה רבה!</h3>
                  <p className="text-lg text-green-700">
                    פנייתך התקבלה בהצלחה. נציג יצור איתך קשר בהקדם האפשרי.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                        שם מלא <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "שם מלא הוא שדה חובה",
                        })}
                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3.5 md:py-3 text-base md:text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20 transition-all"
                        placeholder="הזן שם מלא"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                        טלפון <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: "טלפון הוא שדה חובה",
                          pattern: {
                            value: /^[0-9\-+().\s]+$/,
                            message: "מספר טלפון לא תקין",
                          },
                        })}
                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3.5 md:py-3 text-base md:text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20 transition-all"
                        placeholder="05X-XXXXXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                        דואר אלקטרוני <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "דואר אלקטרוני הוא שדה חובה",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "כתובת דואר אלקטרוני לא תקינה",
                          },
                        })}
                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-3.5 md:py-3 text-base md:text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20 transition-all"
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-primary-red px-6 md:px-8 py-4 md:py-4 text-lg md:text-xl font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 md:gap-3 touch-manipulation"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 md:h-6 md:w-6 animate-spin" />
                        <span>שולח...</span>
                      </>
                    ) : (
                      <>
                        <span>שלח בקשה לבדיקה</span>
                        <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </>
                    )}
                  </button>

                  {submitStatus === "error" && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-800 text-center">
                      אירעה שגיאה בשליחת הבקשה. אנא נסה שנית או צור קשר טלפונית.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-white/90 text-sm md:text-base px-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span>תגובה תוך 24 שעות</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span>צוות מוסמך ומקצועי</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <span>15+ שנות ניסיון</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                למה חשוב לבצע בדיקות תקופתיות למערכת כיבוי אש?
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>מערכת כיבוי אש</strong> היא קו ההגנה הראשון של המבנה שלכם מפני שריפות.
                  בדיקות תקופתיות הן חובה על פי חוק ומבטיחות שהמערכת תפעל במלוא העוצמה במקרה חירום.
                </p>
                <p>
                  <strong>מערכות גילוי אש</strong> מזהות שריפות בשלב מוקדם ומצילות חיים ורכוש.
                  בדיקה תקופתית מוודאת שהגלאים פועלים תקין ומותאמים לסביבת העבודה.
                </p>
                <p>
                  טופ אש מתמחה בבדיקת <strong>מערכות כיבוי אש</strong> ו<strong>מערכות גילוי וכיבוי אש</strong> מכל הסוגים.
                  אנו מבצעים בדיקות מקיפות על פי התקנים המחמירים ביותר.
                </p>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/services/img04.png"
                alt="בדיקות מערכות כיבוי אש"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Shield,
                title: "בדיקות תקופתיות",
                description: "בדיקות שנתיות וחצי שנתיות לפי דרישות החוק",
              },
              {
                icon: FileCheck,
                title: "בדיקות לחץ",
                description: "בדיקות לחץ הידרוסטטי למערכות כיבוי אש",
              },
              {
                icon: Clock,
                title: "תיקונים מיידיים",
                description: "זיהוי תקלות ותיקון במקום בזמן הבדיקה",
              },
              {
                icon: Award,
                title: "תעודות אישור",
                description: "הנפקת תעודות בדיקה מוכרות ומאושרות",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary-red/10 mb-3 md:mb-4 mx-auto">
                  <service.icon className="h-7 w-7 md:h-8 md:w-8 text-primary-red" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה אנחנו בודקים?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              בדיקה מקיפה של כל רכיבי מערכת כיבוי אש ומערכת גילוי אש
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-red to-red-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8" />
                מערכות כיבוי אש
              </h3>
              <ul className="space-y-4">
                {[
                  "בדיקת ספרינקלרים ותקינותם",
                  "בדיקת גלגלונים ומטפים",
                  "בדיקת לחץ במערכת",
                  "בדיקת משאבות וברזים",
                  "בדיקת שסתומים ומערכת הזנה",
                  "בדיקת צנרת ואיתור נזילות",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-blue to-blue-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileCheck className="h-8 w-8" />
                מערכות גילוי אש
              </h3>
              <ul className="space-y-4">
                {[
                  "בדיקת גלאי עשן וחום",
                  "בדיקת מרכזיות התרעה",
                  "בדיקת לחצני חירום",
                  "בדיקת צופרים ופעמונים",
                  "בדיקת מערכת ההתרעה",
                  "בדיקת חיבור למוקד",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              למה לבחור בטופ אש לבדיקות?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ניסיון עשיר",
                description: "מעל 15 שנות ניסיון בבדיקת מערכות כיבוי אש בכל סוגי המבנים",
                icon: "🏆",
              },
              {
                title: "טכנאים מוסמכים",
                description: "צוות בעל הסמכות מלאות ועדכניות לביצוע בדיקות",
                icon: "👨‍🔧",
              },
              {
                title: "ציוד מתקדם",
                description: "שימוש בציוד בדיקה מהמתקדמים והמדויקים בשוק",
                icon: "🔧",
              },
              {
                title: "מהירות",
                description: "תיאום מהיר וביצוע בדיקות בזמנים הנוחים לכם",
                icon: "⚡",
              },
              {
                title: "שקיפות מלאה",
                description: "דוח בדיקה מפורט עם תמונות והסברים ברורים",
                icon: "📋",
              },
              {
                title: "מחירים תחרוtiים",
                description: "הצעות מחיר הוגנות ושקופות ללא עלויות נסתרות",
                icon: "💰",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              שאלות נפוצות
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "באיזו תדירות צריך לבצע בדיקות למערכת כיבוי אש?",
                answer:
                  "על פי חוק, יש לבצע בדיקות תקופתיות למערכת כיבוי אש אחת לשנה. במבנים מסוימים עם סיכון גבוה, נדרשות בדיקות תכופות יותר. אנו נייעץ לכם בנושא בהתאם לסוג המבנה שלכם.",
              },
              {
                question: "כמה זמן לוקחת בדיקה?",
                answer:
                  "משך הבדיקה משתנה בהתאם לגודל המבנה וסוג המערכת. בדיקה סטנדרטית לוקחת בין 2-4 שעות. נעדכן אתכם מראש על משך הזמן המשוער.",
              },
              {
                question: "מה קורה אם מתגלות תקלות בבדיקה?",
                answer:
                  "במידה ומתגלות תקלות, אנו מדווחים עליהן מיד ומציעים פתרונות לתיקון. תקלות קלות ניתן לתקן במקום באותו יום. תקלות מורכבות יותר יטופלו בתיאום נפרד.",
              },
              {
                question: "האם אני מקבל תעודת בדיקה?",
                answer:
                  "כן! בתום הבדיקה תקבלו תעודת בדיקה מפורטת ומאושרת, הכוללת את כל הממצאים, תמונות ואישור על תקינות המערכת. תעודה זו נדרשת לצורכי רישוי וביטוח.",
              },
              {
                question: "האם אתם מבצעים גם תיקונים ותחזוקה?",
                answer:
                  "בהחלט! מלבד בדיקות, אנו מספקים גם שירותי תיקון, תחזוקה, שדרוג והחלפת רכיבים במערכות כיבוי אש ומערכות גילוי אש.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-primary-red">•</span>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed mr-6">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-blue to-primary-red">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            מוכנים לתאם בדיקה למערכת כיבוי האש שלכם?
          </h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            צרו קשר עכשיו וקבלו הצעת מחיר<br className="md:hidden" /> תוך 24 שעות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0737794775"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-red text-lg font-bold rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              חייגו עכשיו: 073-7794775
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-red text-white text-lg font-bold rounded-lg hover:bg-red-700 transition-all hover:shadow-2xl border-2 border-white"
            >
              <span>צור קשר</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

