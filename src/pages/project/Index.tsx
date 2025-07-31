import { useGSAP } from "@gsap/react"
import Card from "../../components/Card"
import { data } from "../../data.ts"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default function ProjectIndex() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.fromTo('.project-content',
      {
        opacity: 0,
        y: 10,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.project-content',
          start: "bottom 40%",
        },
        stagger: 0.3,
      }
    )
  }, [])


  return (
    <>
      <div className='w-full pt-32 pb-32 px-6 lg:px-12 xl:px-32'>
        <div className="mb-12">
          <div className="flex gap-8 items-stretch mb-5">
            <div className="project-content w-2 bg-gradient-to-b from-sage-500 to-sage-800">
            </div>
            <h2 className="project-content">
              Projects
            </h2>
          </div>
          <p className="project-content">Heare are some of my personal projects that i’ve been deployed. By all means, chek it out!</p>
        </div>
        <div className="flex gap-24 flex-wrap items-center justify-center mb-12">
          {data?.map((val) => {
            return (
              <div className="project-content" key={val.id}>
                <Card
                  logo={val.logo}
                  projectType={val.type}
                  projectTitle={val.title}
                  projectRole={val.role}
                  shortDesc={val.shortDesc}
                  projectId={val.id}
                  linkToFESite={val.linkToFESite}
                  linkToGithub={val.linkToFEGithub}
                  techUsed={val.techUsed}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}