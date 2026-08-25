import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const workSections = [
  {
    id: 'work-rhnk',
    title: 'RHNK',
    image: '/resources/rhnk2.jpg',
    intro:
      'The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR).',
    details:
      'We aim to reduce maternal morbidity and mortality rates, particularly focusing on critical factors like postpartum hemorrhage and unsafe abortion, among other contributors to maternal health challenges. RHNK implements strategic interventions to improve maternal healthcare outcomes in Kenya.',
  },
  {
    id: 'work-rhnk-conference',
    title: 'RHNK AYSRHR Scientific Conference',
    image: '/resources/rhnk2025.jpg',
    intro:
      'The Reproductive Health Network Kenya (RHNK), in partnership with the Ministry of Health - Kenya, convenes an annual Pan-African Adolescent and Youth Sexual and Reproductive Health and Rights (AYSRHR) Scientific Conference.',
    details:
      'Now entering its 10th year, the conference brings together leaders and stakeholders from government, civil society, academia, private sector, development partners, and youth-led organizations to exchange practical solutions, strengthen partnerships, and advance access to quality SRHR services for adolescents and young people across Africa.',
  },
];

export default function Leadership() {
  return (
    <section id="work" className="relative bg-white section-py">
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
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
            RHNK &amp; RHNK Conference
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-forest-700/80 sm:text-lg">
            Key sections of work and impact. Photos can be updated later (up to 5 per section) when final assets are provided.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {workSections.map((section, index) => (
            <motion.article
              key={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-forest-100 bg-cream-50"
            >
              <img
                src={section.image}
                alt={section.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-forest-800">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-700/80 sm:text-base">{section.intro}</p>
                <details className="mt-5 rounded-xl border border-forest-100 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wide-lg text-gold-400">
                    Click More
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-forest-700/80 sm:text-base">{section.details}</p>
                </details>
                <Link
                  to="/resources"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
                >
                  View Related Media
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
