import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const impactVideos = [
  {
    url: 'https://www.youtube.com/watch?v=7rzHwHeox8I',
    title: 'Nena Na Binti Empowering Communities',
    duration: '10:29',
  },
  {
    url: 'https://www.youtube.com/watch?v=2K-HBBrev1A&t=28s',
    title: "'I paid a heavy price for saving someone's life' | Story of Salim Mohamed, RHNK Provider",
    duration: '3:27',
  },
  {
    url: 'https://www.youtube.com/watch?v=N-MjyVdHDQU',
    title: 'Regional Advocacy in Action',
    duration: '3:20',
  },
];

const impactHighlights = [
  {
    title: 'Community-centered programming',
    description:
      'Interventions are designed with healthcare providers, women, and youth to ensure practical adoption and long-term impact.',
  },
  {
    title: 'Policy and systems engagement',
    description:
      'RHNK contributes to policy dialogue and implementation support that strengthens SRHR service delivery pathways.',
  },
  {
    title: 'Regional partnership building',
    description:
      'Cross-sector collaboration connects government, civil society, academia, and youth-led groups around measurable action.',
  },
];

function toEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get('v');
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
}

function toThumbnailUrl(url: string) {
  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get('v');
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return null;
  }
}

export default function Impact() {
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
      <section id="impact" className="relative bg-gold-50 section-py">
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
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
            Stories, partnerships, and progress in motion.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {impactVideos.map((video) => {
            const embedUrl = toEmbedUrl(video.url);
            const thumbnail = toThumbnailUrl(video.url);
            if (!embedUrl) return null;
            if (!thumbnail) return null;

            return (
              <div key={video.url} className="overflow-hidden rounded-2xl border border-gold-200 bg-white p-3 shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveVideo(`${embedUrl}?autoplay=1&rel=0`)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                  aria-label="Play impact video"
                >
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-forest-900/35">
                    <span className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-forest-900/40">
                      <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 font-mono text-xs font-semibold text-white">
                    {video.duration}
                  </span>
                </button>
                <h3 className="mt-4 px-1 font-serif text-xl font-semibold text-forest-800">{video.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {impactHighlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-gold-200 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-forest-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-700/80 sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-900/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <div
            className="relative h-[88vh] w-[88vw] max-h-[920px] max-w-[1600px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              className="absolute -right-2 -top-10 text-cream-50 transition-colors hover:text-gold-400 sm:right-0"
              aria-label="Close impact video"
            >
              <X className="h-7 w-7" />
            </button>
            <iframe
              src={activeVideo}
              title="Impact pop out player"
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
