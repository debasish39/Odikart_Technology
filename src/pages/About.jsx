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
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { IoSparklesOutline } from "react-icons/io5";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90";

const principles = [
  {
    number: "01",
    icon: FiZap,
    title: "Practical",
    description:
      "We focus on features that solve an actual business or customer problem.",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Modern",
    description:
      "We use current tools and development patterns to build maintainable products.",
    accent: "from-indigo-600 to-blue-500",
  },
  {
    number: "03",
    icon: FiTrendingUp,
    title: "Scalable",
    description:
      "We structure products so they can grow as the business grows.",
    accent: "from-cyan-500 to-blue-600",
  },
];

const capabilities = [
  ["Web", "Digital products", FiCode],
  ["AI", "Smart solutions", FiCpu],
  ["API", "Connected systems", FiLayers],
  ["Scale", "Growth focused", FiTrendingUp],
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Natural photography */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Team working together on digital products"
            className="h-full w-full object-cover object-center"
          />

          {/* Neutral readability only — no blue image tint */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Image naturally disappears into white */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            {/* Hero copy */}
            <div
              data-aos="fade-right"
              className="max-w-3xl"
            >
              <div
                className="anime-shine inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-white backdrop-blur-xl"
                data-aos="fade-down"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-white" />
                </span>

                About Odikart Technology
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay="80"
                className="mt-8 text-xs font-black uppercase tracking-[.28em] text-white/70"
              >
                Technology with purpose
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="140"
                className="mt-4 max-w-4xl text-[3rem] font-black leading-[.95] tracking-[-.065em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]"
              >
                A technology partner for{" "}
                <span className="text-white">
                  ambitious ideas.
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="220"
                className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg"
              >
                Odikart Technology focuses on practical, modern and scalable
                digital products that turn ideas into useful experiences.
              </p>

              {/* Buttons — one row */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-8 flex flex-nowrap items-center gap-2 overflow-x-auto rounded-full border border-white/15 bg-white/10 p-1.5 shadow-[0_18px_55px_rgba(0,0,0,.22)] backdrop-blur-xl w-fit max-w-full"
              >
                <Link
                  to="/contact"
                  className="anime-shine group inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[.95] focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:text-sm"
                >
                  Start a project
                  <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-full px-5 py-3 text-xs font-bold text-white/80 transition duration-200 hover:bg-white/10 hover:text-white active:scale-[.95] sm:text-sm"
                >
                  What we do
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust points */}
              <div
                data-aos="fade-up"
                data-aos-delay="380"
                className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
              >
                {[
                  "Modern UI",
                  "Scalable backend",
                  "AI-ready",
                  "Business-focused",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/65"
                  >
                    <FiCheckCircle className="text-white/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Product-style visual */}
            <div
              data-aos="fade-left"
              data-aos-delay="180"
              className="relative mx-auto w-full max-w-xl lg:mx-0"
            >
              {/* Neutral floating glow */}
              <div className="anime-float pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

              <div className="anime-float pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl [animation-delay:1.5s]" />

              <div className="anime-shine relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-white p-6 sm:p-8">
                  {/* Small app header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[.2em] text-blue-600">
                        Odikart Technology
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Digital product studio
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-bold text-slate-600">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                      Active
                    </span>
                  </div>

                  {/* Main visual */}
                  <div className="mt-12">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-xl text-white shadow-[0_0_35px_rgba(37,99,235,.25)]">
                      <IoSparklesOutline />
                    </div>

                    <h2 className="mt-6 max-w-md text-3xl font-black leading-tight tracking-[-.04em] text-slate-950 sm:text-4xl">
                      Build something useful.
                      <span className="block text-blue-600">
                        Make it ready for what's next.
                      </span>
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                      Strategy, design, engineering and practical AI working
                      together around a clear business goal.
                    </p>
                  </div>

                  {/* Capability chips */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Design", "Engineering", "AI", "Growth"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Mini dashboard */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">
                        Focus
                      </p>

                      <p className="mt-2 text-sm font-bold text-slate-950">
                        Real users
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[9px] font-black uppercase tracking-[.15em] text-slate-400">
                        Approach
                      </p>

                      <p className="mt-2 text-sm font-bold text-slate-950">
                        Build & evolve
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="anime-shine absolute -bottom-6 left-5 hidden rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_60px_rgba(15,23,42,.18)] backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <FiShield />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-950">
                      Built responsibly.
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Clean foundations that can grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final natural fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="relative z-10 -mt-1 border-y border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,.05)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {capabilities.map(([label, text, Icon], index) => (
            <div
              key={label}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="group border-r border-slate-100 px-5 py-6 text-center transition hover:bg-blue-50/50 last:border-r-0 sm:py-7"
            >
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon />
              </div>

              <p className="mt-3 text-sm font-black text-slate-950">
                {label}
              </p>

              <p className="mt-1 text-[9px] font-black uppercase tracking-[.15em] text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(15,23,42,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.025)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto max-w-6xl">
          <div
            data-aos="fade-up"
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[.2em] text-blue-600 shadow-sm">
              How we think
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-[-.055em] text-slate-950 sm:text-4xl lg:text-5xl">
              Three principles behind{" "}
              <span className="text-blue-600">
                every product.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              The goal isn't to add technology for the sake of technology.
              It's to make the right technology useful.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map(
              (
                { number, icon: Icon, title, description, accent },
                index
              ) => (
                <article
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="anime-shine group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.055)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_65px_rgba(37,99,235,.12)] active:scale-[.99]"
                >
                  <div
                    className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-[0.06] blur-2xl transition duration-500 group-hover:opacity-[0.12]`}
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon />
                    </div>

                    <span className="text-4xl font-black tracking-[-.06em] text-slate-100 transition group-hover:text-blue-50">
                      {number}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {description}
                    </p>
                  </div>

                  <div className="relative mt-7 flex items-center gap-2 text-xs font-bold text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Our approach
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[130px]" />

        <div
          data-aos="zoom-in"
          className="anime-shine relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 text-center shadow-[0_30px_90px_rgba(15,23,42,.16)] sm:px-10 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.28),transparent_45%)]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-white/75 backdrop-blur-xl">
              <IoSparklesOutline />
              Let's build
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight tracking-[-.05em] text-white sm:text-5xl">
              Have an ambitious idea?
              <span className="block text-white">
                Let's turn it into something real.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Tell us what you're thinking. We'll help shape the right digital
              experience around it.
            </p>

            <div className="mt-8 flex flex-nowrap items-center justify-center gap-3 overflow-x-auto pb-1">
              <Link
                to="/contact"
                className="anime-shine group inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,.30)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[.96] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                Start a conversation
                <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Explore services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reduced-motion support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anime-float,
          .anime-shine::after {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}