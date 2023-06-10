import { Formik, useFormik } from "formik"
import loginImg from '../../images/loginimg.jpg'
import '../../CSS/LoginSignup/LoginSignup.css'
export const Login = ({ isSignUp, setSignup }) => {
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            uNameOrEmail: '',
            password: '',
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
                    onSubmit={handleSubmit}>
                    <div className="w-full" >
                        <br />
                        <div className="item">
                            <label htmlFor="email">E-mail or Username</label>
                            <br />
                            <input className="bg-emerald-100 p-1 border-solid border-2 border-quaternary   rounded-md w-full"
                                id="email"
                                name="email"
                                type="text"
                                onChange={handleChange}
                                value={values.uNameOrEmail}
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
                                    onChange={handleChange}
                                    value={values.userType}
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
                                    onChange={handleChange}
                                    value={values.userType}
                                />
                                <label htmlFor="NGOType">NGO</label>
                            </div>
                            <pre> </pre>
                            <div class>
                                <input
                                    className="radioBtn"
                                    type="radio"
                                    name="userType"
                                    id="adminType"
                                    onChange={handleChange}
                                    value={values.userType}
                                />
                                <label htmlFor="adminType">Admin</label>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="bg-emerald-200 w-full btn pl-3 pr-3 pt-1 pb-1 border-emerald-400 border-solid border-2  mt-4 rounded-full hover:bg-emerald-400 hover:text-white" type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
                        </div>
                        <br />

                        <div className="flex justify-center">
                            <div>
                                <p style={{ display: 'inline' }}>Already have an account?</p>
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