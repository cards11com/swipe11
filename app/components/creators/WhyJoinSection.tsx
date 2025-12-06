"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: "/earn-more-easily.svg",
    title: "Earn More easily",
    description: "Get matched with brands that pay fairly and on time.",
    bgColor: "#FFC1F6",
    // Polygon path for left-tilted card
    clipPath: "polygon(16% 0%, 100% 2%, 100% 100%, 5% 100%, 0% 13%)",
  },
  {
    icon: "/grow-your-audience.svg",
    title: "Grow Your Audience",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "#BFFFBF",
    // Polygon path for center card (slightly tilted top)
    clipPath: "polygon(0% 4%, 100% 0%, 95% 100%, 0% 100%)",
  },
  {
    icon: "/tailored-stategies.svg",
    title: "Tailored Strategies",
    description: "No micromanagement— just your unique voice & our support.",
    bgColor: "#E0EFFF",
    // Polygon path for right-tilted card
    clipPath: "polygon(13% 0%, 100% 4%, 95% 100%, 0% 100%)",
  },
];

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  clipPath: string;
  isCarousel?: boolean;
}

function BenefitCard({
  icon,
  title,
  description,
  bgColor,
  clipPath,
  isCarousel = false,
}: BenefitCardProps) {
  return (
    <div
      className={`relative ${
        isCarousel
          ? "w-[300px] sm:w-[340px] h-[400px] sm:h-[420px]"
          : "w-full h-[380px] sm:h-[400px] md:h-[420px]"
      }`}
    >
      {/* Polygon Background using clip-path */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: bgColor,
          clipPath: clipPath,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 sm:p-10 md:p-12 flex flex-col justify-start pt-14 sm:pt-16 md:pt-20">
        {/* Icon */}
        <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 mb-5 relative">
          <Image src={icon} alt="" fill className="object-contain" />
        </div>

        {/* Title */}
        <h3 className="text-[#060606] text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-[1.25] tracking-[0.02em] mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-black text-[15px] sm:text-lg md:text-xl leading-[1.35] max-w-[260px]">
          {description}
        </p>

        {/* View Services Link */}
        <div className="mt-auto pt-6 sm:pt-8">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 text-black text-sm font-medium uppercase tracking-[0.05em] hover:gap-3 transition-all duration-300 group"
          >
            <span>View services</span>
            <svg
              width="24"
              height="12"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line
                x1="0"
                y1="6"
                x2="20"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M18 2L22 6L18 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WhyJoinSection() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-14 lg:gap-[100px]">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em] text-center"
        >
          Why Join Swipe11?
        </motion.h2>

        {/* Cards Grid - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                bgColor={benefit.bgColor}
                clipPath={benefit.clipPath}
              />
            </motion.div>
          ))}
        </div>

        {/* Cards - Mobile (Stacked) */}
        <div className="flex md:hidden flex-col gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                bgColor={benefit.bgColor}
                clipPath={benefit.clipPath}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
