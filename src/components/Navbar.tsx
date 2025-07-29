import { Link } from "react-router"
import Logo from "../assets/logo.svg"
import Button from "./Button"

export default function Navbar() {
  return (
    <nav className="w-full h-[82px] border-b border-khaki-600 fixed top-0 left-0 right-0 flex justify-between items-center px-32 z-[100] bg-[#F0ECE9]/15 backdrop-blur">
      <div className="bg-[#27272A] rounded-xl size-10 flex items-center justify-center">
        <img src={Logo} alt="" className="w-4" />
      </div>
      <div className="flex gap-12 items-center">
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/projects'}>
          Projects
        </Link>
        <div>
          <Button onClickProp={() => { }} buttonType={'primary'} isExtend={false} isLoading={false} buttonSize='small' >
            Contact Me!
          </Button>
        </div>
      </div>
    </nav>
  )
}