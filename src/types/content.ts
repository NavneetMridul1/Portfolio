export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  about: string[];
  links: {
    linkedin: string;
    github: string;
    portfolio: string;
    leetcode: string;
    codechef: string;
    codeforces: string;
    crio: string;
  };
  education: {
    institution: string;
    degree: string;
    timeline: string;
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: string;
  year: string;
};

export type SkillGroup = {
  category: "Languages" | "Technologies" | "Tools";
  items: string[];
};

export type Achievement = {
  title: string;
  metric: string;
  detail: string;
  year: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export type DeployedProject = {
  name: string;
  summary: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
};

export type SchoolingItem = {
  institution: string;
  level: string;
  score: string;
  year: string;
};
