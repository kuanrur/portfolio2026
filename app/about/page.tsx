'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroHeading, SectionHeading } from '@/components/Typography';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#C9D0DB] py-20 md:py-32 px-8 md:px-16 lg:px-40">
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
              className="flex-1 flex flex-col gap-6"
            >
              <HeroHeading className="font-bold">
                Hi! I'm Kuan
              </HeroHeading>
              <div className="text-base leading-relaxed text-black/90 space-y-4">
                <p>
                  I'm an interaction designer who focuses on translating complex systems into 
                  clear, intuitive user journeys, especially in products shaped by scale, 
                  ambiguity, and collaboration. My work sits at the intersection of behavior, 
                  technology, and communication, and I'm currently exploring how cross-cultural 
                  collaboration shapes the way teams build and connect.
                </p>
                <p>
                  I design with clarity and intention, creating products that feel thoughtful, 
                  human, and easy to navigate.
                </p>
                <p>
                  Outside of design, I recharge by wandering the Bay Area with my energetic dog, Heisen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 md:py-32 px-8 md:px-16 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:gap-16">
            {/* Education */}
            <InfoBlock
              title="Education"
              items={[
                {
                  heading: "California College of the Art",
                  subheading: "2022-2026 | BFA, HCI (Interaction Design) & Computational practice"
                }
              ]}
            />

            {/* Language */}
            <InfoBlock
              title="Language"
              items={[
                {
                  heading: "English",
                  subheading: "Working proficiency"
                },
                {
                  heading: "Mandarin",
                  subheading: "Native"
                }
              ]}
            />

            {/* Experience */}
            <InfoBlock
              title="Experience"
              items={[
                {
                  heading: "GitRoll",
                  subheading: "June 2025 - September 2025"
                },
                {
                  heading: "AMA Career",
                  subheading: "August 2024 - October 2024"
                },
                {
                  heading: "Metamory",
                  subheading: "June 2023 - September 2023"
                }
              ]}
            />

            {/* Activities */}
            <InfoBlock
              title="Activities"
              items={[
                {
                  heading: "Taiwanese Student Association",
                  subheading: "President"
                }
              ]}
            />

            {/* Skills */}
            <InfoBlock
              title="Skills"
              items={[
                { heading: "Figma" },
                { heading: "Cursor(Html, CSS, React, p5. js...)" },
                { heading: "Adobe creative suites" },
                { heading: "Prototyping" },
                { heading: "Story telling" }
              ]}
            />
          </div>

          {/* View Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16 md:mt-20"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-black/90 transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black/20 mx-8 md:mx-16 lg:mx-40" />

      {/* Gallery Section */}
      <section className="py-20 md:py-32 px-8 md:px-16 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading className="font-medium">
              I keep a camera with me almost everywhere!
            </SectionHeading>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface InfoBlockProps {
  title: string;
  items: {
    heading: string;
    subheading?: string;
  }[];
}

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row gap-6 md:gap-8"
    >
      <div className="w-full md:w-40 flex-shrink-0">
        <h3 className="text-base font-bold tracking-wider uppercase text-right">
          {title}
        </h3>
      </div>
      <div className="flex-1 space-y-6">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <p className="text-base font-bold leading-relaxed">{item.heading}</p>
            {item.subheading && (
              <p className="text-base text-black/60 leading-relaxed">{item.subheading}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
