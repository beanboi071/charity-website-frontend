import { useEffect, useState } from "react";
import { Navbar } from "../Common/Navbar"
import { Project } from "../Common/Project"
import axios from "axios";
import { baseUrl } from "../Common/endpoints";

export const MyProjects = () => {
    const authHeader = `Bearer ${localStorage.getItem("token")}`;
    const[projects, setProjects] = useState([]);
    const getProjects = async()=>{
        await axios.get(`${baseUrl}/Api/ProjectApi/GetProjectsByNGOId`,{headers:{Authorization:authHeader}}).then((res)=>{
            setProjects(res.data.data);
        });
    }
    useEffect(()=>{
        getProjects();
    },[])
    console.log(projects)
    return (
        <div>
            <Navbar isDonor={false} />
            <div className="flex w-[100vw] justify-center bg-primary">
            <div className=" w-full  flex-col justify-center items-center px-[200px]">
                {projects.length !== 0 &&
                    projects.map((x)=>{
                    return <Project  item={x}/>
                })}
            </div>
            </div>
        </div>
    )
}