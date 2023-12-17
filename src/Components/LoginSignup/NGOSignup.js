import { Formik, useFormik } from "formik";
import loginImg from '../../images/loginimg.jpg';
import axios from "axios";
import '../../CSS/LoginSignup/LoginSignup.css';
import { signUpSchema } from "../../Schemas";
import { baseUrl } from "../Common/endpoints";

export const NGOSignUp = ({setSignup,setDonor}) => {

    const SignupUser = async(data) => {
        await axios.post(`${baseUrl}Api/SiginUpNGO`,data).catch((err)=>console.log(err,"error"))
      }
    const { handleChange,handleBlur, handleSubmit, values,errors } = useFormik({
        initialValues: {
            ngoName: '',
            username: '',
            email: '',
            password: '',
            confirmPwd: '',
            website:''

        },
        onSubmit: (values, { resetForm }) => {
            SignupUser(values);
            console.log("Submitted");
            resetForm();
            setSignup(false);
        },
        validationSchema : signUpSchema
    });
    console.log(errors);
    return (
        <div className="bg-gray-200 w-[100vw] h-[100vh] flex justify-center items-center p-0 w-700 shadow-xl border-solid border-green-600">
            <div className="shadow-2xl w-full sm:w-[600px] h-full sm:h-auto sm:min-h-[400px] bg-yellow-500 flex sm:rounded-3xl">
                <form className="border-solid border-2 border-t-quaternary border-l-quaternary border-b-quaternary p-5 bg-neutral-100 flex items-center sm:rounded-tl-3xl sm:rounded-bl-3xl sm:w-3/5 w-full"
                    onSubmit={handleSubmit}>
                    <div className="w-full" >
                    <br />
                        <div className="item">
                            <label htmlFor="ngoName">NGO Name</label>
                            <br />
                            <input className="bg-slate-100 p-1 border-solid border-2 border-quaternary   rounded-md w-full"
                                id="ngoName"
                                name="ngoName"
                                type="text"
                                onChange={handleChange}
                                value={values.ngoName}
                            />
                        </div>
                        <br />
                        <div className="item">
                            <label htmlFor="username">Username</label>
                            <br />
                            <input className="bg-slate-100 p-1 border-solid border-2 border-quaternary   rounded-md w-full"
                                id="username"
                                name="username"
                                type="text"
                                onChange={handleChange}
                                value={values.username}
                            />
                        </div>
                        <br />
                        <div className="item">
                            <label htmlFor="email">E-mail</label>
                            <br />
                            <input className={`bg-slate-100 p-1 border-solid border-2  rounded-md w-full
                             ${errors.email ? 'input-error':'border-quaternary'} `}
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                            />
                        </div>
                        <br />
                        <div className="item">
                            <label htmlFor="website">Website Link</label>
                            <br />
                            <input className="bg-slate-100 p-1 border-solid border-2 border-quaternary   rounded-md w-full"
                                id="website"
                                name="website"
                                type="text"
                                onChange={handleChange}
                                value={values.website}
                            />
                        </div>
                        <br />
                        <div className="item">
                            <label htmlFor="password">Create Password</label>
                            <br />
                            <input className={`bg-slate-100 p-1 border-solid border-2 rounded-md w-full
                             ${errors.password ? 'input-error':'border-quaternary'}`}
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                        <br />
                        <div className="item">
                            <label htmlFor="confirmPwd">Confirm Password</label>
                            <br />
                            <input className="bg-slate-100 p-1 border-solid border-2 border-quaternary rounded-md w-full"
                                id="confirmPwd"
                                name="confirmPwd"
                                type="password"
                                onChange={handleChange}
                                value={values.confirmPwd}
                            />
                        </div>
                       
                        <br/>
                        <div className="flex justify-center">
                            <p>Signup as:</p><pre> </pre>
                            <div>
                                <input
                                    className="radioBtn"
                                    type="radio"
                                    onClick={() => setDonor(true)}
                                />
                                <label htmlFor="donorType" onClick={() => setDonor(true)}>Donor</label>
                            </div>
                            <pre> </pre>
                            <div>
                                <input
                                    className="radioBtn"
                                    type="radio"
                                    
                                    onChange={handleChange}
                                    defaultChecked
                                    
                                />
                                <label htmlFor="NGOType">NGO</label>
                            </div>
                            
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="bg-emerald-200 w-full btn pl-3 pr-3 pt-1 pb-1 border-emerald-300 border-solid border-2  mt-4 rounded-full hover:bg-emerald-300 hover:text-white" type="submit">Sign Up</button>
                        </div>
                        <br />

                        <div className="flex justify-center">
                            <div>
                                <p style={{ display: 'inline' }}>Already have an account?</p>
                                <span>  </span>
                                <p style={{ cursor: 'pointer', display: 'inline', color: 'blue' }} onClick={() => setSignup(false)}>Login</p>
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