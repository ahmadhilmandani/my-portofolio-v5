import { Link } from "react-router"
import Logo from "../assets/logo.svg"
import Button from "./Button"

export default function Navbar() {
  return (
    <nav className="w-full h-[82px] border-b border-khaki-600 fixed top-0 left-0 right-0 flex justify-between items-center px-32 z-[100] bg-[#F0ECE9]/15 backdrop-blur">
      <Link to={'/'}>
        <div className="bg-[#27272A] rounded-xl size-10 flex items-center justify-center">
          <img src={Logo} alt="" className="w-4" />
        </div>
      </Link>
      <div className="flex gap-12 items-center">
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/projects'}>
          Projects
        </Link>
        <div>
          <Button onClickProp={() => { window.open('https://drive.google.com/file/d/1PSIpTBwxD4lt5q1w5tBlVAspshH4lu6-/view?usp=sharing', '_blank') }} buttonType={'primary'} isExtend={false} isLoading={false} buttonSize='small' >
            My CV
          </Button>
        </div>
      </div>
    </nav>
  )
}