"use client";

import { motion } from "framer-motion";
import { Handshake, Rocket, Cpu, Tv, BookOpen, Heart, Sparkles, Users } from "lucide-react";
import { ReactNode } from "react";

interface PerkCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  iconBgColor?: string;
  index?: number;
}

const PerkCard = ({
  icon,
  title,
  description,
  bgColor,
  textColor = "text-white",
  iconBgColor = "bg-white/20",
  index = 0,
}: PerkCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className={`${bgColor} rounded-2xl flex items-center gap-4 p-4 md:p-5 min-w-[280px] md:min-w-[320px] lg:min-w-[340px] h-[100px] md:h-[110px] shrink-0`}
  >
    {/* Icon */}
    <div
      className={`${iconBgColor} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0`}
    >
      <div className={`${textColor}`}>{icon}</div>
    </div>
    
    {/* Text Content */}
    <div className="flex flex-col gap-1 min-w-0">
      <h3
        className={`${textColor} text-sm md:text-base font-semibold leading-tight line-clamp-2`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p
        className={`${textColor} text-xs md:text-sm opacity-80 leading-snug line-clamp-2`}
      >
        {description}
      </p>
    </div>
  </motion.div>
);

const perksRow1 = [
  {
    icon: <Handshake className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "Performance bonus & profit sharing",
    description: "Rewarding excellence with tangible benefits.",
    bgColor: "bg-[#caff1b]",
    textColor: "text-[#1a1a1a]",
    iconBgColor: "bg-black/10",
  },
  {
    icon: <Rocket className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "Work with top startups & brands",
    description: "Collaborate with industry leaders.",
    bgColor: "bg-[#604cf1]",
    textColor: "text-white",
    iconBgColor: "bg-white/20",
  },
  {
    icon: <Cpu className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "Exposure to digital marketing & AI",
    description: "Stay ahead with cutting-edge tech.",
    bgColor: "bg-[#ffc300]",
    textColor: "text-[#1a1a1a]",
    iconBgColor: "bg-black/10",
  },
  {
    icon: <Sparkles className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "Dynamic, learning-focused culture",
    description: "Grow every day with your team.",
    bgColor: "bg-[#604cf1]",
    textColor: "text-white",
    iconBgColor: "bg-white/20",
  },
];

const perksRow2 = [
  {
    icon: <Users className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "Grow Your Audience",
    description: "Access exclusive campaigns that boost your reach.",
    bgColor: "bg-[#006700]",
    textColor: "text-white",
    iconBgColor: "bg-white/20",
  },
  {
    icon: <Tv className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "OTT subscription reimbursement",
    description: "Netflix, Prime & more on us.",
    bgColor: "bg-[#fc7e3f]",
    textColor: "text-white",
    iconBgColor: "bg-white/20",
  },
  {
    icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "2 books of your choice",
    description: "Feed your curiosity, on us.",
    bgColor: "bg-[#604cf1]",
    textColor: "text-white",
    iconBgColor: "bg-white/20",
  },
  {
    icon: <Heart className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />,
    title: "Health & mental wellness package",
    description: "Your wellbeing is our priority.",
    bgColor: "bg-[#f84d4d]",
    textColor: "text-white",
    iconBgColor: "bg-white/20",
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
        className="text-center text-[#060606] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-8 md:mb-12 px-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Core Perks: More Than Just a Job
      </motion.h2>

      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div className="overflow-x-auto scrollbar-hide px-4 pb-4">
          <div className="flex gap-3 w-max">
            {allPerks.map((perk, index) => (
              <PerkCard
                key={`mobile-${index}`}
                icon={perk.icon}
                title={perk.title}
                description={perk.description}
                bgColor={perk.bgColor}
                textColor={perk.textColor}
                iconBgColor={perk.iconBgColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Scrolling Rows */}
      <div className="hidden md:block space-y-4 lg:space-y-6">
        {/* First Row - Scrolling Left */}
        <div className="relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 lg:gap-6"
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
              />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="relative">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 lg:gap-6"
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
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
