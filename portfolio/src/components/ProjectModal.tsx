import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "../types/projects";

//import "../styles/projectmodal.css";


type Props = {
  project: Project | null;
  onClose: () => void;
};


export default function ProjectModal({
  project,
  onClose,
}: Props) {


  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {

      if (e.key === "Escape") {
        onClose();
      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [onClose]);



  useEffect(() => {

    document.body.style.overflow =
      project ? "hidden" : "";


    return () => {

      document.body.style.overflow = "";

    };

  }, [project]);



  if (!project) return null;



  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >


      <div
        className="project-modal"
        onClick={(e)=>e.stopPropagation()}
      >


        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>



        {
          project.demo ? (

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-image-wrapper"
            >

              <img
                src={project.image}
                alt={project.title}
                className="modal-image"
              />


              <div className="modal-image-overlay">

                <ExternalLink size={18}/>

                <span>
                  Open Live Demo
                </span>

              </div>


            </a>

          ) : (

            <div className="modal-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
                className="modal-image"
              />

            </div>

          )
        }



        <div className="modal-content">


          <h2>
            {project.title}
          </h2>



          <p className="modal-description">
            {project.description}
          </p>



          <div className="modal-skills">

            {
              project.skills.map(skill=>(

                <span
                  key={skill.id}
                  className="skill-pill"
                >
                  {skill.name}
                </span>

              ))
            }

          </div>




          <div className="modal-actions">


            {
              project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >

                  GitHub

                </a>

              )
            }



            {
              project.demo && (

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-button"
                >

                  <ExternalLink size={18}/>

                  Live Demo

                </a>

              )
            }


          </div>


        </div>


      </div>


    </div>

  );

}