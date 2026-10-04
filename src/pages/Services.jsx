import React from "react";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Build faster with the right" highlight="technology." description="Flexible digital development services for businesses, startups and product ideas." />
      <section className="px-4 pb-24"><div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><ServiceCard key={s.slug} service={s} delay={i*70}/>)}</div></section>
    </>
  );
}