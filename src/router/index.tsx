import React, {lazy} from "react";
import Home from "@/views/Home";

const About = lazy(() => import("@/views/About"));
const User = lazy(() => import("@/views/User"));
import {Navigate} from "react-router-dom";

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loding...</div>}>{comp}</React.Suspense>
)
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
        element: withLoadingComponent(<About/>)
    },
    {
        path: "/user",
        element: withLoadingComponent(<User/>)
    },
]
export default routes
