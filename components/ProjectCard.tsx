'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  href?: string;
  isComingSoon?: boolean;
  gradient: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  imageSrc,
  href,
  isComingSoon,
  gradient
}: ProjectCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={!isComingSoon ? { y: -8 } : {}}
      className="group"
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-20">
        {/* Image */}
        <div 
          className={`flex-1 rounded-3xl ${gradient} border border-gray-200 shadow-sm p-10 flex items-center justify-center overflow-hidden`}
        >
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between gap-6 md:gap-12">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl md:text-4xl font-medium leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-lg md:text-xl font-medium">
                {subtitle}
              </p>
            )}
            <p className="text-base leading-relaxed text-black/80">
              {description}
            </p>
          </div>
          
          <div className={`text-base ${!isComingSoon && 'group-hover:underline'} transition-all`}>
            {isComingSoon ? 'Coming soon⟶' : 'view project⟶'}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (isComingSoon || !href) {
    return content;
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
