import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="font-display font-bold text-sm gradient-text-primary">BR</span>
          <span className="text-muted/30 text-xs">·</span>
          <span className="text-muted/50 text-xs">{personalInfo.name}</span>
        </motion.div>

        <motion.p
          className="text-muted/40 text-xs font-mono"
        >
          © {year} Binay Rai. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="text-muted/40 hover:text-muted text-xs transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-muted/40 hover:text-muted text-xs transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}
            className="text-muted/40 hover:text-muted text-xs transition-colors">Email</a>
        </motion.div>
      </div>
    </footer>
  );
}
