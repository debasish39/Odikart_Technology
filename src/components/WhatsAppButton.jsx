import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const url = "https://wa.me/918249173965?text=Hi%20Odikart%20Technology%2C%20I%20want%20to%20discuss%20a%20project.";
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-[0_10px_35px_rgba(34,197,94,.35)] transition hover:-translate-y-1 hover:bg-green-400">
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}