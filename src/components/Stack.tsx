type Group = { label: string; items: string[] };

const GROUPS: Group[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'Go', 'Python', 'Bash', 'SQL'],
  },
  {
    label: 'Runtime / Backend',
    items: ['Bun', 'Node.js', 'Express 5', 'Postgres', 'SurrealDB', 'Zod'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Vite', 'Tailwind', 'Radix UI', 'SWR', 'Zustand'],
  },
  {
    label: 'Infra & Platform',
    items: [
      'Kubernetes',
      'MicroK8s',
      'ArgoCD',
      'Sealed Secrets',
      'MetalLB',
      'Proxmox',
      'Terraform',
      'Ansible',
      'Docker',
      'Cloudflare Tunnel',
    ],
  },
  {
    label: 'Observability',
    items: ['Prometheus', 'Grafana', 'kube-prom-stack', 'prom-client', 'Pino'],
  },
  {
    label: 'AI / LLM',
    items: ['Ollama', 'Gemma 4', 'RAG', 'MCP', 'Claude API', 'Vector search'],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-24 sm:py-32 scroll-mt-24">
      <div className="container max-w-6xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-white/15" />
          Stack
        </div>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter text-balance max-w-3xl">
          The tools I reach for &mdash;
          <span className="text-gradient-accent"> production-tested at home</span>.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map((g) => (
            <div key={g.label} className="glass-panel p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {g.label}
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="text-xs rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
