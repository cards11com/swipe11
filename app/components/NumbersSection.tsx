"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 200,
    suffix: "+",
    label: "Lorem ipsum dolor sit amet consectetur.",
    color: "#ff891b",
  },
  {
    value: 40,
    suffix: "L +",
    label: "Lorem ipsum dolor sit amet consectetur.",
    color: "#604cf1",
  },
  {
    value: 10,
    suffix: "+",
    label: "Lorem ipsum dolor sit amet consectetur.",
    color: "#1977f3",
  },
  {
    value: 5,
    suffix: "K",
    label: "Lorem ipsum dolor sit amet consectetur.",
    color: "#ffcc00",
  },
];

function AnimatedNumber({
  value,
  suffix,
  color,
  isInView,
}: {
  value: number;
  suffix: string;
  color: string;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <motion.span
      style={{ color }}
      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <AnimatedNumber
        value={stat.value}
        suffix={stat.suffix}
        color={stat.color}
        isInView={isInView}
      />
      <motion.p
        className="text-[#060606] text-sm md:text-base lg:text-lg leading-6 md:leading-7 mt-2 max-w-[180px] md:max-w-[206px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

export default function NumbersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12"
      >
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}

