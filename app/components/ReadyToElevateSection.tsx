"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReadyToElevateSection() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Background Container */}
        <div className="relative w-full min-h-[400px] md:min-h-[450px] lg:min-h-[520px]">
          {/* Yellow Background with SVG */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/ready-to-elevate.svg"
              alt=""
              fill
              className="object-cover object-center scale-110 md:scale-100"
              priority
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch h-full">
            {/* Girl Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full lg:w-1/2 flex justify-center lg:justify-start -mb-4 lg:mb-0"
            >
              <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] -ml-0 lg:-ml-16 xl:-ml-20">
                <Image
                  src="/girl.png"
                  alt="Woman pointing to elevate your brand message"
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 450px, 650px"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content - Right Side */}
            <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 md:px-8 lg:px-0 lg:pr-12 xl:pr-20 py-8 lg:py-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-5 max-w-[456px] text-center lg:text-left"
              >
                <h2 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.15] tracking-tight">
                  Ready to Elevate Your Brand?
                </h2>
                <p className="text-[#0d0d0d] text-base md:text-lg font-medium leading-[1.55]">
                  Let&apos;s discuss how Swipe11 can help you achieve your business goals. Reach out to our team today.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#604cf1] text-white font-medium text-base md:text-lg px-6 py-3 rounded-full hover:bg-[#5040d9] transition-colors duration-200 min-w-[148px]"
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


