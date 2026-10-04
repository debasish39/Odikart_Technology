import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    ["/services", "Services"],
    ["/work", "Work"],
    ["/about", "About"],
    ["/process", "Process"],
    ["/faq", "FAQ"],
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold">Odikart Technology</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Modern websites, apps, APIs, e-commerce and AI-powered digital solutions.</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold">Explore</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {links.map(([path, label]) => <Link key={path} to={path} className="hover:text-cyan-300">{label}</Link>)}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">Build something useful.</div>
          <Link to="/contact" className="mt-3 inline-block text-sm text-cyan-300 hover:text-white">Contact Odikart Technology →</Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-5 text-xs text-slate-500">© {new Date().getFullYear()} Odikart Technology. All rights reserved.</div>
    </footer>
  );
}