import React from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { IoSparklesOutline } from "react-icons/io5";

import { services } from "../data/services";
import { projects } from "../data/projects";

import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";

export default function Home() {
  const trustPoints = [
    {
      icon: FiCode,
      number: "01",
      title: "Modern development",
      description:
        "Clean, responsive and maintainable digital products built for today's users.",
    },
    {
      icon: FiLayers,
      number: "02",
      title: "Scalable architecture",
      description:
        "Technology foundations designed to grow with your business without unnecessary complexity.",
    },
    {
      icon: FiCpu,
      number: "03",
      title: "AI-ready solutions",
      description:
        "Practical AI integrations that create real business value where they actually matter.",
    },
  ];

  const heroPoints = [
    "Modern UI",
    "Scalable backend",
    "AI-ready",
    "Business-focused",
  ];

  const stats = [
    ["Web", "Digital products"],
    ["AI", "Smart solutions"],
    ["API", "Scalable systems"],
    ["∞", "Growth focused"],
  ];

  const reasons = [
    {
      icon: FiZap,
      title: "Fast & modern",
      description:
        "Smooth interfaces and modern technology designed around real users.",
    },
    {
      icon: FiShield,
      title: "Built responsibly",
      description:
        "Reliable foundations with maintainability and scalability in mind.",
    },
    {
      icon: FiCpu,
      title: "AI when useful",
      description:
        "Practical AI integrations that solve problems instead of adding complexity.",
    },
    {
      icon: FiCode,
      title: "Future-ready",
      description:
        "Flexible architecture that can evolve as your business grows.",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[760px] overflow-hidden bg-slate-950 px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:min-h-[850px] lg:pt-40">
        {/* -------------------------------------------------------
            REAL HERO IMAGE
        -------------------------------------------------------- */}
        <div className="absolute inset-0 -z-30 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
            alt=""
            className="hero-bg-image h-full w-full object-cover"
          />
        </div>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 -z-20 bg-slate-950/65" />

        {/* Blue color grading */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-950/70 via-slate-950/50 to-cyan-950/50" />

        {/* Center readability */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.92)_0%,rgba(255,255,255,.72)_27%,rgba(255,255,255,.16)_58%,rgba(15,23,42,.08)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-slate-950/70 to-transparent" />

        {/* Grid */}
        <div className="light-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />

        {/* -------------------------------------------------------
            ANIME LIGHTING
        -------------------------------------------------------- */}

        {/* Large blue orb */}
        <div className="anime-float pointer-events-none absolute -left-32 top-32 -z-10 h-80 w-80 rounded-full bg-blue-500/25 blur-[120px]" />

        {/* Cyan orb */}
        <div className="anime-float pointer-events-none absolute -right-32 top-48 -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[130px]" />

        {/* Center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[150px]" />

        {/* Anime moving light beam */}
        <div className="anime-hero-beam pointer-events-none absolute -left-[30%] top-0 -z-10 h-full w-[25%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl" />

        {/* Small glowing particles */}
        <span className="absolute left-[10%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
        <span className="absolute right-[13%] top-[38%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_#60a5fa]" />
        <span className="absolute left-[18%] top-[60%] h-1 w-1 rounded-full bg-white shadow-[0_0_15px_white]" />
        <span className="absolute right-[22%] top-[62%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />

        {/* =======================================================
            HERO CONTENT
        ======================================================== */}
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center">
          <div className="w-full">
            {/* Eyebrow */}
            <div
              data-aos="fade-up"
              className="mb-6 flex justify-center"
            >
              <div className="anime-shine inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700 shadow-xl shadow-blue-900/10 backdrop-blur-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-blue-600" />
                </span>

                Digital Products

                <span className="text-blue-300">•</span>

                AI

                <span className="text-blue-300">•</span>

                Technology
              </div>
            </div>

            {/* Main heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-5xl text-center text-5xl font-black leading-[0.96] tracking-[-0.065em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.4rem]"
            >
              We build digital solutions that{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                  move businesses forward.
                </span>

                <span className="absolute -bottom-2 left-[8%] h-1 w-[84%] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-[3px]" />
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mx-auto mt-7 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg"
            >
              Websites, mobile apps, APIs, e-commerce platforms and practical
              AI solutions designed around your business goals.
            </p>

            {/* CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="mt-9 flex flex-wrap justify-center gap-3"
            >
              <Link
                to="/contact"
                className="anime-shine group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(37,99,235,.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_18px_45px_rgba(37,99,235,.35)] active:scale-[.98]"
              >
                Start a Project

                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/85 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-xl active:scale-[.98]"
              >
                Explore Our Work

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust points */}
            <div
              data-aos="fade-up"
              data-aos-delay="340"
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
            >
              {heroPoints.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                >
                  <FiCheckCircle className="text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>

            {/* ---------------------------------------------------
                FLOATING TECHNOLOGY PANEL
            ---------------------------------------------------- */}
            <div
              data-aos="zoom-in"
              data-aos-delay="450"
              className="mx-auto mt-14 max-w-4xl"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />

                {/* Glass panel */}
                <div className="anime-shine relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-2 shadow-[0_35px_100px_rgba(15,23,42,.18)] backdrop-blur-2xl sm:p-3">
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950">
                    {/* Mini image */}
                    <img
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85"
                      alt=""
                      className="h-48 w-full object-cover opacity-45 sm:h-64"
                    />

                    {/* Image gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-blue-950/30" />

                    {/* Panel content */}
                    <div className="absolute inset-0 flex items-center p-6 sm:p-10">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.2em] text-cyan-200 backdrop-blur-md">
                          <IoSparklesOutline />
                          Digital transformation
                        </div>

                        <h3 className="max-w-md text-2xl font-black tracking-tight text-white sm:text-3xl">
                          Ideas into products.
                          <br />
                          Products into growth.
                        </h3>

                        <p className="mt-3 max-w-md text-xs leading-6 text-slate-300 sm:text-sm">
                          Design, development and intelligent technology working
                          together in one digital experience.
                        </p>
                      </div>
                    </div>

                    {/* Floating status */}
                    <div className="absolute bottom-4 right-4 hidden rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-xl sm:block">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                        <span className="text-[10px] font-semibold text-white">
                          Ready to build
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating left badge */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  className="anime-float absolute -left-4 bottom-6 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-12"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                      <FiZap />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Focus
                      </p>

                      <p className="text-xs font-bold text-slate-900">
                        Business value
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating right badge */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="650"
                  className="anime-float absolute -right-4 top-6 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-right-12"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-50 text-cyan-600">
                      <FiCpu />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Technology
                      </p>

                      <p className="text-xs font-bold text-slate-900">
                        AI-ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="mx-auto mt-7 grid max-w-3xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-xl backdrop-blur-xl sm:grid-cols-4"
            >
              {stats.map(([value, label], index) => (
                <div
                  key={label}
                  className={`p-4 text-center sm:p-5 ${
                    index !== stats.length - 1
                      ? "border-b border-slate-100 sm:border-b-0 sm:border-r"
                      : ""
                  } ${index === 2 ? "border-b-0" : ""}`}
                >
                  <div className="text-xl font-black text-slate-950 sm:text-2xl">
                    {value}
                  </div>

                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[.15em] text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our foundation"
            title="Technology built around your goals"
            description="We combine thoughtful design, modern engineering and practical AI to create digital products that are useful, scalable and easy to evolve."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="anime-shine group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,.045)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,.10)]"
                >
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-100 bg-blue-50 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <Icon />
                    </div>

                    <span className="text-xs font-black tracking-[.2em] text-slate-200 transition group-hover:text-blue-100">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="relative mt-2 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="relative mt-7 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-blue-600">
                    <span className="h-px w-7 bg-blue-500/50" />
                    Odikart Technology
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 px-4 py-24 sm:px-6 lg:py-28">
        <div className="light-grid pointer-events-none absolute inset-0 opacity-50" />

        <div className="pointer-events-none absolute right-[-150px] top-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we build"
            title="Technology that solves real problems"
            description="From an idea to a production-ready digital product."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:flex-row sm:px-7"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <FiLayers />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Have a different idea?
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Let's find the right technology for it.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              Discuss your idea
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:py-28">
        <div className="pointer-events-none absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-150px] bottom-10 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built with purpose"
            description="Digital experiences designed around real users and business goals."
            center
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-10 flex justify-center"
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
            >
              Explore all projects
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY ODIKART
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:py-32">
        {/* Background image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/80" />

        <div className="anime-float pointer-events-none absolute left-[-100px] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

        <div className="anime-float pointer-events-none absolute right-[-100px] top-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div data-aos="fade-right">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-200 backdrop-blur-xl">
              <IoSparklesOutline />
              Why Odikart Technology
            </div>

            <h2 className="max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technology should make your business{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                simpler.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              We focus on useful digital products, clear user experiences and
              technology that can support your business as it grows.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Clear communication",
                "Modern technology",
                "Business-first thinking",
                "Long-term scalability",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300 backdrop-blur"
                >
                  <FiCheckCircle className="text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="anime-shine group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.09]"
                >
                  <div className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/10 text-lg text-cyan-300 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <CTA />
    </>
  );
}
