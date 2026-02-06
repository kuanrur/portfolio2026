'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent via-[#C9D0DB] to-[#C9D0DB] pt-32 pb-16 px-8 md:px-16 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl md:text-2xl font-bold leading-tight">
            If these projects sparked a thought, I'd love to hear it.
          </h2>
          <div className="flex flex-wrap gap-2 text-base md:text-lg">
            <a 
              href="mailto:your.email@example.com" 
              className="hover:underline transition-all"
            >
              Email
            </a>
            <span>|</span>
            <a 
              href="https://www.linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="hover:underline transition-all"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
