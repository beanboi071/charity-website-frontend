import { Formik, useFormik } from "formik"
import loginImg from '../../images/loginimg.jpg'
import '../../CSS/LoginSignup/LoginSignup.css'
import { baseUrl } from "../Common/endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { ownerLoginSchema } from "../../Schemas";
export const AdminLogin = () => {
    const navigate = useNavigate();
    const LoginAdmin = async(data) => {
        const result = await axios.post(`${baseUrl}Api/AdminLogin`,data);
        if (result.data.status === 0){
            localStorage.setItem("token",result.data.data);
            const decodedToken = decodeToken(result.data.data);
            console.log(decodedToken);
            
                navigate("/Admin/Dashboard");
            
            
        }
        console.log(result.data);
      }
    const { handleChange, handleSubmit, values,errors } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            values.userType = parseInt(values.userType);
            LoginAdmin(values); 
            console.log(values);
            resetForm();
        },
        validationSchema : ownerLoginSchema
    });
    return (
        <div className="bg-gray-200 w-[100vw] h-[100vh] flex justify-center items-center p-0 w-700 shadow-xl border-solid border-green-600">
            <div className="shadow-2xl w-full sm:w-[600px] h-full sm:h-auto sm:min-h-[400px] bg-yellow-500 flex sm:rounded-3xl">
                <form className="border-solid border-2 border-t-quaternary border-l-quaternary border-b-quaternary p-5 bg-neutral-100 flex items-center sm:rounded-tl-3xl sm:rounded-bl-3xl sm:w-3/5 w-full"
                    onSubmit={handleSubmit}>
                    <div className="w-full" >
                        <br />
                        <div className="item">
                            <label htmlFor="uName">Username</label>
                            <br />
                            <input className={`bg-slate-100 p-1 border-solid border-2  rounded-md w-full
                             ${errors.password ? 'input-error':'border-quaternary'} `}
                             id="uName"
                                name="username"
                                type="text"
                                onChange={handleChange}
                                value={values.username}
                            />
                        </div>
                        <br />
                        <div className="item">
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className={`bg-slate-100 p-1 border-solid border-2  rounded-md w-full
                             ${errors.password ? 'input-error':'border-quaternary'} `}
                              id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                        <br />
                        
                        <div className="w-full flex justify-center">
                            <button className="bg-emerald-200 w-full btn pl-3 pr-3 pt-1 pb-1 border-emerald-400 border-solid border-2  mt-4 rounded-full hover:bg-emerald-400 hover:text-white" type="submit">Login</button>
                        </div>
                        <br />

                       
                    </div>
                </form>
                <div id="imgDiv" className="sm:w-2/5 w-0 rounded-tr-3xl rounded-br-3xl ">
                    <img className="rounded-tr-3xl rounded-br-3xl" style={{ height: '100%', objectFit: 'cover' }} src={loginImg} alt="login logo" />
                </div>
            </div>
        </div>

    )
}