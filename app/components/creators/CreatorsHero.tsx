"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CreatorsHero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Left Side Creators - Stuck to left edge */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[240px] lg:w-[320px] xl:w-[420px] 2xl:w-[480px]"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/left-side-creators.png"
            alt="Content creators collage"
            width={480}
            height={570}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-[600px] px-5 py-8 md:py-16">
          {/* Headline */}
          <h1 className="text-[#363636]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(2.5rem,6vw,6rem)] font-black leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Amplify Your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-[clamp(2.5rem,6vw,6rem)] font-black leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Reach to max
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#003200] text-lg md:text-xl font-normal leading-relaxed"
          >
            Navigate the digital landscape with expert guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap gap-4 md:gap-6 items-center justify-center mt-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#604cf1] text-white font-medium text-base md:text-lg px-6 py-3 rounded-full hover:bg-[#5040d9] transition-colors duration-200 min-w-[148px]"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#services"
                className="inline-flex items-center justify-center bg-white text-[#1e1e1e] font-medium text-base md:text-lg px-6 py-3 rounded-full border-2 border-black hover:bg-gray-50 transition-colors duration-200 min-w-[148px]"
              >
                View services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Creators - Stuck to right edge */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] sm:w-[180px] md:w-[240px] lg:w-[320px] xl:w-[420px] 2xl:w-[480px]"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Image
            src="/right-side-creators.png"
            alt="Content creators collage"
            width={480}
            height={570}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#604cf1] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#caff1b] blur-[120px]" />
      </motion.div>
    </section>
  );
}

