export type StudentProfile = {
  name: string;
  tagline: string;
  email: string;
  location: string;
  about: string;
  interests: string[];
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  tags: string[];
};

export const student: StudentProfile = {
  name: "Olivia Martin",
  tagline:
    "Business student specializing in internal audit, data analytics, and global strategy",
  email: "oliviamichellemartin@gmail.com",
  location: "New Orleans, Louisiana",
  about:
    "I'm a business student focused on internal audit and risk, with a growing interest in how data and AI are reshaping the way organizations detect fraud, manage risk, and make smarter decisions. I enjoy breaking down complex problems, whether that's analyzing data, researching emerging business trends, or exploring how technology can make processes more efficient and resilient. Outside the classroom, I'm drawn to global business and the way different markets and cultures approach risk differently. I'm currently building toward the CIA and looking for opportunities where audit meets innovation.",
  interests: [
    "Data Analytics — turning raw numbers into decisions that actually mean something",
    "Internal Audit & Risk — understanding what keeps organizations honest and resilient",
    "Fraud Examination — following the money and finding what doesn't add up",
    "AI in Business — exploring how automation and intelligence are changing the audit landscape",
    "Global Business & Travel — seeing how risk, culture, and strategy look different across borders",
    "Research & Problem-Solving — digging into complex questions until they make sense",
  ],
};

export const posts: BlogPostSummary[] = [
  {
    slug: "what-im-building-this-semester",
    title: "What I’m building this semester (and why)",
    date: "2026-01-10",
    excerpt:
      "A quick overview of my goals, the project I’m focusing on, and the habits I’m using to stay consistent.",
    tags: ["Personal", "Projects"],
  },
  {
    slug: "three-design-lessons-portfolio",
    title: "Three small design lessons from redesigning my portfolio",
    date: "2025-12-02",
    excerpt:
      "I kept the changes small: type scale, spacing, and clearer hierarchy. Here are the before/after takeaways.",
    tags: ["Design", "Process"],
  },
];

export function getPostHref(slug: string) {
  return `/blog/${slug}`;
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

