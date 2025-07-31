import { IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react"
import Logo from "../assets/logo.svg"


export default function Footer() {
  return (
    <>
      <footer className="bg-radial-[at_50%_20%] from-[#333337] to-text-black px-24 pt-28 pb-8 relative z-50">
        <div className="flex gap-16 justify-around mb-32 flex-wrap">
          <div>
            <img src={Logo} alt="" className="w-8" />
          </div>
          <div>
            <h3 className="text-sage-200 mb-5">Available Services</h3>
            <ul className="list-inside list-disc text-sage-200">
              <li className="list-inside list-disc text-sage-200 mb-5">Frontend Web Development</li>
              <li className="list-inside list-disc text-sage-200 mb-5">Backend Web Development</li>
              <li className="list-inside list-disc text-sage-200 mb-5">UI/UX Design</li>
              <li className="list-inside list-disc text-sage-200 mb-5">Fullstack Web Development</li>
            </ul>
          </div>
          <div className="flex gap-14">
            <a href="mailto:ahmadhilmanlagi@gmail.com" >
              <IconMail className="stroke-sage-200" size={40} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-hilman-dani" target="_blank">
              <IconBrandLinkedin className="stroke-sage-200" size={40} />
            </a>
            <a href="https://x.com/lilbitmessy__" target="_blank">
              <IconBrandX className="stroke-sage-200" size={40} />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center italic text-sage-200">
          © 2023. All rights reserved.
        </div>
      </footer>
    </>
  )
}