import Button from "../../../components/Button.tsx";
import Card from "../../../components/Card";
import { data } from "../../../data.ts"

export default function ProjectsSection() {

  return (
    <>
      <div className='w-full px-32 pt-32 pb-32'>
        <div className="mb-12">
          <div className="flex gap-8 items-stretch mb-5">
            <div className="w-2 bg-gradient-to-b from-sage-500 to-sage-800">

            </div>
            <h2>
              Projects
            </h2>
          </div>
          <p>Heare are some of my personal projects that i’ve been deployed. By all means, chek it out!</p>
        </div>
        <div className="flex gap-24 flex-wrap items-center justify-center mb-12">
          {data?.map((val, index) => {
            if (index <= 2) {              
              return (
                <>
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
                </>
              )
            }
          })}
        </div>
        <div className="flex justify-center">
          <Button buttonType={'primary'}> 
            See More
          </Button>
        </div>
      </div>
    </>
  )
}