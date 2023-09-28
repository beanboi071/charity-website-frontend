import { Formik, useFormik } from "formik";
import loginImg from '../../images/loginimg.jpg';
import axios from "axios";
import '../../CSS/LoginSignup/LoginSignup.css';
import { signUpSchema } from "../../Schemas";
import { baseUrl } from "../Common/endpoints";
import { useState } from "react";
import { DonorSignUp } from "./DonorSignup";
import { NGOSignUp } from "./NGOSignup";

export const SignUp = ({setSignup}) => {
    const [isDonor, setDonor] = useState(true);
    return(
        <div>
         {isDonor?<DonorSignUp  setSignup={setSignup} setDonor={setDonor}/>:<NGOSignUp  setSignup={setSignup} setDonor={setDonor}/>}
      </div>
    )
}