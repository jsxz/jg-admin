import {useState} from 'react'
import {Button} from 'antd'
import {UpCircleOutlined} from "@ant-design/icons"
import {Link, Outlet, useRoutes} from "react-router-dom";
import router from "@/router";

// import 'antd/dist/reset.css'
function App() {
    const outlet=useRoutes(router)
    return (
        <div className="App">
            <Link to="/home">Home</Link>|
            <Link to="/about">About</Link>
            {/*<Outlet></Outlet>*/}
            {outlet}
        </div>
    )
}

export default App
