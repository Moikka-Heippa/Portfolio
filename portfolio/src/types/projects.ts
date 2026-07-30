import type { Skill } from "./skills";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: Skill[];
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
}