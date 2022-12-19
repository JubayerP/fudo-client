import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService /></PrivateRoute>
            }
        ]
    }
])