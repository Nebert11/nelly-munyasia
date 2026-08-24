import { motion } from 'framer-motion';

const backgroundImage = '/assets/hero-background.jpg';
const portraitImage = '/assets/hero-image.png';

export default function ProfileHero() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-[#064434] lg:h-[min(100vh,1020px)] lg:min-h-[720px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#064434_0%,rgba(6,68,52,0.98)_30%,rgba(6,68,52,0.68)_57%,rgba(6,68,52,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(207,218,101,0.34),transparent_41%)]" />
        <div className="absolute inset-y-0 right-0 w-[26%] bg-gradient-to-l from-[#d5dd74]/55 to-transparent blur-2xl" />
      </div>

      <div className="container-px relative z-10 flex min-h-[720px] items-center lg:h-full">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-20 max-w-[560px] pb-10 pt-28 lg:pb-0 lg:pt-12"
        >
          <h1 className="leading-[0.84] text-cream-50">
            <span className="block font-sans text-[clamp(3.5rem,7.4vw,6.6rem)] font-black uppercase tracking-[-0.04em]">
              Nelly
            </span>
            <span className="mt-2 block font-sans text-[clamp(3.4rem,7.2vw,6.4rem)] font-light tracking-[-0.055em]">
              Munyasia
            </span>
          </h1>
          <div className="mt-12">
            <p className="font-sans text-[clamp(1.7rem,3.2vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.035em] text-cream-50">
              A Public Health Leader
            </p>
            <p className="mt-3 max-w-[470px] font-sans text-[clamp(1.35rem,2.5vw,2.45rem)] font-light leading-[1.04] tracking-[-0.02em] text-cream-50/95">
              Driven by People, Purpose
              <br />
              and Possibility.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="absolute bottom-0 right-[-22%] h-[78%] w-[83%] sm:right-[-10%] sm:w-[70%] lg:right-[-4%] lg:h-[calc(100%+50px)] lg:w-[58%]"
        >
          <img
            src={portraitImage}
            alt="Nelly Munyasia, public health leader"
            className="h-full w-full object-cover object-[center_18%]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}