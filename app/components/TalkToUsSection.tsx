"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import {
  submitCreatorApplication,
  fetchCreatorDomains,
} from "@/app/lib/api/swipe11-careers";

interface DomainOption {
  value: string;
  label: string;
}

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

  const [domainOptions, setDomainOptions] = useState<DomainOption[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch domain options on mount
  const loadDomains = useCallback(async () => {
    try {
      const response = await fetchCreatorDomains();
      if (response.success && response.domains) {
        setDomainOptions(response.domains);
      }
    } catch (err) {
      console.error("Failed to fetch domains:", err);
      // Use fallback domains
      setDomainOptions([
        { value: "finance", label: "Finance" },
        { value: "technology", label: "Technology" },
        { value: "lifestyle", label: "Lifestyle" },
        { value: "travel", label: "Travel" },
        { value: "food", label: "Food" },
        { value: "fashion", label: "Fashion" },
        { value: "gaming", label: "Gaming" },
        { value: "education", label: "Education" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health-fitness", label: "Health & Fitness" },
        { value: "business", label: "Business" },
        { value: "other", label: "Other" },
      ]);
    }
  }, []);

  useEffect(() => {
    loadDomains();
  }, [loadDomains]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitError(null);
  };

  const handleDomainSelect = (domainValue: string) => {
    setFormData((prev) => ({ ...prev, domain: domainValue }));
    setIsDropdownOpen(false);
    setSubmitError(null);
  };

  const getSelectedDomainLabel = () => {
    const selected = domainOptions.find((d) => d.value === formData.domain);
    return selected?.label || "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitCreatorApplication({
        fullName: formData.fullName,
        email: formData.email,
        domain: formData.domain,
        instagramId: formData.instagramId || undefined,
        linkedinProfile: formData.linkedinProfile || undefined,
        twitterProfile: formData.twitterProfile || undefined,
        youtubeLink: formData.youtubeLink || undefined,
        source: "website-creators-page",
      });

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        domain: "",
        instagramId: "",
        linkedinProfile: "",
        twitterProfile: "",
        youtubeLink: "",
      });
    } catch (err) {
      console.error("Failed to submit creator application:", err);
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit application"
      );
    } finally {
      setIsSubmitting(false);
    }
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
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[20px] p-6 md:p-8 w-full lg:w-[443px] shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-[#585859] text-sm mb-4">
                    Thank you for your interest in partnering with Swipe11.
                    We&apos;ll review your application and get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-[#2924ff] font-medium text-sm hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-[20px] p-6 md:p-8 w-full lg:w-[443px] shadow-lg"
                >
                  <div className="flex flex-col gap-4">
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

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
                          disabled={isSubmitting}
                          className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all disabled:opacity-50"
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
                          disabled={isSubmitting}
                          className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all disabled:opacity-50"
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
                        onClick={() =>
                          !isSubmitting && setIsDropdownOpen(!isDropdownOpen)
                        }
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all bg-white disabled:opacity-50"
                      >
                        <span
                          className={
                            formData.domain
                              ? "text-[#111012]"
                              : "text-[#111012]/50"
                          }
                        >
                          {getSelectedDomainLabel() || "Select an option"}
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
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsDropdownOpen(false)}
                          />
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#b0b6be] rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
                            {domainOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => handleDomainSelect(option.value)}
                                className={`w-full px-3 py-2 text-left transition-colors ${
                                  formData.domain === option.value
                                    ? "bg-[#FFCC00]/20 text-[#111012]"
                                    : "text-[#111012] hover:bg-[#FFCC00]/10"
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </>
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
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all disabled:opacity-50"
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
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all disabled:opacity-50"
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
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all disabled:opacity-50"
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
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-[#b0b6be] rounded-md text-base text-[#111012] placeholder:text-[#111012]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full bg-black text-white font-medium text-base py-3 rounded-[10px] mt-2 hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit application"
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
