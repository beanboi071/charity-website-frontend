import axios from "axios";
import { useState } from "react";
import { authHeader, baseUrl } from "../Common/endpoints";
import { AdminNavbar } from "./AdminNavbar";
import { ProjectRequestTable } from "./ProjectRequestTable";

export const ProjectRequests = ()=>{
    const[projectRequests,setprojectRequests] = useState([]);
    const getProjectRequests = async () => {
        await axios.get(`${baseUrl}Api/ProjectApi/GetPendingProjects?skip=0&take=10`, { headers: { Authorization: authHeader } }).then((res) => {
            
            setprojectRequests(res.data.data);
           
        });
    }
    useState(() => {
        getProjectRequests();
    }, []);
    return(
    <div className="flex h-[100vh]">
            <AdminNavbar/>
            <ProjectRequestTable  setprojectRequests={setprojectRequests} projectRequests={projectRequests}/>
        </div>
    )
}