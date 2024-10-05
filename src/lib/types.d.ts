interface NavItem {
  href: string;
  label: string;
}

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  slug: string;
  readingTime: number;
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

type BlogCategory =
  | 'Web Development'
  | 'Programming'
  | 'Software Engineering'
  | 'DevOps'
  | 'AI & Machine Learning'
  | 'Career Advice'
  | 'Tech Trends'
  | 'Cybersecurity';

declare module 'react-intersection-observer';

interface IIMAGE {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface IVARIANT {
  [key: string]: Variant;
}
