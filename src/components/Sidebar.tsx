import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { toggleSidebar } from "../redux/slice/toggleSidebar.ts";
import Button from "./Button";

export default function Sidebar() {
  const dispatch = useDispatch()

  return (
    <div className="w-full h-screen bg-black/80 z-[10000000000000] fixed top-0 left-0 right-0 bottom-0">
      <aside className="min-w-[240px] max-w-[640px] w-full bg-[#F0ECE9] flex flex-col h-screen p-10 backdrop-blur">
        <NavLink to={'/'} onClick={() => {
          dispatch(toggleSidebar())
        }} className={({ isActive }) => isActive ? "font-semibold text-sage-800 transition-all rounded-lg bg-sage-100 px-3 py-1.5 mt-12" : "px-3 py-1.5"}>
          Home
        </NavLink>
        <NavLink to="/projects" onClick={() => {
          dispatch(toggleSidebar())
        }} className={({ isActive }) => isActive ? "font-semibold text-sage-800 transition-all rounded-lg bg-sage-100 px-3 py-1.5 mt-12" : "px-3 py-1.5"}>
          Projects
        </NavLink>
        <div className="mt-12">
          <Button onClickProp={() => { window.open('https://drive.google.com/file/d/1PSIpTBwxD4lt5q1w5tBlVAspshH4lu6-/view?usp=sharing', '_blank') }} buttonType={'primary'} isExtend={true} isLoading={false} buttonSize='small' >
            My CV
          </Button>
        </div>
      </aside>
    </div>
  )
}