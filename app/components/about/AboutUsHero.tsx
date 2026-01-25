"use client";

import { motion } from "framer-motion";

export default function AboutUsHero() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Headline */}
        <div>
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
      </div>
    </section>
  );
}
