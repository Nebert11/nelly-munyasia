import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, PlayCircle, X } from 'lucide-react';
import { resources } from '@/data/resources';

function getYoutubeThumbnail(url?: string) {
  if (!url || !url.includes('youtube.com')) return null;

  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get('v');
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return null;
  }
}

function getYoutubeEmbedUrl(url?: string) {
  if (!url || !url.includes('youtube.com')) return null;

  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get('v');
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  } catch {
    return null;
  }
}

function isRawUrl(value: string) {
  return value.startsWith('http://') || value.startsWith('https://');
}

export default function Resources() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const closeVideo = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideo, closeVideo]);

  return (
    <>
      <section id="resources" className="relative bg-forest-700 section-py">
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
            Resources
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            A library of work, words &amp;{' '}
            <span className="text-gold-400">research</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            // Videos should show a preview with a play affordance instead of file-style actions.
            (() => {
              const thumbnail = getYoutubeThumbnail(resource.url);
              const embedUrl = getYoutubeEmbedUrl(resource.url);
              const isVideo = resource.type === 'Videos' && !!thumbnail && !!embedUrl;

              return (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="card-surface group flex flex-col p-6 hover:border-gold-400/30"
            >
              {isVideo && (
                <div className="group/video relative mb-5 overflow-hidden rounded-xl">
                  <img
                    src={thumbnail}
                    alt={resource.title}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover/video:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-900/35" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(embedUrl)}
                      className="inline-flex items-center justify-center rounded-full bg-gold-400 p-2 text-forest-700 shadow-lg shadow-forest-900/40 transition-transform duration-300 hover:scale-110"
                      aria-label="Play video"
                    >
                      <PlayCircle className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-forest-700">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-cream-100/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide-lg text-cream-100/60">
                  {resource.type}
                </span>
              </div>

              {!isRawUrl(resource.title) && (
                <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-cream-50">
                  {resource.title}
                </h3>
              )}
              {!isRawUrl(resource.description) && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-100/60">
                  {resource.description}
                </p>
              )}

              {!isVideo && resource.url && (
                <div className="mt-5">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-gold-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide-lg text-gold-400 transition-colors hover:bg-gold-400 hover:text-forest-700"
                  >
                    Read More
                  </a>
                </div>
              )}

              {resource.date && (
                <div className="mt-5 border-t border-cream-100/10 pt-4">
                  <span className="text-xs text-cream-100/40">{resource.date}</span>
                </div>
              )}
            </motion.div>
              );
            })()
          ))}
        </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-900/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <div
            className="relative h-[80vh] w-[80vw] max-h-[900px] max-w-[1400px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              className="absolute -right-2 -top-10 text-cream-50 transition-colors hover:text-gold-400 sm:right-0"
              aria-label="Close video"
            >
              <X className="h-7 w-7" />
            </button>
            <iframe
              src={activeVideo}
              title="Resource video player"
              className="h-full w-full rounded-xl border border-cream-100/10"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
