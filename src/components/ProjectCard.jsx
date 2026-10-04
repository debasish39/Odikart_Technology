import React from "react";
import AnimeCard from "./AnimeCard";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <AnimeCard delay={delay} className="h-full">
      <div className="mb-5 aspect-[16/9] rounded-xl bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-cyan-400/10" />
      <div className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">{project.category}</div>
      <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
    </AnimeCard>
  );
}