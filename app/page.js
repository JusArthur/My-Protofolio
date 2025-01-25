import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ProjectsAndSkillsWithLines from "@/components/ProjectsAndSkillsWithLines";
import CompetitionExperience from "@/components/CompetitionExperience";
import ContactForm from "@/components/ContactForm";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <div className="-mt-96">
          <AboutMe />
        </div>

          <ProjectsAndSkillsWithLines />
        <CompetitionExperience />
        <ContactForm />

      </div>
    </div>
  );
}
