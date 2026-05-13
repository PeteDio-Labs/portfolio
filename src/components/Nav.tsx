import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#stack', label: 'Stack' },
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
          'glass-nav mx-auto flex items-center justify-between gap-2 pl-2 pr-2 py-1.5 transition-all duration-500',
          'w-fit max-w-[min(100%,_44rem)]',
          scrolled ? 'shadow-2xl' : ''
        )}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-white/5 transition"
          aria-label="Home"
        >
          <span className="font-mono text-sm tracking-tight">
            <span className="text-muted-foreground">~/</span>
            <span className="text-foreground font-semibold">pedro</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-0.5 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-1 rounded-full bg-white text-black pl-3 pr-2 py-1.5 text-sm font-medium hover:bg-white/90 transition whitespace-nowrap"
        >
          Contact
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}
