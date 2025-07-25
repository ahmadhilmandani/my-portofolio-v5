import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeIndex from "../pages/home/Index";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      }
    ]
  }
])

