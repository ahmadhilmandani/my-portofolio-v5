import Button from "./Button"

type TCard = {
  logo: string,
  projectType: string,
  projectTitle: string,
  projectRole: string,
  shortDesc: string,
  projectId: number,
  isPrimaryButtonToSite: boolean,
  techUsed: string[]
}


export default function Card({ logo, projectType, projectTitle, projectRole, shortDesc, projectId, isPrimaryButtonToSite, techUsed }: TCard) {

  return (
    <div className="relative w-fit group hover:cursor-pointer transition-all">
      <div className="w-[360px] border border-khaki-500 bg-linear-to-b from-khaki-200 to-khaki-500 px-8 py-12 rounded-2xl relative z-30">
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
          <Button onClickProp={() => { console.log(projectId) }} buttonType={'outline'} isExtend={false} isLoading={false} >
            Detail
          </Button>
          {isPrimaryButtonToSite ?
            (
              <>
                <Button onClickProp={() => { }} buttonType={'primary'} isExtend={false} isLoading={false} >
                  ✈️ Go To Site
                </Button>

              </>
            )
            :
            (
              <>
                <Button onClickProp={() => { }} buttonType={'primary'} isExtend={false} isLoading={false} >
                  ✈️ Go To Github
                </Button>

              </>
            )
          }
        </div>
        <div className="mt-10 flex gap-2 items-center flex-wrap">
          {
            techUsed?.map((val) => {
              return (
                <>
                  <div className="rounded-lg py-1.5 px-3 bg-green-50/35 text-lime-900 text-xs">
                    {val}
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="w-[330px] h-full bg-sage-700 rounded-2xl absolute z-20 bottom-0 top-0 right-0 group-hover:right-[-15px] group-hover:rotate-5 rotate-0 group-hover:transition-all duration-300">
      </div>
    </div>
  )
}