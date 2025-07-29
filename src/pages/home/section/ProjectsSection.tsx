import Button from "../../../components/Button.tsx";
import Card from "../../../components/Card";
import { data } from "../../../data.ts"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

export default function ProjectsSection() {
  // const gsapTimeline = gsap.timeline()
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
          start: "bottom 60%",
        },
        stagger: 0.3,
      }
    )
  }, [])

  return (
    <>
      <div className='w-full px-32 pt-32 pb-32'>
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
          {data?.map((val, index) => {
            if (index <= 2) {
              return (
                <div className="project-content">
                  <Card
                    logo={val.logo}
                    projectType={val.type}
                    projectTitle={val.title}
                    projectRole={val.role}
                    shortDesc={val.shortDesc}
                    projectId={val.id}
                    isPrimaryButtonToSite={val.isPrimaryButtonToSite}
                    techUsed={val.techUsed}
                  />
                </div>
              )
            }
          })}
        </div>
        <div className="project-content flex justify-center">
          <Button buttonType={'primary'}>
            See More
          </Button>
        </div>
      </div>
    </>
  )
}