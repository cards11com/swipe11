"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: "/results.svg",
    title: "Proven Results",
    description: "We've helped [X] businesses increase revenue by [Y]%.",
    bgSvg: "/why-choose-1.svg",
  },
  {
    icon: "/market-research.svg",
    title: "Transparent Reporting",
    description: "Real-time dashboards so you always see performance.",
    bgSvg: "/why-choose-2.svg",
  },
  {
    icon: "/tailored-stategies.svg",
    title: "Tailored Strategies",
    description: "No cookie-cutter solutions—just what works for YOUR brand.",
    bgSvg: "/why-choose-3.svg",
  },
];

// Card widths for different breakpoints
const CARD_WIDTH = {
  mobile: 300,
  sm: 340,
};
const GAP = 16;

interface ReasonCardProps {
  icon: string;
  title: string;
  description: string;
  bgSvg: string;
  isCarousel?: boolean;
}

function ReasonCard({
  icon,
  title,
  description,
  bgSvg,
  isCarousel = false,
}: ReasonCardProps) {
  return (
    <div
      className={`relative ${
        isCarousel
          ? "w-[300px] sm:w-[340px] h-[380px] sm:h-[400px]"
          : "w-full h-[360px] sm:h-[390px] md:h-[420px]"
      }`}
    >
      {/* SVG Background */}
      <Image src={bgSvg} alt="" fill className="object-fill" />

      {/* Content */}
      <div className="absolute inset-0 p-8 sm:p-10 md:p-12 flex flex-col justify-start pt-14 sm:pt-16 md:pt-20">
        {/* Icon */}
        <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 mb-5 relative">
          <Image
            src={icon}
            alt=""
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Title */}
        <h3 className="text-[#060606] text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-[1.25] tracking-[0.02em] mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-black text-[15px] sm:text-lg md:text-[20px] leading-[1.35] max-w-[260px]">
          {description}
        </p>

        {/* View Services Link */}
        <div className="mt-auto pt-6 sm:pt-8">
          <a
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH.mobile);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Detect desktop breakpoint and card width
  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 768); // md breakpoint
      if (width >= 640) {
        setCardWidth(CARD_WIDTH.sm);
      } else {
        setCardWidth(CARD_WIDTH.mobile);
      }
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  // Calculate the x position for a given card index
  const getPositionForIndex = (index: number) => {
    return -(index * (cardWidth + GAP));
  };

  // Animate to a specific card
  const goToCard = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, reasons.length - 1));
    setActiveIndex(clampedIndex);
    controls.start({
      x: getPositionForIndex(clampedIndex),
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    });
  };

  // Auto-scroll: move to next card every 3 seconds
  useEffect(() => {
    if (isDesktop || isDragging || isHovered) {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      return;
    }

    const getXPosition = (index: number) => -(index * (cardWidth + GAP));

    const startTimeout = setTimeout(() => {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = prev >= reasons.length - 1 ? 0 : prev + 1;
          controls.start({
            x: getXPosition(nextIndex),
            transition: {
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            },
          });
          return nextIndex;
        });
      }, 3000);
    }, 2000);

    return () => {
      clearTimeout(startTimeout);
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
  }, [isDesktop, isDragging, isHovered, controls, cardWidth]);

  // Handle drag end - snap to nearest card
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    setIsDragging(false);

    const currentX = getPositionForIndex(activeIndex) + info.offset.x;
    const velocity = info.velocity.x;

    let targetIndex = activeIndex;

    if (Math.abs(velocity) > 500) {
      targetIndex = velocity > 0 ? activeIndex - 1 : activeIndex + 1;
    } else {
      targetIndex = Math.round(-currentX / (cardWidth + GAP));
    }

    targetIndex = Math.max(0, Math.min(targetIndex, reasons.length - 1));
    goToCard(targetIndex);
  };

  // Desktop grid layout
  if (isDesktop) {
    return (
      <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-14 lg:gap-[138px]">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em] text-center"
          >
            Why choose Swipe11?
          </motion.h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ReasonCard
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                  bgSvg={reason.bgSvg}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Mobile carousel layout
  return (
    <section className="w-full py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#060606] text-3xl sm:text-4xl font-bold leading-[1.2] tracking-[0.02em] text-center px-5"
        >
          Why choose Swipe11?
        </motion.h2>

        {/* Carousel Container */}
        <div
          className="relative w-full cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-4 px-5"
            drag="x"
            dragConstraints={{
              left: getPositionForIndex(reasons.length - 1),
              right: 0,
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            animate={controls}
            onDragStart={() => {
              setIsDragging(true);
              if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
                autoScrollRef.current = null;
              }
            }}
            onDragEnd={handleDragEnd}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ReasonCard
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                  bgSvg={reason.bgSvg}
                  isCarousel
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 px-5">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#060606] w-6"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
