import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { publications } from '@/data/publications';

export default function Insights() {
  return (
    <section id="insights" className="relative bg-white section-py">
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
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
              Ideas, reflections &amp;{' '}
              <span className="text-gold-600">advocacy</span>
            </h2>
          </div>
          <Link
            to="/resources"
            className="link-underline text-sm font-semibold text-gold-600"
          >
            View All Articles
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {publications.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-forest-100 bg-cream-50 hover:border-gold-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-[center_50%] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide-lg text-forest-700/55">
                  <span className="text-gold-600">{article.category}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-forest-800">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-700/75">
                  {article.excerpt}
                </p>
                <Link
                  to={`/insights/${article.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="container-px mt-8 items-start justify-between sm:items-center">
        <img src="/images/quote2.jpg" alt="" className="rounded-2xl" />
      </div>
    </section>
  );
}
