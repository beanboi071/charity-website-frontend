import { Formik, useFormik } from "formik"
import loginImg from '../../images/loginimg.jpg'
import '../../CSS/LoginSignup/LoginSignup.css'
import { baseUrl } from "../Common/endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { ToastContainer, toast } from "react-toastify";
export const Login = ({ isSignUp, setSignup }) => {
    const navigate = useNavigate();
    
    const LoginUser = async(data,resetForm) => {
        const result = await axios.post(`${baseUrl}Api/Login`,data);
        if (result.data.status === 0){
            localStorage.setItem("token",result.data.data);
            const decodedToken = decodeToken(result.data.data);
            console.log(decodedToken);
            if(data.userType === 0){
                navigate("/Donor/Home");
            }
            if(data.userType === 1){
                navigate("/NGO/Home");
            }
            resetForm()
            
        }else
        {
            console.log("called");
            toast.error(result.data.message);
            resetForm()

        }
      }
    const { handleChange, handleSubmit, values,setFieldValue } = useFormik({
        initialValues: {
            username: '',
            password: '',
            userType: null
        },
        onSubmit: (values, { resetForm }) => {
            
            values.userType = parseInt(values.userType);
            LoginUser(values,resetForm); 
           
        },
    });

    console.log(values);

    return (
        <div className="bg-gray-200 w-[100vw] h-[100vh] flex justify-center items-center p-0 w-700 shadow-xl border-solid border-green-600">
            <div className="shadow-2xl w-full sm:w-[600px] h-full sm:h-auto sm:min-h-[400px] bg-yellow-500 flex sm:rounded-3xl">
                <form className="border-solid border-2 border-t-quaternary border-l-quaternary border-b-quaternary p-5 bg-green-200 flex items-center sm:rounded-tl-3xl sm:rounded-bl-3xl sm:w-3/5 w-full"
                    onSubmit={handleSubmit}>
                    <div className="w-full" >
                        <br />
                        <div className="item">
                            <label htmlFor="uName">Username</label>
                            <br />
                            <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary   rounded-md w-full"
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
                            <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary rounded-md w-full"
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                        <br />
                        <div className="flex justify-center">
                            <p>Login as:</p><pre> </pre>
                            <div>
                                <input
                                    className="radioBtn"
                                    type="radio"
                                    name="userType"
                                    id="donorType"
                                    onChange={
                                        ()=>{
                                            setFieldValue('userType','0')
                                        }
                                    }
                                    checked={values.userType==='0'}
                                   
                                />
                                <label htmlFor="donorType">Donor</label>
                            </div>
                            <pre> </pre>
                            <div>
                                <input
                                    className="radioBtn"
                                    type="radio"
                                    name="userType"
                                    id="NGOType"
                                    onChange={
                                        ()=>{
                                            setFieldValue('userType','1')
                                        }
                                    }
                                    checked={values.userType==='1'}

                                />
                                <label htmlFor="NGOType">NGO</label>
                            </div>
                            
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="bg-emerald-200 w-full btn pl-3 pr-3 pt-1 pb-1 border-emerald-400 border-solid border-2  mt-4 rounded-full hover:bg-emerald-400 hover:text-white" type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
                        </div>
                        <br />

                        <div className="flex justify-center">
                            <div>
                                <p style={{ display: 'inline' }}>Don't have an account?</p>
                                <span>  </span>
                                <p style={{ cursor: 'pointer', display: 'inline', color: 'blue' }} onClick={() => setSignup(true)}>Sign Up</p>
                            </div>
                        </div>
                    </div>
                </form>
                <div id="imgDiv" className="sm:w-2/5 w-0 rounded-tr-3xl rounded-br-3xl ">
                    <img className="rounded-tr-3xl rounded-br-3xl" style={{ height: '100%', objectFit: 'cover' }} src={loginImg} alt="login logo" />
                </div>
            </div>
            
        </div>

    )
}