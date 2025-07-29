import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeIndex from "../pages/home/Index";
import ProjectIndex from "../pages/project/Index";
import ProjectDetailIndex from "../pages/project/detail/Index";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: 'projects',
        element: <ProjectIndex />
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailIndex />
      },
    ]
  }
])

