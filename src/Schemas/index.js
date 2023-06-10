import * as yup from "yup"
const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email.").required(),
    
})