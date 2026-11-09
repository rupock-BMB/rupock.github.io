import React from "react";
import { motion } from "framer-motion";
import {
  Dna, BarChart3, HeartPulse, CircleDot, Repeat, Activity, ShieldCheck,
  FlaskConical, Cpu, Atom, Code2, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  dna: Dna, chart: BarChart3, heart: HeartPulse, particle: CircleDot, repeat: Repeat,
  activity: Activity, shield: ShieldCheck, flask: FlaskConical, cpu: Cpu, atom: Atom, code: Code2,
};

export function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const C = iconMap[name] ?? Dna;
  return <C className={className} aria-hidden="true" />;
}

export function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function OrcidIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="currentColor" d="M8.2 7.2h1.5v9.6H8.2zM11.3 7.2h2.6c2.6 0 3.9 1.8 3.9 4.8s-1.3 4.8-3.9 4.8h-2.6zm1.5 1.4v6.8h1c1.7 0 2.5-1.2 2.5-3.4s-.8-3.4-2.5-3.4z" />
      <circle cx="8.95" cy="5.6" r=".95" fill="currentColor" />
    </svg>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id, eyebrow, title, intro, alt = false, children,
}: {
  id: string; eyebrow: string; title: string; intro?: string; alt?: boolean; children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${alt ? "bg-alt" : ""} py-20 md:py-28`} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
          {intro && <p className="text-muted mt-4 max-w-2xl leading-relaxed">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Field({ label, value }: { label: string; value: string }) {
  const pending = value === "To be confirmed";
  return (
    <div className="flex flex-col gap-0.5 border-b border-line py-2.5 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <dt className="text-muted text-sm">{label}</dt>
      <dd className={`text-sm font-medium ${pending ? "italic text-muted" : ""}`}>{value}</dd>
    </div>
  );
}
