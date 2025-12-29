import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin email HTML template
    const adminEmailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <tr>
              <td style="padding: 30px 20px; text-align: center; background: linear-gradient(135deg, #514F4F 0%, #3a3a3a 100%);">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">New Contact Form Submission</h1>
                <p style="color: #e0e0e0; margin: 10px 0 0 0; font-size: 14px;">You have received a new message</p>
              </td>
            </tr>
            
            <!-- Content -->
            <tr>
              <td style="padding: 40px 30px;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <!-- Name Field -->
                  <tr>
                    <td style="padding: 20px; background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%); border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #514F4F;">
                      <p style="margin: 0 0 8px 0; color: #514F4F; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                      <p style="margin: 0; color: #1a1a1a; font-size: 18px; font-weight: 500;">${name}</p>
                    </td>
                  </tr>
                  
                  <!-- Email Field -->
                  <tr>
                    <td style="padding: 20px; background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%); border-radius: 8px; margin-top: 15px; border-left: 5px solid #514F4F;">
                      <p style="margin: 0 0 8px 0; color: #514F4F; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
                      <p style="margin: 0; color: #1a1a1a; font-size: 18px; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #514F4F; text-decoration: none;">${email}</a>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Message Field -->
                  <tr>
                    <td style="padding: 20px; background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%); border-radius: 8px; margin-top: 15px; border-left: 5px solid #514F4F;">
                      <p style="margin: 0 0 12px 0; color: #514F4F; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                      <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.8; white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e0e0e0;">${message}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="padding: 25px 30px; text-align: center; background-color: #f8f9fa; border-top: 1px solid #e0e0e0;">
                <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px;">This email was sent from the Strong Grip contact form.</p>
                <p style="margin: 0; color: #514F4F; font-size: 14px; font-weight: 600;">Team Strong Grip</p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // User confirmation email HTML template
    const userEmailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Us</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <tr>
              <td style="padding: 40px 20px; text-align: center; background: linear-gradient(135deg, #514F4F 0%, #3a3a3a 100%);">
                <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 600; letter-spacing: 0.5px;">Thank You!</h1>
                <p style="color: #e0e0e0; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
              </td>
            </tr>
            
            <!-- Content -->
            <tr>
              <td style="padding: 50px 40px;">
                <p style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 18px; line-height: 1.6; font-weight: 500;">
                  Hello ${name},
                </p>
                <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.8;">
                  We have received your message and will contact you soon.
                </p>
                <div style="background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%); padding: 20px; border-radius: 8px; border-left: 5px solid #514F4F; margin: 25px 0;">
                  <p style="margin: 0; color: #666666; font-size: 15px; line-height: 1.7;">
                    Our team typically responds within <strong style="color: #514F4F;">24-48 hours</strong>. We appreciate your patience and look forward to assisting you.
                  </p>
                </div>
                <p style="margin: 30px 0 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                  If you have any urgent inquiries, please feel free to contact us directly at <a href="mailto:Support@stronggrip.com" style="color: #514F4F; text-decoration: none; font-weight: 500;">Support@stronggrip.com</a> or call us at <strong style="color: #514F4F;">+92 320 0515231</strong>.
                </p>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="padding: 30px 40px; text-align: center; background-color: #f8f9fa; border-top: 1px solid #e0e0e0;">
                <p style="margin: 0 0 10px 0; color: #666666; font-size: 13px; line-height: 1.6;">
                  This is an automated confirmation email from Strong Grip.
                </p>
                <p style="margin: 0; color: #514F4F; font-size: 16px; font-weight: 600; letter-spacing: 0.5px;">Team Strong Grip</p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: adminEmailHTML,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Strong Grip",
      html: userEmailHTML,
      text: `Hello ${name},\n\nWe have received your message and will contact you soon.\n\nOur team typically responds within 24-48 hours. We appreciate your patience.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

