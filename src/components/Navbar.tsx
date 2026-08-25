import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/profile' },
  { label: 'My Work', to: '/work' },
  { label: 'Insights', to: '/insights' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

const workSubLinks = [
  { label: 'RHNK', to: '/work#rhnk' },
  { label: 'RHNK Conference', to: '/work#rhnk-conference' },
  { label: 'Nelly TV', to: '/work#nelly-tv' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [desktopWorkOpen, setDesktopWorkOpen] = useState(false);
  const desktopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const openDesktopWorkMenu = () => {
    if (desktopCloseTimer.current) {
      clearTimeout(desktopCloseTimer.current);
      desktopCloseTimer.current = null;
    }
    setDesktopWorkOpen(true);
  };

  const closeDesktopWorkMenuWithDelay = () => {
    if (desktopCloseTimer.current) clearTimeout(desktopCloseTimer.current);
    desktopCloseTimer.current = setTimeout(() => {
      setDesktopWorkOpen(false);
    }, 180);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (desktopCloseTimer.current) clearTimeout(desktopCloseTimer.current);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-lg shadow-forest-900/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-px flex items-center justify-between py-4 lg:py-5">
          <Link to="/" className="group flex flex-col leading-none">
            <span className={`font-serif text-xl font-semibold sm:text-2xl ${scrolled ? 'text-forest-800' : 'text-cream-50'}`}>
              Nelly <span className={scrolled ? 'text-gold-500' : 'text-gold-300'}>Munyasia</span>
            </span>
            <span className={`mt-1 text-[10px] font-medium uppercase tracking-badge ${scrolled ? 'text-forest-700/60' : 'text-cream-100/70'}`}>
              Public Health Leader
            </span>
          </Link>

          <ul className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.to}
                className="relative"
                onMouseEnter={() => {
                  if (link.label === 'My Work') openDesktopWorkMenu();
                }}
                onMouseLeave={() => {
                  if (link.label === 'My Work') closeDesktopWorkMenuWithDelay();
                }}
              >
                {link.label === 'My Work' ? (
                  <>
                    <div className="inline-flex items-center gap-1">
                      <Link
                        to={link.to}
                        className={`text-xs font-semibold uppercase tracking-wide-lg transition-colors ${
                          scrolled ? 'text-forest-700 hover:text-gold-700' : 'text-cream-100 hover:text-gold-300'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setDesktopWorkOpen((v) => !v)}
                        className={`rounded p-0.5 transition-colors ${
                          scrolled ? 'text-forest-700 hover:text-gold-700' : 'text-cream-100 hover:text-gold-300'
                        }`}
                        aria-label="Toggle My Work menu"
                        aria-expanded={desktopWorkOpen}
                        aria-haspopup="menu"
                      >
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopWorkOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {desktopWorkOpen && (
                      <div className="absolute left-0 top-full w-56 pt-2">
                        <div className="rounded-xl border border-forest-100 bg-white p-2 shadow-xl shadow-forest-900/10">
                          {workSubLinks.map((subLink) => (
                            <Link
                              key={subLink.to}
                              to={subLink.to}
                              onClick={() => setDesktopWorkOpen(false)}
                              className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide-lg text-forest-700 transition-colors hover:bg-gold-50 hover:text-gold-700"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`text-xs font-semibold uppercase tracking-wide-lg transition-colors ${
                      scrolled ? 'hover:text-gold-700' : 'hover:text-gold-300'
                    } ${
                      location.pathname === '/contact' && link.to === '/contact'
                        ? scrolled ? 'text-gold-700' : 'text-gold-300'
                        : scrolled ? 'text-forest-700' : 'text-cream-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className={`hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
              scrolled
                ? 'border border-gold-500/50 text-forest-700 hover:bg-gold-400 hover:text-forest-800'
                : 'border border-gold-300/80 text-gold-200 hover:bg-gold-300 hover:text-forest-900'
            }`}
          >
            Let's Connect
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden ${scrolled ? 'text-forest-800' : 'text-cream-50'}`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-cream-50/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container-px flex items-center justify-between py-4">
              <span className="font-serif text-xl font-semibold text-forest-800">
                Nelly <span className="text-gold-600">Munyasia</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-forest-800"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="container-px mt-8 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.to}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {link.label === 'My Work' ? (
                    <div className="border-b border-forest-200 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className="font-serif text-2xl text-forest-800 transition-colors hover:text-gold-700"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileWorkOpen((v) => !v)}
                          className="rounded p-1 text-forest-800 transition-colors hover:text-gold-700"
                          aria-label="Toggle My Work menu"
                          aria-expanded={mobileWorkOpen}
                        >
                          <ChevronDown className={`h-5 w-5 transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileWorkOpen && (
                        <div className="mt-3 space-y-1 pl-2">
                          {workSubLinks.map((subLink) => (
                            <Link
                              key={subLink.to}
                              to={subLink.to}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-md px-2 py-2 text-sm font-semibold uppercase tracking-wide-lg text-forest-700 hover:bg-gold-50 hover:text-gold-700"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-forest-200 py-4 font-serif text-2xl text-forest-800 transition-colors hover:text-gold-700"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-forest-800"
                >
                  Let's Connect
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
