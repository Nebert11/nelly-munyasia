import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  ctaLabel,
  ctaTo,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest-800 pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-forest-500/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(31,110,82,0.35),transparent_40%)]" />
      </div>

      <div className="container-px relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
            {title}{' '}
            <span className="text-gold-400">{highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/75 sm:text-lg">
            {description}
          </p>

          {ctaLabel && ctaTo && (
            <Link to={ctaTo} className="btn-primary mt-8 group">
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
