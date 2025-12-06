"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "/handshake.svg",
    title: "Customer Engagement & Loyalty",
    description:
      "Build lasting customer bonds and foster brand loyalty through targeted programs and personalized communication.",
    features: [
      "Develop loyalty & rewards programs.",
      "Implement personalized communication.",
      "Map & optimize customer journeys.",
      "Gather insights via feedback systems.",
    ],
  },
  {
    icon: "/product-launches.svg",
    title: "Impactful Product Launches",
    description:
      "Ensure new offerings, including Credit Cards, make a memorable market entry with strategic launch plans.",
    features: [
      "Craft data-driven go-to-market strategies.",
      "Generate pre-launch excitement & media buzz.",
      "Manage digital & physical launch events.",
      "Track post-launch performance & iterate.",
    ],
  },
  {
    icon: "/market-research.svg",
    title: "Insightful Market Research",
    description:
      "Navigate the Indian BFSI sector with clarity using our market intelligence and consumer insights.",
    features: [
      "Conduct competitor & market analysis.",
      "Study consumer behavior & identify trends.",
      "Perform feasibility studies for new ventures.",
      "Analyze the fintech regulatory landscape.",
    ],
  },
  {
    icon: "/online-reputation.svg",
    title: "Online Reputation Management",
    description:
      "Protect and enhance your brand's digital image through proactive monitoring and strategic communication.",
    features: [
      "Monitor online presence across platforms.",
      "Analyze sentiment & manage crisis situations.",
      "Develop content for positive brand narratives.",
      "Manage online reviews & responses.",
    ],
  },
  {
    icon: "/social-media.svg",
    title: "Social Media Management",
    description:
      "Elevate your brand's social presence with engaging content and data-informed strategies to connect with your audience.",
    features: [
      "Develop tailored social media strategies.",
      "Create engaging content & visuals.",
      "Manage community & audience engagement.",
      "Track analytics & optimize performance.",
    ],
  },
  {
    icon: "/strategy-star.svg",
    title: "Strategic Influencer Marketing",
    description:
      "Connect with key voices in the BFSI sector to amplify your message and build credibility with your target audience.",
    features: [
      "Identify and vet relevant industry influencers.",
      "Develop creative influencer campaign concepts.",
      "Manage campaign execution & negotiations.",
      "Measure performance & ensure ROI.",
    ],
  },
];

// Card widths for different breakpoints (must match CSS)
const CARD_WIDTH = {
  mobile: 280,
  sm: 320,
  md: 360,
};
const GAP = 16; // gap-4 = 16px

function CheckIcon() {
  return (
    <div className="relative w-5 h-5 shrink-0">
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(54,136,54,0.9)] to-[rgba(0,50,0,0.9)] rounded-[4px]" />
      <svg
        className="absolute inset-0 m-auto w-3.5 h-3.5"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6667 3.5L5.25 9.91667L2.33333 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-[#d6ff50] rounded-[20px] p-5 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6 h-full w-[280px] sm:w-[320px] md:w-[360px] lg:w-full select-none">
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
        <Image src={icon} alt="" fill className="object-contain object-left" />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[#003200] text-lg sm:text-xl lg:text-[21px] font-medium leading-[1.2]">
          {title}
        </h3>
        <p className="text-black/60 text-sm sm:text-base leading-normal">
          {description}
        </p>
      </div>

      {/* Features List */}
      <div className="flex flex-col gap-3">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-black/60 text-sm sm:text-base leading-normal">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
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
      setIsDesktop(width >= 1024);
      if (width >= 768) {
        setCardWidth(CARD_WIDTH.md);
      } else if (width >= 640) {
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
    const clampedIndex = Math.max(0, Math.min(index, services.length - 1));
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

    // Calculate position for index (local to avoid dependency issues)
    const getXPosition = (index: number) => -(index * (cardWidth + GAP));

    // Start auto-scroll after initial delay
    const startTimeout = setTimeout(() => {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = prev >= services.length - 1 ? 0 : prev + 1;
          controls.start({
            x: getXPosition(nextIndex),
            transition: {
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            },
          });
          return nextIndex;
        });
      }, 3000); // 3 seconds per card
    }, 2000); // Initial 2 second delay

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

    // Calculate which card to snap to based on position and velocity
    let targetIndex = activeIndex;

    if (Math.abs(velocity) > 500) {
      // Fast swipe - move in direction of swipe
      targetIndex = velocity > 0 ? activeIndex - 1 : activeIndex + 1;
    } else {
      // Slow drag - snap to nearest card
      targetIndex = Math.round(-currentX / (cardWidth + GAP));
    }

    // Clamp to valid range
    targetIndex = Math.max(0, Math.min(targetIndex, services.length - 1));
    goToCard(targetIndex);
  };

  // Desktop grid layout
  if (isDesktop) {
    return (
      <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10 md:gap-14">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em] text-center max-w-[560px] mx-auto"
          >
            Unlock Growth with Our Expert Services
          </motion.h2>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Mobile/Tablet carousel layout
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em] text-center max-w-[560px] mx-auto px-5"
        >
          Unlock Growth with Our Expert Services
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
              left: getPositionForIndex(services.length - 1),
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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 px-5">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#003200] w-6"
                    : "bg-[#d6ff50] opacity-60"
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
