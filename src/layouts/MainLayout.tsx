import Navbar from "../components/Navbar";
import gradientBG from "../assets/grid_bg.png"
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <div className={`bg-center w-full min-h-screen bg-khaki-200 relative bg-repeat`} style={{
        backgroundImage: `url(${gradientBG})`
      }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}