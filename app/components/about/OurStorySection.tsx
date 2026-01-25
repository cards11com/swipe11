"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
      {/* Decorative curved element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] pointer-events-none opacity-30">
        <svg
          viewBox="0 0 851 385"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ transform: "rotate(-45deg) scaleY(-1)" }}
        >
          <path
            d="M850.5 192.5C850.5 298.5 660.5 384.5 425.5 384.5C190.5 384.5 0.5 298.5 0.5 192.5C0.5 86.5 190.5 0.5 425.5 0.5C660.5 0.5 850.5 86.5 850.5 192.5Z"
            stroke="#9D8DF1"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/3"
          >
            <h2
              className="text-[#363636] text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-[1.15] italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our story
            </h2>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-2/3"
          >
            <div className="text-[#003200] text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                Swipe11 was born from a simple observation: Indian brands deserve 
                world-class marketing that understands the local landscape. Founded 
                in 2020, we set out to bridge the gap between innovative digital 
                strategies and the unique needs of BFSI and digital-first companies 
                in India.
              </p>
              <p>
                What started as a small team of passionate marketers has grown into 
                a full-service agency trusted by leading startups and enterprises 
                alike. We&apos;ve helped brands navigate the ever-evolving digital 
                ecosystem, from crafting viral social media campaigns to executing 
                data-driven product launches. Our approach combines creativity with 
                analytics, ensuring every campaign delivers measurable results and 
                meaningful impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

