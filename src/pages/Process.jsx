import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronRight,
  FiLayers,
  FiMessageCircle,
  FiCode,
  FiZap,
} from "react-icons/fi";

import { process } from "../data/process";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90";

const processIcons = [FiMessageCircle, FiLayers, FiCode, FiZap];

export default function Process() {
  return (
    <div className="bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden">
        {/* Natural hero image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Odikart Technology team discussing a project"
            className="hero-bg-image h-full w-full object-cover"
          />

          {/* Neutral readability overlays */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Natural fade into white */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/65 to-transparent" />
        </div>

        {/* Soft neutral glow */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-40">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              data-aos="fade-down"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md anime-shine"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
              How we work
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              A simple path from idea to{" "}
              <span className="text-cyan-300">launch.</span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
            >
              Clear stages, focused communication and practical iteration.
              We turn your idea into a useful digital product without making
              the process unnecessarily complicated.
            </p>

       <div
  data-aos="fade-up"
  data-aos-delay="260"
  className="
    mt-8
    flex
    w-full
    max-w-[520px]
    items-center
    gap-2
    overflow-hidden
    sm:gap-3
  "
>
  <Link
    to="/contact"
    className="
      anime-shine
      group
      inline-flex
      min-w-0
      flex-1
      items-center
      justify-center
      gap-1.5
      overflow-hidden
      rounded-xl
      bg-blue-600
      px-3
      py-2.5
      text-[11px]
      font-bold
      leading-none
      text-white
      shadow-lg
      shadow-blue-600/25
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-blue-700
      hover:shadow-blue-600/35
      active:scale-[0.97]
      focus:outline-none
      focus:ring-4
      focus:ring-blue-500/20
      sm:px-4
      sm:py-3
      sm:text-xs
      md:px-5
      md:py-3.5
      md:text-sm
    "
  >
    <span className="truncate">Start a project</span>

    <FiArrowRight
      className="
        h-3.5
        w-3.5
        shrink-0
        transition-transform
        duration-300
        group-hover:translate-x-1
        sm:h-4
        sm:w-4
      "
    />
  </Link>

  <Link
    to="/services"
    className="
      group
      inline-flex
      min-w-0
      flex-1
      items-center
      justify-center
      gap-1.5
      overflow-hidden
      rounded-xl
      border
      border-white/25
      bg-white/10
      px-3
      py-2.5
      text-[11px]
      font-bold
      leading-none
      text-white
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-white/20
      hover:border-white/35
      active:scale-[0.97]
      focus:outline-none
      focus:ring-4
      focus:ring-white/10
      sm:px-4
      sm:py-3
      sm:text-xs
      md:px-5
      md:py-3.5
      md:text-sm
    "
  >
    <span className="truncate">Explore services</span>

    <FiChevronRight
      className="
        h-3.5
        w-3.5
        shrink-0
        transition-transform
        duration-300
        group-hover:translate-x-1
        sm:h-4
        sm:w-4
      "
    />
  </Link>
</div>

            {/* Trust points */}
            <div
              data-aos="fade-up"
              data-aos-delay="340"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75"
            >
              <span className="inline-flex items-center gap-2">
                <FiCheckCircle className="text-cyan-300" />
                Clear milestones
              </span>

              <span className="inline-flex items-center gap-2">
                <FiCheckCircle className="text-cyan-300" />
                Practical iteration
              </span>

              <span className="inline-flex items-center gap-2">
                <FiCheckCircle className="text-cyan-300" />
                Regular communication
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="light-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="max-w-3xl"
          >
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Our approach
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              From the first conversation to a product people can actually
              use.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Every project follows a clear path. We first understand what
              you're trying to achieve, then shape the right solution,
              develop it in focused stages and prepare it for launch.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS STEPS
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div
            data-aos="fade-up"
            className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                The process
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Four focused stages.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A straightforward workflow keeps the project moving while
              giving you visibility at every important stage.
            </p>
          </div>

          {/* Desktop connector */}
          <div className="relative">
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 lg:block" />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => {
                const Icon = processIcons[index] || FiLayers;

                return (
                  <article
                    key={item.number}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="official-card anime-shine group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/10"
                  >
                    {/* Top glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/20" />

                    {/* Number */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                        <Icon size={19} />
                      </div>

                      <span className="text-sm font-black tracking-widest text-slate-300">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-7">
                      <h3 className="text-xl font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Stage {index + 1}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT YOU GET
      ========================================================== */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left */}
            <div data-aos="fade-right">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                What you can expect
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Less confusion.
                <br />
                More progress.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                The goal isn't to add unnecessary meetings or complicated
                processes. It's to make sure everyone knows what we're
                building, why we're building it and what comes next.
              </p>

              <Link
                to="/contact"
                className="anime-shine mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Discuss your idea
                <FiArrowRight />
              </Link>
            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Clear scope",
                  description:
                    "We define the important goals and features before development gets too far.",
                  icon: FiCheckCircle,
                },
                {
                  title: "Visible progress",
                  description:
                    "You can see how the product is evolving instead of waiting until the end.",
                  icon: FiLayers,
                },
                {
                  title: "Practical decisions",
                  description:
                    "Technology choices are made around your actual product needs.",
                  icon: FiCode,
                },
                {
                  title: "Launch focused",
                  description:
                    "The final stage is about getting the product ready for real users.",
                  icon: FiZap,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 90}
                    className="official-card anime-shine rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-5 font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
