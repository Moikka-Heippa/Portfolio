import type { Project } from "../types/projects";

type Props = {
  project: Project;
  onClick?: (project: Project) => void;
};


export default function ProjectCard({
  project,
  onClick,
}: Props) {

  return (

    <article
      className="project-card"
      onClick={() => onClick?.(project)}
    >


      {/* Demo link */}

      <a
        className="project-image"
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"

        onClick={(e)=>{
          e.stopPropagation();
        }}
      >

        <img
          src={project.image}
          alt={project.title}
        />

      </a>



      <div className="project-content">


        <h3>
          {project.title}
        </h3>


        <p>
          {project.description}
        </p>



        <div className="project-skills">

          {
            project.skills.map(skill => (

              <span
                key={skill.id}
              >
                {skill.name}
              </span>

            ))
          }

        </div>



        <div className="project-footer">


          <span>
            {project.category}
          </span>



          {
            project.github && (

              <a
                className="github-link"

                href={project.github}

                target="_blank"

                rel="noopener noreferrer"

                onClick={(e)=>{
                  e.stopPropagation();
                }}
              >
                GitHub →
              </a>

            )
          }


        </div>


      </div>


    </article>

  );
}