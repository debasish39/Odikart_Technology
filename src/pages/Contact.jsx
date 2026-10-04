import React, { useState } from "react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,

          subject: `New Project Enquiry from ${formData.name}`,
          from_name: "Odikart Technology Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          loading: false,
          success: true,
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send enquiry.");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        highlight="useful."
        description="Tell us about your idea, business or product. We'll get back to you with the next steps."
      />

      <section className="px-4 pb-24">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-4 rounded-3xl border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your name
            </label>

            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email address
            </label>

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project type
            </label>

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
            >
              <option value="">Select a project type</option>
              <option value="Website Development">
                Website Development
              </option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Backend & APIs">
                Backend & APIs
              </option>
              <option value="MVP Development">
                MVP Development
              </option>
              <option value="E-commerce">
                E-commerce
              </option>
              <option value="AI Integration">
                AI Integration
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Project details
            </label>

            <textarea
              required
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
            />
          </div>

          {/* Error */}
          {status.error && (
            <div className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {status.error}
            </div>
          )}

          {/* Success */}
          {status.success && (
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-300">
              Thanks! Your enquiry has been sent successfully. We'll get
              back to you soon.
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status.loading}
            className="group relative w-full overflow-hidden rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(59,130,246,.2)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="relative z-10">
              {status.loading ? "Sending..." : "Send Enquiry"}
            </span>

            <span className="pointer-events-none absolute -left-1/2 top-[-100%] h-[300%] w-1/3 rotate-[25deg] bg-gradient-to-r from-transparent via-blue-300/40 to-transparent transition-all duration-700 group-hover:left-[150%]" />
          </button>
        </form>
      </section>
    </>
  );
}