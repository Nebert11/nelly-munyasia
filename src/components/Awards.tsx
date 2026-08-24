import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { awards } from '@/data/awards';

export default function Awards() {
  return (
    <section className="relative bg-white section-py">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Awards &amp; Recognition
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
            Honors that affirm the{' '}
            <span className="text-gold-600">work</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl border border-forest-100 bg-cream-50 p-8 text-center hover:border-gold-300"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/10 text-gold-400 transition-all duration-300 group-hover:bg-gold-400 group-hover:text-forest-700">
                <Award className="h-8 w-8" />
              </div>
              <span className="mt-6 block font-serif text-2xl font-semibold text-gold-400">
                {award.year}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-forest-800">
                {award.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide-lg text-forest-700/55">
                {award.organization}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-forest-700/75">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
