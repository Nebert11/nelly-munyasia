import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publications } from '@/data/publications';

export default function Insights() {
  const featured = publications.find((p) => p.featured);
  const rest = publications.filter((p) => !p.featured);

  return (
    <section id="insights" className="relative bg-forest-700 section-py">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              Insights
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
              Ideas, reflections &amp;{' '}
              <span className="text-gold-400">advocacy</span>
            </h2>
          </div>
          <Link
            to="/resources"
            className="link-underline text-sm font-semibold text-gold-400"
          >
            View All Articles
          </Link>
        </motion.div>

        {/* Featured article */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="aspect-[16/10] w-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/50 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide-lg text-cream-100/50">
                <span className="text-gold-400">{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-accent-red" />
                <span>{featured.date}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-cream-50 sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-cream-100/70">
                {featured.excerpt}
              </p>
              <Link
                to="/resources"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
              >
                Read Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        )}

        {/* Smaller articles */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-surface group overflow-hidden hover:border-gold-400/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide-lg text-cream-100/50">
                  <span className="text-gold-400">{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-accent-red" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-cream-50">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/60">
                  {article.excerpt}
                </p>
                <Link
                  to="/resources"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
