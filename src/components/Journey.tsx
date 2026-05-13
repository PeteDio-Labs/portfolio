import { GraduationCap, Code2, Apple, Sparkles } from 'lucide-react';
import type { ComponentType } from 'react';

type Milestone = {
  when: string;
  title: string;
  where: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  accent: string;
};

const MILESTONES: Milestone[] = [
  {
    when: 'Start',
    title: 'Coding bootcamps',
    where: 'Self-driven',
    description:
      'Got my hands dirty fast — full-stack fundamentals, web apps shipped on personal time, the habit of building before reading the docs.',
    Icon: Code2,
    accent: 'from-emerald-400/40 to-teal-500/20',
  },
  {
    when: 'Foundation',
    title: 'Web Development',
    where: 'College',
    description:
      'Formalized the craft — HTML/CSS/JS deeply, real backend fundamentals, the shape of a production web app. Left with a portfolio of shipped projects and the confidence to take on contract work.',
    Icon: GraduationCap,
    accent: 'from-sky-400/40 to-indigo-500/20',
  },
  {
    when: '~3 yrs',
    title: 'Full-stack contractor',
    where: 'Apple',
    description:
      'Shipped production features end-to-end inside Apple — React + TypeScript on the front, Node services on the back, working alongside teams that care deeply about polish, performance, and accessibility.',
    Icon: Apple,
    accent: 'from-fuchsia-400/40 to-violet-500/20',
  },
  {
    when: 'Today',
    title: 'AI-powered platform engineering',
    where: 'PeteDio Labs',
    description:
      'Claude as a daily collaborator across every layer — designing services, writing infra, reviewing diffs, scaffolding agents. Five years of muscle memory steering the AI; the AI handling the typing.',
    Icon: Sparkles,
    accent: 'from-amber-400/40 to-orange-500/20',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-24 sm:py-32 scroll-mt-24">
      <div className="container max-w-6xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-white/15" />
          Journey
        </div>

        <div className="mt-4 grid md:grid-cols-12 gap-6 items-end">
          <h2 className="md:col-span-7 text-4xl sm:text-5xl font-semibold tracking-tighter text-balance">
            Five years full-stack,
            <br />
            <span className="text-gradient-accent">now AI-augmented.</span>
          </h2>
          <p className="md:col-span-5 text-muted-foreground text-pretty leading-relaxed">
            Bootcamps to college to contracting at Apple &mdash; the path that
            shaped how I ship. Today every layer of that stack runs faster
            with Claude in the loop, but the judgment, taste, and ownership
            still come from those five years.
          </p>
        </div>

        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2"
          />

          <ol className="space-y-6 md:space-y-10">
            {MILESTONES.map((m, i) => (
              <MilestoneRow key={m.title} milestone={m} index={i} />
            ))}
          </ol>
        </div>

        <div className="mt-16 glass-card p-8 sm:p-10 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-50 bg-gradient-to-br from-violet-500/40 via-fuchsia-500/30 to-amber-400/20"
          />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                How I work with Claude
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
                I drive. Claude handles the keystrokes.
              </h3>
              <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
                Five years of full-stack work means I know what good looks
                like &mdash; clean APIs, accessible UI, sensible deploys.
                Claude lets me hold the whole stack in one head at once:
                scaffolding a Bun service, wiring it into Postgres, drafting
                the K8s manifests, generating the ArgoCD app, and shipping
                the GitHub Actions workflow &mdash; all in a single session,
                all reviewed before merge.
              </p>
            </div>
            <ul className="md:col-span-5 grid grid-cols-2 gap-3 text-sm">
              {[
                { k: 'Design', v: 'Me &rarr; Claude' },
                { k: 'Implementation', v: 'Pair-coded' },
                { k: 'Review', v: 'Me, always' },
                { k: 'Ownership', v: '100% mine' },
              ].map((p) => (
                <li
                  key={p.k}
                  className="glass-panel px-4 py-3"
                  dangerouslySetInnerHTML={{
                    __html: `<div class="text-xs uppercase tracking-widest text-muted-foreground">${p.k}</div><div class="mt-1 text-sm">${p.v}</div>`,
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneRow({
  milestone: m,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const left = index % 2 === 0;
  const { Icon } = m;
  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-10 items-center">
      <div
        aria-hidden="true"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full glass items-center justify-center"
      >
        <span className="h-2 w-2 rounded-full bg-white/80" />
      </div>

      <div className={left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}>
        <article className="glass-card glass-card-hover p-6 sm:p-7 relative overflow-hidden">
          <div
            aria-hidden="true"
            className={`absolute -top-20 ${
              left ? '-right-20' : '-left-20'
            } h-44 w-44 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${m.accent}`}
          />
          <div
            className={`relative flex items-start gap-4 ${
              left ? 'md:flex-row-reverse md:text-right' : ''
            }`}
          >
            <span className="shrink-0 grid place-items-center h-10 w-10 rounded-2xl bg-white/5 border border-white/10">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {m.when} &middot; {m.where}
              </div>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                {m.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    </li>
  );
}
