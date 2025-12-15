/**
 * Swipe11 Careers API Service
 * Handles all API calls for jobs listing, job details, and applications
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_SWIPE11_API_URL || "https://card11-dev.vercel.app";
const API_TOKEN =
  process.env.NEXT_PUBLIC_SWIPE11_API_TOKEN ||
  "swipe11-dev-token-change-me-in-production";

// Types
export interface SalaryRange {
  min?: number;
  max?: number;
  currency?: string;
  period?: string;
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  workMode?: "onsite" | "hybrid" | "remote";
  employmentType: "full-time" | "part-time" | "contract" | "internship";
  experienceLevel?: "entry" | "mid" | "senior" | "lead" | "manager";
  salaryRange?: SalaryRange;
  intro?: string;
  isActive: boolean;
  createdAt: string;
}

export interface JobDetail extends Job {
  description?: { root: unknown };
  requirements?: { root: unknown };
  responsibilities?: { root: unknown };
  benefits?: { root: unknown };
  aboutUs?: { root: unknown };
  applicationDeadline?: string;
}

export interface Department {
  name: string;
  count: number;
}

export interface Pagination {
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface JobsListResponse {
  success: boolean;
  data: Job[];
  pagination: Pagination;
  departments?: string[];
}

export interface JobDetailResponse {
  success: boolean;
  data: JobDetail;
}

export interface DepartmentsResponse {
  success: boolean;
  data: Department[];
  total: number;
}

export interface JobsFilters {
  q?: string;
  department?: string;
  location?: string;
  workMode?: string;
  employmentType?: string;
  experienceLevel?: string;
  page?: number;
  limit?: number;
  sort?: string;
  includeDepartments?: boolean;
}

export interface ApplicationFormData {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  linkedin?: string;
  portfolio?: string;
  currentCompany?: string;
  currentRole?: string;
  yearsOfExperience?: number;
  noticePeriod?: string;
  expectedSalary?: string;
  coverLetter?: string;
  resume: File;
  source?: string;
  consent?: boolean;
}

export interface CreatorApplicationFormData {
  fullName: string;
  email: string;
  domain: string;
  instagramId?: string;
  linkedinProfile?: string;
  twitterProfile?: string;
  youtubeLink?: string;
  source?: string;
}

export interface ApiError {
  success: false;
  error: string;
  message: string;
}

// API Headers
const getHeaders = (includeContentType = true): HeadersInit => {
  const headers: HeadersInit = {
    Authorization: `Bearer ${API_TOKEN}`,
  };
  if (includeContentType) {
    headers["Content-Type"] = "application/json";
  }
  return headers;
};

/**
 * Fetch jobs list with optional filters
 */
export async function fetchJobs(
  filters: JobsFilters = {}
): Promise<JobsListResponse> {
  const params = new URLSearchParams();

  if (filters.q) params.append("q", filters.q);
  if (filters.department && filters.department !== "All Departments") {
    params.append("department", filters.department);
  }
  if (filters.location && filters.location !== "All Locations") {
    params.append("location", filters.location);
  }
  if (filters.workMode) params.append("workMode", filters.workMode);
  if (filters.employmentType && filters.employmentType !== "All Types") {
    params.append(
      "employmentType",
      filters.employmentType.toLowerCase().replace(" ", "-")
    );
  }
  if (filters.experienceLevel)
    params.append("experienceLevel", filters.experienceLevel);
  if (filters.page) params.append("page", filters.page.toString());
  if (filters.limit) params.append("limit", filters.limit.toString());
  if (filters.sort) params.append("sort", filters.sort);
  if (filters.includeDepartments) params.append("includeDepartments", "true");

  const url = `${API_BASE_URL}/api/swipe11/jobs${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Failed to fetch jobs");
  }

  return response.json();
}

/**
 * Fetch single job by slug or ID
 */
export async function fetchJobBySlug(slug: string): Promise<JobDetailResponse> {
  const url = `${API_BASE_URL}/api/swipe11/jobs/${slug}`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Failed to fetch job");
  }

  return response.json();
}

/**
 * Fetch all departments with job counts
 */
export async function fetchDepartments(): Promise<DepartmentsResponse> {
  const url = `${API_BASE_URL}/api/swipe11/jobs/departments`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Failed to fetch departments");
  }

  return response.json();
}

/**
 * Submit job application
 */
export async function submitApplication(data: ApplicationFormData): Promise<{
  success: boolean;
  message: string;
  applicationId?: string;
  jobTitle?: string;
}> {
  const formData = new FormData();

  formData.append("jobId", data.jobId);
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  if (data.phone) formData.append("phone", data.phone);
  if (data.linkedin) formData.append("linkedin", data.linkedin);
  if (data.portfolio) formData.append("portfolio", data.portfolio);
  if (data.currentCompany)
    formData.append("currentCompany", data.currentCompany);
  if (data.currentRole) formData.append("currentRole", data.currentRole);
  if (data.yearsOfExperience !== undefined) {
    formData.append("yearsOfExperience", data.yearsOfExperience.toString());
  }
  if (data.noticePeriod) formData.append("noticePeriod", data.noticePeriod);
  if (data.expectedSalary)
    formData.append("expectedSalary", data.expectedSalary);
  if (data.coverLetter) formData.append("coverLetter", data.coverLetter);
  formData.append("resume", data.resume);
  if (data.source) formData.append("source", data.source);
  if (data.consent !== undefined)
    formData.append("consent", data.consent.toString());

  const url = `${API_BASE_URL}/api/swipe11/applications`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit application");
  }

  return result;
}

/**
 * Submit creator/influencer partnership application
 */
export async function submitCreatorApplication(
  data: CreatorApplicationFormData
): Promise<{
  success: boolean;
  message: string;
  applicationId?: string;
}> {
  const url = `${API_BASE_URL}/api/swipe11/creators/apply`;

  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit creator application");
  }

  return result;
}

/**
 * Fetch available domain options for creator application
 */
export async function fetchCreatorDomains(): Promise<{
  success: boolean;
  domains: { value: string; label: string }[];
}> {
  const url = `${API_BASE_URL}/api/swipe11/creators/apply`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    // Return default domains if API fails
    return {
      success: true,
      domains: [
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
      ],
    };
  }

  return response.json();
}

// Utility function to convert rich text to HTML (basic implementation)
export function richTextToHtml(
  richText: { root: unknown } | undefined
): string {
  if (!richText || !richText.root) return "";

  // This is a simplified converter - in production you might want a more robust solution
  const processNode = (node: unknown): string => {
    if (!node || typeof node !== "object") return "";

    const n = node as Record<string, unknown>;

    if (n.type === "text" && typeof n.text === "string") {
      let text = n.text;
      if (n.bold) text = `<strong>${text}</strong>`;
      if (n.italic) text = `<em>${text}</em>`;
      if (n.underline) text = `<u>${text}</u>`;
      return text;
    }

    const children = Array.isArray(n.children)
      ? n.children.map(processNode).join("")
      : "";

    switch (n.type) {
      case "paragraph":
        return `<p>${children}</p>`;
      case "heading":
        const level = n.tag || "h2";
        return `<${level}>${children}</${level}>`;
      case "list":
        const tag = n.listType === "number" ? "ol" : "ul";
        return `<${tag}>${children}</${tag}>`;
      case "listitem":
        return `<li>${children}</li>`;
      case "link":
        return `<a href="${n.url}" target="_blank" rel="noopener noreferrer">${children}</a>`;
      case "root":
        return children;
      default:
        return children;
    }
  };

  return processNode(richText.root);
}

// Utility to format employment type for display
export function formatEmploymentType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
