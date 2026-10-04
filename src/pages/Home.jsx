import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../data/services";
import { projects } from "../data/projects";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-24 pt-40 sm:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.2),transparent_48%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div data-aos="fade-up" className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Digital products • AI • Technology</div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl font-black tracking-[-.055em] sm:text-7xl">We build digital products that <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">move businesses forward.</span></h1>
          <p data-aos="fade-up" data-aos-delay="180" className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Websites, mobile apps, APIs, e-commerce platforms and practical AI solutions designed and built for real-world use.</p>
          <div data-aos="fade-up" data-aos-delay="260" className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1">Start a Project <FiArrowUpRight /></Link>
            <Link to="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/5">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What we build" title="Technology that solves real problems" description="From an idea to a production-ready digital product." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, i) => <ServiceCard key={service.slug} service={service} delay={i * 70} />)}</div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Selected work" title="Projects built with purpose" />
          <div className="grid gap-5 md:grid-cols-3">{projects.map((project, i) => <ProjectCard key={project.title} project={project} delay={i * 80} />)}</div>
        </div>
      </section>

      <CTA />
    </>
  );
}