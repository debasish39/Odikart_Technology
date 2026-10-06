import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronDown,
  FiHelpCircle,
  FiMessageCircle,
} from "react-icons/fi";
import { IoSparklesOutline } from "react-icons/io5";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=90";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We build websites, mobile apps, backend APIs, e-commerce products, MVPs and AI integrations.",
  },
  {
    question: "Can you build an MVP?",
    answer:
      "Yes. We can focus the first version on the most important user journey and features, helping you validate the idea before expanding the product.",
  },
  {
    question: "Do you work with existing projects?",
    answer:
      "Yes. Existing products can be improved, redesigned, debugged or extended. We can work with an existing codebase and help move the product forward.",
  },
  {
    question: "How do we start?",
    answer:
      "Send your project details through the contact page and we can discuss the requirements, goals and the best next step.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Natural hero image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="People collaborating on a digital project"
            className="h-full w-full object-cover object-center"
          />

          {/* Neutral readability */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Natural fade into white */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-10">
          <div
            data-aos="fade-right"
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div
              data-aos="fade-down"
              className="anime-shine inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-white" />
              </span>

              Frequently Asked Questions
            </div>

            {/* Small label */}
            <p
              data-aos="fade-up"
              data-aos-delay="80"
              className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-white/65"
            >
              Need some clarity?
            </p>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="140"
              className="mt-4 max-w-4xl text-[3.2rem] font-black leading-[0.94] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem]"
            >
              Questions,
              <span className="block text-white">
                answered.
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="220"
              className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg"
            >
              A few common questions about working with Odikart Technology,
              building digital products and turning ideas into useful
              experiences.
            </p>

            {/* Buttons — one row */}
           <div
  data-aos="fade-up"
  data-aos-delay="300"
  className="
    mt-8
    flex
    w-full
    max-w-[520px]
    items-center
    gap-1.5
    overflow-hidden
    rounded-full
    border
    border-white/15
    bg-white/10
    p-1.5
    shadow-[0_18px_55px_rgba(0,0,0,.22)]
    backdrop-blur-xl
    sm:gap-2
  "
>
  <Link
    to="/contact"
    className="
      anime-shine
      group
      inline-flex
      min-h-10
      min-w-0
      flex-1
      items-center
      justify-center
      gap-1.5
      overflow-hidden
      rounded-full
      bg-blue-600
      px-3
      py-2.5
      text-[11px]
      font-bold
      leading-none
      text-white
      shadow-[0_10px_30px_rgba(37,99,235,.30)]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-blue-500
      active:scale-[.97]
      focus:outline-none
      focus:ring-4
      focus:ring-blue-500/20
      sm:min-h-11
      sm:px-4
      sm:py-3
      sm:text-xs
      md:px-5
      md:text-sm
    "
  >
    <span className="truncate">Ask us directly</span>

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
      min-h-10
      min-w-0
      flex-1
      items-center
      justify-center
      gap-1.5
      overflow-hidden
      rounded-full
      px-3
      py-2.5
      text-[11px]
      font-bold
      leading-none
      text-white/80
      transition-all
      duration-300
      hover:bg-white/10
      hover:text-white
      active:scale-[.97]
      focus:outline-none
      focus:ring-4
      focus:ring-white/10
      sm:min-h-11
      sm:px-4
      sm:py-3
      sm:text-xs
      md:px-5
      md:text-sm
    "
  >
    <span className="truncate">Explore services</span>

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

            {/* Quick information */}
            <div
              data-aos="fade-up"
              data-aos-delay="380"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                "Common questions",
                "Simple answers",
                "Project guidance",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/65"
                >
                  <FiMessageCircle className="text-white/80" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero → white transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </section>

      {/* =========================================================
          FAQ CONTENT
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Light grid */}
        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(15,23,42,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.025)_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Ambient glow */}
        <div className="anime-float pointer-events-none absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Section heading — LEFT ALIGNED */}
          <div
            data-aos="fade-up"
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
              <IoSparklesOutline />
              Need to know
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Everything you need to{" "}
              <span className="text-blue-600">
                know.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Still have a question? Start with these common topics or reach
              out directly and tell us what you're building.
            </p>
          </div>

          {/* =====================================================
              FAQ LAYOUT
          ====================================================== */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            {/* ===================================================
                SIDE CARD
            ==================================================== */}
            <div
              data-aos="fade-right"
              className="anime-shine relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,.06)] sm:p-7"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  <FiHelpCircle />
                </div>

                <h3 className="mt-6 text-xl font-black tracking-[-0.03em] text-slate-950">
                  Have another question?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  If your question isn't covered here, don't worry. Tell us
                  about your project and we'll help you figure out the next
                  step.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.97]"
                >
                  Ask us directly
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mini status */}
              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-900">
                    Let's talk
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Start with your idea.
                  </p>
                </div>
              </div>
            </div>

            {/* ===================================================
                ACCORDION
            ==================================================== */}
            <div
             
              className="space-y-3"
            >
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={faq.question}
                  
                    className={`anime-shine overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_10px_35px_rgba(15,23,42,.04)] transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 shadow-[0_18px_45px_rgba(37,99,235,.08)]"
                        : "border-slate-200 hover:-translate-y-0.5 hover:border-blue-100"
                    }`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        {/* Number */}
                        <span
                          className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl text-[10px] font-black transition ${
                            isOpen
                              ? "bg-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,.2)]"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}
                        <span
                          className={`pt-1 text-sm font-black leading-6 transition sm:text-base ${
                            isOpen
                              ? "text-blue-600"
                              : "text-slate-900"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* Chevron */}
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                          isOpen
                            ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-slate-50 text-slate-500"
                        }`}
                      >
                        <FiChevronDown />
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="border-t border-slate-100 px-5 pb-6 pt-1 sm:px-6">
                          <div className="ml-12 max-w-2xl rounded-2xl bg-slate-50 px-4 py-4 sm:px-5">
                            <p className="text-sm leading-7 text-slate-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
 
      {/* Reduced motion */}
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