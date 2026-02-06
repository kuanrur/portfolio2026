'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { HeroHeading, SectionHeading, BodyLarge } from '@/components/Typography';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 px-8 md:px-16 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0"
            >
              <Image
                src="/images/home/profile.png"
                alt="Kuan"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex flex-col gap-8"
            >
              <h1 className="text-lg md:text-xl font-bold">
                Hi, I am Kuan
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                I design systems for complex human and organizational problems.
              </h2>
              <BodyLarge className="text-black/80">
                From cross cultural collaboration to city scale social systems, I focus on 
                sensemaking, structure, and decision making under complexity.
              </BodyLarge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-transparent via-[#C9D0DB] to-transparent py-16 md:py-24"
      >
        <div className="text-center">
          <p className="text-xs md:text-sm font-black tracking-[0.32em] uppercase text-[#9CA3AF]">
            Sensemaking → Decisions → Design
          </p>
        </div>
      </motion.section>

      {/* Recent Works */}
      <section className="py-20 md:py-32 px-8 md:px-16 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-16 md:mb-24"
          >
            Recent works
          </motion.h2>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* Project 1: Cross-cultural Collaboration */}
            <ProjectCard
              title="Designing trust and decision-making in cross-cultural product teams"
              description="Designing a collaboration rhythm layer for Slack to reduce expectation mismatch in distributed teams."
              imageSrc="/images/home/project-remote-collab.png"
              href="/work/remote-collaboration"
              gradient="bg-gradient-to-b from-[#C9D0DB] to-[#B8C2D1]"
            />

            {/* Project 2: GitRoll */}
            <ProjectCard
              title="AI-Powered Recruiting and Conversational Portfolio Experience"
              subtitle="GitRoll"
              description="Designing the systems behind an agentic AI recruiter and the conversational digital portfolio."
              imageSrc="/images/home/project-gitroll.png"
              href="/work/gitroll"
              gradient="bg-gradient-to-b from-[#C9D0DB] to-[#FF7518]"
            />

            {/* Project 3: SF Homeless */}
            <ProjectCard
              title="Understanding Homelessness Through Data and Human Stories"
              subtitle="SF homeless issue"
              description="Exploring the intersection of data, policy, and lived experience to understand homelessness in San Francisco."
              imageSrc="/images/home/project-sf-homeless.png"
              href="/work/sf-homelessness"
              gradient="bg-gradient-to-b from-[#6B7F99] to-[#52658C]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
