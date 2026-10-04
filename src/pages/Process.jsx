import React from "react";
import PageHero from "../components/PageHero";
import AnimeCard from "../components/AnimeCard";
import { process } from "../data/process";

export default function Process() {
  return (
    <>
      <PageHero eyebrow="Process" title="A simple path from idea to" highlight="launch." description="Clear stages, focused communication and practical iteration." />
      <section className="px-4 pb-24"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">{process.map((p,i)=><AnimeCard key={p.number} delay={i*80}><div className="text-sm font-bold text-cyan-300">{p.number}</div><h3 className="mt-4 text-xl font-bold">{p.title}</h3><p className="mt-3 leading-7 text-slate-400">{p.description}</p></AnimeCard>)}</div></section>
    </>
  );
}