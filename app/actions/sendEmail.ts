"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendEmail(data: ContactFormData) {
  // Check if SMTP is configured
  const missing: string[] = [];
  if (!process.env.SMTP_HOST) missing.push("SMTP_HOST");
  if (!process.env.SMTP_USER) missing.push("SMTP_USER");
  if (!process.env.SMTP_PASS) missing.push("SMTP_PASS");
  
  if (missing.length > 0) {
    console.error("SMTP settings are not configured:", missing);
    return { success: false, error: `חסרים משתני סביבה: ${missing.join(", ")}` };
  }

  const { name, phone, email, message } = data;

  // Validate required fields
  if (!name || !phone || !email || !message) {
    return { success: false, error: "חסרים שדות חובה" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'כתובת דוא"ל לא תקינה' };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || "top-esh@outlook.co.il",
      replyTo: email,
      subject: `פנייה חדשה מאתר טופ אש - ${name}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="he">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              direction: rtl;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #D8261E, #213A8F);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border: 1px solid #ddd;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-right: 4px solid #D8261E;
            }
            .field-label {
              font-weight: bold;
              color: #213A8F;
              margin-bottom: 5px;
            }
            .field-value {
              color: #333;
            }
            .footer {
              background: #333;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>פנייה חדשה מאתר טופ אש</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">שם:</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">טלפון:</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">אימייל:</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">הודעה:</div>
                <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>הודעה זו נשלחה מטופס יצירת הקשר באתר טופ אש</p>
              <p>© ${new Date().getFullYear()} טופ אש - כל הזכויות שמורות</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, messageId: info.messageId };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "שגיאה לא ידועה";
    return { success: false, error: `שגיאה בשליחת המייל: ${errorMessage}` };
  }
}
