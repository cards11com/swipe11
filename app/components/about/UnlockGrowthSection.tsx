"use client";

import { motion } from "framer-motion";

interface ServiceCard {
  number: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    number: "01",
    title: "Strategic Brand Building",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nascetur sapien nulla in turpis sodales. Eu molestie enim luctus egestas. Tincidunt netus non urna proin tempus pulvinar rhoncus orci vulputate. Enim laoreet tortor tincidunt sit.",
  },
  {
    number: "02",
    title: "Digital Growth Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nascetur sapien nulla in turpis sodales. Eu molestie enim luctus egestas. Tincidunt netus non urna proin tempus pulvinar rhoncus orci vulputate. Enim laoreet tortor tincidunt sit.",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nascetur sapien nulla in turpis sodales. Eu molestie enim luctus egestas. Tincidunt netus non urna proin tempus pulvinar rhoncus orci vulputate. Enim laoreet tortor tincidunt sit.",
  },
];

export default function UnlockGrowthSection() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-[107px]">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[45%] xl:w-[40%] flex-shrink-0"
          >
            <h2
              className="text-[#363636] text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.15] italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Unlock Growth,
              <br />
              with Our Expert Services.
            </h2>
          </motion.div>

          {/* Right - Service Cards */}
          <div className="lg:w-[55%] xl:w-[60%] flex flex-col gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#f0f0f0] rounded-2xl p-6 md:p-7 overflow-hidden"
              >
                {/* Number */}
                <p
                  className="text-black text-[52px] md:text-[60px] lg:text-[68px] font-bold leading-[1] mb-6 md:mb-8 lg:mb-10"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.number}
                </p>

                {/* Content */}
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 className="text-black text-xl md:text-2xl font-bold leading-[1.35] tracking-[-0.03em]">
                    {service.title}
                  </h3>
                  <p className="text-black/50 text-sm md:text-base font-semibold leading-[1.5] tracking-[-0.02em]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

