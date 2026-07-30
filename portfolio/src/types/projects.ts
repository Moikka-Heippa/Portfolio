import type { Skill } from "./skills";

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  tags: string[];
  github?: string;
  demo?: string;
}