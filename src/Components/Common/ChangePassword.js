import { useFormik } from "formik";
import { Navbar } from "./Navbar"
import axios from "axios";
import { authHeader, baseUrl } from "./endpoints";

export const ChangePassword = () => {
    const changePassword = async(data)=>{
        const result = await axios.post(`${baseUrl}Api/ChangePassword`,data,{headers:{Authorization:authHeader}});
    }
    const { handleChange, handleSubmit, values,setFieldValue,formik } = useFormik({
        initialValues: {
            oldPassword:"",
            newPassword: ""
            
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            changePassword(values);
            resetForm();
        },
    });
    
    return(
        <div>
        <Navbar/>
       <div className="flex w-screen h-[93vh] bg-slate-100 justify-center items-center ">
       <form className="  bg-primary w-[500px] border-solid h-fit border-[4px] border-quaternary  p-5 z-10 flex items-center rounded-3xl  "
        onSubmit={handleSubmit}>
        <div className="w-full" >
            
            <div className="item">
                <div className="flex justify-between">
                <label amount="title">Old Password</label>
               
               
                </div>
                <input className="p-1 border-2 rounded  border-quaternary w-full "
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    onChange={handleChange}
                    value={values.oldPassword}
                />
                
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
        </div>
    )
}