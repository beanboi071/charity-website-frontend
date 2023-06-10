import { Navbar } from "../Common/Navbar"
import { Home } from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
export const DonorPage = () => {
    return(
        <div>
            <Navbar/>
            <Home/>
        </div>
        

    )
}