import { useNavigate } from "react-router-dom";

export const AdminNavbar = ()=>{
    const navigate = useNavigate();
    const logOut =()=>{
        localStorage.clear();
        navigate("/Login");
    }
    return(
        <div className="bg-green-700 h-full w-64 fixed ">
            <div className="h-[90%] flex flex-col justify-center items-center">
            <p className="my-4 font-bold text-slate-100 text-xl hover:cursor-pointer" onClick={()=>navigate("/Admin/Dashboard")}>Dashboard</p>    
            <p className="my-4 font-bold text-slate-100 text-xl hover:cursor-pointer" onClick={()=>navigate("/Admin/SignUps")}>NGO Signups</p>
            <p className="my-4 font-bold text-slate-100 text-xl hover:cursor-pointer" onClick={()=>navigate("/Admin/ProjectRequests")}>Project Requests</p>

        </div>
        <div className="w-full flex justify-center items-center">
        <p className="my-4 font-bold text-slate-100 text-xl hover:cursor-pointer" onClick={()=>logOut()}>Log Out</p>
        </div>
        </div>
    )
}