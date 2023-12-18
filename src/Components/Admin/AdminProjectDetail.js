import React, { useEffect, useState } from 'react'
import { AdminNavbar } from './AdminNavbar'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { baseUrl, imageUrl } from '../Common/endpoints';
import { toast } from 'react-toastify';

export default function AdminProjectDetail() {
    let props = useParams();
    const [projectDetails, setprojectDetails] = useState();
    const approveProject = async (id) => {
        await axios
          .get(`${baseUrl}Api/ProjectApi/ApproveProject?projectId=` + id, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          })
          .then((res)=>{if(res.data.status === 0){
            getProjectDetails();
            toast.success(res.data.message);
          }});
      };
    const getProjectDetails = async () => {
        await axios.get(`${baseUrl}Api/ProjectApi/GetProjectDetails?projectId=`+props.id, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
            setprojectDetails(res.data.data);
            console.log(res.data.data);

        });
    }
    useEffect(() => {
        getProjectDetails();
        
    }, [])
    return (
        <div className="flex h-[100vh] w-[100vw] flex-row justify-between ">
            <AdminNavbar/>
            <div className="flex-col px-36 h-full w-full ml-64 flex  justify-center" >
            
            <div className="h-[500px] overflow-hidden">
            <img className="w-full object-cover" src={imageUrl+ projectDetails?.imagePath} alt="Project img" />
            </div>
            <div>
                <p className="text-4xl font-semibold" >  {projectDetails?.title}</p>
            </div>
            <div>
                <p className="text-xl">{projectDetails?.description}</p>
            </div>
            
            <div className="w-full flex flex-col items-end">
                <p>{projectDetails?.amountRaised} / {projectDetails?.targetAmount}</p>
                <p>{projectDetails?.createdDateTime.split(" ")[0]}</p>
                <a href={projectDetails?.website_Link}>{projectDetails?.ngoUsername}</a>
                {projectDetails?.status === 0?
                <div onClick={()=>approveProject(projectDetails.id)}  className=" mt-2 rounded-xl hover:bg-lime-500 ease-in-out duration-200 hover:cursor-pointer w-[200px] h-[46px] bg-lime-300 flex justify-center items-center hover:text-white">
                <p className="text-2xl" >Approve</p>
                </div>:
                <p className='text-2xl text-lime-500'>Approved</p>}
                
                
            
            </div>
            <div>
                
            </div>
        </div>
        </div>
    )
    }
