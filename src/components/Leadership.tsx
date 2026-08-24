import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { leadershipAreas } from '@/data/leadership';

export default function Leadership() {
  return (
    <section id="work" className="relative bg-forest-700 section-py">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            MY WORK
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            RHNK
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/70 sm:text-lg">
            The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR). We aim to reduce maternal morbidity and mortality rates, particularly focusing on critical factors like postpartum hemorrhage and unsafe abortion, among other contributors to maternal health challenges. RHNK implements strategic interventions to improve maternal healthcare outcomes in Kenya.
          </p>
          <details className="mt-6 max-w-xl rounded-xl border border-cream-100/10 bg-forest-800/40 p-4 text-sm text-cream-100/75">
            <summary className="cursor-pointer font-semibold text-gold-400">RHNK</summary>
            <p className="mt-3 leading-relaxed">
              The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR). We aim to reduce maternal morbidity and mortality rates, particularly focusing on critical factors like postpartum hemorrhage and unsafe abortion, among other contributors to maternal health challenges. RHNK implements strategic interventions to improve maternal healthcare outcomes in Kenya.
            </p>
          </details>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: 'easeOut' }}
                className="card-surface group p-8 hover:border-gold-400/30 hover:bg-forest-600/60 hover:shadow-xl hover:shadow-forest-900/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-forest-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-5xl font-serif font-medium text-cream-100/10 transition-colors duration-300 group-hover:text-gold-400/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-cream-50">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/60">
                  {area.description}
                </p>
                <div className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide-lg text-gold-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
