import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import { baseUrl } from './endpoints';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function RecoverPassword() {
  const navigate = useNavigate();
  const recoverPassword = async(data)=>{
    await axios.post(`${baseUrl}Api/RecoverPassword`,data,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(res => {
        if(res.data.status === 0){
          navigate("/Login");
            toast.success(res.data.message);
          localStorage.clear();


        }else{
          toast.waring(res.data.message);
        }
    })

}
  const { handleChange, handleSubmit, values,setFieldValue,formik } = useFormik({
    initialValues: {
        newPassword:"",
        email: localStorage.getItem("email"),
        userType: localStorage.getItem("userType")
    },
    onSubmit: (values, { resetForm }) => {
        console.log(values);
        recoverPassword(values);
        resetForm();
    },
});
  return (
    <div className="flex w-screen h-[93vh] bg-slate-100 justify-center items-center ">
       <form className="  bg-primary w-[500px] border-solid h-fit border-[4px] border-quaternary  p-5 z-10 flex items-center rounded-3xl  "
        onSubmit={handleSubmit}>
        <div className="w-full" >
            
            <div className="item">
            
               
                
            </div>
            <div className="item py-4">
                <div className="flex justify-between">
                <label amount="title">New Password</label>
               
               
                </div>
                <input className="p-1 border-2 rounded  border-quaternary w-full "
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    onChange={handleChange}
                    value={values.newPassword}
                />
                
            </div>
            <div className="w-[100%] flex items-center justify-center mt-[12px]">
                <input type="submit" className="w-[100%] bg-secondary border-solid border-2 border-quaternary ease-in-out duration-200 hover:cursor-pointer hover:bg-tertiary hover:text-white rounded-3xl py-[5px]"  value="Submit"></input>
            </div>
            
        </div>
    </form>

        </div>
  )
}
