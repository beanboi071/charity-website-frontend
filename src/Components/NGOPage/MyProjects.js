import { useEffect, useState } from "react";
import { Navbar } from "../Common/Navbar"
import { Project } from "../Common/Project"
import axios from "axios";
import { baseUrl } from "../Common/endpoints";
import { useNavigate } from "react-router-dom";

export const MyProjects = () => {
    
    const authHeader = `Bearer ${localStorage.getItem("token")}`;
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
        await axios.get(`${baseUrl}/Api/ProjectApi/GetProjectsByNGOId`, { headers: { Authorization: authHeader } }).then((res) => {
            setProjects(res.data.data);
        });
    }
    useEffect(() => {
        getProjects();
    }, [])
    console.log(projects)
    return (
        <div>
            <Navbar isDonor={false} />
            <div className=" w-full h-[100vh] bg-primary px-24">
                <div className="pt-[20px] grid grid-cols-3 px-[24px] gap-12 ">
                    {projects.length !== 0 &&
                        projects.map((x) => {
                            return( 
                            <div className=" col-span-1">
                            <Project item={x} />
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}