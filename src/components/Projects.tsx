import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="profile" className="relative bg-forest-800 section-py">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            ABOUT ME
          </span>
          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_1fr]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/resources/nelly.jpg"
                alt="Nelly Munyasia"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-cream-100/80 sm:text-lg">
              <p>Nelly Munyasia is an accomplished public health professional and Executive Director of the Reproductive Health Network Kenya (RHNK).</p>
              <p>Trained initially in nursing at KMTC Machakos, Nelly later developed a passion for community health, advocacy and health systems strengthening. She joined RHNK in 2012, rose to Programme Manager in 2017 and became Executive Director in 2018.</p>
              <p>Under her leadership, RHNK has significantly expanded its programmes, partnerships and network of healthcare providers while strengthening its role in reproductive-health advocacy and policy engagement. A participant in the 2022 WomenLift Health Leadership Programme, Nelly is passionate about mentorship, institutional growth, women's leadership and improving access to reproductive-health services for underserved communities.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
