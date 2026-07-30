import { useEffect } from "react";

import type { Project } from "../types/projects";

import "./ProjectModal.css";


type Props = {

  project: Project | null;

  onClose: () => void;

};


export default function ProjectModal({
  project,
  onClose,
}: Props) {


  // ESCで閉じる

  useEffect(() => {

    const handleKeyDown = (
      e: KeyboardEvent
    ) => {

      if(e.key === "Escape"){

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


  },[onClose]);



  if(!project) return null;



  return (

    <div
      className="modal-overlay"

      onClick={onClose}
    >


      <div
        className="project-modal"

        onClick={(e)=>
          e.stopPropagation()
        }
      >


        <button
          className="modal-close"

          onClick={onClose}
        >
          ×
        </button>



        <img
          className="modal-image"

          src={project.image}

          alt={project.title}

        />



        <div className="modal-content">


          <h2>
            {project.title}
          </h2>


          <p>
            {project.description}
          </p>



          <div className="modal-skills">

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



          <div className="modal-links">


            {
              project.github && (

                <a
                  href={project.github}

                  target="_blank"

                  rel="noopener noreferrer"
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
                >
                  Demo
                </a>

              )
            }


          </div>


        </div>


      </div>


    </div>

  );

}