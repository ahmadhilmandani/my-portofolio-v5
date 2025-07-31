import { useNavigate } from "react-router"
import Button from "./Button"

type TCard = {
  logo: string,
  projectType: string,
  projectTitle: string,
  projectRole: string,
  shortDesc: string,
  projectId: number,
  linkToFESite?: string | null,
  linkToGithub: string,
  techUsed: string[]
}


export default function Card({ logo, projectType, projectTitle, projectRole, shortDesc, projectId, linkToFESite, linkToGithub, techUsed }: TCard) {
  const navigate = useNavigate()

  return (
    <div className="relative w-fit group hover:cursor-pointer transition-all">
      <div className="min-w-[320px] w-full max-w-[480px] lg:w-[380px] border border-khaki-500 bg-linear-to-b from-khaki-200 to-khaki-500 px-8 py-12 rounded-2xl relative z-30">
        <div className="flex justify-between items-center mb-5">
          <div className="aspect-square p-3 rounded-full flex justify-center items-center bg-khaki-500" >
            <div className="w-12 bg-center bg-no-repeat bg-contain aspect-square" style={{ backgroundImage: `url(./${logo})` }}>

            </div>
          </div>
          <div className="rounded-lg py-1.5 px-3 bg-khaki-500 text-khaki-800">
            {projectType}
          </div>
        </div>
        <div className="mt-10">
          <h3>{projectTitle}</h3>
          <small className="text-khaki-800 mt-[-12px] block">{projectRole}</small>
        </div>
        <div className="mt-5">
          <p>{shortDesc}</p>
        </div>
        <div className="mt-10 flex gap-3 flex-wrap">
          <div className="min-w-[120px] xl:max-w-[120px] flex-1">
            <Button onClickProp={() => { navigate(`/projects/${projectId}`) }} buttonType={'outline'} isExtend={true} isLoading={false} >
              Detail
            </Button>
          </div>
          {linkToFESite ?
            (
              <div className="min-w-[180px] flex-1">
                <Button onClickProp={() => { window.open(linkToFESite, "_blank"); }} buttonType={'primary'} isExtend={true} isLoading={false} >
                  ✈️ Go To Site
                </Button>

              </div>
            )
            :
            (
              <div className="min-w-[160px] flex-1">
                <Button onClickProp={() => { window.open(linkToGithub, "_blank"); }} buttonType={'primary'} isExtend={true} isLoading={false} >
                  ✈️ Go To Github
                </Button>

              </div>
            )
          }
        </div>
        <div className="mt-10 flex gap-2 items-center flex-wrap">
          {
            techUsed?.map((val) => {
              return (
                <>
                  <div className="rounded-lg py-1.5 px-3 bg-green-50/35 text-lime-900 text-xs" key={val}>
                    {val}
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="min-w-[320px] w-full max-w-[480px] lg:w-[380px] h-full bg-gradient-to-b from-sage-500 to-sage-800 rounded-2xl absolute z-20 bottom-0 top-0 right-0 group-hover:right-[-15px] group-hover:rotate-5 rotate-0 group-hover:transition-all duration-300">
      </div>
    </div>
  )
}