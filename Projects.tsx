import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowRight, FileText, X } from "lucide-react";
import { Project, projects } from "../content";
import { ProjectGraphic } from "../graphics";
import { Reveal } from "./ui";

const statusStyle = (k: Project["statusKind"]) => (k === "ongoing" ? "chip chip-warn" : "chip");

function Notices({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4" role="note">
      <p className="flex items-center gap-2 text-sm font-semibold">
        <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden="true" /> Scope and limitations
      </p>
      <ul className="text-muted mt-2 list-disc space-y-1 pl-5 text-sm">
        {items.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </div>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy-950/80 p-3 backdrop-blur-sm md:p-10"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="modal-title"
        className="surface relative my-4 w-full max-w-4xl rounded-2xl outline-none">
        <button onClick={onClose} aria-label="Close project details"
          className="surface absolute right-3 top-3 z-10 rounded-lg p-2 hover:border-teal-500">
          <X className="h-4 w-4" />
        </button>
        <div className="aspect-[5/2] overflow-hidden rounded-t-2xl"><ProjectGraphic kind={p.graphic} /></div>
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap gap-2">
            <span className="chip">{p.badge}</span>
            <span className={statusStyle(p.statusKind)}>{p.status}</span>
          </div>
          <h3 id="modal-title" className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">{p.title}</h3>
          <p className="text-muted mt-4 leading-relaxed">{p.overview}</p>

          <h4 className="mt-8 font-sans text-sm font-semibold uppercase tracking-wider text-accent">Scientific objectives</h4>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            {p.objectives.map((o) => <li key={o}>{o}</li>)}
          </ul>

          <h4 className="mt-8 font-sans text-sm font-semibold uppercase tracking-wider text-accent">Methods and techniques</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.methods.map((m) => <span key={m} className="border-line rounded-full border px-3 py-1 text-xs">{m}</span>)}
          </div>

          {p.datasets && (
            <>
              <h4 className="mt-8 font-sans text-sm font-semibold uppercase tracking-wider text-accent">Datasets analyzed</h4>
              <div className="border-line mt-3 overflow-x-auto rounded-xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-alt"><tr><th className="px-4 py-2.5 font-semibold">Dataset</th><th className="px-4 py-2.5 font-semibold">Research purpose</th></tr></thead>
                  <tbody>
                    {p.datasets.map((d) => (
                      <tr key={d.id} className="border-line border-t">
                        <td className="px-4 py-2.5 font-mono text-xs">{d.id}</td>
                        <td className="px-4 py-2.5">{d.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {p.findings && (
            <>
              <h4 className="mt-8 font-sans text-sm font-semibold uppercase tracking-wider text-accent">{p.findingsTitle}</h4>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
                {p.findings.map((f) => <li key={f}>{f}</li>)}
              </ol>
            </>
          )}

          {p.interpretation && (
            <div className="bg-alt mt-6 rounded-xl p-4 text-sm leading-relaxed">
              <strong>Interpretation. </strong>{p.interpretation}
            </div>
          )}

          {p.planned && (
            <div className="mt-6 rounded-xl border border-dashed border-teal-500/60 p-4">
              <p className="text-sm font-semibold">{p.planned.title}</p>
              <ul className="text-muted mt-2 list-disc space-y-1 pl-5 text-sm">
                {p.planned.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          )}

          <Notices items={p.notices} />

          {p.featured && p.id === "ncr3-ccl4" && (
            <div className="mt-6">
              {p.documentUrl ? (
                <a href={p.documentUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FileText className="h-4 w-4" aria-hidden="true" /> View full research presentation / PDF
                </a>
              ) : (
                <p className="text-muted text-sm">
                  <FileText className="mr-1 inline h-4 w-4" aria-hidden="true" />
                  Full presentation / PDF: not linked yet. Set <code className="font-mono">documentUrl</code> for this project in <code className="font-mono">src/content.ts</code>.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ p, onOpen, large }: { p: Project; onOpen: () => void; large?: boolean }) {
  return (
    <article className={`surface group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-xl ${large ? "md:col-span-2 md:flex-row" : ""}`}>
      <div className={`overflow-hidden ${large ? "md:w-1/2" : "aspect-[5/3]"} ${large ? "aspect-[5/3] md:aspect-auto" : ""}`}>
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"><ProjectGraphic kind={p.graphic} /></div>
      </div>
      <div className={`flex flex-1 flex-col p-6 ${large ? "md:p-9" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-accent">PROJECT {p.num}</span>
          <span className="chip">{p.badge}</span>
        </div>
        <h3 className={`mt-3 font-semibold leading-snug ${large ? "text-xl md:text-2xl" : "text-lg"}`}>{p.title}</h3>
        <p className="text-muted mt-3 line-clamp-4 flex-1 text-sm leading-relaxed">{p.overview}</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className={statusStyle(p.statusKind)}>{p.status}</span>
          <button onClick={onOpen} className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            aria-label={`View project details: ${p.title}`}>
            View Project Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.id} className={i === 0 ? "md:col-span-2" : ""}>
            <Card p={p} large={i === 0} onOpen={() => setOpen(p)} />
          </Reveal>
        ))}
      </div>
      {others.length > 0 && (
        <>
          <h3 className="mt-14 text-xl font-semibold">Additional research involvement</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p) => <Reveal key={p.id}><Card p={p} onOpen={() => setOpen(p)} /></Reveal>)}
          </div>
        </>
      )}
      {open && <Modal p={open} onClose={() => setOpen(null)} />}
    </>
  );
}
