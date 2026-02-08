// src/components/Contact.tsx
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !subject || !message) return;

    try {
      setStatus("sending");
      // Aquí luego llamaremos a EmailJS o a tu API (ver secciones 2 y 3)
      // await sendContactEmail({ email, subject, message });
      setStatus("success");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="w-full bg-slate-900 text-white py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-semibold mb-6">Contacto</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Tu email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Asunto */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              Asunto
            </label>
            <input
              id="subject"
              type="text"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="¿Sobre qué es tu mensaje?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Escribe aquí tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Mensaje de confirmación / error */}
          {status === "success" && (
            <p className="text-sm text-emerald-400 mt-2">
              Tu mensaje se envió correctamente. ¡Gracias por contactarme!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 mt-2">
              Ocurrió un error al enviar el mensaje. Intenta nuevamente en unos minutos.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
