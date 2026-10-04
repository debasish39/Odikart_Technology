import React, { useState } from "react";
import PageHero from "../components/PageHero";

const faqs = [
  ["What services do you provide?","We build websites, mobile apps, backend APIs, e-commerce products, MVPs and AI integrations."],
  ["Can you build an MVP?","Yes. We can focus the first version on the most important user journey and features."],
  ["Do you work with existing projects?","Yes. Existing products can be improved, redesigned, debugged or extended."],
  ["How do we start?","Send your project details through the contact page and we can discuss the requirements."]
];

export default function FAQ() {
  const [active,setActive]=useState(null);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered" description="A few common questions about working with Odikart Technology." />
      <section className="px-4 pb-24"><div className="mx-auto max-w-3xl space-y-3">{faqs.map(([q,a],i)=><button key={q} onClick={()=>setActive(active===i?null:i)} className="w-full rounded-2xl border border-white/10 bg-white/[.035] p-5 text-left transition hover:border-cyan-400/20"><div className="flex items-center justify-between gap-4 font-semibold">{q}<span className="text-cyan-300">{active===i?"−":"+"}</span></div>{active===i&&<p className="mt-4 leading-7 text-slate-400">{a}</p>}</button>)}</div></section>
    </>
  );
}