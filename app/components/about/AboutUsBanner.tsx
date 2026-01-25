"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsBanner() {
  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full aspect-[1280/596] rounded-[30px] md:rounded-[45px] lg:rounded-[60px] overflow-hidden"
        >
          <Image
            src="/about-us-hero.jpg"
            alt="Team collaboration - people working together around laptops"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
