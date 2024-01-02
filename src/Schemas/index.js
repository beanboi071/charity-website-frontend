import * as yup from "yup"
export const signUpSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email.").required("Email is required."),
    password: yup.string().min(8,"The password must be atleast 8 characters long.").required("Password is required."),
    confirmPwd : yup.string().oneOf([yup.ref('password'),null],"Passwords must match.").required("Confirm Password is required.")
})
export const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required."),
    userType : yup.string().required("UserType is required.")
})
export const ownerLoginSchema = yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required.")
})