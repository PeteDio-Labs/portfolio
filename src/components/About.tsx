export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 scroll-mt-24">
      <div className="container max-w-5xl">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-12 gap-8 mt-6">
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-balance">
              I build the cockpit, the agents,
              <br />
              <span className="text-gradient-accent">and the runway.</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground text-pretty leading-relaxed">
              <p>
                I&rsquo;m a platform engineer who treats infrastructure as a
                product. My homelab runs MicroK8s, ArgoCD, sealed secrets,
                Prometheus, and Grafana &mdash; the same shape I&rsquo;d
                bring to a real team, just at a personal scale.
              </p>
              <p>
                On top of that lives <strong className="text-foreground">Mission Control</strong>,
                a control plane that dispatches a fleet of local agents
                (Ops, PM, Knowledge, Workstation, Infra, Research, Code-Review,
                Memory) backed by a self-hosted GPU running Gemma 4. The
                agents follow a deterministic step-runner protocol with LLMs
                only where they earn it.
              </p>
              <p>
                I care a lot about <em>fix-the-tool</em> energy &mdash; every
                rough edge in the workflow is a chance to make the platform
                better, not work around it.
              </p>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="glass-card p-6 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Currently
                </div>
                <div className="mt-1 text-sm">
                  Looking for SWE roles &mdash; Platform / SRE / DevOps / AI Infra.
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Based
                </div>
                <div className="mt-1 text-sm">Remote-friendly</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Working on
                </div>
                <div className="mt-1 text-sm">
                  Mission Control MCP demo &mdash; Claude &rarr; MCP &rarr;
                  scaffolded repo &rarr; CI &rarr; ArgoCD &rarr; live URL.
                </div>
              </div>
              <a
                href="#contact"
                className="block text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Say hi &rarr;
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-white/15" />
      {children}
    </div>
  );
}
