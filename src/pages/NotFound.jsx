import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center px-4 pt-28">
      <div className="text-center">
        <div className="text-7xl font-black text-blue-400">404</div>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950">Back Home</Link>
      </div>
    </section>
  );
}