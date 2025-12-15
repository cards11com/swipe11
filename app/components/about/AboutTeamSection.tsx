"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ravi Sutanjani",
    role: "CEO, Swipe 11",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 10+ years in digital marketing, driving innovation and growth.",
    linkedin: "https://linkedin.com/in/ravisutanjani",
  },
  {
    name: "Sneha Sharma",
    role: "Co-founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Strategic thinker passionate about building brands and creating meaningful experiences.",
    linkedin: "https://linkedin.com/in/snehasharma",
  },
  {
    name: "Prantik Kumar Seal",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack engineer crafting scalable solutions and leading technical innovation.",
    linkedin: "https://linkedin.com/in/prantikkumarseal",
  },
  {
    name: "Shashank Verma",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer transforming ideas into stunning visual experiences.",
    linkedin: "https://linkedin.com/in/shashankverma",
  },
  {
    name: "Priya Patel",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Growth expert specializing in brand strategy and digital marketing campaigns.",
    linkedin: "https://linkedin.com/in/priyapatel",
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Product strategist focused on building user-centric digital solutions.",
    linkedin: "https://linkedin.com/in/arjunmehta",
  },
  {
    name: "Ananya Singh",
    role: "Content Lead",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Storyteller crafting compelling narratives that drive brand engagement.",
    linkedin: "https://linkedin.com/in/ananyasingh",
  },
  {
    name: "Rahul Gupta",
    role: "Operations Head",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    bio: "Operations expert ensuring seamless delivery and client satisfaction.",
    linkedin: "https://linkedin.com/in/rahulgupta",
  },
];

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
      fill="#00A651"
    />
    <path d="M6 9H2V21H6V9Z" fill="#00A651" />
    <path
      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
      fill="#00A651"
    />
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
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <LinkedInIcon />
          </Link>
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


