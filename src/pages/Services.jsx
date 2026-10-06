import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=90";

const highlights = [
  {
    icon: FiCode,
    title: "Modern development",
    text: "Clean, maintainable technology built around your actual business needs.",
  },
  {
    icon: FiLayers,
    title: "End-to-end products",
    text: "From interface and APIs to deployment and ongoing improvements.",
  },
  {
    icon: FiZap,
    title: "Built for speed",
    text: "Focused development that helps you move from idea to usable product faster.",
  },
];

export default function Services() {
  return (
    <div className="bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Natural hero image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Modern technology workspace"
            className="h-full w-full object-cover object-center"
          />

          {/* Neutral readability overlays */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Natural fade into white */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        {/* Subtle neutral shine */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[90px] max-w-7xl items-end px-4 pb-28 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            {/* Eyebrow */}
            <div
              className="anime-shine mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl"
              data-aos="fade-down"
            >
              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.8)]" />
              Odikart Technology
            </div>

            {/* Heading */}
            <h1
              className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Build faster with the right{" "}
              <span className="text-white">technology.</span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              Flexible digital development services for businesses, startups
              and product ideas — designed to turn concepts into useful,
              scalable digital products.
            </p>

            {/* Buttons — always one row */}
            <div
              className="mt-8 flex flex-nowrap items-center gap-3 overflow-x-auto pb-2"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              <Link
                to="/contact"
                className="anime-shine inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Start a project
                <FiArrowRight />
              </Link>

              <Link
                to="/work"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / HIGHLIGHTS
      ========================================================= */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 light-grid opacity-60" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <FiZap />
              What we do
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Technology that solves real problems.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Choose the service that fits your product stage, or combine
              multiple capabilities to build a complete digital experience.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 90}
                  className="anime-shine group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600 transition duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 light-grid opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <div
            className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
            data-aos="fade-up"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
                <FiCheckCircle className="text-blue-600" />
                Our services
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Everything you need to build.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-600">
              Practical development services for websites, apps, APIs,
              e-commerce platforms and modern digital products.
            </p>
          </div>

          {/* Existing service cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.slug}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <ServiceCard
                  service={service}
                  delay={index * 70}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 light-grid opacity-40" />

        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-12 text-center shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:px-10 sm:py-16"
          data-aos="zoom-in"
        >
          {/* Neutral ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-xl">
              Ready when you are
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              Have an idea? Let's turn it into something useful.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Tell us what you're building and we'll help you figure out the
              right technology, features and next steps.
            </p>

            {/* One-row CTA */}
            <div className="mt-8 flex flex-nowrap items-center justify-center gap-3 overflow-x-auto pb-1">
              <Link
                to="/contact"
                className="anime-shine inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Let's talk
                <FiArrowRight />
              </Link>

              <Link
                to="/process"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Our process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}