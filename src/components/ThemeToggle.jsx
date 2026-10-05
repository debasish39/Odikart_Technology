import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ mobile = false }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  return (
    <button type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      className={`group rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] transition hover:border-blue-400/30 hover:bg-blue-500/10 ${mobile ? "flex w-full items-center justify-between px-4 py-3" : "grid h-10 w-10 place-items-center"}`}>
      {mobile && <span className="text-sm font-semibold">{dark ? "Light mode" : "Dark mode"}</span>}
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/10 text-blue-500 transition group-hover:rotate-12">
        {dark ? <FiSun /> : <FiMoon />}
      </span>
    </button>
  );
}
