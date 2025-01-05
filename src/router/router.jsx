import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/project/:id',
                element: <Details />,
                loader: () => fetch('/public/projects.json')
            },
        ]
    }
])

export default router