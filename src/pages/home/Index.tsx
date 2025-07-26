import LandingSection from "./section/LandingSection";
import ProjectsSection from "./section/ProjectsSection";
import { data } from "../../data"

export default function HomeIndex() {
  console.log(data[0].title)
  
  return (
    <>
      <LandingSection />
      <ProjectsSection />
    </>
  )
}