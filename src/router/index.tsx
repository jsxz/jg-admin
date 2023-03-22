import React, {lazy} from "react";
import Home from "@/views/Home";

const About = lazy(() => import("@/views/About"));
const User = lazy(() => import("@/views/User"));
import {Navigate} from "react-router-dom";


const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: <React.Suspense fallback={<div>Loding...</div>}><About/></React.Suspense>
    },
    {
        path: "/user",
        element: <React.Suspense fallback={<div>Loding...</div>}><User/></React.Suspense>
    },
]
export default routes
