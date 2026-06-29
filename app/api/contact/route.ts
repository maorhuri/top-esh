import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  // Check if SMTP is configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("SMTP settings are not configured");
    return NextResponse.json(
      { error: "שירות המייל אינו מוגדר כראוי" },
      { status: 500 }
    );
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
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "חסרים שדות חובה" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'כתובת דוא"ל לא תקינה' },
        { status: 400 }
      );
    }

    // Send email using SMTP
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

    return NextResponse.json(
      { success: true, message: "ההודעה נשלחה בהצלחה", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error in contact API:", error);
    const errorMessage = error instanceof Error ? error.message : "שגיאה לא ידועה";
    return NextResponse.json(
      { error: `שגיאה בשליחת המייל: ${errorMessage}` },
      { status: 500 }
    );
  }
}

