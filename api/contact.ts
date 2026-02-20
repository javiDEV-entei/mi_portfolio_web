import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // En Vercel + Node, con Content-Type: application/json,
    // req.body ya es un objeto JS
    const { email, subject, message } = req.body || {};

    if (!email || !subject || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    console.log("Enviando email desde:", email);

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["javieroliveradev0239@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje: ${subject}`,
      html: `
        <h2>Nuevo mensaje del portfolio</h2>
        <div style="padding: 20px; background: #f8f9fa; border-radius: 8px; margin: 20px 0;">
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: white; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap; border-radius: 4px;">
            ${message}
          </div>
        </div>
        <p><em>Este email fue enviado desde tu portfolio web</em></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    console.log("Email enviado exitosamente:", data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error en handler:", error);
    return res.status(500).json({ error: "Server error" });
  }
}

