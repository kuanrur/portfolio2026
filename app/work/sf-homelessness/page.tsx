'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SFHomelessness() {
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
                Understanding SF Homelessness Through Data and Human Stories
              </h1>
              <p className="text-base md:text-lg text-center">
                A research project driven by curiosity and carried out with passion
              </p>
            </div>

            {/* Hero Image */}
            <div className="w-full bg-[#52658C] rounded-2xl p-5 md:p-10">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/sf-homelessness/hero.svg"
                  alt="SF Homelessness Research"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full">
              <MetaBlock title="Role" content="UX Researcher, Team of three" />
              <MetaBlock title="Mentor" content="Paola Sanmiguel" />
              <MetaBlock title="Type" content="Academic project + Research + UX Design" />
              <MetaBlock title="Duration" content="2024 February – 2024 April" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black/20 mx-6 md:mx-12 lg:mx-28" />

      {/* Walking in SF */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Walking in San Francisco" />
          
          <div className="flex flex-col gap-8 mt-12 md:mt-16">
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/sf-homelessness/research-photo.svg"
                alt="Walking in San Francisco"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center italic">
              In San Francisco, losing a job can mean losing housing within weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Problem Matters */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Why This Problem Matters" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-12 md:mt-16">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-sm md:text-base font-black tracking-wider uppercase text-center">What is happening</h3>
              <h4 className="text-2xl md:text-3xl font-medium text-center">Timing matters more than income.</h4>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">23,000</div>
                <p className="text-sm md:text-base">People losing their job every month</p>
              </div>
              <div className="bg-gradient-to-br from-gray-600 to-gray-400 text-white rounded-lg p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">64.29%</div>
                <p className="text-sm md:text-base">Housing cost has increased by</p>
              </div>
            </div>
          </div>

          {/* Who Is Affected */}
          <div className="mt-20 md:mt-32">
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <h3 className="text-sm md:text-base font-black tracking-wider uppercase mb-4">Who Is Affected</h3>
                <h4 className="text-2xl md:text-3xl font-medium">Big tech employees & manufacturing labor</h4>
              </div>

              <div className="w-full max-w-2xl space-y-6">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-12 rounded-lg">
                  <p className="text-base md:text-lg italic">
                    "Just last year, I was a tech employee in San Francisco, making $120,000 annually..."
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-lg md:text-xl font-semibold">Target User group</p>
                  <p className="text-base md:text-lg font-medium">People who lost their job within the last 30 days</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-600 text-white p-8 rounded-lg">
                  <p className="text-sm md:text-base whitespace-pre-line">
                    Previously housed
                    Limited savings buffer
                    At high risk of eviction
                  </p>
                </div>
              </div>
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
            How might we help newly unemployed SF residents access temporary housing support 
            within the first 30 days, before they fall into long-term homelessness?
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
            <ResearchMethod
              title="Interviews (>50 people)"
              color="bg-[#C9D0DB]"
              description="We meet people in the street, in the shelter, and who experienced homeless. Total over 50."
            />
            <ResearchMethod
              title="Shadowing / org interviews"
              color="bg-[#52658C] text-white"
              description="To understand in a higher level, we also contact Coalition of Homelessness, Homeless Outreach team, and people working for the government, and got the chance to meet them in person."
            />
            <ResearchMethod
              title="Secondary research (budget / policy)"
              color="bg-[#19253D] text-white"
              description="To learn the system and how it work, I dig into the public documents, and realize the pro and con of Coordinated entry."
            />
          </div>

          {/* Key Insights */}
          <div className="mt-20 md:mt-32">
            <div className="text-center mb-12">
              <h3 className="text-sm md:text-base font-black tracking-wider uppercase mb-4">Key insights</h3>
              <p className="text-base md:text-lg">
                The system reacts too late. Housing support should intervene during instability, not after collapse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <InsightCard number="1" title="Time is the real bottleneck" />
              <InsightCard number="2" title="Access ≠ Awareness" />
              <InsightCard number="3" title="Rules punish instability" />
              <InsightCard number="4" title="Shelters are not perceived as a safe fallback" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Solutions</h2>
            <p className="text-base md:text-lg">Designing leverage points to change system behavior</p>
          </div>

          {/* Timeline */}
          <div className="mb-16 space-y-6">
            <h3 className="text-sm md:text-base font-black tracking-wider uppercase">Timeline</h3>
            <p className="text-xl md:text-2xl font-semibold">Job Loss → Housing Loss → Homelessness</p>
            <p className="text-xl md:text-2xl font-semibold text-center">[ 30-Day Housing Bridge ]</p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-12 md:space-y-20">
            <SolutionCard
              image="/images/sf-homelessness/solution-1.png"
              title="Access is granted based on time risk rather than eligibility documentation."
              impact="Access is granted based on time risk rather than eligibility documentation."
              why="In existing systems, delays often push people past the point where recovery is possible. By intervening early, the system changes when housing support begins, not just who receives it."
            />

            <SolutionCard
              image="/images/sf-homelessness/solution-2.png"
              title="Temporary housing is explicitly time bound and visually framed as a transitional state."
              impact="Users gain immediate stability without losing clarity about what comes next, reducing both dependency and disengagement."
              why="Research showed that unclear shelter rules often discourage participation. Making the temporary nature explicit builds trust while preserving forward momentum."
              reverse
            />

            <SolutionCard
              image="/images/sf-homelessness/solution-3.png"
              title="Exit survival mode before re-engaging with formal systems."
              impact="Users return to caseworkers, documentation, and coordinated entry with clarity and agency rather than exhaustion."
              why="Systems designed for stability often fail people during instability. This design creates a deliberate re-entry point."
            />
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-12 md:mb-16">Reflection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-4">
              <h3 className="text-base font-black tracking-wider uppercase">leverage to change the system, not solving the problem</h3>
              <p className="text-base leading-relaxed">
                This project taught me that effective system design is not about solving the entire problem, but about finding the right leverage to change how the system behaves. Rather than attempting to "fix homelessness," I focused on a specific intervention point, the first 30 days after job loss, where a small shift in timing and access could significantly alter long term outcomes.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base font-black tracking-wider uppercase">Designing dignity into systems</h3>
              <p className="text-base leading-relaxed">
                Through interviews, I learned that many people avoid shelters not because they reject help, but because current systems often require them to give up autonomy, belongings, or clarity about their future. This insight pushed me to treat dignity as a functional requirement, not an abstract value.
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
      <p className="text-sm md:text-base whitespace-pre-line">{content}</p>
    </div>
  );
}

function ResearchMethod({ title, color, description }: { title: string; color: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-4"
    >
      <div className={`w-full h-8 ${color} rounded-t-lg`} />
      <div className="px-4 space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-center">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

function InsightCard({ number, title }: { number: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-6"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#52658C] rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-3xl md:text-4xl font-bold text-white">{number}.</span>
      </div>
      <p className="text-lg md:text-xl font-semibold">{title}</p>
    </motion.div>
  );
}

interface SolutionCardProps {
  image: string;
  title: string;
  impact: string;
  why: string;
  reverse?: boolean;
}

function SolutionCard({ image, title, impact, why, reverse }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-16 items-center`}
    >
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={946}
          height={1864}
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div className="flex-1 space-y-8">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-black tracking-wider uppercase mb-2">Impact</h4>
            <p className="text-base">{impact}</p>
          </div>
          <div>
            <h4 className="text-sm font-black tracking-wider uppercase mb-2">Why this matters</h4>
            <p className="text-base">{why}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
