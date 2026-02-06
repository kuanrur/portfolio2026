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
  gradient?: string;
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
        {/* Image with Gradient Background */}
        <div 
          className={`flex-1 rounded-3xl ${gradient || 'bg-gray-50'} min-h-[320px] md:min-h-[400px] p-8 md:p-12 flex items-center justify-center`}
        >
          <div className="relative w-full h-full max-h-[280px] md:max-h-[350px]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-3xl font-medium leading-[1.15] mb-4">
              {title}
            </h3>
            {subtitle && (
              <p className="text-lg md:text-xl font-medium mb-4">
                {subtitle}
              </p>
            )}
            <p className="text-sm md:text-base leading-normal text-black/70 mb-8">
              {description}
            </p>
            <div className={`text-sm text-black/60 ${!isComingSoon && 'group-hover:underline group-hover:text-black/80'} transition-all`}>
              {isComingSoon ? 'Coming soon⟶' : 'view project⟶'}
            </div>
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
