import { Link, useNavigate } from "react-router-dom"
import { IconContext } from "react-icons"
import { FaRegUserCircle } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
export const Navbar = ({isDonor}) => {
    const [isShown,setIsShown] = useState(false);
    const navigate = useNavigate();
    const logOut =()=>{
        localStorage.clear();
        navigate("/Login");
    }
    console.log(isDonor);
    return (<div>
            <div onMouseLeave={() => setIsShown(false)} className="Navbar fixed z-5 top-0 flex w-full h-[50px] bg-tertiary flex items-center justify-between">
                
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
                    <div className="w-[80px] flex justify-center"><Link className="text-darkText" to={isDonor?"/Donor/Home":"/NGO/Home"}>Home</Link></div>
                    {isDonor && <div className="w-[100px] flex justify-center"><Link className="text-darkText" to={"/Home"}>Non-profits</Link></div>}
                    {isDonor ? <div className="w-[80px] flex justify-center"><Link className="text-darkText" to={"/Donor/Projects"}>Projects</Link></div>:      
                    <div className="w-[100px] flex justify-center"><Link className="text-darkText" to={"/NGO/MyProjects"}>My Projects</Link></div>}
                    <div className="mr-3" onMouseEnter={() => setIsShown(true)} >
                    <IconContext.Provider value={{ size: 30 }}>
                        <FaRegUserCircle className="text-darkText" />
                    </IconContext.Provider>
                    </div>
                </div>
                
            </div>
            <div className="mb-[50px]"></div>
            {isShown && <div className="bg-tertiary z-10 py-1 w-36 border-solid border-l-2  ease-in-out duration-300 border-b-2 right-0 fixed border-quaternary" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <p onClick={()=>logOut()} className="w-full text-center hover:cursor-pointer">Log Out</p>
            </div>}
            </div>
        
    )
}