import React from "react";

export default function AnimeCard({ children, className = "", delay = 0 }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[.05] ${className}`}>
      <div className="pointer-events-none absolute -left-1/2 top-[-100%] h-[300%] w-1/3 rotate-[25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}