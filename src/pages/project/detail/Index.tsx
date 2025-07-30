/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router";
import { data } from "../../../data.ts"
import { useEffect, useState } from "react";
import Button from "../../../components/Button.tsx";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
// import { IconBrandGithub, IconEye, IconHeart, IconWorld } from "@tabler/icons-react";

export default function ProjectDetailIndex() {
  const params = useParams()
  const [detailData, setDetailData] = useState<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    for (let index = 0; index < data.length; index++) {
      if (params?.projectId) {

        if (data[index].id === parseInt(params.projectId)) {
          setDetailData(data[index])
        }
      }
    }
  }, [params.projectId])

  return (
    <>
      <div className='w-full px-32 pt-32'>
        <Button buttonType="danger" onClickProp={() => {
          navigate('/projects')
        }}>
          Kembali
        </Button>
        <div className="">
          <h1 className="text-center">
            {detailData?.title}
          </h1>
          {/* <div className="flex justify-center items-center gap-10 flex-wrap">
            <div className="flex justify-center items-center gap-3 text-black/55">
              <IconEye size={24} className="stroke-text-black/55" />
              1.000 views
            </div>
            <div className="flex justify-center items-center gap-3 text-black/55">
              <IconHeart size={24} className="stroke-text-black/55" />
              24.316 likes
            </div>
          </div> */}
          <p className="mx-auto my-12 text-center max-w-[560px] text-black/55 text-[16px]">
            Collect song requests from people easily, just like ngl.link but integrated with spotify API. Made for Hashnode X Planetscale hackathon.
          </p>
          <div className="bg-khaki-200 border-y border-khaki-500 mx-[-128px] flex justify-center">
            <div className="flex justify-center items-center divide-x divide-khaki-500 border-x border-khaki-500">
              <div className="px-32 py-10 bg-rose-">
                <h3>
                  Type
                </h3>
                <div>
                  {detailData?.type}
                </div>
              </div>
              <div className="px-32 py-10 bg-rose-">
                <h3>
                  Role
                </h3>
                <div>
                  {detailData?.role}
                </div>
              </div>
              <div className="px-32 py-10 bg-rose-">
                <h3>
                  Year
                </h3>
                <div>
                  {detailData?.year}
                </div>
              </div>
            </div>
          </div>
          <main className="mt-10 mx-auto w-full max-w-[1280px]">
            <div className="flex gap-24 justify-between mb-28">
              <div className="min-w-[300px] flex-1 text-justify">
                <div className="flex gap-8 items-stretch mb-5">
                  <div className="project-content w-2 bg-gradient-to-b from-sage-500 to-sage-800">
                  </div>
                  <h2 className="project-content">
                    Links
                  </h2>
                </div>
                <div className="flex flex-col gap-8">
                  {
                    detailData?.linkToFESite &&
                    <a href={detailData?.linkToFESite} target="_blank" className="flex gap-2 items-center text-[#3C7A64] pb-2 border-b border-[#3C7A64] w-fit font-semibold">
                      <IconWorld className="stroke-[#3C7A64]" stroke={1.5} />
                      Deployed
                    </a>
                  }
                  {
                    detailData?.linkToFEGithub &&
                    <a href={detailData?.linkToFEGithub} target="_blank" className="flex gap-2 items-center text-[#3C7A64] pb-2 border-b border-[#3C7A64] w-fit font-semibold">
                      <IconBrandGithub className="stroke-[#3C7A64]" stroke={1.5} />
                      Frontend GitHub
                    </a>
                  }
                  {
                    detailData?.linkToBEGithub &&
                    <a href={detailData?.linkToBEGithub} target="_blank" className="flex gap-2 items-center text-[#3C7A64] pb-2 border-b border-[#3C7A64] w-fit font-semibold">
                      <IconBrandGithub className="stroke-[#3C7A64]" stroke={1.5} />
                      Backend GitHub
                    </a>
                  }
                </div>
              </div>
              <div className="min-w-[300px] flex-1">
                <div className="flex gap-8 items-stretch mb-5">
                  <div className="project-content w-2 bg-gradient-to-b from-sage-500 to-sage-800">
                  </div>
                  <h2 className="project-content">
                    Tools used
                  </h2>
                </div>
                <div className="flex gap-3 items-center flex-wrap">
                  {
                    detailData?.techUsed?.map((val: string) => {
                      return (
                        <>
                          <div className="rounded-lg py-1.5 px-3 bg-green-50 text-lime-900 text-xs" key={val}>
                            {val}
                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>

            <div className="flex gap-24 justify-between mb-28">
              <div className="min-w-[300px] flex-2 text-justify">
                <div className="flex gap-8 items-stretch mb-5">
                  <div className="project-content w-2 bg-gradient-to-b from-sage-500 to-sage-800">
                  </div>
                  <h2 className="project-content">
                    Overview
                  </h2>
                </div>
                <p>
                  {detailData?.overview}
                </p>
              </div>
            </div>

            <div className="mb-28 text-justify">
              <div className="flex gap-8 items-stretch mb-5">
                <div className="project-content w-2 bg-gradient-to-b from-sage-500 to-sage-800">
                </div>
                <h2 className="project-content">
                  Key Features
                </h2>
              </div>
              {
                detailData?.keyFeatures?.map((valKeyFeatures: { title: string, desc: string }, index: number) => {
                  return (
                    <div className="mb-5">
                      <h3 className="mb-3">{index + 1}. {valKeyFeatures?.title}</h3>
                      <p>{valKeyFeatures?.desc}</p>
                    </div>
                  )
                })
              }
            </div>

            <div className="mb-28 text-justify">
              <div className="flex gap-8 items-stretch mb-5">
                <div className="project-content w-2 bg-gradient-to-b from-sage-500 to-sage-800">
                </div>
                <h2 className="project-content">
                  Lessons Learned
                </h2>
              </div>
              <p>
                {detailData?.lessonLearn}
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}