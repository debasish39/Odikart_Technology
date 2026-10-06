import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHome,
  FiSearch,
  FiZap,
} from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="light-grid pointer-events-none absolute inset-0 opacity-80" />

      {/* Blue ambient glow */}
      <div className="anime-float pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Cyan ambient glow */}
      <div className="anime-float pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl [animation-delay:1.5s]" />

      {/* Small floating dots */}
      <div className="pointer-events-none absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-blue-500/40 shadow-[0_0_18px_rgba(37,99,235,0.5)]" />

      <div className="pointer-events-none absolute right-[18%] top-[22%] h-1.5 w-1.5 rounded-full bg-cyan-500/50 shadow-[0_0_16px_rgba(6,182,212,0.6)]" />

      <div className="pointer-events-none absolute bottom-[20%] left-[22%] h-1.5 w-1.5 rounded-full bg-blue-400/40" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="anime-shine inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
              <FiZap className="text-cyan-500" />
              Looks like you've taken a wrong turn
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              This page
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                doesn't exist.
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              The page you're looking for may have been moved, removed, or
              the link might be incorrect. Let's get you back to somewhere
              useful.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="mt-8 flex flex-nowrap items-center gap-3 overflow-x-auto pb-1"
            >
              <Link
                to="/"
                className="anime-shine inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <FiHome />
                Back Home
              </Link>

              <Link
                to="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
              >
                Explore Services
                <FiArrowRight />
              </Link>
            </div>

            {/* Back */}
            <button
              type="button"
              onClick={() => window.history.back()}
              data-aos="fade-up"
              data-aos-delay="320"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
            >
              <FiArrowLeft />
              Go back to the previous page
            </button>
          </div>

          {/* RIGHT 404 VISUAL */}
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="relative mx-auto w-full max-w-md"
          >
            {/* Outer glow */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Main card */}
            <div className="anime-shine official-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-blue-600">
                  Error
                </span>
              </div>

              {/* 404 visual */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute h-56 w-56 rounded-full border border-blue-100" />

                <div className="absolute h-40 w-40 rounded-full border border-cyan-100" />

                <div className="absolute h-24 w-24 rounded-full bg-blue-50" />

                {/* 404 */}
                <div className="relative text-center">
                  <div className="text-[7rem] font-black leading-none tracking-[-0.08em] text-slate-950 sm:text-[8rem]">
                    4
                    <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                      0
                    </span>
                    4
                  </div>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    Page unavailable
                  </div>
                </div>

                {/* Floating status card */}
                <div className="absolute left-3 top-10 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 sm:left-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FiSearch size={14} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-slate-400">
                        STATUS
                      </p>
                      <p className="text-xs font-black text-slate-800">
                        Not found
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating system card */}
                <div className="absolute bottom-8 right-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 sm:right-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

                    <span className="text-xs font-bold text-slate-600">
                      Odikart Technology
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom message */}
              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <p className="text-sm font-bold text-slate-800">
                  Let's find your way back.
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Use the navigation above to continue exploring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 border-t border-slate-200 pt-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            You might want to visit
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              to="/services"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              to="/work"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Our Work
            </Link>

            <Link
              to="/about"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              About Us
            </Link>

            <Link
              to="/process"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Process
            </Link>

            <Link
              to="/faq"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
