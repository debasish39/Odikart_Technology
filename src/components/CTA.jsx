import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="px-4 py-20">
      <div data-aos="zoom-in" className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/15 via-indigo-500/10 to-cyan-400/10 p-8 text-center sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.16),transparent_55%)]" />
        <div className="relative">
          <h2 className="text-3xl font-black sm:text-4xl">Have an idea? Let's build it.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">Tell us what you want to build and we'll turn the idea into a practical digital product.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1">Start a Project <FiArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}