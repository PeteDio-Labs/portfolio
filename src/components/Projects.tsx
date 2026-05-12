import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  href?: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Mission Control',
    subtitle: 'Homelab control plane',
    description:
      'TypeScript + Express v5 backend + React/Vite web that orchestrates a fleet of agents over a Postgres-backed task queue. Discord notifications, ArgoCD integration, severity-based auto-investigation. Approval surface lives in MC Web only.',
    stack: ['Bun', 'Express 5', 'React', 'Postgres', 'Prometheus', 'ArgoCD'],
    href: 'https://github.com/PeteDio-Labs',
    accent: 'from-fuchsia-500/40 via-violet-500/30 to-blue-500/20',
  },
  {
    title: 'PeteDio Agents',
    subtitle: 'Deterministic step-runner fleet',
    description:
      'Ten production agents (Ops, PM, Knowledge, Workstation, Infra, Research, Code-Review, Memory, Blog) sharing a @petedio/shared runtime. LLM only where it earns it — Gemma 4 on a dedicated 3060 Ti — everything else is deterministic plans + approval gates.',
    stack: ['Bun', 'TypeScript', 'Ollama', 'Gemma 4', 'SurrealDB'],
    href: 'https://github.com/PeteDio-Labs',
    accent: 'from-sky-500/40 via-cyan-400/30 to-emerald-500/20',
  },
  {
    title: 'PeteDio Blog',
    subtitle: 'AI-assisted devblog at blog.pdlab.dev',
    description:
      'A blog with a Writer/Reviewer/Context multi-agent pipeline behind it. Drafts go through a quality gate before publish. Same content lives in a RAG index that the research-agent reads from.',
    stack: ['Bun', 'Postgres', 'Ollama', 'RAG'],
    href: 'https://blog.pdlab.dev',
    accent: 'from-amber-400/40 via-orange-500/30 to-rose-500/20',
  },
  {
    title: 'Homelab Platform',
    subtitle: 'MicroK8s + Proxmox + GitOps',
    description:
      'Two-node MicroK8s on Proxmox with ArgoCD app-of-apps, Sealed Secrets, MetalLB, kube-prom-stack, Grafana, Authentik SSO via LDAP, Cloudflare tunnels. Everything in code: Ansible for hosts, Terraform for Proxmox, ArgoCD for clusters.',
    stack: ['MicroK8s', 'Proxmox', 'ArgoCD', 'Terraform', 'Ansible', 'Authentik'],
    accent: 'from-indigo-500/40 via-blue-500/30 to-teal-500/20',
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 sm:py-32 scroll-mt-24">
      <div className="container max-w-6xl">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-white/15" />
              Work
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter text-balance">
              A small fleet that <span className="text-gradient-accent">runs itself</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Real systems running in my homelab right now &mdash; not slideware.
            Each one is observed, GitOps-managed, and behind sealed secrets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <a
      href={project.href ?? '#'}
      target={project.href ? '_blank' : undefined}
      rel={project.href ? 'noreferrer' : undefined}
      className="block group"
    >
      <article
        ref={ref}
        onMouseMove={onMove}
        className="glass-card glass-card-hover relative overflow-hidden p-6 sm:p-8 h-full"
      >
        <div
          aria-hidden="true"
          className={cn(
            'absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-50 bg-gradient-to-br',
            project.accent
          )}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {project.subtitle}
            </p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
        </div>

        <p className="relative mt-5 text-sm text-muted-foreground leading-relaxed text-pretty">
          {project.description}
        </p>

        <div className="relative mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] tracking-wide rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </article>
    </a>
  );
}
