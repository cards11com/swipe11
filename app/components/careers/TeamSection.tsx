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
  website: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ravi Sutanjani",
    role: "CEO, Swipe 11",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 10+ years in digital marketing, driving innovation and growth at Swipe 11.",
    linkedin: "https://linkedin.com/in/ravisutanjani",
    website: "https://ravisutanjani.com",
  },
  {
    name: "Sneha",
    role: "Co founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Strategic thinker passionate about building brands and creating meaningful digital experiences.",
    linkedin: "https://linkedin.com/in/sneha",
    website: "https://sneha.com",
  },
  {
    name: "Prantik Kumar Seal",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack engineer crafting scalable solutions and leading technical innovation.",
    linkedin: "https://linkedin.com/in/prantikkumarseal",
    website: "https://prantik.dev",
  },
  {
    name: "Shashank",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer transforming ideas into stunning visual experiences that captivate users.",
    linkedin: "https://linkedin.com/in/shashank",
    website: "https://shashank.design",
  },
];

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
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

// Personal Link Icon Component
const LinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59699 21.9548 8.33398 21.9434 7.02299C21.932 5.71201 21.4061 4.45794 20.4791 3.5309C19.5521 2.60386 18.298 2.07802 16.987 2.06663C15.676 2.05523 14.413 2.55921 13.47 3.47L11.75 5.18"
      stroke="#00A651"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11C13.5705 10.4259 13.0226 9.9508 12.3934 9.60707C11.7642 9.26334 11.0685 9.05886 10.3533 9.00766C9.63816 8.95646 8.92037 9.05964 8.24861 9.31023C7.57685 9.56082 6.96684 9.95294 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.5421 3.52086 20.4691C4.4479 21.3961 5.70197 21.922 7.01295 21.9334C8.32394 21.9448 9.58694 21.4408 10.53 20.53L12.24 18.82"
      stroke="#00A651"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="flex flex-col gap-[10px] p-[10px] w-full max-w-[280px] group"
  >
    {/* Image Container with Hover Overlay */}
    <div className="relative w-full aspect-square overflow-hidden rounded-lg">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        {/* Bio Text */}
        <p className="text-white text-xs sm:text-sm leading-normal mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <LinkedInIcon />
          </Link>
          <Link
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
            aria-label={`${member.name}'s Website`}
          >
            <LinkIcon />
          </Link>
        </div>
      </div>
    </div>

    {/* Name and Role */}
    <div className="flex flex-col gap-1 px-2">
      <h3 className="text-[#060606] text-lg font-medium leading-[24px]">
        {member.name}
      </h3>
      <p className="text-[#060606] text-sm leading-[20px] opacity-60">
        {member.role}
      </p>
    </div>
  </motion.div>
);

export default function TeamSection() {
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

        {/* Team Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
