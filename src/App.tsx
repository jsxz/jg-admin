import {useState} from 'react'
import {Button} from 'antd'
import {UpCircleOutlined} from "@ant-design/icons"
import {Link, Outlet} from "react-router-dom";

// import 'antd/dist/reset.css'
function App() {

    return (
        <div className="App">
            <Link to="/home">Home</Link>|
            <Link to="/about">About</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default App
