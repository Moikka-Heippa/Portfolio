export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Language"
  | "AI"
  | "Tools"
  | "Other";

export interface Skill {
  id?: string;
  name: string;
  category: SkillCategory;
  icon?: React.ReactNode;
}