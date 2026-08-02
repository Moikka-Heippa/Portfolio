//import "../styles/Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-icons">
        <a
          href="mailto:moikka.heippa.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Moikka-Heippa"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@Moikka-Heippa"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
    </section>
  );
}
