import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { FaRegUserCircle } from "react-icons/fa"
export const Navbar = () => {
    return (
        <div className="Navbar flex">
            <div className="w-full h-[50px] bg-tertiary flex items-center justify-end">
                <div className="navItems h-full w-1/2 mr-[20px] flex justify-end items-center">
                    <div className="w-[80px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Home</Link></div>
                    <div className="w-[100px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Non-profits</Link></div>
                    <div className="w-[80px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Projects</Link></div>
                </div>
                <div className="mr-3">
                    <IconContext.Provider value={{ size: 30 }}>
                        <FaRegUserCircle className="text-darkText" />
                    </IconContext.Provider>
                </div>
            </div>

        </div>
    )
}