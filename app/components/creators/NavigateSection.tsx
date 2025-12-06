"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Fill out the form",
    description:
      "Build lasting customer bonds and foster brand loyalty through targeted programs and personalized communication.",
    color: "#13b8b1",
  },
  {
    number: "02",
    title: "Connect with our team",
    description:
      "Our dedicated team will reach out to understand your goals and discuss partnership opportunities.",
    color: "#ff891b",
  },
  {
    number: "03",
    title: "Onboard with Swipe11",
    description:
      "Complete a seamless onboarding process and get access to our creator tools and resources.",
    color: "#ffc235",
  },
  {
    number: "04",
    title: "Start earning",
    description:
      "Begin collaborating with brands and earning through exciting campaigns tailored to your audience.",
    color: "#604cf1",
  },
];

export default function NavigateSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-8 md:gap-11 w-full lg:w-[45%] z-10">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-[#060606] text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.15] tracking-[0.02em] max-w-[437px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Navigate the digital landscape with expert guidance.
              </h2>
            </motion.div>

            {/* Steps */}
            <div className="flex flex-col gap-6 md:gap-8">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Header */}
                    <div className="flex items-center gap-2">
                      <motion.span
                        animate={{
                          scale: isActive ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-[18px] md:text-[21px] font-bold"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: step.color,
                          opacity: isActive ? 1 : 0.8,
                        }}
                      >
                        {step.number}
                      </motion.span>
                      <motion.span
                        animate={{
                          x: isActive ? 4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-[18px] md:text-[21px] font-bold text-[#060606]"
                        style={{
                          fontFamily: "var(--font-display)",
                          opacity: isActive ? 1 : 0.8,
                        }}
                      >
                        {step.title}
                      </motion.span>
                    </div>

                    {/* Description - Only shows for active step */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`desc-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-black text-[14px] md:text-[16px] font-medium tracking-[-0.01em] max-w-[360px] leading-[1.5] mt-1 pt-1">
                            {step.description}
                          </p>

                          {/* Progress Bar */}
                          <div className="w-full max-w-[360px] h-[3px] bg-gray-200 rounded-full mt-3 overflow-hidden">
                            <motion.div
                              key={`progress-${activeStep}`}
                              className="h-full rounded-full"
                              style={{ backgroundColor: step.color }}
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{
                                duration: 4,
                                ease: "linear",
                              }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Content - SVG Shape (Hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative w-full lg:w-[55%] justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[690px]">
              {/* SVG Background Shape */}
              <svg
                viewBox="0 0 691 643"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <path
                  d="M0 84.9217L77.8981 13.2285L690.533 0V642.074H77.8981H24.7676L0 587.96V84.9217Z"
                  fill="#CAFF1B"
                />
              </svg>

              {/* Decorative Swipe Logo Outline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[50%] h-auto opacity-20"
                >
                  {/* Stylized "9" or swipe logo shape */}
                  <motion.circle
                    cx="150"
                    cy="100"
                    r="70"
                    stroke="#4a4a4a"
                    strokeWidth="20"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                  />
                  <motion.line
                    x1="200"
                    y1="150"
                    x2="200"
                    y2="280"
                    stroke="#4a4a4a"
                    strokeWidth="20"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
