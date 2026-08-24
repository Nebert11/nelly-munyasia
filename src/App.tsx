import { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfileHero from '@/components/ProfileHero';
import PageHero from '@/components/PageHero';
import Story from '@/components/Story';
import Impact from '@/components/Impact';
import Leadership from '@/components/Leadership';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Speaking from '@/components/Speaking';
import Insights from '@/components/Insights';
import Awards from '@/components/Awards';
import Resources from '@/components/Resources';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-forest-700">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main>
      <Hero />

      <section className="bg-forest-800 py-20 lg:py-24">
        <div className="container-px grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/assets/my-story.jpg"
              alt="Nelly Munyasia"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              MY STORY
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium text-cream-50 sm:text-4xl">
              I grew up in Bungoma County in a family of three girls.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
              And for a long time, I thought I knew exactly what I wanted to become. A nurse.
            </p>
            <Link to="/story" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
              View Full Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest-700 py-20 lg:py-24">
        <div className="container-px grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              MY WORK
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium text-cream-50 sm:text-4xl">
              RHNK
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
              The Reproductive Health Network Kenya (RHNK) champions Comprehensive Sexual and Reproductive Health and Rights (SRHR).
            </p>
            <Link to="/work" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
              View Full Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/resources/nelly2.jpg"
              alt="Nelly Munyasia at work"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-20 lg:py-24">
        <div className="container-px grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/resources/nelly3.jpg"
              alt="Insights preview"
              className="aspect-[16/10] w-full object-cover object-[center_9%]"
              loading="lazy"
            />
          </div>
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              INSIGHTS
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium text-cream-50 sm:text-4xl">
              Leadership can be very lonely.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-100/70 sm:text-lg">
              People think you have everything figured out and don't need help, while still expecting you to show up for them.
            </p>
            <Link to="/insights" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
              View Full Insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest-700 py-20 lg:py-24">
        <div className="container-px">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            RESOURCES
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium text-cream-50 sm:text-4xl">
            Videos
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-cream-100/10 bg-forest-800/40">
            <div className="relative aspect-[16/8]">
              {isVideoPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/KZN6LGPQVYI?autoplay=1&rel=0"
                  title="Featured resources video"
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="group/video absolute inset-0 block w-full cursor-pointer text-left"
                  aria-label="Play featured resources video"
                >
                  <img
                    src="https://img.youtube.com/vi/KZN6LGPQVYI/hqdefault.jpg"
                    alt="Resources video preview"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/video:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-forest-900/35 transition-colors group-hover/video:bg-forest-900/20">
                    <PlayCircle className="h-14 w-14 text-gold-400 transition-transform duration-300 group-hover/video:scale-110" />
                  </div>
                </button>
              )}
            </div>
            <div className="p-6">
              <p className="text-base leading-relaxed text-cream-100/70">
                Preview one video here, and open the full resources page for all videos, documents and links.
              </p>
              <Link to="/resources" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
                View Full Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-800 py-20 lg:py-24">
        <div className="container-px">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400" />
            GALLERY
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium text-cream-50 sm:text-4xl">
            Moments of impact
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/resources/nelly.jpg"
              alt="Gallery preview one"
              className="aspect-[4/3] w-full rounded-xl object-cover object-[center_20%]"
              loading="lazy"
            />
            <img
              src="/resources/nelly2.jpg"
              alt="Gallery preview two"
              className="aspect-[4/3] w-full rounded-xl object-cover object-[center_20%]"
              loading="lazy"
            />
            <img
              src="/resources/nelly3.jpg"
              alt="Gallery preview three"
              className="aspect-[4/3] w-full rounded-xl object-cover object-[center_10%]"
              loading="lazy"
            />
          </div>
          <Link to="/resources" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
            View Full Gallery
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
      <Timeline />
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
