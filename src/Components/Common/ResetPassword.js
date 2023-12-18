import axios from "axios";
import React from "react";
import {  baseUrl } from "./endpoints";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  
  const getOTP = async (data) => {
    const result = await axios.post(`${baseUrl}Api/GetOTP`, data);

    if (result.data.status === 0){
        toast.success(result.data.message);
        localStorage.setItem("email",data.email);
        localStorage.setItem("userType",data.userType);
        navigate("/VerifyOTP");
    }else
    {
        
        toast.error(result.data.message);
        

    }
  };
  const { handleChange, handleSubmit, values, setFieldValue, formik } =
    useFormik({
      initialValues: {
        email: "",
        userType: null,
      },
      onSubmit: (values, { resetForm }) => {
        values.userType = parseInt(values.userType);
        console.log(values);
        getOTP(values);
        resetForm();
      },
    });
  return (
    <div className="flex w-screen h-[93vh] bg-gray-200 justify-center items-center ">
      <form
        className="  bg-neutral-100 w-[500px] border-solid h-fit border-[4px] border-quaternary  p-5 z-10 flex items-center rounded-3xl  "
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <div className="item py-2">
            <div className="flex justify-between">
              <label>Email</label>
            </div>
            <input
              className="p-1 border-2 rounded bg-slate-100  border-quaternary w-full "
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className="item flex justify-center py-2">
            <p>User Type:</p>
            <pre> </pre>
            <div>
              <input
                className="radioBtn"
                type="radio"
                name="userType"
                id="donorType"
                onChange={() => {
                  setFieldValue("userType", "0");
                }}
                checked={values.userType === "0"}
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
                onChange={() => {
                  setFieldValue("userType", "1");
                }}
                checked={values.userType === "1"}
              />
              <label htmlFor="NGOType">NGO</label>
            </div>
          </div>

          <div className="w-[100%] flex items-center justify-center mt-[12px]">
            <input
              type="submit"
              className="w-[100%] bg-emerald-200 border-solid border-2 border-emerald-300 ease-in-out duration-200 hover:cursor-pointer hover:bg-emerald-300 hover:text-white rounded-3xl py-[5px]"
              value="Send OTP"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
