"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Loader2, Briefcase } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  fetchJobs,
  fetchDepartments,
  type Job,
  type Department,
  formatEmploymentType,
} from "@/app/lib/api/swipe11-careers";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const FilterDropdown = ({
  label,
  options,
  value,
  onChange,
  disabled,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`bg-white/75 border border-black/10 flex h-[50px] items-center justify-between px-3 py-1.5 rounded-lg w-full min-w-[200px] md:w-[290px] transition-colors ${
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/90"
        }`}
      >
        <span className="font-semibold text-sm text-black/75">
          {value === options[0] ? label : value}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-black/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-full bg-white border border-black/10 rounded-lg shadow-lg z-20 overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors ${
                  value === option ? "bg-blue-50 text-[#298bff]" : "text-black/75"
                }`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard = ({ job, index }: JobCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{
      duration: 0.4,
      delay: index * 0.05,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="border border-black/20 flex flex-col gap-3 px-4 md:px-6 py-4 md:py-5 rounded-2xl w-full hover:border-black/30 hover:shadow-sm transition-all"
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
      <h4 className="font-semibold text-[#1e1e1e] text-base md:text-lg leading-tight">
        {job.title}
      </h4>
      <span className="font-semibold text-sm text-black/75 sm:text-right whitespace-nowrap">
        {job.location}
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="font-semibold text-sm text-black/75">
        {formatEmploymentType(job.employmentType)}
      </span>
      <Link
        href={`/careers/${job.slug}`}
        className="flex items-center gap-2 group"
      >
        <span className="font-semibold text-sm text-[#298bff] uppercase tracking-wide group-hover:underline">
          Apply Now
        </span>
        <ArrowRight className="w-3 h-3 text-[#298bff] group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

interface DepartmentSectionProps {
  department: string;
  jobs: Job[];
  sectionIndex: number;
}

const DepartmentSection = ({
  department,
  jobs,
  sectionIndex,
}: DepartmentSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.5,
      delay: sectionIndex * 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="flex flex-col gap-5"
  >
    <h3 className="font-semibold text-[#1e1e1e] text-xl md:text-2xl">
      {department} ({jobs.length})
    </h3>
    <div className="flex flex-col gap-5">
      {jobs.map((job, index) => (
        <JobCard key={job.id} job={job} index={index} />
      ))}
    </div>
  </motion.div>
);

// Loading skeleton
const LoadingSkeleton = () => (
  <div className="flex flex-col gap-12 md:gap-[68px] animate-pulse">
    {[1, 2].map((section) => (
      <div key={section} className="flex flex-col gap-5">
        <div className="h-8 bg-gray-200 rounded w-48" />
        <div className="flex flex-col gap-5">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="flex justify-between">
                <div className="h-6 bg-gray-200 rounded w-64" />
                <div className="h-5 bg-gray-200 rounded w-32" />
              </div>
              <div className="flex justify-between">
                <div className="h-5 bg-gray-200 rounded w-24" />
                <div className="h-5 bg-gray-200 rounded w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Empty state
const EmptyState = ({
  hasFilters,
  onClearFilters,
}: {
  hasFilters: boolean;
  onClearFilters: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-16 md:py-24 text-center"
  >
    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
      <Briefcase className="w-10 h-10 text-gray-400" />
    </div>
    <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] mb-3">
      {hasFilters ? "No positions match your filters" : "No open positions"}
    </h3>
    <p className="text-black/60 text-base md:text-lg max-w-md mb-6">
      {hasFilters
        ? "Try adjusting your filters or clearing them to see all available positions."
        : "We don't have any open positions at the moment. Check back soon or follow us for updates!"}
    </p>
    {hasFilters && (
      <button
        onClick={onClearFilters}
        className="text-[#298bff] font-semibold hover:underline"
      >
        Clear all filters
      </button>
    )}
  </motion.div>
);

// Error state
const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-16 md:py-24 text-center"
  >
    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
      <span className="text-3xl">⚠️</span>
    </div>
    <h3 className="text-xl md:text-2xl font-semibold text-[#1e1e1e] mb-3">
      Failed to load positions
    </h3>
    <p className="text-black/60 text-base md:text-lg max-w-md mb-6">
      We encountered an error while loading job positions. Please try again.
    </p>
    <button
      onClick={onRetry}
      className="bg-[#298bff] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#298bff]/90 transition-colors"
    >
      Try again
    </button>
  </motion.div>
);

export default function OpenPositionsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState("All Types");

  // Build filter options
  const departmentOptions = [
    "All Departments",
    ...departments.map((d) => d.name),
  ];
  const locationOptions = [
    "All Locations",
    ...Array.from(new Set(jobs.map((j) => j.location))),
  ];
  const employmentTypeOptions = [
    "All Types",
    "Full-time",
    "Part-time",
    "Internship",
    "Contract",
  ];

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [jobsResponse, departmentsResponse] = await Promise.all([
        fetchJobs({ limit: 100 }),
        fetchDepartments(),
      ]);

      setJobs(jobsResponse.data || []);
      setDepartments(departmentsResponse.data || []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setError(err instanceof Error ? err.message : "Failed to load jobs");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Filter jobs client-side
  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment =
      departmentFilter === "All Departments" ||
      job.department === departmentFilter;
    const matchesLocation =
      locationFilter === "All Locations" ||
      job.location.includes(locationFilter);
    const matchesType =
      employmentTypeFilter === "All Types" ||
      formatEmploymentType(job.employmentType) === employmentTypeFilter;

    return matchesDepartment && matchesLocation && matchesType;
  });

  // Group jobs by department
  const groupedJobs = filteredJobs.reduce(
    (acc, job) => {
      if (!acc[job.department]) {
        acc[job.department] = [];
      }
      acc[job.department].push(job);
      return acc;
    },
    {} as Record<string, Job[]>
  );

  const totalPositions = filteredJobs.length;
  const hasFilters =
    departmentFilter !== "All Departments" ||
    locationFilter !== "All Locations" ||
    employmentTypeFilter !== "All Types";

  const clearFilters = () => {
    setDepartmentFilter("All Departments");
    setLocationFilter("All Locations");
    setEmploymentTypeFilter("All Types");
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 px-5 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-10 md:gap-[60px]">
        {/* Header and Filters */}
        <div className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#060606] text-3xl sm:text-4xl md:text-[48px] font-bold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Open positions{" "}
            {!isLoading && !error && (
              <span className="text-black/60">({totalPositions})</span>
            )}
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10"
          >
            <FilterDropdown
              label="Department"
              options={departmentOptions}
              value={departmentFilter}
              onChange={setDepartmentFilter}
              disabled={isLoading}
            />
            <FilterDropdown
              label="Location"
              options={locationOptions}
              value={locationFilter}
              onChange={setLocationFilter}
              disabled={isLoading}
            />
            <FilterDropdown
              label="Employment type"
              options={employmentTypeOptions}
              value={employmentTypeFilter}
              onChange={setEmploymentTypeFilter}
              disabled={isLoading}
            />
          </motion.div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex flex-col items-center py-8">
            <Loader2 className="w-8 h-8 text-[#298bff] animate-spin mb-4" />
            <p className="text-black/60">Loading positions...</p>
          </div>
        ) : error ? (
          <ErrorState onRetry={loadData} />
        ) : filteredJobs.length === 0 ? (
          <EmptyState hasFilters={hasFilters} onClearFilters={clearFilters} />
        ) : (
          <div className="flex flex-col gap-12 md:gap-[68px]">
            {Object.entries(groupedJobs).map(
              ([department, deptJobs], index) => (
                <DepartmentSection
                  key={department}
                  department={department}
                  jobs={deptJobs}
                  sectionIndex={index}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
