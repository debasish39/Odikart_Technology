import React from "react";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div data-aos="fade-up" className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-cyan-300">{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </div>
  );
}