"use client";

import { useState } from "react";
import { Loader2, X, CheckCircle, XCircle } from "lucide-react";

const TEST_PASSWORD = "ezpointtest123";

interface SmtpTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SmtpTestModal({ isOpen, onClose }: SmtpTestModalProps) {
  const [step, setStep] = useState<"password" | "form" | "result">("password");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [testEmail, setTestEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handlePasswordSubmit = () => {
    if (password === TEST_PASSWORD) {
      setStep("form");
      setPasswordError("");
    } else {
      setPasswordError("סיסמה שגויה");
    }
  };

  const handleTestSubmit = async () => {
    if (!testEmail) return;
    
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "בדיקת מערכת SMTP",
          phone: "050-0000000",
          email: testEmail,
          message: `זוהי הודעת בדיקה לבדיקת מערכת שליחת המיילים.\n\nנשלח בתאריך: ${new Date().toLocaleString("he-IL")}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult({
          success: true,
          message: `המייל נשלח בהצלחה! (ID: ${data.messageId || "N/A"})`,
        });
      } else {
        setResult({
          success: false,
          message: data.error || "שגיאה בשליחת המייל",
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: "שגיאת תקשורת עם השרת",
      });
    } finally {
      setIsSubmitting(false);
      setStep("result");
    }
  };

  const handleClose = () => {
    setStep("password");
    setPassword("");
    setPasswordError("");
    setTestEmail("");
    setResult(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {step === "password" && (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2">בדיקת SMTP</h3>
            <p className="text-gray-600 mb-6">הזן סיסמה כדי להמשיך:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 mb-2 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
              placeholder="סיסמה"
              autoFocus
            />
            {passwordError && (
              <p className="text-red-600 text-sm mb-4">{passwordError}</p>
            )}
            <button
              onClick={handlePasswordSubmit}
              className="w-full rounded-md bg-primary-red px-4 py-3 text-white font-medium hover:bg-red-700 mt-4"
            >
              המשך
            </button>
          </>
        )}

        {step === "form" && (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2">שליחת מייל בדיקה</h3>
            <p className="text-gray-600 mb-6">הזן כתובת מייל לשליחת הודעת בדיקה:</p>
            <input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTestSubmit()}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 mb-4 focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
              placeholder="your@email.com"
              autoFocus
            />
            <button
              onClick={handleTestSubmit}
              disabled={isSubmitting || !testEmail}
              className="w-full rounded-md bg-primary-red px-4 py-3 text-white font-medium hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>שולח...</span>
                </>
              ) : (
                "שלח מייל בדיקה"
              )}
            </button>
          </>
        )}

        {step === "result" && result && (
          <>
            <div className="text-center py-4">
              {result.success ? (
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              )}
              <h3 className={`text-xl font-bold mb-2 ${result.success ? "text-green-700" : "text-red-700"}`}>
                {result.success ? "הצלחה!" : "שגיאה"}
              </h3>
              <p className="text-gray-600 mb-6">{result.message}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep("form")}
                className="flex-1 rounded-md bg-gray-200 px-4 py-3 text-gray-700 font-medium hover:bg-gray-300"
              >
                נסה שוב
              </button>
              <button
                onClick={handleClose}
                className="flex-1 rounded-md bg-primary-red px-4 py-3 text-white font-medium hover:bg-red-700"
              >
                סגור
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
