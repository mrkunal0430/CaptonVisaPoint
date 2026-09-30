import React from "react";
import { FiMessageCircle } from "react-icons/fi";

/**
 * Scan-to-chat card. The QR is a static SVG generated at build time by
 * `pnpm run qr` (see scripts/generate-qr.mjs) — change the target there.
 *
 * The whole card is also a link, so on a phone (where scanning your own
 * screen is impossible) tapping it opens the same WhatsApp chat.
 */
const WHATSAPP_URL = "https://wa.me/919914773125";

const WhatsAppQR = ({
  variant = "dark",
  className = "",
  title = "Scan to chat on WhatsApp",
  subtitle = "Point your camera here to message us instantly — no number to save.",
}) => {
  const dark = variant === "dark";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp — scan the QR code or tap to open"
      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
        dark
          ? "border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-400/40"
          : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg"
      } ${className}`}
    >
      <span className="shrink-0 rounded-xl bg-white p-2 shadow-sm">
        <img
          src="/qr/whatsapp.svg"
          alt="QR code linking to the Capton Visa Point WhatsApp chat"
          width={92}
          height={92}
          loading="lazy"
          className="block h-[92px] w-[92px]"
        />
      </span>

      <span className="min-w-0">
        <span
          className={`flex items-center gap-2 text-sm font-bold ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          <FiMessageCircle className="text-emerald-500 shrink-0" />
          {title}
        </span>
        <span
          className={`mt-1 block text-xs leading-relaxed ${
            dark ? "text-blue-200" : "text-slate-500"
          }`}
        >
          {subtitle}
        </span>
        <span
          className={`mt-2 block text-xs font-semibold ${
            dark ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          On your phone? Tap to open →
        </span>
      </span>
    </a>
  );
};

export default WhatsAppQR;
