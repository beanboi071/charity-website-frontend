import axios from "axios";
import { useState } from "react";
import {  baseUrl } from "../Common/endpoints";
import { AdminNavbar } from "./AdminNavbar";
import { ProjectRequestTable } from "./ProjectRequestTable";

export const ProjectRequests = ()=>{
   
    return(
    <div className="flex h-[100vh]">
            <AdminNavbar/>

            <ProjectRequestTable  />
        </div>
    )
}