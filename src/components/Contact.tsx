import { Github, Mail, Rss, Linkedin } from 'lucide-react';

const LINKS = [
  {
    label: 'Email',
    sub: 'pedelgadillo@gmail.com',
    href: 'mailto:pedelgadillo@gmail.com',
    Icon: Mail,
  },
  {
    label: 'GitHub',
    sub: 'PeteDio-Labs',
    href: 'https://github.com/PeteDio-Labs',
    Icon: Github,
  },
  {
    label: 'Blog',
    sub: 'blog.pdlab.dev',
    href: 'https://blog.pdlab.dev',
    Icon: Rss,
  },
  {
    label: 'LinkedIn',
    sub: 'in/pedelgadillo',
    href: 'https://www.linkedin.com/in/pedelgadillo',
    Icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 scroll-mt-24">
      <div className="container max-w-4xl">
        <div className="glass-card ring-glow p-8 sm:p-12 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </div>
          <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tighter text-balance">
            <span className="text-gradient">Let&rsquo;s build</span>{' '}
            <span className="text-gradient-accent">something real.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            I&rsquo;m open to Platform Engineering, SRE, DevOps, and AI Infra
            roles &mdash; or any team that takes building cockpit-grade tools
            seriously. Reach out, I reply fast.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {LINKS.map(({ label, sub, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-panel glass-card-hover flex items-center gap-4 p-5 text-left"
              >
                <span className="grid place-items-center h-10 w-10 rounded-full bg-white/5 border border-white/10">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block text-xs text-muted-foreground">
                    {sub}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
