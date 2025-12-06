"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-8 md:gap-12 w-full lg:w-1/2 z-10">
            {/* Headline */}
            <div className="flex flex-col gap-6 md:gap-7">
              <h1 className="relative text-[#363636]">
                <span className="block text-[clamp(2.25rem,5vw,5rem)] font-black leading-[1.1] tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    Amplify Your
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    Reach,{" "}
                    <span className="relative inline">
                      <span className="relative z-10">Maximize</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-[0.1em] left-0 w-full h-[0.3em] bg-[#caff1b] z-0 origin-left"
                      />
                    </span>
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    <span className="relative inline">
                      <span className="relative z-10">Your Impact.</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-[0.1em] left-0 w-full h-[0.3em] bg-[#caff1b] z-0 origin-left"
                      />
                    </span>
                  </motion.span>
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-black/55 text-[clamp(1rem,1.5vw,1.5rem)] font-medium leading-[1.4] max-w-[553px]"
              >
                Leverage cutting-edge strategies, to deliver measurable results
                for Indian banks, fintechs, and digital-first startups.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-4 md:gap-6 items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#604cf1] text-white font-medium text-base md:text-lg px-6 py-3 rounded-full hover:bg-[#5040d9] transition-colors duration-200 min-w-[148px]"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#1e1e1e] font-medium text-base md:text-lg px-6 py-3 rounded-full border-2 border-black hover:bg-gray-50 transition-colors duration-200 min-w-[148px]"
              >
                View services
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-600/650">
              <Image
                src="/hero-img.png"
                alt="Marketing professional on phone with analytics dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
