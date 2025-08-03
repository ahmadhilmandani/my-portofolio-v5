import { IconBrandGithub, IconBrandLinkedin, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandX, IconMail } from "@tabler/icons-react";
import Button from "../../../components/Button";
import Me from "../../../assets/me.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default function LandingSection() {
  const gsapTimeline = gsap.timeline()
  gsap.registerPlugin(ScrollTrigger)

  const mm = gsap.matchMedia();

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

    mm.add("(min-width: 1024px)", () => {
      gsap.to('.bg-gradient-behind-me', {
        top: 0,
        marginTop: '-150px',
        delay: 0.3,
        duration: 1.8,
        ease: "back.inOut(1.7)",
        height: '100%',
        opacity: 1
      })
    })

    mm.add("(max-width: 1024px)", () => {
      gsap.to('.bg-gradient-behind-me', {
        top: 0,
        marginTop: '0px',
        delay: 0.3,
        duration: 1.8,
        ease: "back.inOut(1.7)",
        height: '100%',
        opacity: 1
      })
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
        duration: 0.2,
        scrollTrigger: {
          trigger: '.summary-text',
          start: "bottom 90%",
        },
        stagger: 0.2,
      }
    )
  })

  return (
    <>
      <div className='w-full px-6 lg:px-12 xl:px-32'>
        <div className='lg:flex justify-between items-center pt-32 flex-wrap gap-52'>
          <div className='min-w-[320px] flex-1 relative z-20'>
            <div className='intro-text opacity-0 translate-y-[40px] text-xl lg:text-left text-center'>
              Hello, there 👋! My name is
            </div>
            <h1 className='intro-text opacity-0 translate-y-[40px] text-7xl lg:text-left text-center'>
              Ahmad
              Hilman Dani
            </h1>
            <div className='flex gap-3 flex-wrap justify-center lg:justify-start'>
              <span className="intro-text opacity-0 translate-y-[40px] text-[28px] text-nowrap lg:text-left text-center">
                Frontend Dev on
              </span>
              <span className='intro-text opacity-0 translate-y-[40px] inline-block font-semibold relative z-10 text-[28px] transition-colors bg-gradient-to-br from-[#51624E] to-[#7FDCA2] bg-clip-text text-transparent lg:text-left text-center'>
                a Software Engineer Quest,
              </span>
              <span className="intro-text opacity-0 translate-y-[40px] text-[28px] lg:text-left text-center">
                Fueled by Caffeine ☕
              </span>
            </div>
            <div className='mt-16 flex gap-8 flex-wrap'>
              <div className="intro-text opacity-0 translate-y-[40px] min-w-[320px] flex-1 lg:min-w-auto lg:flex-none">
                <Button onClickProp={() => { window.open('https://drive.google.com/file/d/1PSIpTBwxD4lt5q1w5tBlVAspshH4lu6-/view?usp=sharing', '_blank') }} buttonType={'primary'} isExtend={true} isLoading={false} buttonSize='large' >
                  My CV
                </Button>
              </div>
              <div className="intro-text opacity-0 translate-y-[40px] min-w-[320px] flex-1 lg:min-w-auto lg:flex-none">
                <Button onClickProp={() => { window.open('https://www.linkedin.com/in/ahmad-hilman-dani', '_blank') }} buttonType={'outline'} isExtend={true} isLoading={false} buttonSize='large' >
                  My Linkedin
                </Button>
              </div>
            </div>
          </div>
          <div className='relative mt-20 lg:mt-0'>
            <div className="bg-gradient-behind-me absolute bottom-0 left-1/2 -translate-x-1/2 bg-linear-to-b from-khaki-500 to-khaki-600 max-w-sm w-full h-0 opacity-0 flex justify-center items-center text-xs z-20">atika nur royyanah, <br /> in my silence, <br /> i love you deeply.
            </div>
            <div className="absolute lg:top-[11%] left-1/2 lg:left-[-55px] -translate-x-1/2 flex flex-col gap-8 items-center lg:items-end z-50 bottom-32 lg:bottom-auto">
              <div id="connect-element" className="lets-connect opacity-0 rotate-[-30deg] relative top-[30px] bg-gradient-to-br from-sage-100 to-sage-300 border border-sage-500 rounded-lg text-wrap px-8 py-3 break-words">
                Let's Connect!
              </div>
              <div id="contact-element" className="lets-connect opacity-0 rotate-[-30deg] relative top-[30px] bg-gradient-to-br from-sage-100 to-sage-300 border border-sage-500 rounded-lg text-wrap px-8 py-3 break-words flex justify-center items-center gap-10">
                <a href="mailto:ahmadhilmanlagi@gmail.com" >
                  <IconMail size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                </a>
                <a href="https://github.com/ahmadhilmandani" target="_blank">
                  <IconBrandGithub size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                </a>
                <a href="https://www.linkedin.com/in/ahmad-hilman-dani" target="_blank">
                  <IconBrandLinkedin size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                </a>
                <a href="https://x.com/lilbitmessy__" target="_blank">
                  <IconBrandX size={20} className="hover:translate-y-[-2px] transition-all cursor-pointer hover:stroke-sage-800" />
                </a>
              </div>
            </div>
            <img src={Me} alt="" className='img-of-me relative z-40 opacity-40 translate-y-2 mx-auto' />
            <div className="soft-rey-behind-me absolute top-1/2 left-1/2 w-3xl h-80 rounded-t-full blur-[80px] z-30 transform -translate-x-1/2 translate-y-[0px]">
            </div>
          </div>
        </div>

        <div className='xl:w-screen border-sage-500 border bg-radial-[at_50%_20%] from-sage-500 to-khaki-200 xl:ml-[-132px] xl:px-24 px-6 flex flex-wrap gap-32 items-center py-28 justify-between relative z-40'>
          <div className='summary-text translate-y-5 mb-3 min-w-[240px] max-w-[480px] flex-1'>
            <h3>
              Summary Of Me
            </h3>
            <div className='summary-text translate-y-5 text-[#3f3f3f] text-justify text-pretty'>
              Curently working as a programmer at RSUD Dr. H. Moh. Anwar Sumenep using knockout js as a frontend, flask as a backend, mysql as database! But I mostly and prefer work with React, Node, And Mysql, Oh yeah, Vue is also my buddy!
            </div>
          </div>
          <div className='mb-3 flex-1'>
            <h3 className="summary-text translate-y-5">
              Mostly Used Tech
            </h3>
            <div className='flex gap-20 items-center flex-wrap'>
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