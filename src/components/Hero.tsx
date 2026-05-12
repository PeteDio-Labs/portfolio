import { ArrowDownRight, Github, Mail, Rss } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-6"
    >
      <div className="container max-w-5xl">
        <div
          className="inline-flex items-center gap-2 mb-8 glass-chip px-3 py-1.5 text-xs text-muted-foreground animate-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for platform / SRE / AI infra roles
        </div>

        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter leading-[0.95] text-balance animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <span className="text-gradient">Pedro Delgadillo</span>
          <br />
          <span className="text-gradient-accent">builds agentic devops.</span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground text-pretty animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          Platform engineer running a production-grade homelab — Kubernetes,
          ArgoCD, Proxmox, a fleet of local LLM-assisted agents, and a
          control plane that ties it all together. I ship infrastructure the
          way product teams ship features.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#work"
            className="ring-glow inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            See the work <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/PeteDio-Labs"
            target="_blank"
            rel="noreferrer"
            className="glass-chip inline-flex items-center gap-2 px-5 py-3 text-sm hover:border-white/20 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://blog.pdlab.dev"
            target="_blank"
            rel="noreferrer"
            className="glass-chip inline-flex items-center gap-2 px-5 py-3 text-sm hover:border-white/20 transition"
          >
            <Rss className="h-4 w-4" /> Blog
          </a>
          <a
            href="mailto:pedelgadillo@gmail.com"
            className="glass-chip inline-flex items-center gap-2 px-5 py-3 text-sm hover:border-white/20 transition"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>

        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: '10+', v: 'production agents' },
    { k: '2', v: 'K8s clusters' },
    { k: '5', v: 'physical hosts' },
    { k: '∞', v: 'self-hosted' },
  ];
  return (
    <div
      className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up"
      style={{ animationDelay: '320ms' }}
    >
      {items.map((s) => (
        <div key={s.v} className="glass-panel px-5 py-4">
          <div className="text-3xl font-semibold tracking-tight">{s.k}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
            {s.v}
          </div>
        </div>
      ))}
    </div>
  );
}
