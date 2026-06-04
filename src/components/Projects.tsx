import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, X, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';

type Project = (typeof projects)[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card border border-white/[0.08] rounded-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                    project.status === 'Production'
                      ? 'bg-accent/10 border-accent/20 text-accent'
                      : 'bg-white/5 border-white/10 text-muted'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">{project.title}</h3>
              </div>
              <button onClick={onClose} className="text-muted hover:text-white transition-colors mt-1">
                <X size={20} />
              </button>
            </div>

            <p className="text-muted leading-relaxed mb-6">{project.longDescription}</p>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-muted/60 tracking-widest uppercase mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <ChevronRight size={14} className="flex-shrink-0 mt-0.5 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-muted font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-muted hover:text-white transition-all"
                >
                  <GitFork size={15} />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-sm text-primary transition-all"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
              {!project.github && !project.demo && (
                <span className="text-xs text-muted/50 font-mono">Internal / Production system — not publicly available</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        className={`group bg-card border border-white/[0.06] hover:border-primary/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.07)] relative ${
          project.featured ? 'ring-1 ring-primary/10' : ''
        }`}
        whileHover={{ y: -3 }}
        onClick={() => setShowModal(true)}
      >
        {/* Top line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/50 transition-all duration-300" />

        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-full">
              Featured
            </span>
          </div>
        )}

        <div className="p-6 md:p-7">
          {/* Status badge */}
          <span className={`inline-flex text-[10px] font-mono px-2 py-0.5 rounded-full border mb-4 ${
            project.status === 'Production'
              ? 'bg-accent/8 border-accent/15 text-accent/70'
              : 'bg-white/4 border-white/8 text-muted/50'
          }`}>
            {project.status}
          </span>

          <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-white/90 pr-12">
            {project.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.07] rounded text-[11px] text-muted/70 font-mono">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 text-[11px] text-muted/40 font-mono">+{project.tech.length - 4}</span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors"
              >
                <GitFork size={13} />
                GitHub
              </a>
            ) : (
              <span className="text-xs text-muted/30 font-mono">Private</span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={13} />
                Demo
              </a>
            )}
            <span className="ml-auto text-xs text-muted/40 group-hover:text-primary/60 flex items-center gap-1 transition-colors">
              View details <ChevronRight size={12} />
            </span>
          </div>
        </div>
      </motion.div>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">04 / Projects</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-3">
            Systems I've Built
          </h2>
          <p className="text-muted mt-4 max-w-lg">
            Production systems, not just side projects. Each one is running in the real world.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
