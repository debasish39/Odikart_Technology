import React, { useState } from "react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something" highlight="useful." description="Tell us about your idea, business or product. We'll get back to you with the next steps." />
      <section className="px-4 pb-24">
        <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}} className="mx-auto max-w-2xl space-y-4 rounded-3xl border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
          <input required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/40" />
          <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/40" />
          <input placeholder="Project type" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/40" />
          <textarea required rows="6" placeholder="Tell us about your project..." className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none focus:border-cyan-400/40" />
          <button className="w-full rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5">Send Enquiry</button>
          {submitted && <p className="text-center text-sm text-cyan-300">Thanks! Your enquiry has been captured in this demo form.</p>}
        </form>
      </section>
    </>
  );
}