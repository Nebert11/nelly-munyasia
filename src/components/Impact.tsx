import { motion } from 'framer-motion';
import { impactStats } from '@/data/impact';
import { useCountUp, useInViewOnce } from '@/hooks/useCountUp';

function StatCard({
  value,
  suffix,
  label,
  description,
  inView,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  inView: boolean;
  index: number;
}) {
  const count = useCountUp({ end: value, start: inView });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="text-center sm:text-left"
    >
      <div className="font-serif text-5xl font-semibold text-gold-400 lg:text-6xl">
        {count}
        {suffix}
      </div>
      <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide-lg text-cream-50">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-cream-100/60">{description}</p>
    </motion.div>
  );
}

export default function Impact() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section id="impact" className="relative bg-forest-800 section-py">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Impact
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Measured in lives reached and{' '}
            <span className="text-gold-400">systems changed</span>.
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {impactStats.map((stat, i) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              inView={inView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
