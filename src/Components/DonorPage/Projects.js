import { useEffect, useState } from "react";
import { Navbar } from "../Common/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../Common/ProjectList";
import { authHeader, baseUrl } from "../Common/endpoints";
import { AppContext } from "../../App";
export const Projects = () => {
    const isDonor = true;
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
        await axios.get(`${baseUrl}Api/ProjectApi/GetApprovedProjects`, { headers: { Authorization: authHeader } }).then((res) => {
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
            <ProjectList projects={projects}/>
            
        </div>
        </AppContext.Provider>
    )
}