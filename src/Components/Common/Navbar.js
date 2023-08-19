import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { FaRegUserCircle } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
export const Navbar = ({isDonor}) => {
    console.log(isDonor);
    return (<div>
            <div className="Navbar fixed z-10 top-0 flex w-full h-[50px] bg-tertiary flex items-center justify-between">
                
                <div className="">
                {isDonor && 
                <div className="w-[300px] border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between bg-[#ffffff]">
                    <input type="text" className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"></input>
                    
                    <div className="mr-[5px]">
                    <IconContext.Provider  value={{ size: 15 }}>
                        <FaSearch className="text-darkText" />
                    </IconContext.Provider>
                    </div>
                </div>
                }
                </div>
                <div className="navItems h-full w-1/2 mr-[20px] flex justify-end items-center">
                    <div className="w-[80px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Home</Link></div>
                    {isDonor && <div className="w-[100px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Non-profits</Link></div>}
                    {isDonor ? <div className="w-[80px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Projects</Link></div>:      
                    <div className="w-[100px] flex justify-center"><Link className="text-darkText" to={"/Home"}>My Projects</Link></div>}
                    <div className="mr-3">
                    <IconContext.Provider value={{ size: 30 }}>
                        <FaRegUserCircle className="text-darkText" />
                    </IconContext.Provider>
                    </div>
                </div>
                
            </div>
            <div className="mb-[50px]"></div>
            </div>
        
    )
}