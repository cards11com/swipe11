"use client";

import { motion } from "framer-motion";
import { Handshake, Rocket, Cpu, Tv, BookOpen, Heart } from "lucide-react";
import { ReactNode } from "react";

interface PerkCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  iconBgColor?: string;
  hasIcon?: boolean;
  roundedSize?: string;
  index?: number;
}

const PerkCard = ({
  icon,
  title,
  description,
  bgColor,
  textColor = "text-white",
  iconBgColor = "bg-white/40",
  hasIcon = true,
  roundedSize = "rounded-[24px] md:rounded-[30px]",
  index = 0,
}: PerkCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className={`${bgColor} ${roundedSize} flex flex-col ${
      hasIcon ? "justify-between" : "justify-end"
    } p-6 md:p-8 w-[280px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[481px] shrink-0`}
  >
    {hasIcon && icon && (
      <div
        className={`${iconBgColor} w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-[84px] lg:h-[84px] rounded-[10px] flex items-center justify-center`}
      >
        <div className={`${textColor}`}>{icon}</div>
      </div>
    )}
    <div className="flex flex-col gap-2 md:gap-[10px]">
      <h3
        className={`${textColor} text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold leading-tight lg:leading-[40px] tracking-wide`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p
        className={`${textColor} text-sm sm:text-base md:text-xl lg:text-2xl opacity-90 leading-relaxed lg:leading-[31px]`}
      >
        {description}
      </p>
    </div>
  </motion.div>
);

const perksRow1 = [
  {
    icon: (
      <Handshake
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        strokeWidth={1.5}
      />
    ),
    title: "Performance bonus & profit sharing.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#caff1b]",
    textColor: "text-[#383838]",
    iconBgColor: "bg-black/20",
    roundedSize: "rounded-[24px] md:rounded-[40px]",
  },
  {
    icon: (
      <Rocket
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        strokeWidth={1.5}
      />
    ),
    title: "Work with top startups & brands.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#604cf1]",
    textColor: "text-white",
    iconBgColor: "bg-white/40",
    roundedSize: "rounded-[24px] md:rounded-[40px]",
  },
  {
    icon: (
      <Cpu
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        strokeWidth={1.5}
      />
    ),
    title: "Exposure to digital marketing & AI.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#ffc300]",
    textColor: "text-[#383838]",
    iconBgColor: "bg-white/40",
    roundedSize: "rounded-[24px] md:rounded-[40px]",
  },
  {
    icon: null,
    title: "Dynamic, learning-focused culture.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#604cf1]",
    textColor: "text-white",
    hasIcon: false,
    roundedSize: "rounded-[24px] md:rounded-[40px]",
  },
];

const perksRow2 = [
  {
    icon: null,
    title: "Grow Your Audience",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#006700]",
    textColor: "text-white",
    hasIcon: false,
    roundedSize: "rounded-[16px] md:rounded-[20px]",
  },
  {
    icon: (
      <Tv
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        strokeWidth={1.5}
      />
    ),
    title: "OTT subscription reimbursement.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#fc7e3f]",
    textColor: "text-white",
    iconBgColor: "bg-white/40",
    roundedSize: "rounded-[24px] md:rounded-[30px]",
  },
  {
    icon: (
      <BookOpen
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        strokeWidth={1.5}
      />
    ),
    title: "2 books of your choice.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#604cf1]",
    textColor: "text-white",
    iconBgColor: "bg-white/40",
    roundedSize: "rounded-[24px] md:rounded-[30px]",
  },
  {
    icon: (
      <Heart
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        strokeWidth={1.5}
      />
    ),
    title: "Health & mental wellness package.",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#f84d4d]",
    textColor: "text-white",
    iconBgColor: "bg-white/40",
    roundedSize: "rounded-[16px] md:rounded-[20px]",
  },
];

export default function CorePerksSection() {
  const allPerks = [...perksRow1, ...perksRow2];

  return (
    <section className="py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-[#060606] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-8 md:mb-16 px-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Core Perks: More Than Just a Job
      </motion.h2>

      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div className="overflow-x-auto scrollbar-hide px-4 pb-4">
          <div className="flex gap-4 w-max">
            {allPerks.map((perk, index) => (
              <PerkCard
                key={`mobile-${index}`}
                icon={perk.icon}
                title={perk.title}
                description={perk.description}
                bgColor={perk.bgColor}
                textColor={perk.textColor}
                iconBgColor={perk.iconBgColor}
                hasIcon={perk.hasIcon !== false}
                roundedSize={perk.roundedSize}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Scrolling Rows */}
      <div className="hidden md:block">
        {/* First Row - Scrolling */}
        <div className="mb-8 lg:mb-12">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 lg:gap-[46px]"
          >
            {/* Duplicate cards for infinite scroll effect */}
            {[...perksRow1, ...perksRow1].map((perk, index) => (
              <PerkCard
                key={`row1-${index}`}
                icon={perk.icon}
                title={perk.title}
                description={perk.description}
                bgColor={perk.bgColor}
                textColor={perk.textColor}
                iconBgColor={perk.iconBgColor}
                hasIcon={perk.hasIcon !== false}
                roundedSize={perk.roundedSize}
              />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scrolling in opposite direction */}
        <div>
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 lg:gap-[46px]"
          >
            {/* Duplicate cards for infinite scroll effect */}
            {[...perksRow2, ...perksRow2].map((perk, index) => (
              <PerkCard
                key={`row2-${index}`}
                icon={perk.icon}
                title={perk.title}
                description={perk.description}
                bgColor={perk.bgColor}
                textColor={perk.textColor}
                iconBgColor={perk.iconBgColor}
                hasIcon={perk.hasIcon !== false}
                roundedSize={perk.roundedSize}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
