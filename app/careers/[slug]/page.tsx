"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Upload, Loader2, ArrowLeft } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  fetchJobBySlug,
  submitApplication,
  richTextToHtml,
  formatEmploymentType,
  type JobDetail,
} from "@/app/lib/api/swipe11-careers";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  whyJoin: string;
  resume: File | null;
}

// Loading skeleton for job detail
const JobDetailSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-[#ededed] px-5 md:px-10 lg:px-[245px] py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
          <div className="flex flex-col gap-3">
            <div className="h-10 bg-gray-300 rounded w-80" />
            <div className="flex gap-4">
              <div className="h-5 bg-gray-300 rounded w-24" />
              <div className="h-5 bg-gray-300 rounded w-32" />
            </div>
          </div>
          <div className="h-10 bg-gray-300 rounded w-28" />
        </div>
      </div>
    </div>
    <div className="px-5 md:px-10 lg:px-[245px] py-12 md:py-16 max-w-[1440px] mx-auto">
      <div className="max-w-[950px] flex flex-col gap-12 md:gap-[60px]">
        <div className="flex flex-col gap-3">
          <div className="h-8 bg-gray-200 rounded w-48" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Error state
const ErrorState = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <main className="mt-16 md:mt-20 min-h-screen flex items-center justify-center px-5">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">⚠️</span>
      </div>
      <h1 className="text-2xl font-bold text-[#1e1e1e] mb-4">
        Failed to load job
      </h1>
      <p className="text-black/60 mb-6 max-w-md">{message}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRetry}
          className="bg-[#2924ff] text-white font-semibold px-6 py-2.5 rounded hover:bg-[#2924ff]/90 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/careers"
          className="text-[#2924ff] font-semibold px-6 py-2.5 hover:underline flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>
      </div>
    </motion.div>
  </main>
);

// Not found state
const NotFoundState = () => (
  <main className="mt-16 md:mt-20 min-h-screen flex items-center justify-center px-5">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Briefcase className="w-10 h-10 text-gray-400" />
      </div>
      <h1 className="text-2xl font-bold text-[#1e1e1e] mb-4">Job Not Found</h1>
      <p className="text-black/60 mb-6 max-w-md">
        The position you&apos;re looking for doesn&apos;t exist or has been
        filled.
      </p>
      <Link
        href="/careers"
        className="text-[#2924ff] font-semibold hover:underline flex items-center justify-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Careers
      </Link>
    </motion.div>
  </main>
);

export default function CareerDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [job, setJob] = useState<JobDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    whyJoin: "",
    resume: null,
  });

  const [fileName, setFileName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const loadJob = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const response = await fetchJobBySlug(params.slug);
      if (response.success && response.data) {
        setJob(response.data);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.error("Failed to fetch job:", err);
      if (
        err instanceof Error &&
        (err.message.includes("not found") || err.message.includes("404"))
      ) {
        setNotFound(true);
      } else {
        setError(err instanceof Error ? err.message : "Failed to load job");
      }
    } finally {
      setIsLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    loadJob();
  }, [loadJob]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setSubmitError("File size must be less than 10MB");
        return;
      }
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setSubmitError("Please upload a PDF or DOC file");
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job || !formData.resume) {
      setSubmitError("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitApplication({
        jobId: job.slug || job.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        linkedin: formData.linkedin || undefined,
        portfolio: formData.portfolio || undefined,
        coverLetter: formData.whyJoin || undefined,
        resume: formData.resume,
        source: "website",
        consent: true,
      });

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        whyJoin: "",
        resume: null,
      });
      setFileName("");
    } catch (err) {
      console.error("Failed to submit application:", err);
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit application"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <main className="mt-16 md:mt-20">
        <JobDetailSkeleton />
      </main>
    );
  }

  if (notFound) {
    return <NotFoundState />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadJob} />;
  }

  if (!job) {
    return <NotFoundState />;
  }

  // Convert rich text fields to HTML
  const descriptionHtml = richTextToHtml(job.description);
  const aboutUsHtml = richTextToHtml(job.aboutUs);
  const requirementsHtml = richTextToHtml(job.requirements);
  const responsibilitiesHtml = richTextToHtml(job.responsibilities);
  const benefitsHtml = richTextToHtml(job.benefits);

  return (
    <main className="mt-16 md:mt-20">
      {/* Job Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#ededed] px-5 md:px-10 lg:px-[245px] py-8 md:py-10"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Back link */}
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">All positions</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
            <div className="flex flex-col gap-3">
              <h1
                className="font-bold text-[#1e1e1e] text-2xl md:text-[32px] leading-tight md:leading-[42px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4 md:gap-5 items-center">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-black/60" />
                  <span className="font-medium text-sm text-black/75">
                    {formatEmploymentType(job.employmentType)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-black/60" />
                  <span className="font-medium text-sm text-black/75">
                    {job.location}
                  </span>
                </div>
                {job.workMode && (
                  <span className="text-sm text-black/60 capitalize">
                    ({job.workMode})
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="bg-[#2924ff] text-white font-semibold text-sm px-4 py-2 rounded hover:bg-[#2924ff]/90 transition-colors w-fit"
            >
              Apply now
            </button>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <div className="px-5 md:px-10 lg:px-[245px] py-12 md:py-16 max-w-[1440px] mx-auto">
        <div className="max-w-[950px] flex flex-col gap-12 md:gap-[60px]">
          {/* Intro */}
          {job.intro && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <p className="font-medium text-base md:text-lg text-[rgba(50,50,50,0.9)] leading-7 md:leading-[30px] tracking-tight">
                {job.intro}
              </p>
            </motion.section>
          )}

          {/* Job Description */}
          {descriptionHtml && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <h2 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl leading-8">
                Job Description
              </h2>
              <div
                className="prose prose-lg max-w-none text-[rgba(50,50,50,0.9)] prose-headings:text-[#1e1e1e] prose-p:leading-7 prose-li:leading-7"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            </motion.section>
          )}

          {/* Requirements */}
          {requirementsHtml && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col gap-3"
            >
              <h2 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl leading-8">
                Requirements
              </h2>
              <div
                className="prose prose-lg max-w-none text-[rgba(50,50,50,0.9)] prose-headings:text-[#1e1e1e] prose-p:leading-7 prose-li:leading-7"
                dangerouslySetInnerHTML={{ __html: requirementsHtml }}
              />
            </motion.section>
          )}

          {/* Responsibilities */}
          {responsibilitiesHtml && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <h2 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl leading-8">
                Responsibilities
              </h2>
              <div
                className="prose prose-lg max-w-none text-[rgba(50,50,50,0.9)] prose-headings:text-[#1e1e1e] prose-p:leading-7 prose-li:leading-7"
                dangerouslySetInnerHTML={{ __html: responsibilitiesHtml }}
              />
            </motion.section>
          )}

          {/* Benefits */}
          {benefitsHtml && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-3"
            >
              <h2 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl leading-8">
                Benefits & Perks
              </h2>
              <div
                className="prose prose-lg max-w-none text-[rgba(50,50,50,0.9)] prose-headings:text-[#1e1e1e] prose-p:leading-7 prose-li:leading-7"
                dangerouslySetInnerHTML={{ __html: benefitsHtml }}
              />
            </motion.section>
          )}

          {/* About Us */}
          {aboutUsHtml && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <h2 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl leading-8">
                About Us
              </h2>
              <div
                className="prose prose-lg max-w-none text-[rgba(50,50,50,0.9)] prose-headings:text-[#1e1e1e] prose-p:leading-7 prose-li:leading-7"
                dangerouslySetInnerHTML={{ __html: aboutUsHtml }}
              />
            </motion.section>
          )}

          {/* Application Form */}
          <motion.section
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl leading-8">
              Submit Your Application
            </h2>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-green-700">
                  Thank you for applying. We&apos;ll review your application and
                  get back to you soon.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 mt-4 text-green-700 font-medium hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View more positions
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                    {submitError}
                  </div>
                )}

                {/* First Name & Last Name */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="border border-black/20 rounded-md h-9 px-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="border border-black/20 rounded-md h-9 px-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className="border border-black/20 rounded-md h-9 px-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0123456789"
                      className="border border-black/20 rounded-md h-9 px-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* LinkedIn & Portfolio */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="linkedin.com/in/example"
                      className="border border-black/20 rounded-md h-9 px-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                      Portfolio / Website
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="yourportfolio.com"
                      className="border border-black/20 rounded-md h-9 px-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="flex flex-col gap-1 max-w-[718px]">
                  <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                    Why do you wish to join Swipe11?
                  </label>
                  <textarea
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    className="border border-black/20 rounded-md h-[178px] p-2 text-sm text-[rgba(50,50,50,0.9)] placeholder:opacity-50 focus:outline-none focus:border-black/40 transition-colors resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col gap-3">
                  <label className="font-medium text-base text-[rgba(50,50,50,0.9)] opacity-80 tracking-tight">
                    Upload your resume/CV<span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col gap-1">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={isSubmitting}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isSubmitting}
                      className="border border-black rounded px-3.5 py-2 flex items-center gap-2.5 w-fit hover:bg-black/5 transition-colors disabled:opacity-50"
                    >
                      <span className="font-semibold text-sm text-black">
                        {fileName || "Upload resume"}
                      </span>
                      <Upload className="w-4 h-4 text-black" />
                    </button>
                    <p className="text-xs text-[rgba(50,50,50,0.9)] opacity-80 italic tracking-tight">
                      Upload only PDF or DOC files, 10MB max
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2924ff] text-white font-semibold text-sm px-3.5 py-2.5 rounded hover:bg-[#2924ff]/90 transition-colors w-fit disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </motion.section>
        </div>
      </div>
    </main>
  );
}
