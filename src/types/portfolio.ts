export interface KernelData {
  name: string;
  version: string;
  status: string;
}

export interface DeveloperData {
  prefix: string;
  firstName: string;
  lastName: string;
  roleTag: string;
  tagline: string;
  description: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  email: string;
  location: string;
  status: string;
  osDemoUrl: string;
  avatarUrl: string;
}

export interface TerminalConfig {
  filename: string;
  comment: string;
  importPath: string;
  componentName: string;
  props: {
    name: string;
    role: string;
    passion: string;
  };
}

export interface StatItem {
  label: string;
  value: string;
  unit: string;
  iconName: "cpu" | "code" | "coffee";
  colorClass: string;
}

export interface AboutData {
  operatorName: string;
  role: string;
  location: string;
  status: string;
  whoami: string;
  mission: string;
  stats: StatItem[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface GitCommitExperience {
  period: string;
  commitHash: string;
  branch: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
  stats: {
    filesChanged: number;
    insertions: number;
    deletions: number;
  };
}

export interface PinnedProject {
  title: string;
  description: string;
  tags: string[];
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  demoUrl: string;
  repoUrl: string;
}

export interface GitHubRepoItem {
  name: string;
  isPublic: boolean;
  updatedAt: string;
  language?: string;
  languageColor?: string;
  url: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  pinned?: boolean;
  coverImage: string;
  url: string;
}

export interface PortfolioFullData {
  kernel: KernelData;
  developer: DeveloperData;
  loadedModules: string[];
  terminal: TerminalConfig;
  watermarks: {
    topRight: string;
    bottomLeft: string;
  };
  about: AboutData;
  skillsCategories: SkillCategory[];
  experiences: GitCommitExperience[];
  pinnedProjects: PinnedProject[];
  repositories: GitHubRepoItem[];
  blogs: BlogPost[];
}

