export interface Project {
  id: number;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Coming Soon";
  featured: boolean;
  technologies: string[];
  highlights: string[];
  github?: string;
  live?: string;
}