import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { speakingTopics } from '@/data/speaking';

const speakingImage =
  '/assets/speaking.jpg';
const speakingImage2 =
  '/resources/nelly2.jpg';

export default function Speaking() {
  return (
    <section className="relative overflow-hidden bg-gold-50 section-py">
      <div className="container-px">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={speakingImage}
                alt="Woman delivering a speech at a conference podium"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating second image */}
            <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:block lg:w-56">
              <img
                src={speakingImage2}
                alt="Woman in traditional African attire at a public speaking event"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              Speaking
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
              Speaking for{' '}
              <span className="text-gold-600">Change</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-forest-700/80 sm:text-lg">
              Available for keynotes, panel discussions, and convenings that
              advance the conversation on health, rights, and equity.
            </p>

            {/* Topics */}
            <div className="mt-8 flex flex-wrap gap-3">
              {speakingTopics.map((topic) => (
                <span
                  key={topic.id}
                  className="rounded-full border border-forest-200 bg-white px-4 py-2 text-xs font-medium text-forest-700/80 transition-colors hover:border-gold-400/50 hover:text-gold-700"
                >
                  {topic.label}
                </span>
              ))}
            </div>

            <Link to="/contact" className="btn-primary mt-10 group">
              Invite Me to Speak
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
