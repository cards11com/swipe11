"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-14 lg:gap-16">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em] text-center max-w-[620px] mx-auto"
        >
          Navigate the digital landscape with expert guidance.
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full min-h-[380px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[430px]"
          >
            {/* Yellow Background Shape */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backgroundColor: "#FFE81A",
                clipPath:
                  "polygon(0% 15%, 13% 3%, 100% 0%, 100% 100%, 4% 100%, 0% 95%)",
              }}
            >
              {/* Decorative Swirl Lines */}
              <svg
                className="absolute top-0 right-0 w-[60%] h-auto opacity-30"
                viewBox="0 0 250 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M250 0C200 20 150 60 120 100C90 140 100 160 130 150C160 140 180 100 160 60C140 20 100 10 60 30C20 50 0 100 10 150"
                  stroke="#F5D800"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <svg
                className="absolute bottom-[-20px] right-[30%] w-[40%] h-auto opacity-30"
                viewBox="0 0 200 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 100C40 80 80 40 120 30C160 20 180 50 160 90C140 130 100 140 60 120"
                  stroke="#F5D800"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start pt-10 sm:pt-12 md:pt-14 lg:pt-16">
              <h3 className="text-[#060606] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[0.02em] mb-4 md:mb-5">
                Our mission
              </h3>

              <div className="text-black text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[1.65] max-w-[480px] opacity-70 font-medium space-y-4">
                <p>
                  Build lasting customer bonds and foster brand loyalty through
                  targeted programs and personalized communication.
                </p>
                <p>
                  To be the catalyst for transformative digital engagement,
                  empowering India&apos;s financial sector to build unparalleled
                  customer loyalty and drive sustainable growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full min-h-[380px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[430px]"
          >
            {/* Cyan Background Shape */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backgroundColor: "#5CFFFF",
                clipPath:
                  "polygon(0% 0%, 87% 3%, 100% 15%, 100% 95%, 96% 100%, 0% 100%)",
              }}
            >
              {/* Decorative Swirl Lines */}
              <svg
                className="absolute top-[-10px] right-0 w-[55%] h-auto opacity-40"
                viewBox="0 0 220 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M220 20C180 10 140 30 110 60C80 90 70 130 100 150C130 170 170 150 190 110C210 70 200 30 160 10C120 -10 80 10 50 50"
                  stroke="#00D4D4"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <svg
                className="absolute bottom-[10%] left-0 w-[35%] h-auto opacity-40"
                viewBox="0 0 150 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 50C30 30 70 20 100 40C130 60 140 90 110 100"
                  stroke="#00D4D4"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start pt-10 sm:pt-12 md:pt-14 lg:pt-16">
              <h3 className="text-[#060606] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[0.02em] mb-4 md:mb-5">
                Our vision
              </h3>

              <div className="text-black text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[1.65] max-w-[480px] opacity-70 font-medium space-y-4">
                <p>
                  To be the catalyst for transformative digital engagement,
                  empowering India&apos;s financial sector to build unparalleled
                  customer loyalty and drive sustainable growth.
                </p>
                <p>
                  Build lasting customer bonds and foster brand loyalty through
                  targeted programs and personalized communication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

