import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">05 / Recognition</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-3">
            Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 bg-card border border-white/[0.06] hover:border-accent/20 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] relative overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-500" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-white/[0.04] border border-white/[0.08] rounded-2xl flex items-center justify-center text-2xl group-hover:border-accent/20 transition-colors">
                  {ach.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-white mb-0.5">{ach.title}</h3>
                  <p className="text-primary text-sm mb-3 font-medium">{ach.subtitle}</p>
                  <p className="text-muted text-sm leading-relaxed mb-5">{ach.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {ach.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-accent/5 border border-accent/10 rounded-full text-xs text-accent/70 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
