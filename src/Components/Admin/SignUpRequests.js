import { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar"
import axios from "axios";
import {  baseUrl } from "../Common/endpoints";
import { SignUpRequestTable } from "./SignUpRequestTable";

export const SignUpRequests = ()=>{
    const[signUps,setSignUps] = useState([]);
    const getSignUps = async () => {
        await axios.get(`${baseUrl}Api/NGOApi/GetSignUpRequests?skip=0&take=10`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
            
            setSignUps(res.data.data);
           
        });
    }
    useEffect(() => {
        getSignUps();
    }, []);
    return(
    <div className="flex h-[100vh]">
            <AdminNavbar/>
            <SignUpRequestTable signUps={signUps}/>
        </div>
    )
}