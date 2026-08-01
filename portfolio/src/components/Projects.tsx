import { useState } from "react";

import type { Project } from "../types/projects";

import { projects } from "../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {


  const [selectedProject, setSelectedProject]
    = useState<Project | null>(null);



  return (

    <section id="projects">


      <h2>
        Projects
      </h2>



      <div className="projects-grid">

        {
          projects.map((project) => (

            <ProjectCard

              key={project.id}

              project={project}

              onClick={setSelectedProject}

            />

          ))
        }

      </div>

        console.log("selectedProject:", selectedProject);

      <ProjectModal

        project={selectedProject}

        onClose={() =>
          setSelectedProject(null)
        }

      />


    </section>

  );

}