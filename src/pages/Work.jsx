import React from "react";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Ideas turned into" highlight="products." description="A selection of digital product concepts and platforms built around useful experiences." />
      <section className="px-4 pb-24"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{projects.map((p,i)=><ProjectCard key={p.title} project={p} delay={i*80}/>)}</div></section>
    </>
  );
}