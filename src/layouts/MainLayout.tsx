import Navbar from "../components/Navbar";
import gradientBG from "../assets/grid_bg.png"
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import type { RootState } from '../redux/store'

export default function MainLayout() {
  const openSidebarSlice = useSelector((state: RootState) => state.openSidebarSlice.isOpen)
  return (
    <>
      <div className={`bg-center w-full min-h-screen bg-khaki-200 relative bg-repeat overflow-x-hidden`} style={{
        backgroundImage: `url(${gradientBG})`
      }}>
        {openSidebarSlice && <Sidebar />}

        <Navbar />
        <div className='size-[800px] bg-sage-500/80 rounded-full absolute top-[-320px] left-[-240px] blur-[280px] z-10'>

        </div>
        <div className="relative z-50">
          <Outlet />
        </div>
        <div className="mt-80">
          <Footer />
        </div>
      </div>
    </>
  )
}