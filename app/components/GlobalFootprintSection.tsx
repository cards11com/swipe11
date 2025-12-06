"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  {
    name: "India",
    flag: "🇮🇳",
    color: "#FF891B", // Orange
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    color: "#FF4D4D", // Red
  },
  {
    name: "USA",
    flag: "🇺🇸",
    color: "#604CF1", // Purple/Blue
  },
];

function LocationMarker({
  name,
  flag,
  color,
  index,
}: {
  name: string;
  flag: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.6 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center gap-2"
    >
      {/* Location Pin */}
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0C4.03 0 0 4.03 0 9C0 15.75 9 22 9 22C9 22 18 15.75 18 9C18 4.03 13.97 0 9 0ZM9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12Z"
          fill={color}
        />
      </svg>
      <span className="text-[#060606] text-base font-medium">
        {name}
        <span className="ml-1">{flag}</span>
      </span>
    </motion.div>
  );
}

export default function GlobalFootprintSection() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[380px] flex flex-col gap-6 lg:gap-8 flex-shrink-0">
            {/* Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.15] tracking-[0.02em]"
            >
              Our Global
              <br />
              Footprint
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[#060606] text-base md:text-lg leading-[1.55] max-w-[340px]"
            >
              While deeply rooted in{" "}
              <span className="text-[#FF891B] font-medium">India</span>
              <span className="ml-0.5">🇮🇳</span>,
              <br />
              Swipe11 selectively partners with clients in key international
              markets too.
            </motion.p>

            {/* Location Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 mt-2"
            >
              {locations.map((location, index) => (
                <LocationMarker
                  key={location.name}
                  name={location.name}
                  flag={location.flag}
                  color={location.color}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full lg:flex-1"
          >
            <div className="relative w-full aspect-[1.6/1] md:aspect-[1.8/1] lg:aspect-[1.5/1]">
              <Image
                src="/g12.png"
                alt="World map showing Swipe11's global presence in India, UAE, and USA"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

