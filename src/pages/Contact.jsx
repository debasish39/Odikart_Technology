import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import { IoSparklesOutline } from "react-icons/io5";

/* =========================================================
   HERO IMAGE
========================================================= */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90";

/* =========================================================
   ODikart TECHNOLOGY CONTACT DETAILS
========================================================= */

const CONTACT_DETAILS = {
  email: "info@odikart.in",
  phone: "+91 8249173965",
  whatsapp: "918249173965",

  hours: "Mon - Sat · 10:00 AM - 7:00 PM",
};

/* =========================================================
   GOOGLE MAPS
========================================================= */
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Odikart";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6978.428403199833!2d85.82101629999998!3d20.274554650000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7001ed11c53%3A0xf609f09fff244bf0!2sOdikart!5e1!3m2!1sen!2sin!4v1791287384699!5m2!1sen!2sin";
/* =========================================================
   INITIAL FORM
========================================================= */

const INITIAL_FORM = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

/* =========================================================
   CONTACT COMPONENT
========================================================= */

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [isSending, setIsSending] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});

  /* =======================================================
     HANDLE INPUT CHANGE
  ======================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (submitError) {
      setSubmitError("");
    }
  };

  /* =======================================================
     VALIDATE FORM
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const projectType = formData.projectType.trim();
    const message = formData.message.trim();

    /* ---------------- NAME ---------------- */

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (name.length > 60) {
      newErrors.name = "Name must be less than 60 characters.";
    } else if (!/^[A-Za-zÀ-ÿ\s.'-]+$/.test(name)) {
      newErrors.name = "Please enter a valid name.";
    }

    /* ---------------- EMAIL ---------------- */

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (email.length > 120) {
      newErrors.email = "Email address is too long.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    /* ---------------- PROJECT TYPE ---------------- */

    if (!projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    /* ---------------- MESSAGE ---------------- */

    if (!message) {
      newErrors.message = "Please tell us about your project.";
    } else if (message.length < 20) {
      newErrors.message =
        "Please provide at least 20 characters about your project.";
    } else if (message.length > 1000) {
      newErrors.message =
        "Project description must be less than 1000 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =======================================================
     SUBMIT FORM
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key:
              import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

            name: formData.name.trim(),

            email: formData.email.trim(),

            project_type: formData.projectType,

            message: formData.message.trim(),

            subject:
              `New Project Enquiry from ${formData.name.trim()}`,

            from_name: "Odikart Technology Website",

            company: "Odikart Technology",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        setFormData(INITIAL_FORM);

        setErrors({});
      } else {
        throw new Error(
          result.message || "Unable to send enquiry."
        );
      }
    } catch (error) {
      console.error(
        "CONTACT FORM ERROR:",
        error
      );

      setSubmitError(
        "Unable to send your enquiry right now. Please try again or contact us directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  /* =======================================================
     RESET FORM
  ======================================================= */

  const handleNewEnquiry = () => {
    setSubmitted(false);

    setSubmitError("");

    setErrors({});

    setFormData(INITIAL_FORM);
  };

  /* =======================================================
     ERROR ICON
  ======================================================= */

  const ErrorIcon = () => (
    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-red-400 text-[9px] font-black text-red-500">
      !
    </span>
  );

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="overflow-hidden bg-white text-slate-950">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative isolate overflow-hidden">

        {/* HERO IMAGE */}

        <div className="absolute inset-0">

          <img
            src={HERO_IMAGE}
            alt="Team discussing a digital project"
            className="hero-bg-image h-full w-full object-cover"
          />

          {/* Neutral readability */}

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Natural image → white */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/65 to-transparent" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8 lg:pb-36 lg:pt-40">

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">

            {/* =====================================================
                HERO CONTENT
            ====================================================== */}

            <div
              data-aos="fade-right"
              className="max-w-3xl"
            >

              {/* Eyebrow */}

              <div className="anime-shine inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">

                <span className="relative flex h-2 w-2">

                  <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />

                  <span className="relative h-2 w-2 rounded-full bg-cyan-300" />

                </span>

                Contact Odikart Technology

              </div>

              {/* Label */}

              <p
                data-aos="fade-up"
                data-aos-delay="80"
                className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-cyan-300"
              >
                Start with an idea
              </p>

              {/* Heading */}

              <h1
                data-aos="fade-up"
                data-aos-delay="140"
                className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              >
                Let's build something{" "}
                <span className="text-cyan-300">
                  useful.
                </span>
              </h1>

              {/* Description */}

              <p
                data-aos="fade-up"
                data-aos-delay="220"
                className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg"
              >
                Tell us about your idea, business or product.
                We'll help you understand the next step and turn
                the right idea into a practical digital experience.
              </p>

              {/* Quick points */}

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-8 flex flex-wrap gap-2"
              >

                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">

                  <FiMessageCircle className="text-cyan-300" />

                  Tell us your idea

                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white/80 backdrop-blur-md">

                  <FiClock className="text-cyan-300" />

                  Discuss next steps

                </span>

              </div>

              {/* Hero buttons */}

           <div
  data-aos="fade-up"
  data-aos-delay="360"
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
  <a
    href="#contact-form"
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
  </a>

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
      border-white/20
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
      hover:border-white/30
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
    <span className="truncate">Explore services</span>

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

            {/* =====================================================
                HERO VISUAL
            ====================================================== */}

            <div
              data-aos="fade-left"
              data-aos-delay="180"
              className="relative mx-auto hidden w-full max-w-md lg:block"
            >

              <div className="anime-float pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-3xl" />

              <div className="anime-shine relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">

                <div className="rounded-[1.6rem] bg-slate-950/90 p-6 sm:p-8">

                  {/* Card header */}

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                        Let's connect
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Your idea starts here
                      </p>

                    </div>

                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                      <FiSend />
                    </div>

                  </div>

                  {/* Main message */}

                  <div className="mt-12">

                    <p className="text-2xl font-black leading-tight text-white sm:text-3xl">

                      From idea

                      <span className="text-cyan-300">
                        {" → "}
                      </span>

                      to product.

                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      Web, mobile, APIs, AI and digital experiences
                      designed around what your business actually needs.
                    </p>

                  </div>

                  {/* Technology */}

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    {[
                      "Web",
                      "Mobile",
                      "AI",
                      "API",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-bold text-white/75"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                  {/* Progress */}

                  <div className="mt-8">

                    <div className="flex items-center justify-between text-[10px]">

                      <span className="font-semibold text-white/40">
                        PROJECT JOURNEY
                      </span>

                      <span className="font-bold text-cyan-300">
                        Ready to start
                      </span>

                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">

                      <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating status */}

              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="absolute -bottom-6 left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_55px_rgba(15,23,42,.18)] sm:block"
              >

                <div className="flex items-center gap-3">

                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-green-50 text-green-600">
                    <FiCheckCircle />
                  </div>

                  <div>

                    <p className="text-xs font-black text-slate-950">
                      Project discussion
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Clear. Simple. No pressure.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT AREA
      ========================================================== */}

      <section
        id="contact-form"
        className="relative overflow-hidden bg-[#f8fafc] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >

        <div className="light-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">

          {/* =====================================================
              CONTACT INFORMATION
          ====================================================== */}

          <div data-aos="fade-right">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">

              <IoSparklesOutline />

              Let's talk

            </div>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">

              Tell us what you're{" "}

              <span className="text-blue-600">
                building.
              </span>

            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              You don't need a perfect plan. Just tell us what you're
              trying to achieve and we'll help shape the conversation.
            </p>

            {/* Contact cards */}

            <div className="mt-8 space-y-3">

              {/* EMAIL */}

              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5"
              >

                <div className="flex items-center gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FiMail />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-black text-slate-950">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-blue-600">
                      {CONTACT_DETAILS.email}
                    </p>

                  </div>

                </div>

              </a>

              {/* PHONE */}

              <a
                href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                    <FiPhone />
                  </div>

                  <div>

                    <p className="text-xs font-black text-slate-950">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {CONTACT_DETAILS.phone}
                    </p>

                  </div>

                </div>

              </a>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5"
              >

                <div className="flex items-center gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
                    <FiMessageCircle />
                  </div>

                  <div>

                    <p className="text-xs font-black text-slate-950">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-semibold text-green-600">
                      Chat with us
                    </p>

                  </div>

                </div>

              </a>

              {/* LOCATION */}

              {/* <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5"
              >

                <div className="flex items-center gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FiMapPin />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-xs font-black text-slate-950">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {CONTACT_DETAILS.location}
                    </p>

                    <p className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-blue-600">
                      Open in Google Maps
                      <FiArrowUpRight />
                    </p>

                  </div>

                </div>

              </a> */}

              {/* WORKING HOURS */}

              <div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">

                <div className="flex items-center gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <FiClock />
                  </div>

                  <div>

                    <p className="text-xs font-black text-slate-950">
                      Working hours
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {CONTACT_DETAILS.hours}
                    </p>

                  </div>

                </div>

              </div>

            </div>

         {/* =================================================
    GOOGLE MAP
================================================= */}

<div
  data-aos="fade-up"
  data-aos-delay="120"
  className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,.08)]"
>
  <div className="relative h-72 w-full sm:h-80">

    <iframe
      title="Odikart Location"
      src={MAP_EMBED_URL}
      className="h-full w-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />

    {/* Map overlay */}

    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/40 to-transparent p-4">

      <div className="flex items-center justify-between gap-3">

        <div className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-md">

          <FiMapPin className="text-blue-600" />

          Odikart, Bhubaneswar

        </div>

        <a
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/30 bg-white/95 text-blue-600 shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
          aria-label="Open Odikart location in Google Maps"
        >
          <FiArrowUpRight />
        </a>

      </div>

    </div>

  </div>
</div>

            {/* Services link */}

            <Link
              to="/services"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
            >

              Explore our services

              <FiArrowRight className="transition group-hover:translate-x-1" />

            </Link>

          </div>

          {/* =====================================================
              FORM
          ====================================================== */}

          <div data-aos="fade-left">

            <form
              onSubmit={handleSubmit}
              noValidate
              className="anime-shine relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_65px_rgba(15,23,42,.08)] sm:p-7 lg:p-8"
            >

              {!submitted ? (

                <>

                  {/* FORM HEADER */}

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                        Project enquiry
                      </p>

                      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">
                        Start a conversation.
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        A few details are enough to get started.
                      </p>

                    </div>

                    <div className="hidden h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 sm:grid">
                      <FiSend />
                    </div>

                  </div>

                  {/* NAME + EMAIL */}

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">

                    {/* NAME */}

                    <div>

                      <label className="mb-2 block text-xs font-bold text-slate-700">
                        Your name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                          errors.name
                            ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                            : "border-slate-200 focus:border-blue-400 focus:ring-blue-500/10"
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500">
                          <ErrorIcon />
                          {errors.name}
                        </p>
                      )}

                    </div>

                    {/* EMAIL */}

                    <div>

                      <label className="mb-2 block text-xs font-bold text-slate-700">
                        Email address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                          errors.email
                            ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                            : "border-slate-200 focus:border-blue-400 focus:ring-blue-500/10"
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500">
                          <ErrorIcon />
                          {errors.email}
                        </p>
                      )}

                    </div>

                  </div>

                  {/* PROJECT TYPE */}

                  <div className="mt-4">

                    <label className="mb-2 block text-xs font-bold text-slate-700">
                      Project type
                    </label>

                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full appearance-none rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:bg-white focus:ring-4 ${
                        errors.projectType
                          ? "border-red-400 text-slate-700 focus:border-red-400 focus:ring-red-500/10"
                          : "border-slate-200 text-slate-700 focus:border-blue-400 focus:ring-blue-500/10"
                      }`}
                    >

                      <option value="">
                        What are you looking to build?
                      </option>

                      <option value="Website">
                        Website
                      </option>

                      <option value="Web application">
                        Web application
                      </option>

                      <option value="Mobile application">
                        Mobile application
                      </option>

                      <option value="AI solution">
                        AI solution
                      </option>

                      <option value="API / Backend">
                        API / Backend
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                    {errors.projectType && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500">
                        <ErrorIcon />
                        {errors.projectType}
                      </p>
                    )}

                  </div>

                  {/* MESSAGE */}

                  <div className="mt-4">

                    <label className="mb-2 block text-xs font-bold text-slate-700">
                      Tell us about your project
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      maxLength={1000}
                      placeholder="Tell us about your idea, goals, features or the problem you want to solve..."
                      className={`w-full resize-none rounded-2xl border bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                        errors.message
                          ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                          : "border-slate-200 focus:border-blue-400 focus:ring-blue-500/10"
                      }`}
                    />

                    <div className="mt-2 flex items-center justify-between gap-3">

                      <div>

                        {errors.message ? (

                          <p className="flex items-center gap-1.5 text-xs font-medium text-red-500">
                            <ErrorIcon />
                            {errors.message}
                          </p>

                        ) : (

                          <p className="text-[11px] text-slate-400">
                            Minimum 20 characters
                          </p>

                        )}

                      </div>

                      <span className="shrink-0 text-[11px] text-slate-400">
                        {formData.message.length}/1000
                      </span>

                    </div>

                  </div>

                  {/* GENERAL SUBMIT ERROR */}

                  {submitError && (

                    <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3.5 text-sm leading-6 text-red-600">

                      <ErrorIcon />

                      <span>
                        {submitError}
                      </span>

                    </div>

                  )}

                  {/* SUBMIT AREA */}

                 <div
  className="
    mt-5
    flex
    w-full
    flex-col
    gap-4
    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>
  <p
    className="
      min-w-0
      text-[11px]
      leading-5
      text-slate-400
      sm:max-w-[260px]
    "
  >
    We'll use these details only to understand your project.
  </p>

  <button
    type="submit"
    disabled={isSending}
    className={`anime-shine group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,.25)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:w-auto sm:px-6 ${
      isSending
        ? "cursor-not-allowed bg-blue-400"
        : "bg-blue-600 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.96]"
    }`}
  >
    {isSending ? (
      <>
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        <span>Sending...</span>
      </>
    ) : (
      <>
        <span>Send enquiry</span>

        <FiArrowUpRight
          className="
            h-4
            w-4
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </>
    )}
  </button>
</div>

                </>

              ) : (

                /* =================================================
                   SUCCESS STATE
                ================================================== */

                <div className="flex min-h-[430px] flex-col items-center justify-center px-5 text-center">

                  <div className="anime-float grid h-16 w-16 place-items-center rounded-[1.4rem] bg-green-50 text-2xl text-green-600 shadow-[0_15px_40px_rgba(34,197,94,.12)]">
                    <FiCheckCircle />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-green-600">
                    Enquiry sent successfully
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-950">
                    Thanks for reaching out.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                    Your project enquiry has been sent successfully.
                    We'll review your requirements and get back to you.
                  </p>

                  <div className="mt-7 flex flex-nowrap items-center gap-3 overflow-x-auto">

                    <button
                      type="button"
                      onClick={handleNewEnquiry}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                    >
                      Send another enquiry
                      <FiArrowRight />
                    </button>

                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                      Email us
                      <FiMail />
                    </a>

                  </div>

                </div>

              )}

            </form>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

     
    </main>
  );
}