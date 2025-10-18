import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout
    },
    {
        path: 'auth',
        element: <h1>this is authentication page</h1>
    },
    {
        path: '/*',
        element: <h2>error 404</h2>
    }
])

export default router;