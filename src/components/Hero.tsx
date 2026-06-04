import { motion } from 'framer-motion';
import { ArrowRight, Mail, GitFork, MapPin, Download, ChevronDown } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const typewriterText = useTypewriter(personalInfo.titles, 80, 2500);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-10"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          {personalInfo.experience} Professional Experience
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display font-bold text-7xl md:text-[8rem] lg:text-[10rem] leading-none tracking-tight mb-4">
            <span className="gradient-text">BINAY</span>
            <br />
            <span className="gradient-text">RAI</span>
          </h1>
        </motion.div>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <span className="font-mono text-xl text-accent tracking-widest uppercase">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Building scalable backend systems and APIs that power{' '}
          <span className="text-white">real-world business operations.</span>
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted/60 text-sm mb-12"
        >
          <MapPin size={13} />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            onClick={() => handleScroll('projects')}
            className="flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-sm transition-all duration-200 glow-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
            <ArrowRight size={16} />
          </motion.button>

          <motion.button
            onClick={() => handleScroll('contact')}
            className="flex items-center gap-2 px-7 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full font-medium text-sm transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={15} />
            Contact Me
          </motion.button>

          <motion.a
            href="/Binay_Rai_Backend_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 bg-transparent hover:bg-white/5 text-muted hover:text-white border border-white/8 hover:border-white/15 rounded-full font-medium text-sm transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={15} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
            whileHover={{ y: -2 }}
          >
            <GitFork size={16} />
            <span>GitHub</span>
          </motion.a>
          <span className="w-px h-4 bg-white/10" />
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white text-sm transition-colors"
            whileHover={{ y: -2 }}
          >
            LinkedIn
          </motion.a>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-muted/50 text-sm">{personalInfo.website}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/40 hover:text-muted transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ y: 3 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
