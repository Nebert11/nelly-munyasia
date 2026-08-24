import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'My Story', to: '/story' },
  { label: 'Work', to: '/work' },
  { label: 'Impact', to: '/impact' },
  { label: 'Insights', to: '/insights' },
  { label: 'Resources', to: '/resources' },
  { label: 'My Profile', to: '/profile' },
  { label: 'Contact Me', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest-700/90 backdrop-blur-md shadow-lg shadow-forest-900/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-px flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold text-cream-50 sm:text-2xl">
              Nelly <span className="text-gold-400">Munyasia</span>
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-badge text-cream-100/60">
              Public Health Leader
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `link-underline text-sm font-medium transition-colors hover:text-cream-50 ${
                      isActive ? 'text-cream-50' : 'text-cream-100/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2 text-sm font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-400 hover:text-forest-700 lg:inline-flex"
          >
            Let's Connect
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-cream-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-forest-800/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container-px flex items-center justify-between py-4">
              <span className="font-serif text-xl font-semibold text-cream-50">
                Nelly <span className="text-gold-400">Munyasia</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream-50"
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
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-cream-100/10 py-4 font-serif text-2xl text-cream-100 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </NavLink>
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-forest-700"
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
