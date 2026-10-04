import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function PageHero({ eyebrow, title, highlight, description, buttonText, buttonLink = "/contact" }) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(96,165,250,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div data-aos="fade-up" className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-cyan-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />{eyebrow}</div>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-black tracking-[-.04em] sm:text-6xl">{title} {highlight && <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">{highlight}</span>}</h1>
        {description && <p data-aos="fade-up" data-aos-delay="180" className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>}
        {buttonText && <div data-aos="fade-up" data-aos-delay="260" className="mt-8"><Link to={buttonLink} className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-1">{buttonText}<FiArrowUpRight /></Link></div>}
      </div>
    </section>
  );
}