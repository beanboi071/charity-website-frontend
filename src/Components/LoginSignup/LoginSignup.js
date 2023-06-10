import { Formik, useFormik } from "formik"
import { useState } from "react";
import loginImg from '../../images/loginimg.jpg'
import '../../CSS/LoginSignup/LoginSignup.css'
import { Login } from "./Login";
import { SignUp } from "./SignUp";
export const LoginSignup = () => {
   const [isSignUp, setSignup] = useState(false);
   return(
      <div>
         {isSignUp?<SignUp isSignUp={isSignUp} setSignup={setSignup}/>:<Login isSignUp={isSignUp} setSignup={setSignup}/>}
      </div>
   )
}