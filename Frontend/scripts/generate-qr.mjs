/**
 * Generates the public WhatsApp QR as a static SVG into public/qr/.
 *
 * Run after changing QR_TARGET:  pnpm run qr
 *
 * The SVG is committed as a normal asset, so the site ships no QR library and
 * makes no request to an external QR image service at runtime.
 */
import QRCode from "qrcode";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/* ── the single place to change where the QR points ── */
// Kept deliberately short: every character adds modules, and a sparser code
// scans faster from a phone held at arm's length or from printed material.
const QR_TARGET = "https://wa.me/919914773125";

const OUT = resolve(__dirname, "../public/qr/whatsapp.svg");

// High error correction so the code still scans when printed small, on a
// flyer, or partially obscured.
const svg = await QRCode.toString(QR_TARGET, {
  type: "svg",
  errorCorrectionLevel: "H",
  margin: 1,
  color: { dark: "#0A1628", light: "#FFFFFF" },
});

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, svg, "utf8");

console.log("QR written to public/qr/whatsapp.svg");
console.log("target:", QR_TARGET);
