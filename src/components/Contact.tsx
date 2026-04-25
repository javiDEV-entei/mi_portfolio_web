import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation("contact");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !subject || !message) return;

  try {
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });

    const contentType = res.headers.get("Content-Type") || "";
    let data: any = null;

    if (contentType.includes("application/json")) {
      data = await res.json();
    } else {
      // Evita el SyntaxError con respuestas que no son JSON (como 504 HTML)
      const text = await res.text();
      console.error("Respuesta no JSON:", text);
    }

    if (!res.ok) {
      const message =
        data?.error || "Error al enviar el mensaje. Intenta más tarde.";
      throw new Error(message);
    }

    setStatus("success");
    setEmail("");
    setSubject("");
    setMessage("");
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};




  return (
    <section id="contacto" className="w-full bg-slate-900 text-white py-12 dark:bg-slate-50 dark:text-slate-900">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-semibold mb-6">{t('title')}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              {t('labels.email')}
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                         dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:placeholder-slate-500"
              placeholder={t('placeholders.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Asunto */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">
              {t('labels.subject')}
            </label>
            <input
              id="subject"
              type="text"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                         dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:placeholder-slate-500"
              placeholder={t('placeholders.subject')}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              {t('labels.message')}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                         dark:border-slate-300 dark:bg-slate-100 dark:text-slate-900 dark:placeholder-slate-500"
              placeholder={t('placeholders.subject')}
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
            {status === "sending" ? t('sending') : t('button.submit')}
          </button>

          {/* Mensajes de estado */}
          {status === "success" && (
            <p className="text-sm text-emerald-400 mt-2">
              {t('success')}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 mt-2">
              {t('error')}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

