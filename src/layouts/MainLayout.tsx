import Navbar from "../components/Navbar";
import gradientBG from "../assets/grid_bg.png"
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <div className={`bg-center w-full min-h-screen bg-khaki-200 relative bg-repeat overflow-x-hidden`} style={{
        backgroundImage: `url(${gradientBG})`
      }}>
        <Navbar />
        <div className='size-[800px] bg-sage-500/80 rounded-full absolute top-[-320px] left-[-240px] blur-[280px] z-10'>

        </div>
        <div className="relative z-50">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}