import { useState } from "react";
import type { Project } from "../types/projects";
import { projects } from "../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";


export default function Projects() {


  const [selectedProject, setSelectedProject]
    = useState<Project | null>(null);


  const [filter, setFilter]
    = useState("All");



  console.log(
    "selectedProject:",
    selectedProject
  );



  const categories = [
    "All",
    ...new Set(
      projects.map(
        project => project.category
      )
    )
  ];



  const filteredProjects =
    filter === "All"
      ?
      projects
      :
      projects.filter(
        project =>
          project.category === filter
      );



  return (

    <section id="projects">


      <h2>
        Projects
      </h2>



      {/* Category Filter */}

      <div className="project-filter">


        {
          categories.map(category => (


            <button

              key={category}

              className={
                filter === category
                  ?
                  "active"
                  :
                  ""
              }

              onClick={() =>
                setFilter(category)
              }

            >

              {category}

            </button>


          ))
        }


      </div>





      {/* Project Cards */}

      <div className="projects-grid">


        {
          filteredProjects.map(project => (


            <ProjectCard

              key={project.id}

              project={project}

              onClick={setSelectedProject}

            />


          ))
        }


      </div>





      {/* Modal */}


      <ProjectModal

        project={selectedProject}

        onClose={() =>
          setSelectedProject(null)
        }

      />


    </section>

  );

}