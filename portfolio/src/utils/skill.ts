import { projects } from "../data/projects";
import type { Skill } from "../types/skills";

export interface SkillStat extends Skill {
  count: number;
  percent: number;
}

export function getSkillStats(): SkillStat[] {
  const totalProjects = projects.length;

  const map = new Map<string, SkillStat>();

  projects.forEach((project) => {
    project.skills.forEach((skill) => {
      const current = map.get(skill.name);

      if (current) {
        current.count++;
      } else {
        map.set(skill.name, {
          ...skill,
          count: 1,
          percent: 0,
        });
      }
    });
  });

  const result = [...map.values()].map((skill) => ({
    ...skill,
    percent: Math.round((skill.count / totalProjects) * 100),
  }));

  return result;
}