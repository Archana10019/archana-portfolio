import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skill.jsx";
import Project from "./components/project/Project.jsx";
import ProjectCard from "./components/project/ProjectCard.jsx";
   
import Footer from "./components/contact/Footer.jsx";
import Resume from "./components/resume/Resume.jsx";



function App() {
  return<div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <ProjectCard/>
    <Resume/>
    <Footer/>

  </div>


}

export default App