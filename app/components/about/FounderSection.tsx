"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SocialStat {
  value: string;
  label: string;
}

const socialStats: SocialStat[] = [
  {
    value: "163K+",
    label: "Followers on X",
  },
  {
    value: "86K+",
    label: "Followers on LinkedIn",
  },
  {
    value: "14k+",
    label: "Followers on Instagram",
  },
];

export default function FounderSection() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[42%] flex-shrink-0"
          >
            <div className="relative w-full max-w-[534px] mx-auto lg:mx-0">
              {/* Yellow decorative background */}
              <div className="absolute -right-4 -top-2 w-[105%] h-[102%] pointer-events-none">
                <svg
                  viewBox="0 0 567 613"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M567 0H0V613H567V0Z"
                    fill="#FFE81A"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M60 100C100 60 180 30 280 50C380 70 450 140 480 230C510 320 470 420 380 480C290 540 180 530 100 470C20 410 0 320 30 230C60 140 130 80 200 60"
                    stroke="#F5D800"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Founder Image */}
              <div className="relative w-full aspect-[534/607] rounded-lg overflow-hidden">
                <Image
                  src="/ravisutanjani.png"
                  alt="Ravisutanjani - Founder of Swipe11"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 534px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="w-full lg:w-[58%] flex flex-col gap-10 md:gap-12 lg:gap-16">
            {/* Name and Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-5"
            >
              <h2
                className="text-[#363636] text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.12] italic tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ravisutanjani
              </h2>
              <p className="text-[#060606] text-base md:text-lg font-medium leading-[1.55] max-w-[590px]">
                A seasoned growth leader with 7+ years of experience scaling
                hyper-growth startups (Zomato, Rapido, OYO), Ravisutanjani served
                as VP of Partnerships and Special Projects at Testbook. He has
                consulted leading Indian FinTech startups and is a well-known
                entrepreneur and creator.
              </p>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-8 md:gap-10 lg:gap-[50px]"
            >
              {socialStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col min-w-[140px] md:min-w-[180px]"
                >
                  <p
                    className="text-[#003200] text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.12] italic"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#060606] text-base md:text-lg font-normal leading-[1.55]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


