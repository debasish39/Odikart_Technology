import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { services } from "../data/services";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <div className="px-4 pb-24 pt-40 text-center"><h1 className="text-4xl font-black">Service not found</h1><Link to="/services" className="mt-6 inline-flex items-center gap-2 text-cyan-300">Back to Services <FiArrowUpRight /></Link></div>;

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><FiArrowLeft /> All services</Link>
        <div data-aos="fade-up" className="mt-8 rounded-3xl border border-white/10 bg-white/[.035] p-7 backdrop-blur-xl sm:p-12">
          <div className="text-4xl text-cyan-300">{service.icon}</div>
          <h1 className="mt-6 text-4xl font-black sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{service.description}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950">Discuss this project <FiArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}