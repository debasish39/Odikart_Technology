import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import AnimeCard from "./AnimeCard";

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <AnimeCard delay={delay} className="h-full">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-cyan-300">{service.icon}</div>
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
      <Link to={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">Explore <FiArrowUpRight /></Link>
    </AnimeCard>
  );
}