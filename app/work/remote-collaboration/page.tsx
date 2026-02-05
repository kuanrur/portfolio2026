'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RemoteCollaboration() {
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
                Designing trust and decision making in cross cultural product teams
              </h1>
              <p className="text-base md:text-lg text-center">
                Designing a collaboration rhythm layer for Slack to reduce expectation mismatch in distributed teams.
              </p>
            </div>

            {/* Hero Image */}
            <div className="w-full bg-[#C9D0DB] rounded-2xl p-5 md:p-10">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/remote-collaboration/hero.svg"
                  alt="Remote Collaboration Research"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-3xl">
              <MetaBlock title="Role" content="Individual thesis project" />
              <MetaBlock title="Type" content="Research + Product Strategy + UX Design" />
              <MetaBlock title="Duration" content="2025 Oct – present" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black/20 mx-6 md:mx-12 lg:mx-28" />

      {/* Why This Problem Matters */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Why This Problem Matters" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mt-12 md:mt-16 max-w-5xl mx-auto">
            <ContentBlock 
              title="The Symptoms" 
              content="When response expectations and working rhythms are left implicit, teams start to experience meeting fatigue, information overload, and more dangerously, erosion of trust. Many conflicts are not caused by what people say, but by when they expect a response." 
            />
            <ContentBlock 
              title="The Shift" 
              content="Distributed, cross-cultural teams are no longer an exception, they are becoming the default operating model for product teams. Founders hire across time zones for speed and cost, and teams collaborate without ever meeting in person. Remote and cross-cultural collaboration is now the default." 
            />
          </div>

          {/* The Tool Gap */}
          <div className="mt-20 md:mt-32">
            <div className="flex flex-col items-center gap-8">
              <div className="text-center max-w-2xl">
                <h3 className="text-sm md:text-base font-black tracking-wider uppercase mb-4">The tool gap</h3>
                <p className="text-sm md:text-base">
                  Today's tools optimize for workflow, not for collaboration psychology.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-5xl">
                {/* Tool Logos - Tight Floating Cluster */}
                <div className="relative mx-auto lg:mx-0 flex-shrink-0" style={{ width: 'clamp(180px, 22vw, 280px)', height: 'clamp(160px, 18vw, 200px)' }}>
                  {/* Notion - Top Center (on top) */}
                  <div 
                    className="absolute bg-white rounded-2xl shadow-lg flex items-center justify-center p-3"
                    style={{
                      width: 'clamp(70px, 8vw, 85px)',
                      height: 'clamp(70px, 8vw, 85px)',
                      top: '0%',
                      left: '60%',
                      transform: 'translateX(-50%)',
                      zIndex: 30
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/logos/notion.png"
                        alt="Notion"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Slack - Bottom Left (tucked under) */}
                  <div 
                    className="absolute bg-white rounded-2xl shadow-lg flex items-center justify-center p-3"
                    style={{
                      width: 'clamp(70px, 8vw, 85px)',
                      height: 'clamp(70px, 8vw, 85px)',
                      bottom: '12%',
                      left: '14%',
                      zIndex: 10
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/logos/slack.png"
                        alt="Slack"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Zoom - Bottom Right (lower position) */}
                  <div 
                    className="absolute bg-white rounded-2xl shadow-lg flex items-center justify-center p-3"
                    style={{
                      width: 'clamp(70px, 8vw, 85px)',
                      height: 'clamp(70px, 8vw, 85px)',
                      bottom: '0%',
                      right: '10%',
                      zIndex: 10
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/logos/zoom.png"
                        alt="Zoom"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">✓</span>
                      <p className="text-base font-bold text-green-700">Communication</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">✓</span>
                      <p className="text-base font-bold text-green-700">Documentation</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">✓</span>
                      <p className="text-base font-bold text-green-700">Coordination</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">✗</span>
                      <p className="text-base font-bold text-red-700">Trust Building</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">✗</span>
                      <p className="text-base font-bold text-red-700">Emotional Context</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">✗</span>
                      <p className="text-base font-bold text-red-700">How Decisions Actually Happen</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-center italic mt-8">
                | They help teams work, but not necessarily work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HMW Statement */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28 bg-gradient-to-b from-transparent via-[#C9D0DB] to-transparent my-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold leading-tight"
          >
            What exactly breaks in cross-cultural collaboration?
          </motion.h2>
        </div>
      </section>

      {/* Research & Methods */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Research & Methods" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16">
            <ResearchCard
              image="/images/remote-collaboration/stakeholder-interview.svg"
              title="Stakeholder interview"
              description="4 in-depth interviews(2 startup founders, 2 remote engineers across US / India / Taiwan)"
            />

            <div className="flex flex-col gap-4">
              <div className="bg-[#F4F3F4] rounded-2xl p-8 flex items-center justify-center">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/remote-collaboration/problem-research.png"
                    alt="Problem research"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-lg md:text-xl font-semibold">Problem research</h3>
                <p className="text-base">
                  Literature review & frameworks(Erin Meyer, Hofstede, remote collaboration studies)
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[#F4F3F4] rounded-2xl p-8 flex items-center justify-center">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/remote-collaboration/research-prototype.svg"
                    alt="Research prototype"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-lg md:text-xl font-semibold">Research prototype</h3>
                <p className="text-base">
                  I created a lightweight research prototype to explore how teams interpret tone, urgency, and response expectations in everyday collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Concreting */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Problem Concreting" />
          <p className="text-base md:text-lg mt-4 text-center mb-12 md:mb-16">
            Across different teams and contexts, the same breakdowns kept appearing.
          </p>

          {/* Scenario Container */}
          <div className="flex flex-col items-end">
            {/* Scenario Label */}
            <div className="text-center mb-6 w-full">
              <h3 className="text-sm md:text-base font-black tracking-wider uppercase">Scenario</h3>
            </div>

            {/* Storyboard with Note Side by Side */}
            <div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-8">
              {/* Storyboard */}
              <div className="w-full max-w-4xl">
                <Image
                  src="/images/remote-collaboration/story-board.svg"
                  alt="Problem scenario storyboard"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Note beside storyboard */}
              <div className="w-48 lg:w-56 flex-shrink-0">
                <Image
                  src="/images/remote-collaboration/Storyboard-note.svg"
                  alt="Storyboard notes"
                  width={300}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Insights</h2>
            <p className="text-base md:text-lg">
              Looking across these scenarios, several deeper patterns emerged.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            <InsightBlock
              title="Timing is interpreted as commitment and care."
              content="In cross-cultural remote teams, response time is not just logistics, it is interpreted as a signal of responsibility, priority, and trust."
            />
            <InsightBlock
              title="The same words do not encode the same level of commitment."
              content="Phrases like &quot;OK&quot; or &quot;I'll look into it&quot; carry different meanings across cultures and power relationships."
            />
            <InsightBlock
              title="Urgency is currently invisible and guessed, not designed."
              content="In Slack, a casual question and a blocking request look exactly the same. Teams rely on tone, guessing, and social pressure to infer urgency."
            />
          </div>
        </div>
      </section>

      {/* HMW Statement 2 */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28 bg-gradient-to-b from-transparent via-[#C9D0DB] to-transparent my-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold leading-tight"
          >
            How might we make response expectations and collaboration rhythms visible and 
            negotiable in cross-cultural remote teams?
          </motion.h2>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            Coming soon
          </motion.h2>
          <p className="mt-8 text-lg text-black/60">
            This project is currently in progress. Check back soon for the full case study!
          </p>
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
      className="text-3xl md:text-4xl font-bold text-center"
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
      className="flex flex-col items-center gap-4 text-center"
    >
      <h3 className="text-sm md:text-base font-black tracking-wider uppercase">{title}</h3>
      <p className="text-sm md:text-base">{content}</p>
    </motion.div>
  );
}

function ResearchCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-4"
    >
      <div className="bg-[#F4F3F4] rounded-2xl p-8 flex items-center justify-center">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="space-y-3 text-center">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </motion.div>
  );
}

function InsightBlock({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      <p className="text-base md:text-lg">{content}</p>
    </motion.div>
  );
}
