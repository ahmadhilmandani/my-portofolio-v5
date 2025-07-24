import { Link } from "react-router"
import Logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full h-20 border-b border-[#D9D7D0] fixed top-0 left-0 right-0 flex justify-between items-center px-16 z-[100] bg-[#F0ECE9]">
      <div className="bg-[#27272A] rounded-xl size-10 flex items-center justify-center">
        <img src={Logo} alt="" className="w-4" />
      </div>
      <div className="flex gap-12 items-center">
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/'}>
          Projects
        </Link>
        <div>
          <button className='px-8 py-2.5 rounded-2xl bg-khaki-600 text-text-black font-semibold'>See My CV</button>
        </div>
      </div>
    </nav>
  )
}