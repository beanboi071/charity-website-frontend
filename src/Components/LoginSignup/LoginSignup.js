import { Formik, useFormik } from "formik"
import { useState } from "react";
import loginImg from '../../images/loginimg.jpg'
import '../../CSS/LoginSignup/LoginSignup.css'
export const LoginSignup = () => {
   const [isSignUp, setSignup] = useState(false);
   const formik = useFormik({
      initialValues: {
         username: '',
         email: '',
         password: '',
         confirmPwd: '',
         userType: ''
      },
      onSubmit: (values, { resetForm }) => {
         console.log(values);
         resetForm();
      },
   });
   return (
      <div className="bg-gray-200 w-[100vw] h-[100vh] flex justify-center items-center p-0 w-700 shadow-xl border-solid border-green-600">
         <div className="shadow-2xl w-full sm:w-[600px] h-full sm:h-auto sm:min-h-[400px] bg-yellow-500 flex sm:rounded-3xl">
            <form className="border-solid border-2 border-t-quaternary border-l-quaternary border-b-quaternary p-5 bg-green-200 flex items-center sm:rounded-tl-3xl sm:rounded-bl-3xl sm:w-3/5 w-full"
               onSubmit={formik.handleSubmit}>
               <div className="w-full" >
                  {isSignUp &&
                     <div className="item">
                        <label htmlFor="email">Create Username</label>
                        <br />
                        <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary rounded-md w-full"
                           id="username"
                           name="username"
                           type="text"
                           onChange={formik.handleChange}
                           value={formik.values.username}
                        />
                     </div>
                  }
                  <br />
                  <div className="item">
                     <label htmlFor="email">{isSignUp ? 'E-mail' : 'E-mail or Username'}</label>
                     <br />
                     <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary   rounded-md w-full"
                        id="email"
                        name="email"
                        type={isSignUp ? 'email' : 'text'}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                     />
                  </div>
                  <br />
                  <div className="item">
                     <label htmlFor="password">{isSignUp ? 'Create Password' : 'Password'}</label>
                     <br />
                     <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary rounded-md w-full"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                     />
                  </div>
                  <br />
                  {isSignUp &&
                     <div className="item">
                        <label htmlFor="comfirmPwd">Confirm Password</label>
                        <br />
                        <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary rounded-md w-full"
                           id="confirmPwd"
                           name="confirmPwd"
                           type="password"
                           onChange={formik.handleChange}
                           value={formik.values.confirmPwd}
                        />
                     </div>}
                  <div className="flex justify-center">
                     <p>{isSignUp ? 'Signup as: ' : 'Login as:'}</p><pre> </pre>
                     <div>
                        <input
                           className="radioBtn"
                           type="radio"
                           name="userType"
                           id="donorType"
                           value="0"
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
                           value="1"
                        />
                        <label htmlFor="NGOType">NGO</label>
                     </div>
                     <pre> </pre>
                     {!isSignUp &&
                        <div class>
                           <input
                              className="radioBtn"
                              type="radio"
                              name="userType"
                              id="adminType"
                              value="2"
                           />
                           <label htmlFor="adminType">Admin</label>
                        </div>
                     }
                  </div>
                  <div className="w-full flex justify-center">
                     <button className="bg-emerald-200 w-full btn pl-3 pr-3 pt-1 pb-1 border-emerald-400 border-solid border-2  mt-4 rounded-full hover:bg-emerald-400 hover:text-white" type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
                  </div>
                  <br />

                  <div className="flex justify-center">
                     <div>
                        {isSignUp ?
                           <p style={{ display: 'inline' }}>Already have an account?</p> :
                           <p style={{ display: 'inline' }}>Don't have an account?</p>}
                        <span>  </span>
                        {isSignUp ?
                           <p style={{ cursor: 'pointer', display: 'inline', color: 'blue' }} onClick={() => setSignup(false)}>Login</p> :
                           <p style={{ cursor: 'pointer', display: 'inline', color: 'blue' }} onClick={() => setSignup(true)}>Sign Up</p>}
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