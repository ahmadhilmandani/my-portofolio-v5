import { Link, NavLink } from "react-router"
import Logo from "../assets/logo.svg"
import Button from "./Button"
import { IconMenu2 } from "@tabler/icons-react"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "../redux/slice/toggleSidebar.ts"

export default function Navbar() {
  const dispatch = useDispatch()

  return (
    <nav className="w-full h-[82px] border-b border-khaki-600 fixed top-0 left-0 right-0 flex justify-between items-center px-6 xl:px-32 z-[100] bg-[#F0ECE9]/15 backdrop-blur">
      <Link to={'/'}>
        <div className="bg-[#27272A] rounded-xl size-10 flex items-center justify-center">
          <img src={Logo} alt="" className="w-4" />
        </div>
      </Link>
      <div className="hidden xl:flex gap-12 items-center">
        <NavLink to={'/'} className={({ isActive }) => isActive ? "font-semibold text-sage-800 transition-all rounded-lg bg-sage-100 px-3 py-1.5" : "px-3 py-1.5"}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "font-semibold text-sage-800 transition-all rounded-lg bg-sage-100 px-3 py-1.5" : "px-3 py-1.5"}>
          Projects
        </NavLink>
        <div>
          <Button onClickProp={() => { window.open('https://drive.google.com/file/d/1PSIpTBwxD4lt5q1w5tBlVAspshH4lu6-/view?usp=sharing', '_blank') }} buttonType={'primary'} isExtend={false} isLoading={false} buttonSize='small' >
            My CV
          </Button>
        </div>
      </div>
      <div className="block xl:hidden">
        <IconMenu2 className="stroke-khaki-800" size={24} stroke={2.5} onClick={() => {
          dispatch(toggleSidebar())
        }} />
      </div>
    </nav>
  )
}