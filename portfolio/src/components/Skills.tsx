import { useMemo, useState } from "react";
import "../styles/Skills.css";

import { getSkillStats } from "../utils/skill";
import type { SkillCategory } from "../types/skills";

type SortType = "usage" | "category" | "alphabet";

const categories: ("All" | SkillCategory)[] = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "AI",
  "Tools",
  "Other",
];

export default function Skills() {
  const [options, setOptions] = useState({
    sort: "usage" as SortType,
    filter: "All" as "All" | SkillCategory,
  });

  const skills = useMemo(() => {
    let list = [...getSkillStats()];

    if (options.filter !== "All") {
      list = list.filter(
        (skill) => skill.category === options.filter
      );
    }

    switch (options.sort) {
      case "alphabet":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "category":
        list.sort((a, b) => {
          if (a.category === b.category) {
            return a.name.localeCompare(b.name);
          }

          return a.category.localeCompare(b.category);
        });
        break;

      case "usage":
      default:
        list.sort((a, b) => b.count - a.count);
        break;
    }

    return list;
  }, [options]);

  return (
    <section id="skills">
      <h2>Skills</h2>

      {/* Sort */}

      <div className="sort-buttons">
        {(["usage", "category", "alphabet"] as SortType[]).map(
          (sort) => (
            <button
              key={sort}
              className={
                options.sort === sort ? "active" : ""
              }
              onClick={() =>
                setOptions((prev) => ({
                  ...prev,
                  sort,
                }))
              }
            >
              {sort.charAt(0).toUpperCase() +
                sort.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Filter */}

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              options.filter === category
                ? "active"
                : ""
            }
            onClick={() =>
              setOptions((prev) => ({
                ...prev,
                filter: category,
              }))
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills */}

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`skill-card ${skill.category.toLowerCase()}`}
          >
            <div className="skill-header">
              <h3>{skill.name}</h3>

              <span>{skill.category}</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${skill.percent}%`,
                }}
              />
            </div>

            <div className="skill-footer">
              <span>{skill.count} Projects</span>

              <span>{skill.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
