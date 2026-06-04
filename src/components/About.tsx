import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../data/portfolio';

const techStack = ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Python', 'PostGIS'];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-1"
    >
      <span className="font-display font-bold text-4xl gradient-text-primary">{value}</span>
      <span className="text-muted text-sm">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">01 / About</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-3">
            Engineering at Scale
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            {[
              
              "I'm a Backend Developer focused on building reliable and scalable backend systems that solve real business problems. My primary expertise lies in Python, Django, Django REST Framework, PostgreSQL, Redis, and backend architecture.",

              "At Fasto Nepal, I contribute to the development of a production quick commerce platform, working on core systems such as order management, inventory operations, vendor workflows, rider management, promotions, and third-party integrations. These systems support real operational processes and customer transactions every day.",

              "I enjoy designing backend solutions that are maintainable, scalable, and easy to operate. From database design and API development to workflow automation and production debugging, I like understanding how different parts of a system work together to support business operations.",

              "Outside of software development, I am a national-level chess player. Chess has helped me develop analytical thinking, structured problem-solving, and the ability to evaluate complex situations — skills that translate naturally into backend engineering and system design."

              
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-muted leading-relaxed text-base"
              >
                {text}
              </motion.p>
            ))}

            {/* Tech chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm text-muted hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats + Card */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 p-8 bg-card rounded-2xl border border-white/[0.06]"
            >
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i} />
              ))}
            </motion.div>

            {/* Philosophy card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="p-6 bg-card rounded-2xl border border-white/[0.06] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <span className="font-mono text-xs text-primary/60 tracking-widest uppercase block mb-3">
                Engineering Philosophy
              </span>
              <p className="text-white/80 text-sm leading-relaxed italic">
                "Build systems that work when you're not looking. Design for failure,
                optimize for readability, and always think about the operator who has
                to debug this at 2 AM."
              </p>
            </motion.div>

            {/* Current status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-white/[0.06]"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Available for opportunities</p>
                <p className="text-muted text-xs mt-0.5">Open to full-time roles and freelance projects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
