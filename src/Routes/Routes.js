import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <AllServices />
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            }
        ]
    }
])