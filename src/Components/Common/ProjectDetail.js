import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  baseUrl, imageUrl } from "../Common/endpoints";
import { Navbar } from "../Common/Navbar";
import { AppContext } from "../../App";
import { decodeToken } from "react-jwt";
import { useFormik } from "formik";
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons"
import { toast } from "react-toastify";

export const ProjectDetail = () =>{
   const navigate = useNavigate();
    const userType = decodeToken(localStorage.getItem('token')).UserType;
    console.log(userType);
    let props = useParams();
    const [projectDetails, setprojectDetails] = useState();
    const getProjectDetails = async () => {
        console.log(`Bearer ${localStorage.getItem("token")}`);
        await axios.get(`${baseUrl}Api/ProjectApi/GetProjectDetails?projectId=`+props.id, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
            setprojectDetails(res.data.data);
        });
    }
    let projectStatus = null; 
    switch(projectDetails?.status){
        case 0 :
            projectStatus = "Pending appproval"; 
            break;
        case 1 :
            projectStatus = "Approved"; 
            break;
        case 2 :
            projectStatus = "Completed"; 
            break;
        case 3 :
            projectStatus = "Rejected"; 
            break;
        default :
                projectStatus = "Unknown"; 
                break;   
    }
    useEffect(() => {
        getProjectDetails();
        
    }, [])
    const donate = async(data) => {
        console.log(`Bearer ${localStorage.getItem("token")}`);
        await axios.post(`${baseUrl}Api/ProjectApi/DonateToProject`,data,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(res => {
            if(res.data.status ===0){
                toast.success(res.data.message);
                getProjectDetails();

            }else{
                toast.warning(res.data.message);
            }
            console.log(res);
            setIsVisible(false);
        })
      }
    const { handleChange, handleSubmit, values,setFieldValue,formik } = useFormik({
        initialValues: {
            projectId:props.id,
            amount: 0
            
        },
        onSubmit: (values, { resetForm }) => {
            donate(values);
            resetForm();
        },
    });
    const [isVisible,setIsVisible] = useState(false); 
    return(
        <div className="relative">
        {isVisible && (
        <>
        <div className="fixed inset-0 bg-black opacity-70 z-7"></div>
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-[500px] border-solid border-[4px] border-quaternary  p-5 z-10 flex items-center rounded-3xl"
        onSubmit={handleSubmit}>
        <div className="w-full" >
            
            <div className="item">
                <div className="flex justify-between">
                <label amount="title">Amount</label>
                <div className="cursor-pointer" onClick={()=>setIsVisible(false)}>
                <IconContext.Provider  value={{ color:'red', size: 20 }}>
                        <RxCross2 className="text-darkText" />
                </IconContext.Provider>
                </div>
                </div>
                
                <input className="p-1 border-b border-b-2 border-b-quaternary w-full focus:outline-none"
                    id="amount"
                    name="amount"
                    type="number"
                    onChange={handleChange}
                    value={values.amount}
                />
            </div>
            <div className="w-[100%] flex items-center justify-center mt-[12px]">
                <input type="submit" className="w-[100%] bg-secondary border-solid border-2 border-quaternary ease-in-out duration-200 hover:cursor-pointer hover:bg-tertiary hover:text-white rounded-3xl py-[5px]"  value="Submit"></input>
            </div>
            
        </div>
    </form>
    </>
    )}
        
        <Navbar isDonor={false} />

        <div className="flex-col px-36  py-12 ">
            
            <div className="h-[500px] overflow-hidden">
            <img className="w-full object-cover" src={imageUrl+ projectDetails?.imagePath} alt="Project img" />
            </div>
            <div className="my-2">
                <p  className="text-4xl  font-semibold" >  {projectDetails?.title}</p>
            </div>
            <div className="">
                <p onClick={() => {navigate("/NGODetail/"+projectDetails?.ngoId)}} className="text-sm hover:cursor-pointer text-slate-500" >  {projectDetails?.ngoUsername}</p>
            </div>
            <div className="my-2">
                <p className="text-xl">{projectDetails?.description}</p>
            </div>
            
            <div className="w-full flex flex-col items-end">
                {userType ===1  && <p className="right-0">{projectStatus}</p>}
                
                
                <p>{projectDetails?.amountRaised} / {projectDetails?.targetAmount}</p>
                <p>{projectDetails?.createdDateTime.split(" ")[0]}</p>
                {(userType === 0) && 
                <div onClick={()=>setIsVisible(true)} className=" mt-2 rounded-xl text-darkText hover:bg-lime-500 hover:text-lightText ease-in-out duration-200 hover:cursor-pointer w-[300px] h-[46px] bg-lime-300 flex justify-center items-center">
                <p className="text-2xl " >Donate</p>
                </div>
                }
                
            
            </div>
            <div>
                
            </div>
        </div>
        
        
        </div>
    )
}