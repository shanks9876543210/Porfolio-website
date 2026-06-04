import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, ChevronDown } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">02 / Experience</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-3">
            Professional Track
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-[47px]" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative pl-20 md:pl-24"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-5 flex items-center justify-center w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full border-2 transition-all duration-300 ${
                  expandedId === exp.id
                    ? 'bg-primary/20 border-primary'
                    : 'bg-card border-white/10'
                }`}>
                  <Briefcase size={16} className={expandedId === exp.id ? 'text-primary' : 'text-muted'} />
                </div>

                {/* Card */}
                <div
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    expandedId === exp.id
                      ? 'border-primary/20 shadow-[0_0_30px_rgba(79,70,229,0.08)]'
                      : 'border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  {/* Top accent line */}
                  {expandedId === exp.id && (
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  )}

                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                            exp.type === 'Full-Time'
                              ? 'bg-accent/10 border-accent/20 text-accent'
                              : 'bg-white/5 border-white/10 text-muted'
                          }`}>
                            {exp.type}
                          </span>
                          <span className="text-muted text-sm font-mono">{exp.period}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>

                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 text-muted mt-1"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>

                    <p className="text-muted text-sm leading-relaxed mt-3">{exp.description}</p>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedId === exp.id ? 'auto' : 0, opacity: expandedId === exp.id ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/[0.06] mt-5">
                        <h4 className="text-xs font-mono text-muted/60 tracking-widest uppercase mb-4">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted">
                              <span className="flex-shrink-0 mt-1.5 w-1 h-1 bg-primary rounded-full" />
                              {ach}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-muted font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
