"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Star SVG component for decorative elements
const Star = ({
  className,
  color = "#604cf1",
  size = 22,
}: {
  className?: string;
  color?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z"
      fill={color}
    />
  </svg>
);

export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2 z-10">
            {/* Headline */}
            <div className="flex flex-col gap-6 md:gap-7">
              <h1 className="relative text-[#363636]">
                <span className="block text-[clamp(2.5rem,5.5vw,6rem)] font-black leading-[1.1] tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    Build a{" "}
                    <span className="relative inline">
                      <span className="relative z-10">Fulfilling</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-[0.05em] left-0 w-full h-[0.28em] bg-[#caff1b] z-0 origin-left"
                      />
                    </span>
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
                    <span className="relative inline">
                      <span className="relative z-10">Career</span>
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-[0.05em] left-0 w-full h-[0.28em] bg-[#caff1b] z-0 origin-left"
                      />
                    </span>{" "}
                    With Us
                  </motion.span>
                </span>
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
                className="text-black/55 text-lg md:text-xl lg:text-2xl font-medium leading-[1.4] max-w-[553px]"
              >
                Explore Opportunities, Grow Your Skills, and Make an Impact
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#openings"
                  className="inline-flex items-center justify-center bg-[#604cf1] text-white font-medium text-base md:text-lg px-6 py-3 rounded-full hover:bg-[#5040d9] transition-colors duration-200"
                >
                  View openings
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image - Team Photo Collage */}
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
            {/* Decorative Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -top-4 left-[5%] lg:left-0"
            >
              <Star color="#66baff" size={22} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="absolute top-8 left-[2%] lg:-left-4"
            >
              <Star color="#66baff" size={14} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="absolute bottom-[35%] left-[8%] lg:left-[5%]"
            >
              <Star color="#8372ff" size={22} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="absolute bottom-[38%] left-[14%] lg:left-[12%]"
            >
              <Star color="#8372ff" size={14} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="absolute bottom-[12%] right-[2%] lg:right-0"
            >
              <Star color="#ff4e4e" size={12} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="absolute bottom-[15%] right-[5%] lg:right-[3%]"
            >
              <Star color="#ff4e4e" size={8} />
            </motion.div>

            {/* Main Image */}
            <div className="relative w-full max-w-[500px] lg:max-w-[550px]">
              <Image
                src="/career-hero.png"
                alt="Our diverse team of professionals"
                width={550}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



