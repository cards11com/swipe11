"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ravi Sutanjani",
    role: "CEO, Swipe 11",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 10+ years in digital marketing, driving innovation and growth.",
    linkedin: "https://linkedin.com/in/ravisutanjani",
    instagram: "https://instagram.com/ravisutanjani",
    twitter: "https://twitter.com/ravisutanjani",
  },
  {
    name: "Sneha Sharma",
    role: "Co-founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Strategic thinker passionate about building brands and creating meaningful experiences.",
    linkedin: "https://linkedin.com/in/snehasharma",
    instagram: "https://instagram.com/snehasharma",
    twitter: "https://twitter.com/snehasharma",
  },
  {
    name: "Prantik Kumar Seal",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack engineer crafting scalable solutions and leading technical innovation.",
    linkedin: "https://linkedin.com/in/prantikkumarseal",
    instagram: "https://instagram.com/prantikkumarseal",
    twitter: "https://twitter.com/prantikkumarseal",
  },
  {
    name: "Shashank Verma",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer transforming ideas into stunning visual experiences.",
    linkedin: "https://linkedin.com/in/shashankverma",
    instagram: "https://instagram.com/shashankverma",
    twitter: "https://twitter.com/shashankverma",
  },
  {
    name: "Priya Patel",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Growth expert specializing in brand strategy and digital marketing campaigns.",
    linkedin: "https://linkedin.com/in/priyapatel",
    instagram: "https://instagram.com/priyapatel",
    twitter: "https://twitter.com/priyapatel",
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Product strategist focused on building user-centric digital solutions.",
    linkedin: "https://linkedin.com/in/arjunmehta",
    instagram: "https://instagram.com/arjunmehta",
    twitter: "https://twitter.com/arjunmehta",
  },
  {
    name: "Ananya Singh",
    role: "Content Lead",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Storyteller crafting compelling narratives that drive brand engagement.",
    linkedin: "https://linkedin.com/in/ananyasingh",
    instagram: "https://instagram.com/ananyasingh",
    twitter: "https://twitter.com/ananyasingh",
  },
  {
    name: "Rahul Gupta",
    role: "Operations Head",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Operations expert ensuring seamless delivery and client satisfaction.",
    linkedin: "https://linkedin.com/in/rahulgupta",
    instagram: "https://instagram.com/rahulgupta",
    twitter: "https://twitter.com/rahulgupta",
  },
];

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Instagram Icon Component
const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Twitter/X Icon Component
const TwitterIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="flex flex-col gap-[10px] p-[10px] w-full group"
  >
    {/* Image Container with Hover Overlay */}
    <div className="relative w-full aspect-square overflow-hidden rounded-lg">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 23vw, 256px"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 md:p-4">
        {/* Bio Text */}
        <p className="text-white text-xs sm:text-sm leading-snug mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          {member.linkedin && (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#0077b5] hover:text-white text-[#0077b5] transition-all duration-200 shadow-lg"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <LinkedInIcon />
            </Link>
          )}
          {member.instagram && (
            <Link
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white text-[#E4405F] transition-all duration-200 shadow-lg"
              aria-label={`${member.name}'s Instagram`}
            >
              <InstagramIcon />
            </Link>
          )}
          {member.twitter && (
            <Link
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-black hover:text-white text-black transition-all duration-200 shadow-lg"
              aria-label={`${member.name}'s Twitter`}
            >
              <TwitterIcon />
            </Link>
          )}
        </div>
      </div>
    </div>

    {/* Name and Role */}
    <div className="flex flex-col gap-1 px-2 md:px-5">
      <h3 className="text-[#060606] text-base md:text-lg font-medium leading-[24px]">
        {member.name}
      </h3>
      <p className="text-[#060606] text-xs md:text-sm leading-[20px] opacity-60">
        {member.role}
      </p>
    </div>
  </motion.div>
);

export default function AboutTeamSection() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-[73px] items-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#060606] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.02em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meet the team
        </motion.h2>

        {/* Team Grid - 2 rows of 4 */}
        <div className="w-full">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-12 justify-items-center mb-4 md:mb-6 lg:mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-12 justify-items-center">
            {teamMembers.slice(4, 8).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
