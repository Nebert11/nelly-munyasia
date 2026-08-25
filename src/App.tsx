import { useEffect, useState } from 'react';
import { ArrowRight, CalendarCheck2, ExternalLink, HeartPulse, Lightbulb, MonitorPlay, Quote, X } from 'lucide-react';
import { Link, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfileHero from '@/components/ProfileHero';
import PageHero from '@/components/PageHero';
import Story from '@/components/Story';
import Impact from '@/components/Impact';
import Projects from '@/components/Projects';
import Speaking from '@/components/Speaking';
import Insights from '@/components/Insights';
import Awards from '@/components/Awards';
import Resources from '@/components/Resources';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { publications } from '@/data/publications';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

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

const homeWorkAreas = [
  {
    id: 'rhnk',
    title: 'RHNK',
    description:
      'The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR). We aim to reduce maternal morbidity and mortality rates, with focus on key contributors like postpartum hemorrhage and unsafe abortion while strengthening maternal healthcare outcomes in Kenya.',
    icon: HeartPulse,
    image: '/resources/rhnk2.jpg',
  },
  {
    id: 'rhnk-conference',
    title: 'RHNK AYSRHR Scientific Conference',
    description:
      'In partnership with the Ministry of Health - Kenya, RHNK convenes an annual Pan-African Adolescent and Youth Sexual and Reproductive Health and Rights Scientific Conference. Now entering its 10th year, it brings together government, civil society, academia, private sector, development partners, and youth-led organizations to advance practical, evidence-based action across Africa.',
    icon: CalendarCheck2,
    image: '/resources/rhnk2025.jpg',
  },
];

const homeTvLinks = [
  {
    url: 'https://www.youtube.com/watch?v=KZN6LGPQVYI&t=93s',
    title: 'Ms. Nelly Munyasia, Executive Director, RHNK | RHNK Pan-African Conference 2026',
    duration: '13:06',
  },
  {
    url: 'https://www.youtube.com/watch?v=69S3KRzodMA&t=15s',
    title: 'Powerful Speech by RHNK E.D Nelly Munyasia | Inspiring Student Story',
    duration: '14:44',
  },
];

const homeGallery = [
  '/resources/nelly.jpg',
  '/resources/nelly2.jpg',
  '/resources/nelly3.jpg',
  '/resources/nelly4.jpg',
  '/resources/nelly5.jpg',
  '/resources/rhnk2.jpg',
  '/resources/rhnk2025.jpg',
  '/resources/her-health.jpg',
  '/resources/her-health2.jpg',
  '/resources/Nelly2.png',
];

function HomePage() {
  const [activeTv, setActiveTv] = useState<string | null>(null);

  useEffect(() => {
    if (!activeTv) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveTv(null);
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeTv]);

  return (
    <main>
      <Hero />

      <section id="my-work" className="bg-cream-50 py-20 lg:py-24">
        <div className="container-px">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
              <span className="h-px w-8 bg-gold-500" />
              My Work
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-forest-800 sm:text-4xl lg:text-5xl">
              Professional impact rooted in advocacy, research, and systems change.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {homeWorkAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-forest-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-semibold text-forest-800">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-forest-700/80 sm:text-base">{item.description}</p>
                    <Link
                      to="/work"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-700"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="nelly-tv" className="bg-gold-50 py-20 lg:py-24">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
                <span className="h-px w-8 bg-gold-600" />
                Nelly TV
              </span>
              <h2 className="mt-5 font-serif text-3xl font-medium text-forest-800 sm:text-4xl">Video features</h2>
            </div>
            <MonitorPlay className="h-10 w-10 text-gold-700" aria-hidden="true" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {homeTvLinks.map((video) => {
              const embedUrl = toEmbedUrl(video.url);
              const thumbnailUrl = toThumbnailUrl(video.url);
              if (!embedUrl || !thumbnailUrl) return null;

              return (
                <article
                  key={video.url}
                  className="overflow-hidden rounded-2xl border border-gold-200 bg-white p-3 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTv(`${embedUrl}?autoplay=1&rel=0`)}
                    className="group relative block w-full overflow-hidden rounded-xl"
                    aria-label="Play featured Nelly TV video"
                  >
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-forest-900/28">
                      <span className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-forest-900/40">
                        <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 font-mono text-xs font-semibold text-white">
                      {video.duration}
                    </span>
                  </button>
                  <h3 className="mt-4 px-1 font-serif text-xl font-semibold text-forest-800">{video.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {activeTv && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-900/90 backdrop-blur-sm"
          onClick={() => setActiveTv(null)}
        >
          <div
            className="relative h-[88vh] w-[88vw] max-h-[920px] max-w-[1600px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveTv(null)}
              className="absolute -right-2 -top-10 text-cream-50 transition-colors hover:text-gold-400 sm:right-0"
              aria-label="Close video"
            >
              <X className="h-7 w-7" />
            </button>
            <iframe
              src={activeTv}
              title="Nelly TV pop out player"
              className="h-full w-full rounded-xl border border-cream-100/10"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <section id="gallery-home" className="overflow-hidden bg-white py-20 lg:py-24">
        <div className="container-px">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
            <span className="h-px w-8 bg-gold-500" />
            Gallery
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium text-forest-800 sm:text-4xl">
            Scrolling moments from the journey
          </h2>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex gap-4"
              style={{ width: 'max-content', animation: 'scroll-gallery 30s linear infinite' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'running')}
            >
              {[...homeGallery, ...homeGallery].map((image, index) => (
                <div key={index} className="h-40 w-56 shrink-0 overflow-hidden rounded-xl border border-forest-100 shadow-sm sm:h-44 sm:w-64">
                  <img
                    src={image}
                    alt={`Gallery moment ${(index % homeGallery.length) + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="insights-home" className="bg-forest-700 py-20 lg:py-24">
        <div className="container-px">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              Insights
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
              Thought leadership and featured publications.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[1, 2].map((article) => (
              <article
                key={article}
                className="overflow-hidden rounded-2xl border border-cream-100/15 bg-forest-800/45"
              >
                <img
                  src={article === 1 ? '/resources/nelly2.jpg' : '/resources/nelly3.jpg'}
                  alt={`Featured article ${article}`}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-cream-50">Featured Article {article}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/70 sm:text-base">
                    Placeholder for title, summary and publication details. Final article copy and links will be added next.
                  </p>
                  <Link
                    to="/insights"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
                  >
                    Read More
                    <Lightbulb className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-100 py-16">
        <div className="container-px flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest-800">About Me</h2>
            <p className="mt-2 text-sm text-forest-700/80 sm:text-base">
              Visit my profile for background, story, and downloadable profile materials.
            </p>
          </div>
          <Link to="/profile" className="btn-primary">
            Go to About Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function StoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="MY STORY"
        title="MY"
        highlight="STORY"
        description="I grew up in Bungoma County in a family of three girls. And for a long time, I thought I knew exactly what I wanted to become."
        ctaLabel="Read the full story"
        ctaTo="/story"
      />
      <Story />
    </main>
  );
}

function WorkPage() {
  const [activeTv, setActiveTv] = useState<string | null>(null);

  const tvLinks = [
    {
      url: 'https://www.youtube.com/watch?v=KZN6LGPQVYI&t=93s',
      title: 'Ms. Nelly Munyasia, Executive Director, RHNK | RHNK Pan-African Conference 2026',
      duration: '13:06',
    },
    {
      url: 'https://www.youtube.com/watch?v=69S3KRzodMA&t=15s',
      title: 'Powerful Speech by RHNK E.D Nelly Munyasia | Inspiring Student Story',
      duration: '14:44',
    },
    {
      url: 'https://www.youtube.com/watch?v=N-MjyVdHDQU',
      title: '#RhnkConference2020',
      duration: '3:20',
    },
  ];

  useEffect(() => {
    if (!activeTv) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveTv(null);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeTv]);

  return (
    <main>
      <PageHero
        eyebrow="MY WORK"
        title="MY"
        highlight="WORK"
        description="The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR)."
        ctaLabel="View impact"
        ctaTo="/impact"
      />

      <section id="rhnk" className="scroll-mt-24 bg-cream-50 py-20 lg:py-24">
        <div className="container-px">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
            <span className="h-px w-8 bg-gold-500" />
            RHNK
          </span>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/images/rhnk-launch.jpg"
                alt="RHNK work"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <article className="rounded-2xl border border-forest-100 bg-white p-7 shadow-sm">
              <h2 className="font-serif text-3xl font-semibold text-forest-800">RHNK</h2>
              <p className="mt-4 text-sm leading-relaxed text-forest-700/80 sm:text-base">
                The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR). We aim to reduce maternal morbidity and mortality rates, particularly focusing on critical factors like postpartum hemorrhage and unsafe abortion, among other contributors to maternal health challenges. RHNK implements strategic interventions to improve maternal healthcare outcomes in Kenya.
              </p>
              <a
                href="https://rhnk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-400 hover:text-forest-800"
              >
                Visit RHNK Website
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { url: 'https://www.youtube.com/watch?v=8PAoP7-L9lc', title: 'THE PRIDE OF TOROSEI LOCATION, KAJIADO COUNTY | RHNK in Kajiado', duration: '10:42' },
              { url: 'https://www.youtube.com/watch?v=VoQZ0Dnl0b4', title: 'RHNK and IPPF SRHR Humanitarian Response in Samburu |Video courtesy of BBC Africa news features', duration: '4:36' },
            ].map((video) => {
              const embedUrl = toEmbedUrl(video.url);
              const thumbnailUrl = toThumbnailUrl(video.url);
              if (!embedUrl || !thumbnailUrl) return null;
              return (
                <article key={video.url} className="overflow-hidden rounded-2xl border border-gold-200 bg-white p-3 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveTv(`${embedUrl}?autoplay=1&rel=0`)}
                    className="group relative block w-full overflow-hidden rounded-xl"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-forest-900/28">
                      <span className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-forest-900/40">
                        <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 font-mono text-xs font-semibold text-white">
                      {video.duration}
                    </span>
                  </button>
                  <h3 className="mt-4 px-1 font-serif text-xl font-semibold text-forest-800">{video.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rhnk-conference" className="scroll-mt-24 bg-white py-20 lg:py-24">
        <div className="container-px">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
            <span className="h-px w-8 bg-gold-500" />
            RHNK Conference
          </span>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/resources/rhnk2025.jpg"
                alt="RHNK Conference"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <article className="rounded-2xl border border-forest-100 bg-cream-50 p-7 shadow-sm">
              <h2 className="font-serif text-3xl font-semibold text-forest-800">RHNK AYSRHR Scientific Conference</h2>
              <p className="mt-4 text-sm leading-relaxed text-forest-700/80 sm:text-base">
                The Reproductive Health Network Kenya (RHNK), in partnership with the Ministry of Health - Kenya, convenes an annual Pan-African Adolescent and Youth Sexual and Reproductive Health and Rights (AYSRHR) Scientific Conference now entering its 10th year. This annual gathering brings together leaders and stakeholders from government, civil society, academia, private sector, development partners, and youth-led organizations to share knowledge, strengthen partnerships, and advance access to quality SRHR services.
              </p>
              <a
                href="https://rhnk.org/conference"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-400 hover:text-forest-800"
              >
                Visit Conference Website
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { url: 'https://www.youtube.com/watch?v=q-I1iYGhLPk&t=19s', title: 'RHNK PanAfrican Conference 2026 | Opening Ceremony Highlights', duration: '2:30' },
              { url: 'https://www.youtube.com/watch?v=kIpukvtuV48', title: 'Youth Caravan & Chini ya Mnazi V2 Highlights | RHNKPanAfricanConference2026', duration: '1:46' },
              { url: 'https://www.youtube.com/watch?v=_0hFwZtRoqU', title: 'RHNK Pan-African Conference 2025 Highlights | Voices, Commitments & Change', duration: '1:31' },
              { url: 'https://www.youtube.com/watch?v=s54DIbBSmOg', title: 'YOUTH CARAVAN-On The Road to SRHR Freedom | RHNK Pan-African Conference 2025', duration: '2:01' },
            ].map((video) => {
              const embedUrl = toEmbedUrl(video.url);
              const thumbnailUrl = toThumbnailUrl(video.url);
              if (!embedUrl || !thumbnailUrl) return null;
              return (
                <article key={video.url} className="overflow-hidden rounded-2xl border border-gold-200 bg-white p-3 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveTv(`${embedUrl}?autoplay=1&rel=0`)}
                    className="group relative block w-full overflow-hidden rounded-xl"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-forest-900/28">
                      <span className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-forest-900/40">
                        <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 font-mono text-xs font-semibold text-white">
                      {video.duration}
                    </span>
                  </button>
                  <h3 className="mt-4 px-1 font-serif text-base font-semibold text-forest-800">{video.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="nelly-tv" className="scroll-mt-24 bg-gold-50 py-20 lg:py-24">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
                <span className="h-px w-8 bg-gold-600" />
                Nelly TV
              </span>
              <h2 className="mt-5 font-serif text-3xl font-medium text-forest-800 sm:text-4xl">Video features</h2>
            </div>
            <MonitorPlay className="h-10 w-10 text-gold-700" aria-hidden="true" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {tvLinks.map((video) => {
              const embedUrl = toEmbedUrl(video.url);
              const thumbnailUrl = toThumbnailUrl(video.url);
              if (!embedUrl || !thumbnailUrl) return null;

              return (
                <article key={video.url} className="overflow-hidden rounded-2xl border border-gold-200 bg-white p-3 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveTv(`${embedUrl}?autoplay=1&rel=0`)}
                    className="group relative block w-full overflow-hidden rounded-xl"
                    aria-label="Play Nelly TV video"
                  >
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-forest-900/28">
                      <span className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-forest-900/40">
                        <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 font-mono text-xs font-semibold text-white">
                      {video.duration}
                    </span>
                  </button>
                  <h3 className="mt-4 px-1 font-serif text-xl font-semibold text-forest-800">{video.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {activeTv && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-900/90 backdrop-blur-sm"
          onClick={() => setActiveTv(null)}
        >
          <div
            className="relative h-[88vh] w-[88vw] max-h-[920px] max-w-[1600px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveTv(null)}
              className="absolute -right-2 -top-10 text-cream-50 transition-colors hover:text-gold-400 sm:right-0"
              aria-label="Close video"
            >
              <X className="h-7 w-7" />
            </button>
            <iframe
              src={activeTv}
              title="Nelly TV pop out player"
              className="h-full w-full rounded-xl border border-cream-100/10"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}

function RhnkPage() {
  return (
    <main>
      <PageHero
        eyebrow="MY WORK"
        title="RHNK"
        highlight=""
        description="The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR)."
        ctaLabel="View My Work"
        ctaTo="/work"
      />
      <section className="bg-cream-50 py-20 lg:py-24">
        <div className="container-px grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/rhnk-launch.jpg"
            alt="RHNK work"
            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-sm"
            loading="lazy"
          />
          <article className="rounded-2xl border border-forest-100 bg-white p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold text-forest-800">RHNK</h2>
            <p className="mt-4 text-sm leading-relaxed text-forest-700/80 sm:text-base">
              The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR). We aim to reduce maternal morbidity and mortality rates, particularly focusing on critical factors like postpartum hemorrhage and unsafe abortion, among other contributors to maternal health challenges. RHNK implements strategic interventions to improve maternal healthcare outcomes in Kenya.
            </p>
            <a
              href="https://rhnk.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-400 hover:text-forest-800"
            >
              Visit RHNK Website
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

function RhnkConferencePage() {
  return (
    <main>
      <PageHero
        eyebrow="MY WORK"
        title="RHNK"
        highlight="CONFERENCE"
        description="A Pan-African annual platform advancing adolescent and youth SRHR action through collaboration, evidence, and policy dialogue."
        ctaLabel="View My Work"
        ctaTo="/work"
      />
      <section className="bg-white py-20 lg:py-24">
        <div className="container-px grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <img
            src="/resources/rhnk2025.jpg"
            alt="RHNK Conference"
            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-sm"
            loading="lazy"
          />
          <article className="rounded-2xl border border-forest-100 bg-cream-50 p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold text-forest-800">RHNK AYSRHR Scientific Conference</h2>
            <p className="mt-4 text-sm leading-relaxed text-forest-700/80 sm:text-base">
              The Reproductive Health Network Kenya (RHNK), in partnership with the Ministry of Health - Kenya, convenes an annual Pan-African Adolescent and Youth Sexual and Reproductive Health and Rights (AYSRHR) Scientific Conference now entering its 10th year. This annual gathering brings together leaders and stakeholders from government, civil society, academia, private sector, development partners, and youth-led organizations to share knowledge, strengthen partnerships, and advance access to quality SRHR services.
            </p>
            <a
              href="https://rhnk.org/conference"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-400 hover:text-forest-800"
            >
              Visit Conference Website
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

function NellyTvPage() {
  const [activeTv, setActiveTv] = useState<string | null>(null);

  const tvLinks = [
    {
      url: 'https://www.youtube.com/watch?v=KZN6LGPQVYI&t=93s',
      title: 'Ms. Nelly Munyasia, Executive Director, RHNK | RHNK Pan-African Conference 2026',
      duration: '13:06',
    },
    {
      url: 'https://www.youtube.com/watch?v=69S3KRzodMA&t=15s',
      title: 'Powerful Speech by RHNK E.D Nelly Munyasia | Inspiring Student Story',
      duration: '14:44',
    },
    {
      url: 'https://www.youtube.com/watch?v=N-MjyVdHDQU',
      title: '#RhnkConference2020',
      duration: '3:20',
    },
  ];

  useEffect(() => {
    if (!activeTv) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveTv(null);
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeTv]);

  return (
    <main>
      <PageHero
        eyebrow="NELLY TV"
        title="NELLY"
        highlight="TV"
        description="Featured media highlights and public engagements."
        ctaLabel="View Resources"
        ctaTo="/resources"
      />
      <section className="bg-gold-50 py-20 lg:py-24">
        <div className="container-px grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tvLinks.map((video) => {
            const embedUrl = toEmbedUrl(video.url);
            const thumbnailUrl = toThumbnailUrl(video.url);
            if (!embedUrl || !thumbnailUrl) return null;

            return (
              <article key={video.url} className="overflow-hidden rounded-2xl border border-gold-200 bg-white p-3 shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveTv(`${embedUrl}?autoplay=1&rel=0`)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                  aria-label="Play Nelly TV video"
                >
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-forest-900/28">
                    <span className="inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-forest-900/40">
                      <span className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 font-mono text-xs font-semibold text-white">
                    {video.duration}
                  </span>
                </button>
                <h3 className="mt-4 px-1 font-serif text-xl font-semibold text-forest-800">{video.title}</h3>
              </article>
            );
          })}
        </div>
      </section>

      {activeTv && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-900/90 backdrop-blur-sm"
          onClick={() => setActiveTv(null)}
        >
          <div
            className="relative h-[88vh] w-[88vw] max-h-[920px] max-w-[1600px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveTv(null)}
              className="absolute -right-2 -top-10 text-cream-50 transition-colors hover:text-gold-400 sm:right-0"
              aria-label="Close video"
            >
              <X className="h-7 w-7" />
            </button>
            <iframe
              src={activeTv}
              title="Nelly TV pop out player"
              className="h-full w-full rounded-xl border border-cream-100/10"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}

function ImpactPage() {
  return (
    <main>
      <PageHero
        eyebrow="IMPACT"
        title="Public"
        highlight="Health"
        description="Work in strengthening health systems and improving access to healthcare."
        ctaLabel="Explore resources"
        ctaTo="/resources"
      />
      <Impact />
      <Awards />
    </main>
  );
}

function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = publications.find((p) => p.id === id);

  if (!article) return <Navigate to="/insights" replace />;

  // The 4th paragraph of the first article is a section heading, not body text
  const isHeading = (text: string) =>
    article.id === 'reproductive-health-policy' && text === 'Health Coverage Must Include Reproductive Health';

  return (
    <main>
      <PageHero
        eyebrow={article.category.toUpperCase()}
        title={article.title}
        highlight=""
        description={article.excerpt}
        ctaLabel="Back to Insights"
        ctaTo="/insights"
      />
      <article className="bg-white py-16 lg:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="aspect-[16/7] w-full object-cover object-[center_12%]"
                loading="eager"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide-lg text-forest-700/55">
              <span className="text-gold-600">{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-accent-red" />
              <span>{article.date}</span>
            </div>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl">
              {article.title}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-forest-700/85">
              {article.body?.map((paragraph, i) =>
                isHeading(paragraph) ? (
                  <h2 key={i} className="pt-4 font-serif text-xl font-semibold text-forest-900 sm:text-2xl">
                    {paragraph}
                  </h2>
                ) : (
                  <p key={i}>{paragraph}</p>
                )
              )}
            </div>
            <div className="mt-12 border-t border-forest-100 pt-8">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Insights
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

function InsightsPage() {
  const insightsPhotos = [
    '/resources/nelly2.jpg',
    '/assets/my-story.jpg',
    '/images/IMG_9367.jpg',
    '/images/IMG_5118.jpg',
    '/images/IMG_8608.jpg',
  ];

  const insightsQuotes = [
    'Every girl in Kenya today needs systems that work for her.',
    'Together in solidarity we shall continue transforming the health outcomes for all in Kenya.',
    'A leader. A Health Advocate. A Voice for change.',
    'Gender diverse populations, disability and diverse deserve the best reproductive services.',
  ];

  return (
    <main>
      <PageHero
        eyebrow="INSIGHTS"
        title="INSIGHTS"
        highlight=""
        description="Ideas, reflections & advocacy"
        ctaLabel="View resources"
        ctaTo="/resources"
      />

      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="container-px">
          {/* Photo strip with gold dashed border */}
          <div className="rounded-2xl border-2 border-dashed border-gold-400/60 p-3 sm:p-4">
            <div className="flex gap-2 sm:gap-3">
              {insightsPhotos.map((src, i) => (
                <div key={src} className="flex-1 overflow-hidden rounded-xl">
                  <img
                    src={src}
                    alt={`Nelly Munyasia speaking engagement ${i + 1}`}
                    className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-56 lg:h-64"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quotes grid */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {insightsQuotes.map((quote, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800">
                  <Quote className="h-5 w-5 text-gold-400" />
                </div>
                <p className="text-sm font-semibold leading-relaxed text-forest-800 sm:text-base">{quote}</p>
                <div className="mt-auto h-0.5 w-12 bg-gold-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Insights />
      <Speaking />
    </main>
  );
}

function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="RESOURCES"
        title="RESOURCES"
        highlight=""
        description="Videos"
        ctaLabel="Contact me"
        ctaTo="/contact"
      />
      <Resources />
      <Gallery />
    </main>
  );
}

function ProfilePage() {
  return (
    <main>
      <ProfileHero />
      <Projects />
      <Story />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT ME"
        title="CONTACT"
        highlight="ME"
        description="Off Langata Road • Opposite Galleria"
      />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/rhnk" element={<RhnkPage />} />
          <Route path="/rhnk-conference" element={<RhnkConferencePage />} />
          <Route path="/nelly-tv" element={<NellyTvPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<ArticlePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
