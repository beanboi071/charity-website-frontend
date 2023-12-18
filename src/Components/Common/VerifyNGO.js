import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  baseUrl } from "./endpoints";

export const VerifyNGO = ()=>{
    let props = useParams();
   
    const[isVerified, setVerified] = useState(false);
    const verificationNGO = async () => {
        await axios.get(`${baseUrl}Api/NGOApi/VerifyNGO?NGOId=`+props.id, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
            console.log(res);
            if(res.data.status === 0){
                setVerified(true);
            }
        });
    }
    useEffect(() => {
        verificationNGO();
    }, [])
    return(
        <div className="h-[100vh] w-[100vw]  flex justify-center ">
{isVerified?  
(<div className="mt-36 flex flex-col items-center">
    <p className="text-[3rem]">Verification Successful</p>
    <p>Please proceed to login to the NGO portal with your username and password.</p>
    </div>
):<p>Loading....</p> }
        </div>
    )
}