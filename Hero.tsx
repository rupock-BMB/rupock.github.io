import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, links } from "../content";
import { DnaHelix } from "../graphics";
import { LinkedInIcon, OrcidIcon } from "./ui";

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export function CvButton({ variant = "ghost" }: { variant?: "ghost" | "primary" }) {
  const [msg, setMsg] = useState("");
  const href = asset(profile.cv);

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const r = await fetch(href, { method: "HEAD" });
      const type = r.headers.get("content-type") || "";
      if (r.ok && type.includes("pdf")) {
        const a = document.createElement("a");
        a.href = href;
        a.download = "CV_Md_Jobydul_Islam_Rupock.pdf";
        a.click();
        setMsg("");
        return;
      }
    } catch { /* fall through */ }
    setMsg("CV not added yet. Place your PDF at public/documents/CV_Md_Jobydul_Islam_Rupock.pdf and rebuild.");
  };

  return (
    <div>
      <a href={href} onClick={onClick} className={variant === "primary" ? "btn-primary" : "btn-ghost"}>
        <Download className="h-4 w-4" aria-hidden="true" /> Download My CV
      </a>
      {msg && <p role="status" className="text-muted mt-2 max-w-xs text-xs">{msg}</p>}
    </div>
  );
}

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const initials = "MJ";

  return (
    <section id="top" className="dna-bg relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <DnaHelix className="pointer-events-none absolute -right-10 top-10 hidden h-[34rem] opacity-[.14] md:block" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.25fr_1fr] md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{profile.status}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg font-medium text-accent">{profile.headline}</p>
          <p className="text-muted mt-1">{profile.institution}</p>
          <p className="text-muted mt-6 max-w-xl leading-relaxed">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-start gap-3">
            <a href="#research" className="btn-primary">
              Explore My Research <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <CvButton />
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="surface rounded-lg p-2.5 hover:border-teal-500">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Send an email" className="surface rounded-lg p-2.5 hover:border-teal-500">
              <Mail className="h-5 w-5" />
            </a>
            <a href={links.orcid} target="_blank" rel="noopener noreferrer" aria-label="ORCID profile" className="surface rounded-lg p-2.5 hover:border-teal-500">
              <OrcidIcon />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[1.6rem] border border-teal-500/40" aria-hidden="true" />
          <div className="absolute -bottom-5 -right-5 -z-0 h-full w-full rounded-[1.4rem] bg-teal-500/10" aria-hidden="true" />
          <div className="surface relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
            {imgOk ? (
              <img
                src={asset(profile.portrait)}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover object-top"
                width={640} height={800} fetchPriority="high"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-navy-800 text-center">
                <span className="font-serif text-6xl text-teal-400">{initials}</span>
                <span className="px-6 text-xs text-slate-300">
                  Add your photo at <code className="font-mono">public/images/portrait.jpg</code>
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
