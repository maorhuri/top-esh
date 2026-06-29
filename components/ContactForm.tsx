"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { siteContent } from "@/lib/content";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const TEST_PASSWORD = "ezpointtest123";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [showTestModal, setShowTestModal] = useState(false);
  const [testPassword, setTestPassword] = useState("");
  const [isTestMode, setIsTestMode] = useState(false);

  useEffect(() => {
    if (searchParams.get("sendtest") !== null) {
      setShowTestModal(true);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
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

  const handleTestPasswordSubmit = () => {
    if (testPassword === TEST_PASSWORD) {
      setIsTestMode(true);
      setShowTestModal(false);
      // Pre-fill form with test data
      reset({
        name: "בדיקת מערכת",
        phone: "050-0000000",
        email: "test@test.com",
        message: "זוהי הודעת בדיקה לבדיקת מערכת שליחת המיילים.",
      });
    } else {
      alert("סיסמה שגויה");
    }
  };

  return (
    <>
      {/* Test Mode Modal */}
      {showTestModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">מצב בדיקה</h3>
            <p className="text-gray-600 mb-4">הזן סיסמה כדי להפעיל מצב בדיקה:</p>
            <input
              type="password"
              value={testPassword}
              onChange={(e) => setTestPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTestPasswordSubmit()}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 mb-4 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
              placeholder="סיסמה"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={handleTestPasswordSubmit}
                className="flex-1 rounded-md bg-primary-red px-4 py-2 text-white font-medium hover:bg-red-700"
              >
                אישור
              </button>
              <button
                onClick={() => setShowTestModal(false)}
                className="flex-1 rounded-md bg-gray-200 px-4 py-2 text-gray-700 font-medium hover:bg-gray-300"
              >
                ביטול
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Test Mode Banner */}
      {isTestMode && (
        <div className="rounded-md bg-yellow-50 border border-yellow-200 p-4 text-yellow-800 mb-6">
          <strong>מצב בדיקה פעיל</strong> - הטופס מולא אוטומטית עם נתוני בדיקה
        </div>
      )}

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {siteContent.contact.form.name} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: siteContent.contact.errors.nameRequired,
          })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
          placeholder="הזן שם מלא"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {siteContent.contact.form.phone} <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: siteContent.contact.errors.phoneRequired,
            pattern: {
              value: /^[0-9\-+().\s]+$/,
              message: siteContent.contact.errors.phoneInvalid,
            },
          })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
          placeholder="05X-XXXXXXX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {siteContent.contact.form.email} <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: siteContent.contact.errors.emailRequired,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: siteContent.contact.errors.emailInvalid,
            },
          })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {siteContent.contact.form.message} <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", {
            required: siteContent.contact.errors.messageRequired,
            minLength: {
              value: 10,
              message: siteContent.contact.errors.messageMin,
            },
          })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20 resize-none"
          placeholder="ספר לנו על הפרויקט שלך..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary-red px-6 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>שולח...</span>
          </>
        ) : (
          siteContent.contact.form.submit
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="rounded-md bg-green-50 border border-green-200 p-4 text-green-800">
          {siteContent.contact.form.success}
        </div>
      )}
      {submitStatus === "error" && (
        <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-800">
          {siteContent.contact.form.error}
        </div>
      )}
    </form>
    </>
  );
}

