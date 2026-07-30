import { projects } from "../data/projects";

import ProjectCard from "./ProjectCard";

export default function Projects() {

  return (

    <section id="projects">

      <h2>

        Projects

      </h2>

      <div className="projects-grid">

        {projects.map(project => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>

    </section>

  );

}