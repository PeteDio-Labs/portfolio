import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          'glass-nav mx-auto flex items-center justify-between gap-4 px-4 py-2 transition-all duration-500',
          'max-w-xl',
          scrolled ? 'shadow-2xl' : ''
        )}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 px-2 py-1">
          <span
            aria-hidden="true"
            className="inline-block h-6 w-6 rounded-full"
            style={{
              background:
                'conic-gradient(from 200deg, #7c5cff, #3a8dff, #22d3ee, #7c5cff)',
              boxShadow: '0 0 12px rgba(124, 92, 255, 0.6)',
            }}
          />
          <span className="text-sm font-semibold tracking-tight">pedro</span>
        </a>
        <ul className="hidden sm:flex items-center gap-1 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition"
        >
          Get in touch
        </a>
        <a
          href="#contact"
          className="sm:hidden inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
