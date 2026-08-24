import { socialLinks } from '@/data/social';

export default function Footer() {
  return (
    <footer className="border-t border-cream-100/10 bg-forest-900">
      <div className="container-px flex min-h-[72px] flex-col items-center justify-between gap-4 py-4 text-[10px] font-semibold uppercase tracking-wide-lg text-cream-50 sm:flex-row sm:gap-6 sm:py-3">
        <p className="shrink-0 text-center sm:text-left">
          Nelly Munyasia &copy; 2026
        </p>

        <nav aria-label="Social links" className="flex items-center justify-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="rounded-full border border-cream-50/70 px-3 py-2 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="shrink-0 text-center text-cream-50/80 sm:text-right">
          Public Health Leader
        </p>
      </div>
    </footer>
  );
}
