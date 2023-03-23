import React, {lazy} from "react";
import Home from "@/views/Home";

const About = lazy(() => import("@/views/About"));
const User = lazy(() => import("@/views/User"));
import {Navigate} from "react-router-dom";
import Login from "@/views/Login";

const Page1 = lazy(() => import("@/views/Page1"))
const Page2 = lazy(() => import("@/views/Page2"))
const Page301 = lazy(() => import("@/views/Page301"))
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loding...</div>}>{comp}</React.Suspense>
)
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1"/>,
    },
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1/>)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2/>)
            },
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301/>)
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "*",
        element: <Navigate to="/page1"/>,
    },
    // {
    //     path: "/home",
    //     element: <Home/>
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About/>)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User/>)
    // },
]
export default routes
