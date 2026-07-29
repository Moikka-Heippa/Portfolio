import { FaGithub, FaYoutube } from "react-icons/fa"

function App() {

  return (
    <div>
      <h1>Moikka-Heippa Portfolio</h1>
      <h2>Profile</h2>
      <p>
        Engineer / Researcher / Creator
      </p>

      <h2>Engineer</h2>
      <h3>Projects</h3>

      <h2>Business</h2>
      <h3>Projects</h3>

      <h2>Creative</h2>
      <h3>Projects</h3>

      <a href="https://github.com/Moikka-Heippa">
        <FaGithub size={40}/>
      </a>

      <a href="https://www.youtube.com/@Moikka-Heippa">
        <FaYoutube size={40}/>
      </a>

    </div>
  )
}


export default App