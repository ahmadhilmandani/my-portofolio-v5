import Card from "../../../components/Card";
import {data} from "../../../data.ts"

export default function ProjectsSection() {

  return (
    <>
      <div className='w-full px-32 pt-32 pb-32'>
        <div className="flex gap-24 flex-wrap items-center justify-center">
        {data?.map((val) => {
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
        })}
        </div>
      </div>
    </>
  )
}