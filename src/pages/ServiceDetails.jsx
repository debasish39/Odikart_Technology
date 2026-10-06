import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiLayers,
  FiMessageCircle,
  FiZap,
} from "react-icons/fi";

import { services } from "../data/services";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=90";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="flex min-h-[70vh] items-center bg-white px-4 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <FiLayers size={26} />
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Service not found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            The service you're looking for may have been moved or is no
            longer available.
          </p>

          <Link
            to="/services"
            className="anime-shine mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <FiArrowLeft />
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden">
        {/* Natural background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Digital product development"
            className="hero-bg-image h-full w-full object-cover"
          />

          {/* Neutral readability overlays */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Image naturally fades into white */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/65 to-transparent" />
        </div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-40">
          {/* Back link */}
          <Link
            to="/services"
            data-aos="fade-down"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            <FiArrowLeft />
            All services
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            {/* Left content */}
            <div>
              {/* Icon */}
              <div
                data-aos="fade-up"
                data-aos-delay="80"
                className="anime-shine inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-cyan-300 shadow-lg backdrop-blur-md"
              >
                <Icon size={25} />
              </div>

              {/* Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="150"
                className="mt-7 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {service.title}
              </h1>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="220"
                className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
              >
                {service.description}
              </p>

              {/* CTA */}
             <div
  data-aos="fade-up"
  data-aos-delay="290"
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
      active:scale-[.97]
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
    <span className="truncate">Discuss this project</span>

    <FiArrowUpRight
      className="
        h-3.5
        w-3.5
        shrink-0
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
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
      hover:border-white/35
      hover:bg-white/20
      active:scale-[.97]
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
    <span className="truncate">View all services</span>

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
</div>
            </div>

            {/* Right product-style card */}
            <div
              data-aos="fade-left"
              data-aos-delay="220"
              className="hidden lg:block"
            >
              <div className="anime-shine relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

                <div className="relative rounded-2xl border border-white/15 bg-slate-950/75 p-5">
                  {/* Fake browser/app header */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white/60">
                      PROJECT
                    </span>
                  </div>

                  {/* Service preview */}
                  <div className="mt-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-300">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-white/50">
                          Selected service
                        </p>

                        <p className="mt-1 text-sm font-bold text-white">
                          {service.title}
                        </p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white/60">
                          Project journey
                        </span>

                        <span className="font-bold text-cyan-300">
                          Ready to start
                        </span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      </div>
                    </div>

                    {/* Mini steps */}
                    <div className="mt-7 grid grid-cols-3 gap-2">
                      {["Plan", "Build", "Launch"].map((step, index) => (
                        <div
                          key={step}
                          className={`rounded-xl border p-3 text-center ${
                            index === 0
                              ? "border-cyan-400/20 bg-cyan-400/10"
                              : "border-white/10 bg-white/[0.03]"
                          }`}
                        >
                          <div
                            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                              index === 0
                                ? "bg-cyan-400/15 text-cyan-300"
                                : "bg-white/10 text-white/40"
                            }`}
                          >
                            {index + 1}
                          </div>

                          <p className="mt-2 text-[11px] font-semibold text-white/60">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE OVERVIEW
      ========================================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="light-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div data-aos="fade-right">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Service overview
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Technology built around your actual goal.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                We focus on creating practical digital solutions rather than
                adding technology just for the sake of it.
              </p>
            </div>

            {/* Right */}
            <div
              data-aos="fade-left"
              className="official-card anime-shine rounded-3xl p-7 sm:p-9"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Clear requirements",
                  "Modern technology",
                  "Launch focused",
                ].map((item, index) => (
                  <div
                    key={item}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <FiCheckCircle className="shrink-0 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE DELIVER
      ========================================================== */}
      <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="max-w-3xl"
          >
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              How we deliver
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A focused workflow from discussion to delivery.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every project is different, but the fundamentals stay simple:
              understand, plan, build and improve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We discuss your goals, users, requirements and the problem you're trying to solve.",
                icon: FiMessageCircle,
              },
              {
                number: "02",
                title: "Plan",
                description:
                  "We shape the scope, user journey and technology approach before development.",
                icon: FiLayers,
              },
              {
                number: "03",
                title: "Build",
                description:
                  "The product is developed in focused stages with regular progress and iteration.",
                icon: FiZap,
              },
              {
                number: "04",
                title: "Launch",
                description:
                  "We prepare the product for real users and identify what should improve next.",
                icon: FiArrowUpRight,
              },
            ].map((step, index) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="official-card anime-shine group rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <StepIcon size={19} />
                    </div>

                    <span className="text-sm font-black tracking-widest text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
   <section className="px-4 py-2 sm:px-6 sm:py-2 lg:px-8">
  <div
    data-aos="zoom-in"
    className="
      anime-shine
      relative
      mx-auto
      max-w-7xl
      overflow-hidden
      rounded-[2rem]
      border
      border-slate-800
      bg-slate-950
      px-6
      py-12
      shadow-[0_30px_90px_rgba(15,23,42,.18)]
      sm:px-10
      sm:py-16
      lg:px-14
      lg:py-20
    "
  >
    {/* Subtle grid */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.08]
        [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
        [background-size:42px_42px]
      "
    />

    {/* Ambient glow */}
    <div
      className="
        pointer-events-none
        absolute
        -right-28
        -top-28
        h-80
        w-80
        rounded-full
        bg-blue-600/20
        blur-3xl
      "
    />

    <div
      className="
        pointer-events-none
        absolute
        -bottom-32
        left-1/3
        h-80
        w-80
        rounded-full
        bg-cyan-500/10
        blur-3xl
      "
    />

    {/* Small center glow */}
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-48
        w-48
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-blue-500/5
        blur-3xl
      "
    />

    {/* Content */}
    <div className="relative z-10 max-w-3xl">
      {/* Label */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-3
          py-1.5
          text-[10px]
          font-black
          uppercase
          tracking-[0.2em]
          text-cyan-300
          backdrop-blur-md
        "
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
        Let's build it
      </div>

      {/* Heading */}
      <h2
        className="
          mt-5
          max-w-2xl
          text-3xl
          font-black
          leading-[1.08]
          tracking-[-0.04em]
          text-white
          sm:text-4xl
          lg:text-5xl
        "
      >
        Have a project
        <span className="text-blue-400"> in mind?</span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-4
          max-w-2xl
          text-sm
          leading-7
          text-slate-300
          sm:text-base
          sm:leading-8
        "
      >
        Tell us what you want to build and we'll help you figure out
        the right technology, scope and next step.
      </p>

      {/* CTA */}
      <div
        className="
          mt-7
          flex
          w-full
          max-w-[520px]
          items-center
          gap-2
          overflow-hidden
          sm:gap-3
        "
      >
        {/* Primary */}
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
            shadow-[0_12px_35px_rgba(37,99,235,.30)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-500
            hover:shadow-[0_16px_42px_rgba(37,99,235,.38)]
            active:scale-[.97]
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
          <span className="truncate">Start a conversation</span>

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

        {/* Secondary */}
        <Link
          to="/process"
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
            border-white/15
            bg-white/5
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
            hover:border-white/25
            hover:bg-white/10
            active:scale-[.97]
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
          <span className="truncate">See our process</span>

          <FiArrowUpRight
            className="
              h-3.5
              w-3.5
              shrink-0
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              sm:h-4
              sm:w-4
            "
          />
        </Link>
      </div>
    </div>

    {/* Decorative corner element */}
    <div
      className="
        pointer-events-none
        absolute
        bottom-6
        right-7
        hidden
        items-center
        gap-2
        text-[9px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-white/25
        sm:flex
      "
    >
      <span className="h-px w-8 bg-white/20" />
      Odikart Technology
    </div>
  </div>
</section>
    </div>
  );
}
