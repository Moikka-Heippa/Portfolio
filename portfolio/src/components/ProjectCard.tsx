import type { Project } from "../types/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project
}: Props) {

  return (

    <article className="project-card">

      <div className="project-header">

        <h3>

          {project.title}

        </h3>

        <div className="project-tags">

          {project.tags.map(tag => (

            <span
              key={tag}
              className="tag"
            >

              {tag}

            </span>

          ))}

        </div>

      </div>

      <p className="project-description">

        {project.description}

      </p>

      <div className="project-skills">

        {project.skills.map(skill => (

          <span
            key={skill.name}
            className="skill-chip"
          >

            {skill.name}

          </span>

        ))}

      </div>

      <div className="project-links">

        {project.github && (

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >

            GitHub →

          </a>

        )}

        {project.demo && (

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >

            Demo →

          </a>

        )}

      </div>

    </article>

  );

}