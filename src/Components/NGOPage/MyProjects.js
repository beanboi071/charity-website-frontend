import { useEffect, useState } from "react";
import { Navbar } from "../Common/Navbar"
import { Project } from "../Common/Project"
import axios from "axios";
import { authHeader, baseUrl } from "../Common/endpoints";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../Common/ProjectList";
import { AppContext } from "../../App";
export const MyProjects = () => {
    const isDonor = false;
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
        await axios.get(`${baseUrl}Api/ProjectApi/GetProjectsByNGOId`, { headers: { Authorization: authHeader } }).then((res) => {
            setProjects(res.data.data);
        });
    }
    useEffect(() => {
        getProjects();
    }, [])
    console.log(projects)
    return (
        <AppContext.Provider value = {isDonor}>
        <div>
              
           <Navbar isDonor={false} />
            <ProjectList isDonor={false} projects={projects}/>
 
        </div>
        </AppContext.Provider>
 
    )
}