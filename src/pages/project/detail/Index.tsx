/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import { data } from "../../../data.ts"
import { useEffect, useState } from "react";

export default function ProjectDetailIndex() {
  const params = useParams()
  const [detailData, setDetailData] = useState<any>(null)

  useEffect(() => {
    console.log(params.projectId)
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
        {detailData?.title}
      </div>
    </>
  )
}