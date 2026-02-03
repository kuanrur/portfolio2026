'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RemoteCollaboration() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mt-12 md:mt-16">
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
                <h4 className="text-2xl md:text-3xl font-medium">
                  Today's tools optimize for workflow, not for collaboration psychology.
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p className="text-base font-bold text-green-700">communication</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p className="text-base font-bold text-green-700">documentation</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p className="text-base font-bold text-green-700">coordination</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✗</span>
                    <p className="text-base font-bold text-red-700">trust building</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✗</span>
                    <p className="text-base font-bold text-red-700">emotional context</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✗</span>
                    <p className="text-base font-bold text-red-700">how decisions actually happen</p>
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
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28 bg-[#C9D0DB] mx-6 md:mx-12 lg:mx-28 rounded-3xl my-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold leading-tight"
          >
            What exactly breaks in cross-cultural collaboration?
          </motion.h2>
        </div>
      </section>

      {/* Research & Methods */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Research & Methods" />
          <p className="text-base md:text-lg mt-4 text-center">
            Across different teams and contexts, the same breakdowns kept appearing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16">
            <ResearchCard
              image="/images/remote-collaboration/stakeholder-interview.svg"
              title="Stakeholder interview"
              description="4 in-depth interviews(2 startup founders, 2 remote engineers across US / India / Taiwan)"
            />

            <div className="flex flex-col gap-6">
              <div className="flex-1 space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-center">Problem research</h3>
                <p className="text-base text-center">
                  Literature review & frameworks(Erin Meyer, Hofstede, remote collaboration studies)
                </p>
              </div>
              <div className="relative w-full h-64">
                <Image
                  src="/images/remote-collaboration/problem-research.png"
                  alt="Problem research"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 justify-center">
              <div className="relative w-full h-48">
                <Image
                  src="/images/remote-collaboration/research-methods.svg"
                  alt="Research prototype"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-center">Research prototype</h3>
                <p className="text-base text-center">
                  I created a lightweight research prototype to explore how teams interpret tone, urgency, and response expectations in everyday collaboration.
                </p>
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
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28 bg-[#C9D0DB] mx-6 md:mx-12 lg:mx-28 rounded-3xl my-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold leading-tight"
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
        <div className="relative w-full h-40">
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
