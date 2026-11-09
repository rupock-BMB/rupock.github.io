import React from "react";
import { ArrowUp, Award, CheckCircle2, ExternalLink, FileText, GraduationCap, Languages, Mail, Microscope, Users, FlaskConical } from "lucide-react";
import Header from "./components/Header";
import Hero, { CvButton } from "./components/Hero";
import Projects from "./components/Projects";
import { Field, Icon, LinkedInIcon, OrcidIcon, Reveal, Section } from "./components/ui";
import {
  about, aboutHighlights, achievements, education, interests, labExperience,
  links, profile, publications, skills,
} from "./content";

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-teal-500 focus:px-3 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="Scientific background and motivation">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <Reveal className="text-muted space-y-5 leading-relaxed">
              {about.map((t) => <p key={t}>{t}</p>)}
            </Reveal>
            <Reveal delay={0.1}>
              <div className="surface rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">At a glance</p>
                <ul className="mt-4 space-y-3">
                  {aboutHighlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="interests" alt eyebrow="Research interests" title="Where my curiosity is focused"
          intro="Interests span laboratory genetics, transcriptomics and computational structural biology.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 0.06}>
                <div className="surface h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="bg-alt inline-flex rounded-lg p-2.5 text-accent"><Icon name={it.icon} /></span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{it.title}</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="research" eyebrow="Featured research" title="Research projects"
          intro="Completed computational work, ongoing laboratory research and planned work are labelled separately. Open any card for objectives, methods and limitations.">
          <Projects />
        </Section>

        <Section id="experience" alt eyebrow="Experience" title="Research Experience and Laboratory Involvement">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="surface rounded-2xl p-7">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-teal-500/15 p-3 text-accent"><Microscope className="h-6 w-6" /></span>
                  <h3 className="text-2xl font-semibold">{labExperience.name}</h3>
                </div>
                <p className="text-muted mt-4 leading-relaxed">{labExperience.intro}</p>
                <dl className="mt-5">
                  {labExperience.fields.map((f) => <Field key={f.label} label={f.label} value={f.value} />)}
                </dl>
                <a href={labExperience.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                  Visit SA Lab Website <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="grid gap-4">
              {labExperience.pillars.map((p, i) => (
                <div key={p.title} className="surface flex gap-4 rounded-2xl p-5">
                  <span className="h-fit rounded-lg bg-alt p-2.5 text-accent">
                    {i === 0 ? <FlaskConical className="h-5 w-5" /> : i === 1 ? <Users className="h-5 w-5" /> : <Microscope className="h-5 w-5" />}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold">{p.title}</h4>
                    <p className="text-muted mt-1 text-sm">{p.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </Section>

        <Section id="skills" eyebrow="Competencies" title="Technical and laboratory skills"
          intro="Listed as areas of practice, without proficiency scores.">
          <div className="grid gap-6 lg:grid-cols-3">
            {skills.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="surface h-full rounded-2xl p-6">
                  <span className="inline-flex rounded-lg bg-alt p-2.5 text-accent"><Icon name={g.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{g.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" alt eyebrow="Education" title="Academic timeline">
          <ol className="border-line relative ml-3 space-y-10 border-l pl-8">
            {education.map((e) => (
              <Reveal key={e.level}>
                <li className="relative">
                  <span className="absolute -left-[2.6rem] top-1 grid h-8 w-8 place-items-center rounded-full bg-teal-500 text-black">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="surface rounded-2xl p-6">
                    <h3 className="text-xl font-semibold">{e.level}</h3>
                    <p className="mt-1 font-medium text-accent">{e.field}</p>
                    {e.institution !== "To be confirmed" && <p className="text-muted text-sm">{e.institution}</p>}
                    {e.detail && <p className="text-muted text-sm">{e.detail}</p>}
                    <dl className="mt-4">{e.fields.map((f) => <Field key={f.label} label={f.label} value={f.value} />)}</dl>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="achievements" eyebrow="Achievements" title="Scientific presentations and credentials">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="surface h-full rounded-2xl p-6">
                <Award className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{achievements.poster.title}</h3>
                <span className="chip mt-2">Poster presentation</span>
                <p className="text-muted mt-3 text-sm">{achievements.poster.text}</p>
                <dl className="mt-3">{achievements.poster.fields.map((f) => <Field key={f.label} {...f} />)}</dl>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="surface h-full rounded-2xl p-6">
                <Icon name="code" className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{achievements.python.title}</h3>
                <p className="text-muted mt-3 text-sm">{achievements.python.text}</p>
                <dl className="mt-3">{achievements.python.fields.map((f) => <Field key={f.label} {...f} />)}</dl>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="surface h-full rounded-2xl p-6">
                <Languages className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">Language proficiency</h3>
                <div className="border-line mt-4 flex items-center justify-between rounded-xl border p-4">
                  <span className="font-medium">{achievements.german.language}</span>
                  <span className="chip">{achievements.german.level}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="publications" alt eyebrow="Publications" title="Publications and scientific contributions">
          <Reveal>
            <div className="surface rounded-2xl p-7">
              <div className="flex flex-wrap gap-2">
                {publications.categories.map((c) => <span key={c} className="border-line rounded-full border px-3 py-1 text-xs">{c}</span>)}
              </div>
              {publications.entries.length === 0 ? (
                <p className="text-muted mt-6 flex items-center gap-3">
                  <FileText className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /> {publications.empty}
                </p>
              ) : (
                <ul className="mt-6 space-y-4">
                  {publications.entries.map((p) => (
                    <li key={p.citation} className="text-sm">
                      <span className="chip mr-2">{p.category}</span>
                      {p.url ? <a className="underline" href={p.url} target="_blank" rel="noopener noreferrer">{p.citation}</a> : p.citation}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's connect"
          intro="I welcome academic collaboration, research communication and professional networking with supervisors, researchers and fellow scientists.">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: <Mail className="h-5 w-5" />, label: "Email", text: links.email, href: `mailto:${links.email}` },
              { icon: <LinkedInIcon />, label: "LinkedIn", text: "md-jobydul-islam-rupock", href: links.linkedin },
              { icon: <OrcidIcon />, label: "ORCID", text: "0009-0002-8285-5880", href: links.orcid },
              { icon: <Microscope className="h-5 w-5" />, label: "Research laboratory", text: "SA Lab website", href: links.saLab },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <a href={c.href} {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="surface flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-teal-500">
                  <span className="rounded-lg bg-alt p-3 text-accent">{c.icon}</span>
                  <span>
                    <span className="text-muted block text-xs uppercase tracking-wider">{c.label}</span>
                    <span className="font-medium break-all">{c.text}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap items-start gap-4">
            <a href={`mailto:${links.email}`} className="btn-primary"><Mail className="h-4 w-4" aria-hidden="true" /> Send an email</a>
            <CvButton />
          </Reveal>
        </Section>
      </main>

      <footer className="border-line border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted md:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. {profile.department}, SUST.</p>
          <a href="#top" className="flex items-center gap-1.5 hover:text-accent"><ArrowUp className="h-4 w-4" aria-hidden="true" /> Back to top</a>
        </div>
      </footer>
    </>
  );
}
