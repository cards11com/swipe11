"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinksLeft = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const navLinksRight = [
  { href: "/creators", label: "For creators" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full py-6 px-6 md:px-12 lg:px-20 transition-all duration-300 ${
        isOpen
          ? "bg-white"
          : scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        {/* Left Navigation - Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinksLeft.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={link.href}
                className={`text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-black block"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-black block"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-black block"
          />
        </button>

        {/* Logo - Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Swipe11"
              width={97}
              height={22}
              priority
            />
          </Link>
        </motion.div>

        {/* Right Navigation - Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinksRight.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={link.href}
                className={`text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Spacer for mobile to balance hamburger */}
        <div className="lg:hidden w-10" />
      </div>

    </motion.nav>
    
    {/* Mobile Menu - Outside nav to prevent z-index conflicts */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-white z-40 lg:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {[...navLinksLeft, ...navLinksRight].map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-black underline underline-offset-4"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
