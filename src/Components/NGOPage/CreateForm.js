import { useFormik } from "formik"
import loginImg from '../../images/loginimg.jpg'
import { convertImageToBase64 } from "../utils/convertImageToBase64";
import FileUpload from "../Common/FileUpload";
import { baseUrl } from "../Common/endpoints";
import axios from "axios";
export const CreateForm = ()=>{
    const authHeader = `Bearer ${localStorage.getItem("token")}`;
   
    const CreateProject = async(data) => {
        console.log(authHeader,'tyuytffghgfgh')
        await axios.post(`${baseUrl}/Api/ProjectApi/CreateProject`,data,{headers:{Authorization:authHeader}})
      }
    const { handleChange, handleSubmit, values,setFieldValue } = useFormik({
        initialValues: {
            title: '',
            description: '',
            targetAmount: null,
            imageBase64: ""
        },
        onSubmit: (values, { resetForm }) => {
            CreateProject(values);
            console.log(values);
            resetForm();
        },
    });
    return (
    <div>
        <div className="shadow-2xl w-full sm:w-[600px] h-full sm:h-auto sm:min-h-[400px] bg-primary flex sm:rounded-3xl">
                <form className="border-solid border-2 border-t-quaternary border-l-quaternary border-b-quaternary p-5 bg-green-200 flex items-center sm:rounded-tl-3xl sm:rounded-bl-3xl sm:w-3/5 w-full"
                    onSubmit={handleSubmit}>
                    <div className="w-full" >
                        
                        <div className="item">
                            <label htmlFor="title">Title</label>
                            
                            <input className="bg-green-200 p-1 border-b border-b-2 border-b-quaternary w-full focus:outline-none"
                                id="title"
                                name="title"
                                type="text"
                                onChange={handleChange}
                                value={values.title}
                            />
                        </div>
                        
                        <div className="item mt-[8px]">
                            <label htmlFor="targetAmount">Target Amount</label>
                            
                            <input className="bg-green-200 p-1 border-b border-b-2 border-b-quaternary w-full focus:outline-none"
                                id="targetAmount"
                                name="targetAmount"
                                type="number"
                                onChange={handleChange}
                                value={values.targetAmount}
                            />
                        </div>
                        
                        <div className="item mt-[8px]">
                            <label htmlFor="description">Description</label>
                            
                            
                            <textarea className="mt-[5px] h-[80px] bg-green-200 p-1 border-solid border-2 border-quaternary rounded-md w-full"
                                id="description"
                                name="description"
                                type="text"
                                onChange={handleChange}
                                value={values.description}
                            />
                        </div>
                        
                        
                        {/* <div className="item">
                            <label htmlFor="targetAmount">imageBase64</label>
                            <br />
                            <input className="bg-secondary p-1 border-b border-b-2 border-b-quaternary w-full focus:outline-none"
                                id="imageBase64"
                                name="imageBase64"
                                type="file"
                                onChange={handleChange}
                                value={values.imageBase64}
                            />
                        </div>      */}
                        <div className='flex flex-col gap-3'>
                        <p className=''>imageBase64</p>
                        <FileUpload disabled={false} value={values?.imageBase64} name="imageBase64" onChange={async (file) => { setFieldValue("imageBase64", await convertImageToBase64(file)) }} errors={()=>{}} />
                    </div>
                        <div className="w-[100%] flex items-center justify-center mt-[12px]">
                            <input type="submit" className="w-[100%] bg-emerald-200 border-solid border-2 border-emerald-400 ease-in-out duration-200 hover:cursor-pointer hover:bg-emerald-400 hover:text-white rounded-3xl py-[5px]"  value="Submit"></input>
                        </div>
                        
                    </div>
                </form>
                <div id="imgDiv" className="sm:w-2/5 w-0 rounded-tr-3xl rounded-br-3xl ">
                    <img className="rounded-tr-3xl rounded-br-3xl" style={{ height: '100%', objectFit: 'cover' }} src={loginImg} alt="login logo" />
                </div>
            </div>
    </div>)
}