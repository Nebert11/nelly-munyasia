import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { socialLinks } from '@/data/social';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-forest-700 section-py">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-forest-500 blur-3xl" />
      </div>

      <div className="container-px relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              CONTACTS
            </span>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
              CONTACTS
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-100/70 sm:text-lg">
              Off Langata Road • Opposite Galleria
              <br />
              <br />
              info@nellymunyasia.com
              <br />
              +254 202 220 160
            </p>

            {/* Social links */}
            <div className="mt-10 flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 px-5 py-2.5 text-sm font-medium text-cream-100 transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-cream-100/10 bg-forest-800/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide-lg text-cream-100/60"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-cream-100/15 bg-forest-700/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide-lg text-cream-100/60"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-cream-100/15 bg-forest-700/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide-lg text-cream-100/60"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Your organization"
                    className="w-full rounded-lg border border-cream-100/15 bg-forest-700/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide-lg text-cream-100/60"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this about?"
                    className="w-full rounded-lg border border-cream-100/15 bg-forest-700/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide-lg text-cream-100/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me more..."
                    className="w-full resize-none rounded-lg border border-cream-100/15 bg-forest-700/50 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary mt-6 w-full justify-center group"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
