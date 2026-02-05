'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GitRoll() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 md:py-12 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8 md:gap-16"
          >
            <div className="flex flex-col items-center gap-4 text-center max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-medium leading-tight">
                AI-Powered Recruiting and Conversational Portfolio Experience
              </h1>
              <p className="text-base md:text-lg text-center">
                GitRoll | Design the systems behind an agentic AI recruiter and the conversational digital portfolio.
              </p>
            </div>

            {/* Hero Image */}
            <div className="w-full bg-gradient-to-br from-[#FF7518] to-[#99460E] rounded-3xl p-10 md:p-20 border border-gray-200">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/gitroll/hero-mockup.svg"
                  alt="GitRoll Platform"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-3xl">
              <MetaBlock title="Role" content="UX Designer" />
              <MetaBlock title="Type" content="Intern + UX Design + UI Design + Research" />
              <MetaBlock title="Duration" content="2025 June – 2025 September" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black/20 mx-6 md:mx-12 lg:mx-28" />

      {/* TL;DR Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="TL;DR" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mt-12 md:mt-16">
            <ContentBlock title="Problem" content="Both recruiters and candidates spend excessive time searching, managing connections, and interpreting fragmented information." />
            <ContentBlock title="Solution" content="GitRoll introduces AI Profiles and a conversational portfolio, agent AI, powered by a shared recruiting process system." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mt-8 md:mt-12">
            <ContentBlock title="My role" content="Led UX and system design across AI profile, website, and recruiter workflows." />
            <ContentBlock title="Impact" content="A unified system that turns profiles and portfolios into interactive, queryable interfaces instead of static documents." />
          </div>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Problem space" />
          
          <div className="flex flex-col gap-10 mt-12 md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
              <ContentBlock 
                title="Past" 
                content="Recruiting and professional networking are still built around static artifacts(resumes, LinkedIn profiles, and traditional portfolios) that require heavy manual searching and interpretation." 
              />
              <ContentBlock 
                title="Now" 
                content={`At the same time, AI is changing how people expect to access information:\n• Less browsing, more asking\n• Less managing connections, more meaningful signals\n• Less static content, more dynamic, contextual responses`}
              />
              <ContentBlock 
                title="Future" 
                content="GitRoll explores what a future AI-native recruiting experience could look like for both recruiters and candidates." 
              />
            </div>
            
            {/* Timeline Image */}
            <div className="w-full mt-8">
              <Image
                src="/images/gitroll/timeline.png"
                alt="Problem space timeline"
                width={2254}
                height={1780}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Information architecture" />
          
          <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 mt-12 md:mt-16">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-base md:text-lg text-center font-medium">Inputs</h3>
              <div className="bg-[#D9D9D9] border border-black rounded-lg p-6 space-y-3">
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">LinkedIn (required)</p>
                </div>
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">GitHub / Resume (optional)</p>
                  <p className="text-sm md:text-base">Job Description</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h3 className="text-base md:text-lg text-center font-medium">AI Intelligence Layer</h3>
              <div className="bg-[#D9D9D9] border border-black rounded-lg p-6 space-y-3">
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">Structured candidate profile</p>
                </div>
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">Project & evidence memory</p>
                </div>
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">Retrieval + rubric-based reasoning</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h3 className="text-base md:text-lg text-center font-medium">Outputs</h3>
              <div className="bg-[#D9D9D9] border border-black rounded-lg p-6 space-y-3">
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">Conversational AI Profile</p>
                </div>
                <div className="bg-white rounded px-4 py-2">
                  <p className="text-sm md:text-base">Recruiter workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28 bg-[#E4E4E7] rounded-[32px] mx-6 md:mx-12 lg:mx-28 my-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-12 md:mb-16">Reflection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-4">
              <h3 className="text-base font-black tracking-wider uppercase">efficiency &gt; novelty</h3>
              <p className="text-base leading-relaxed">
                While working on GitRoll, I had to constantly ask myself: is this feature making the AI smarter, or is it actually saving people time? I learned that in recruiting and professional evaluation, intelligence alone isn't the bottleneck. The real friction is time spent searching, managing connections, and mentally stitching information together. This insight pushed me to prioritize system-level efficiency over feature richness, fewer steps, fewer tools, and faster access to meaningful signals.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base font-black tracking-wider uppercase">Designing AI With Restraint</h3>
              <p className="text-base leading-relaxed">
                One of the hardest parts of this project was deciding what the AI should not do. It was tempting to automate decisions, generate scores, or make strong recommendations. But I learned that in high-stakes contexts like hiring, over-automation can reduce trust rather than increase it. Designing GitRoll meant intentionally keeping humans in the loop and using AI to support interpretation, not replace judgment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold"
    >
      {title}
    </motion.h2>
  );
}

function MetaBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm md:text-base font-black tracking-wider uppercase">{title}</h3>
      <p className="text-sm md:text-base">{content}</p>
    </div>
  );
}

function ContentBlock({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-4"
    >
      <h3 className="text-sm md:text-base font-black tracking-wider uppercase">{title}</h3>
      <p className="text-sm md:text-base whitespace-pre-line">{content}</p>
    </motion.div>
  );
}
