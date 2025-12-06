"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsHero() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Headline */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-[#363636]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(2.5rem,7vw,6rem)] font-black leading-[1.12] tracking-tight italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Amplify Your Reach,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-[clamp(2.5rem,7vw,6rem)] font-black leading-[1.12] tracking-tight italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Maximize Your Impact.
            </motion.span>
          </h1>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full aspect-[1280/596] rounded-[30px] md:rounded-[45px] lg:rounded-[60px] overflow-hidden"
        >
          <Image
            src="/about-us-hero.png"
            alt="Team collaboration - people working together around laptops"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

