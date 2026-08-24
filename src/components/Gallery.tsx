import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, type GalleryImage } from '@/data/gallery';

const spanClass: Record<GalleryImage['span'], string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
};

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? prev : (prev + 1) % galleryImages.length,
      ),
    [],
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((p) =>
        p === null ? p : (p - 1 + galleryImages.length) % galleryImages.length,
      ),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, next, prev]);

  return (
    <section className="relative bg-forest-800 section-py">
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
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Moments of{' '}
            <span className="text-gold-400">impact</span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden rounded-xl ${spanClass[img.span]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 right-4 text-left text-xs font-medium text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-900/95 backdrop-blur-md"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute right-6 top-6 text-cream-50 transition-colors hover:text-gold-400"
              aria-label="Close gallery"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-cream-100/20 p-2 text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-4xl px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-cream-100/70">
                {galleryImages[lightboxIndex].caption}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-cream-100/20 p-2 text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
