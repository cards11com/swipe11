"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const domainOptions = [
  "Fashion & Lifestyle",
  "Tech & Gadgets",
  "Food & Beverages",
  "Health & Fitness",
  "Travel & Tourism",
  "Finance & Business",
  "Education",
  "Entertainment",
  "Other",
];

export default function TalkToUsSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    domain: "",
    instagramId: "",
    linkedinProfile: "",
    twitterProfile: "",
    youtubeLink: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDomainSelect = (domain: string) => {
    setFormData((prev) => ({ ...prev, domain }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Background Container */}
        <div className="relative w-full min-h-[550px] md:min-h-[520px]">
          {/* Yellow Background with SVG */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/talk-to-us.svg"
              alt=""
              fill
              className="object-cover object-center scale-[1.3] md:scale-110 lg:scale-100"
              priority
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between h-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 gap-8 lg:gap-12">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 max-w-[400px] lg:flex-shrink-0"
            >
              <h2 className="text-[#363636] text-4xl sm:text-5xl md:text-[56px] font-black leading-[1.15] tracking-tight font-[family-name:var(--font-display)]">
                Talk to Us
              </h2>
              <p className="text-[#0d0d0d] text-base md:text-lg font-medium leading-[1.55] max-w-[303px]">
                Let&apos;s discuss how Swipe11 can help you achieve your
                business goals. Reach out to our team today.
              </p>
            </motion.div>

            {/* Form Card - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-auto"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[20px] p-6 md:p-8 w-full lg:w-[443px] shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  {/* Full Name & Email Row */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1 flex-1">
                      <label className="text-sm font-medium text-[#090909] font-[family-name:var(--font-display)]">
                        Full Name<span className="text-[#fc3333]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1 flex-1">
                      <label className="text-sm font-medium text-[#585859] font-[family-name:var(--font-display)]">
                        Email address<span className="text-[#fc3333]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        required
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Domain Dropdown */}
                  <div className="flex flex-col gap-1 relative">
                    <label className="text-sm font-medium text-[#585859] font-[family-name:var(--font-display)]">
                      Domain<span className="text-[#fc3333]">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all bg-white"
                    >
                      <span
                        className={
                          formData.domain
                            ? "text-[#111012]"
                            : "text-[#111012]/50"
                        }
                      >
                        {formData.domain || "Select an option"}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#94A3B8] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#b0b6be] rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
                        {domainOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleDomainSelect(option)}
                            className="w-full px-3 py-2 text-left text-[#111012] hover:bg-[#FFCC00]/10 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Instagram ID */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#585859] font-[family-name:var(--font-display)]">
                      Instagram ID
                    </label>
                    <input
                      type="text"
                      name="instagramId"
                      value={formData.instagramId}
                      onChange={handleInputChange}
                      placeholder="@yourusername"
                      className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Linkedin Profile */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#585859] font-[family-name:var(--font-display)]">
                      Linkedin profile
                    </label>
                    <input
                      type="text"
                      name="linkedinProfile"
                      value={formData.linkedinProfile}
                      onChange={handleInputChange}
                      placeholder="linkedin.com/in/yourprofile"
                      className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Twitter Profile */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#585859] font-[family-name:var(--font-display)]">
                      Twitter profile
                    </label>
                    <input
                      type="text"
                      name="twitterProfile"
                      value={formData.twitterProfile}
                      onChange={handleInputChange}
                      placeholder="@yourhandle"
                      className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Youtube Link */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#585859] font-[family-name:var(--font-display)]">
                      Youtube link
                    </label>
                    <input
                      type="text"
                      name="youtubeLink"
                      value={formData.youtubeLink}
                      onChange={handleInputChange}
                      placeholder="youtube.com/@yourchannel"
                      className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white font-medium text-base py-3 rounded-[10px] mt-2 hover:bg-black/90 transition-colors"
                  >
                    Submit application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

