import { IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandReact } from "@tabler/icons-react";
import Button from "../../../components/Button";
import Me from "../../../assets/me.png"

export default function LandingSection() {
  return (
    <>
      <div className='w-full h-screen px-32'>
        <div className='flex justify-between items-center pt-32'>
          <div className='size-[800px] bg-sage-500 rounded-full fixed top-[-320px] left-[-240px] blur-[145px] z-10'>

          </div>
          <div className='max-w-[640px] flex-1 relative z-20'>
            <div className='text-xl'>
              Hello, there 👋! My name is
            </div>
            <h1 className='text-7xl'>
              Ahmad
              Hilman Dani
            </h1>
            <div className='text-[28px]'>
              Mostly Frontend,
              <span className='inline-block mx-1 font-semibold relative z-10 text-[28px] transition-colors bg-gradient-to-br from-[#51624E] to-[#7FDCA2] bg-clip-text text-transparent'>
                Chasing Fullstack,
              </span>
              Powered by Caffeine ☕
            </div>
            <div className='mt-16 flex gap-8'>
              <Button onClickProp={() => { }} buttonType={'primary'} isExtend={false} isLoading={false} buttonSize='large' >
                See My CV
              </Button>
              <Button onClickProp={() => { }} buttonType={'outline'} isExtend={false} isLoading={false} buttonSize='large' >
                Explore More !
              </Button>
            </div>
          </div>
          <div className='relative'>
            <div
              className="absolute top-0 left-1/2 mt-[-160px] -translate-x-1/2 bg-linear-to-b from-khaki-500 to-khaki-600 max-w-sm w-full h-full flex justify-center items-center text-xs">atika nur royyanah, <br /> in my silence, <br /> i love you deeply.
            </div>
            <img src={Me} alt="" className='relative z-20' />
            <div className='absolute bottom-0 right-0 max-w-2xl w-full bg-sage-500 h-80 rounded-t-full blur-[70px]'>
            </div>
          </div>
        </div>

        <div className='w-full border-sage-500 border bg-radial-[at_50%_20%] from-sage-500 to-bg-khaki absolute inset-x-0 left-0 right-0 px-24 flex gap-32 items-center py-28 justify-between z-20'>
          <div className='mb-3 max-w-[480px] flex-1'>
            <h3>
              Summary Of Me
            </h3>
            <div className='text-[#3f3f3f]'>
              More than 6 months as a Frontend Web Developer (intern & part-time) and still going strong! I mostly work with React, but Vue is also my buddy!
            </div>
          </div>
          <div className='mb-3 flex-1'>
            <h3>
              Mostly Used Tech
            </h3>
            <div className='flex gap-20 items-center'>
              <IconBrandReact size={72} stroke={1.5} className='stroke-[#9B9B9B]' />
              <IconBrandNextjs size={72} stroke={1.5} className='stroke-[#9B9B9B]' />
              <IconBrandNodejs size={72} stroke={1.5} className='stroke-[#9B9B9B]' />
              <IconBrandMysql size={72} stroke={1.5} className='stroke-[#9B9B9B]' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}