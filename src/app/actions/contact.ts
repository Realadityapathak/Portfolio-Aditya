"use server";

import { Resend } from "resend";

export interface ContactState {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}): Promise<ContactState> {
  const { name, email, message, honeypot } = formData;

  // 1. Honeypot check: If bot filled the hidden honeypot input, silently discard
  if (honeypot && honeypot.trim().length > 0) {
    console.log("[Contact Action] Spam bot trapped via honeypot.");
    // Return mock success so the bot believes it succeeded
    return {
      success: true,
      message: "Message received. I'll get back to you shortly.",
    };
  }

  // 2. Validation
  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedName || trimmedName.length < 2) {
    return {
      success: false,
      error: "Please provide a valid name (at least 2 characters).",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    return {
      success: false,
      error: "Please provide a valid email address.",
    };
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    return {
      success: false,
      error: "Please enter a message of at least 10 characters.",
    };
  }

  if (trimmedMessage.length > 5000) {
    return {
      success: false,
      error: "Message is too long (maximum 5,000 characters).",
    };
  }

  // 3. Resend Integration
  const apiKey = process.env.RESEND_API_KEY;

  // Development fallback when API key is not yet configured
  if (!apiKey || apiKey === "re_your_api_key_here" || apiKey.trim() === "") {
    console.log(
      `[Contact Action - DEV MODE] Received valid message from ${trimmedName} (${trimmedEmail}): "${trimmedMessage.slice(
        0,
        60
      )}..."`
    );
    return {
      success: true,
      message:
        "Message received! (Note: Add your RESEND_API_KEY in .env.local to dispatch live emails).",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "real2adityapathak@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: trimmedEmail,
      subject: `[Portfolio Inquiry] from ${trimmedName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0a0e17; color: #f7f3e8; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #d0ff00; margin: 0 0 8px 0; font-size: 22px;">New Portfolio Inquiry</h2>
            <p style="margin: 0; color: #8892b0; font-size: 14px;">Submitted from portfolio-aditya</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #8892b0; width: 80px; font-weight: bold; font-size: 13px; text-transform: uppercase;">From:</td>
              <td style="padding: 8px 0; color: #f7f3e8; font-size: 15px;"><strong>${trimmedName}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8892b0; width: 80px; font-weight: bold; font-size: 13px; text-transform: uppercase;">Reply-To:</td>
              <td style="padding: 8px 0; color: #d0ff00; font-size: 15px;"><a href="mailto:${trimmedEmail}" style="color: #d0ff00; text-decoration: none;">${trimmedEmail}</a></td>
            </tr>
          </table>
          <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 16px; margin-top: 12px;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #f7f3e8;">${trimmedMessage}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #8892b0; text-align: center;">
            This email was sent via Next.js Server Action + Resend.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact Action] Resend API error:", error);
      return {
        success: false,
        error: `Delivery service error: ${error.message || "Failed to deliver message."}`,
      };
    }

    return {
      success: true,
      message: "Message sent successfully! I'll reply within 24 hours.",
    };
  } catch (err: any) {
    console.error("[Contact Action] Unexpected error:", err);
    return {
      success: false,
      error: "Something went wrong while sending your message. Please email real2adityapathak@gmail.com directly.",
    };
  }
}
