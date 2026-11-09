import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<string>(() => document.documentElement.getAttribute("data-theme") || "light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-line shadow-sm" : ""}`}
      style={{ background: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : undefined }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8" aria-label="Primary">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          M. J. I. Rupock
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`text-sm transition-colors hover:text-accent ${active === n.id ? "text-accent font-semibold" : "text-muted"}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="surface rounded-lg p-2 transition-colors hover:border-teal-500">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"} className="surface rounded-lg p-2 lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-nav" className="surface mx-4 mb-3 rounded-xl p-3 lg:hidden">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm hover:bg-alt">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
