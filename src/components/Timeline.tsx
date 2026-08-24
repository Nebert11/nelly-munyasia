import { motion } from 'framer-motion';
import { timeline } from '@/data/timeline';

export default function Timeline() {
  return (
    <section className="relative bg-forest-700 section-py">
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
            Advocacy &amp; Impact Journey
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Milestones along the{' '}
            <span className="text-gold-400">way</span>
          </h2>
        </motion.div>

        <div className="mt-16 max-w-3xl">
          <div className="relative pl-8 sm:pl-12">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent" />

            {timeline.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="relative pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center sm:-left-[49px]">
                  <span className="h-3 w-3 rounded-full bg-gold-400 ring-4 ring-forest-700" />
                </div>

                <span className="font-serif text-2xl font-semibold text-gold-400">
                  {milestone.year}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-cream-50">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/60 sm:text-base">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
