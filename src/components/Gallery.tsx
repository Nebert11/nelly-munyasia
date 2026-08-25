import { motion } from 'framer-motion';

const scrollImages = [
  { src: '/resources/nelly.jpg',       alt: 'Community health outreach' },
  { src: '/resources/nelly2.jpg',      alt: 'Speaking engagement on health policy' },
  { src: '/resources/nelly3.jpg',      alt: 'Community care and child health' },
  { src: '/resources/nelly4.jpg',      alt: 'Women in health leadership' },
  { src: '/resources/nelly5.jpg',      alt: 'Health education workshop' },
  { src: '/resources/rhnk2.jpg',       alt: 'RHNK programme work' },
  { src: '/resources/rhnk2025.jpg',    alt: 'RHNK 2025 conference' },
  { src: '/resources/her-health.jpg',  alt: 'Her Health launch' },
  { src: '/resources/her-health2.jpg', alt: 'Her Health event' },
  { src: '/images/JSS_8442.jpg',       alt: 'RHNK field activity' },
  { src: '/images/IMG_9363.jpg',       alt: 'Nelly Munyasia speaking' },
  { src: '/images/IMG_9365.jpg',       alt: 'Nelly Munyasia speaking' },
];

// Duplicate for seamless infinite loop
const track = [...scrollImages, ...scrollImages];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-gold-50 section-py">
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
            Gallery
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
            Moments of{' '}
            <span className="text-gold-600">impact</span>
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed auto-scrolling strip */}
      <div className="mt-14 overflow-hidden">
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'scroll-gallery 35s linear infinite',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'running')
          }
        >
          {track.map((img, i) => (
            <div
              key={i}
              className="h-56 w-72 shrink-0 overflow-hidden rounded-xl shadow-md sm:h-64 sm:w-80"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover object-[center_10%] transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
