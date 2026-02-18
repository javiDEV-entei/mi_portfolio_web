import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // o tu dominio verificado
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
      console.error(error);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
