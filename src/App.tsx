import { useEffect, useState } from 'react';
import { ArrowRight, CalendarCheck2, HeartPulse, Lightbulb, MonitorPlay, X } from 'lucide-react';
import { Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfileHero from '@/components/ProfileHero';
import PageHero from '@/components/PageHero';
import Story from '@/components/Story';
import Impact from '@/components/Impact';
import Leadership from '@/components/Leadership';
import Projects from '@/components/Projects';
import Speaking from '@/components/Speaking';
import Insights from '@/components/Insights';
import Awards from '@/components/Awards';
import Resources from '@/components/Resources';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
                    className="aspect-[16/9] w-full object-cover"
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
                      Click More
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

      <section id="gallery-home" className="bg-white py-20 lg:py-24">
        <div className="container-px">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-badge text-forest-700">
            <span className="h-px w-8 bg-gold-500" />
            Gallery
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium text-forest-800 sm:text-4xl">
            Scrolling moments from the journey
          </h2>

          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
            {homeGallery.slice(0, 10).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Gallery moment ${index + 1}`}
                className="h-40 w-56 shrink-0 snap-start rounded-xl border border-forest-100 object-cover shadow-sm sm:h-44 sm:w-64"
                loading="lazy"
              />
            ))}
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
                  className="aspect-[16/9] w-full object-cover"
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
      <Leadership />
      <Impact />
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
            src="/resources/rhnk2.jpg"
            alt="RHNK work"
            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-sm"
            loading="lazy"
          />
          <article className="rounded-2xl border border-forest-100 bg-white p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold text-forest-800">RHNK</h2>
            <p className="mt-4 text-sm leading-relaxed text-forest-700/80 sm:text-base">
              The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR). We aim to reduce maternal morbidity and mortality rates, particularly focusing on critical factors like postpartum hemorrhage and unsafe abortion, among other contributors to maternal health challenges. RHNK implements strategic interventions to improve maternal healthcare outcomes in Kenya.
            </p>
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

function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="INSIGHTS"
        title="INSIGHTS"
        highlight=""
        description="Leadership can be very lonely. People think you have everything figured out and don't need help, while still expecting you to show up for them."
        ctaLabel="View resources"
        ctaTo="/resources"
      />
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
