import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-white/80 group-hover:text-white transition-colors font-mono">{name}</span>
        <span className="text-xs text-muted font-mono">{level}%</span>
      </div>
      <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #4F46E5, ${level > 85 ? '#06B6D4' : '#7C3AED'})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const categories = Object.entries(skills);

  const categoryColors: Record<string, string> = {
    Languages: '#4F46E5',
    Frameworks: '#7C3AED',
    Databases: '#06B6D4',
    'DevOps & Tools': '#10B981',
    Concepts: '#F59E0B',
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">03 / Skills</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-3">
            Technical Stack
          </h2>
          <p className="text-muted mt-4 max-w-lg">
            Tools and technologies I use to build and ship production backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(([category, skillList], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="p-6 bg-card border border-white/[0.06] hover:border-white/[0.12] rounded-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -2 }}
            >
              {/* Category color line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${categoryColors[category]}, transparent)` }}
              />

              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: categoryColors[category] }}
                />
                <h3 className="text-sm font-medium text-white/60 tracking-wide uppercase font-mono">
                  {category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillList.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 bg-card border border-white/[0.06] rounded-2xl text-center"
        >
          <p className="text-xs font-mono text-muted/50 tracking-widest uppercase mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Nginx', 'Gunicorn', 'JWT', 'OAuth2', 'Webhooks', 'REST', 'JSON', 'CI/CD', 'AWS S3', 'DigitalOcean', 'GitHub Actions', 'pytest', 'Sentry'].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs text-muted/60 hover:text-muted border border-white/[0.05] hover:border-white/[0.10] rounded-lg font-mono transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
