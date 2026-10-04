import React from "react";
import PageHero from "../components/PageHero";
import AnimeCard from "../components/AnimeCard";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="A technology partner for" highlight="ambitious ideas." description="Odikart Technology focuses on practical, modern and scalable digital products." />
      <section className="px-4 pb-24"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {[["Practical","We focus on features that solve an actual business or customer problem."],["Modern","We use current tools and development patterns to build maintainable products."],["Scalable","We structure products so they can grow as the business grows."]].map(([title,text],i)=><AnimeCard key={title} delay={i*80}><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></AnimeCard>)}
      </div></section>
    </>
  );
}