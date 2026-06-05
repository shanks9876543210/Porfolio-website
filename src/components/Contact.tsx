import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitFork, Link, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raibinay421@gmail.com',
    href: 'mailto:raibinay421@gmail.com',
  },
  {
    icon: GitFork,
    label: 'GitHub',
    value: 'https://github.com/shanks9876543210',
    href: personalInfo.github,
  },
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/binay-rai-3219b3181/',
    href: personalInfo.linkedin,
  },
  // {
  //   icon: Globe,
  //   label: 'Portfolio',
  //   value: personalInfo.website,
  //   href: `https://${personalInfo.website}`,
  // },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '15bac7d1-3919-4e89-8c01-b0a2e8dbdd43',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact: ${form.name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">06 / Contact</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-3">
            Let's Work Together
          </h2>
          <p className="text-muted mt-4 max-w-lg">
          Open to full-time opportunities, freelance projects, and meaningful conversations about technology and software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-muted/60 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-card border border-white/[0.08] focus:border-primary/40 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/40 outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted/60 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-card border border-white/[0.08] focus:border-primary/40 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/40 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted/60 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="w-full bg-card border border-white/[0.08] focus:border-primary/40 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/40 outline-none transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  status === 'success'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                    : status === 'error'
                    ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                    : 'bg-primary hover:bg-primary/90 text-white glow-primary'
                }`}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={16} />Message Sent!</>
                ) : status === 'error' ? (
                  <><AlertCircle size={16} />Failed — Try Again</>
                ) : (
                  <><Send size={16} />Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-4 p-5 bg-card border border-white/[0.06] hover:border-white/[0.12] rounded-xl transition-all duration-200 group"
                whileHover={{ x: 3 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/[0.04] border border-white/[0.08] group-hover:border-primary/20 group-hover:bg-primary/5 rounded-xl flex items-center justify-center transition-all duration-200">
                  <link.icon size={17} className="text-muted group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted/60 font-mono uppercase tracking-wide mb-0.5">{link.label}</p>
                  <p className="text-white text-sm font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
            <div className="p-5 border border-dashed border-white/[0.08] rounded-xl text-center">
              <p className="text-muted/50 text-xs font-mono">Usually responds within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
