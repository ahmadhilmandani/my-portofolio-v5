import { IconBrandGithub, IconBrandLinkedin, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandX, IconMail } from "@tabler/icons-react";
import Button from "../../../components/Button";
import Me from "../../../assets/me.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default function LandingSection() {
  const gsapTimeline = gsap.timeline()
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsapTimeline.fromTo('.intro-text', {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: 'power2.out'
    })

    gsap.to('.img-of-me', {
      opacity: 1,
      ease: 'power2.out',
      duration: 0.6,
      y: 0,
    })

    gsap.to('.bg-gradient-behind-me', {
      top: 0,
      marginTop: '-150px',
      delay: 0.3,
      duration: 1.8,
      ease: "back.inOut(1.7)",
      height: '100%',
      opacity: 1
    })

    gsap.to('.soft-rey-behind-me', {
      backgroundColor: 'rgba(156, 170, 154, 0.5)',
      duration: 0.8,
      delay: 1.6,
      ease: 'power2.out',
    })

    gsapTimeline.to('.lets-connect', {
      opacity: 1,
      y: -30,
      rotate: '0deg',
      ease: "back.inOut(1.7)",
      duration: 0.8,
      stagger: 0.3
    })

    gsapTimeline.to('.lets-connect', {
      ease: "back.inOut(1.7)",
      duration: 0.8,
      stagger: 0.3,
      border: '1px solid rgba(173, 184, 171, 1)'
    })

    gsapTimeline.to('.lets-connect', {
      boxShadow: '0px 12px 32px 2px rgba(215, 221, 214, 0.8)',
      ease: "back.inOut(1.7)",
      duration: 0.8,
      stagger: 0.3,
    })

    gsap.fromTo('.summary-text',
      {
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.summary-text',
          start: "bottom 80%",
        },
        stagger: 0.3,
      }
    )
  })

  return (
    <>
      <div className='w-full px-32'>
        <div className='flex justify-between items-center pt-32'>
          <div className='size-[800px] bg-sage-500 rounded-full absolute top-[-320px] left-[-240px] blur-[145px] z-10'>

          </div>
          <div className='max-w-[640px] flex-1 relative z-20'>
            <div className='intro-text opacity-0 translate-y-[40px] text-xl'>
              Hello, there 👋! My name is
            </div>
            <h1 className='intro-text opacity-0 translate-y-[40px] text-7xl'>
              Ahmad
              Hilman Dani
            </h1>
            <div className='flex gap-3 flex-wrap'>
              <span className="intro-text opacity-0 translate-y-[40px] text-[28px] text-nowrap">
                Frontend Dev on
              </span>
              <span className='intro-text opacity-0 translate-y-[40px] inline-block font-semibold relative z-10 text-[28px] transition-colors bg-gradient-to-br from-[#51624E] to-[#7FDCA2] bg-clip-text text-transparent text-nowrap'>
                a Software Engineer Quest,
              </span>
              <span className="intro-text opacity-0 translate-y-[40px] text-[28px] text-nowrap">
                Fueled by Caffeine ☕
              </span>
            </div>
            <div className='mt-16 flex gap-8'>
              <div className="intro-text opacity-0 translate-y-[40px]">
                <Button onClickProp={() => { }} buttonType={'primary'} isExtend={false} isLoading={false} buttonSize='large' >
                  See My CV
                </Button>
              </div>
              <div className="intro-text opacity-0 translate-y-[40px]">

                <Button onClickProp={() => { }} buttonType={'outline'} isExtend={false} isLoading={false} buttonSize='large' >
                  Explore More !
                </Button>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div
              className="bg-gradient-behind-me absolute bottom-[-50%] left-1/2 -translate-x-1/2 bg-linear-to-b from-khaki-500 to-khaki-600 max-w-sm w-full h-0 opacity-0 flex justify-center items-center text-xs z-20">atika nur royyanah, <br /> in my silence, <br /> i love you deeply.
            </div>
            <div className="absolute top-[11%] left-[-200px] flex flex-col gap-8 items-end z-50">
              <div id="connect-element" className="lets-connect opacity-0 rotate-[-30deg] relative top-[30px] bg-gradient-to-br from-sage-100 to-sage-300 border border-sage-500 rounded-lg text-wrap px-8 py-3 break-words">
                Let's Connect!
              </div>
              <div id="contact-element" className="lets-connect opacity-0 rotate-[-30deg] relative top-[30px] bg-gradient-to-br from-sage-100 to-sage-300 border border-sage-500 rounded-lg text-wrap px-8 py-3 break-words flex justify-center items-center flex-wrap gap-10">
                <IconMail size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                <IconBrandGithub size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                <IconBrandLinkedin size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                <IconBrandX size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
              </div>
            </div>
            <img src={Me} alt="" className='img-of-me relative z-40 opacity-40 translate-y-2' />
            <div className="soft-rey-behind-me absolute top-1/2 left-1/2 w-3xl h-80 rounded-t-full blur-[80px] z-30 transform -translate-x-1/2 translate-y-[0px]">
            </div>
          </div>
        </div>

        <div className='w-screen border-sage-500 border bg-radial-[at_50%_20%] from-sage-500 to-bg-khaki ml-[-132px] px-24 flex gap-32 items-center py-28 justify-between relative z-40'>
          <div className='summary-text translate-y-5 mb-3 max-w-[480px] flex-1'>
            <h3>
              Summary Of Me
            </h3>
            <div className='summary-text translate-y-5 text-[#3f3f3f]'>
              More than 6 months as a Frontend Web Developer (intern & part-time) and still going strong! I mostly work with React, but Vue is also my buddy!
            </div>
          </div>
          <div className='mb-3 flex-1'>
            <h3 className="summary-text translate-y-5">
              Mostly Used Tech
            </h3>
            <div className='flex gap-20 items-center'>
              <IconBrandReact size={72} stroke={1.5} className='stroke-[#9B9B9B] summary-text translate-y-5' />
              <IconBrandNextjs size={72} stroke={1.5} className='stroke-[#9B9B9B] summary-text translate-y-5' />
              <IconBrandNodejs size={72} stroke={1.5} className='stroke-[#9B9B9B] summary-text translate-y-5' />
              <IconBrandMysql size={72} stroke={1.5} className='stroke-[#9B9B9B] summary-text translate-y-5' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}