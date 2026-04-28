import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "שירות המייל אינו מוגדר כראוי" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "טופ אש - טופס יצירת קשר <onboarding@resend.dev>", // Replace with your verified domain
      to: ["top-esh@outlook.co.il"],
      reply_to: email,
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

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "שגיאה בשליחת המייל" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "ההודעה נשלחה בהצלחה", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "אירעה שגיאה בשרת" },
      { status: 500 }
    );
  }
}

