'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#C9D0DB] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            If these projects sparked a thought, I'd love to hear it.
          </h2>
          <div className="flex flex-wrap gap-2 text-lg md:text-xl">
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
