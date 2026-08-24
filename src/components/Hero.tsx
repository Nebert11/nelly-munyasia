import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const bgImage = '/assets/hero-background.jpg';
const portraitImage = '/assets/hero-image.png';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[700px] w-full overflow-hidden bg-forest-700 lg:h-screen"
    >
      {/* Background community image with overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-700 via-forest-700/85 to-forest-700/40" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-forest-700 via-transparent to-forest-700/60" /> */}
      </div>

      {/* Content */}
      <div className="container-px relative z-10 flex h-full min-h-[700px] items-center pt-24 pb-0 lg:pt-28">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[45%_55%]">
          {/* Left: Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Location badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-forest-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-badge text-gold-300">
                <MapPin className="h-3 w-3 fill-gold-400 text-gold-400" />
                Nairobi, Kenya
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-cream-50 sm:text-5xl lg:text-[5.5rem]"
            >
              Building a
              <br />
              <span className="text-gold-400">Movement</span>
              <br />
              for Change
            </motion.h1>

            {/* Supporting statement */}
            <motion.p
              variants={item}
              className="mt-6 max-w-md text-base leading-relaxed text-cream-100/75 sm:text-lg"
            >
              Strengthening health systems. Advancing reproductive health and
              rights. Empowering women and communities to thrive.
            </motion.p>

            {/* Signature */}
            <motion.div variants={item} className="mt-8">
              <p className="font-script text-3xl text-cream-50 sm:text-4xl">
                Nelly Munyasia
              </p>
              <div className="mt-2 h-px w-32 bg-gold-400/60" />
              <p className="mt-2 text-xs font-medium uppercase tracking-wide-lg text-cream-100/50">
                Executive Director, RHNK
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link to="/work" className="btn-primary group">
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/story" className="btn-outline group">
                My Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative order-1 flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:top-2 lg:w-[48%] lg:justify-end"
          >
            <div className="relative h-[280px] w-full max-w-sm sm:h-[400px] lg:absolute lg:inset-0 lg:h-auto lg:max-w-none">
              {/* Glow */}
              <div className="absolute inset-x-0 bottom-0 top-[10%] rounded-t-[200px] bg-gold-400/10 blur-3xl" />
              {/* Portrait image */}
              <img
                src={portraitImage}
                alt="Portrait of Nelly Munyasia, public health leader"
                className="relative h-full w-full object-cover object-top mask-fade-bottom rounded-t-[180px] lg:rounded-t-[200px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-badge text-cream-100/40">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-gold-400/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
