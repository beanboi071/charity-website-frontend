import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { baseUrl } from "./endpoints";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RxButton } from "react-icons/rx";

function VerifyOTP() {
  const resendOtp = async () => {
    const result = await axios.post(`${baseUrl}Api/GetOTP`, {
      email: localStorage.getItem("email"),
      userType: localStorage.getItem("userType"),
    });
    if (result.data.status === 0) {
      setTime(60);
      setOtpField(true);
      toast.success(result.data.message);
      console.log("otp resent");
    }
  };
  const navigate = useNavigate();
  const [time, setTime] = useState(60);
  const [isOtpFieldEnabled, setOtpField] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
      setOtpField(false);
    }
    return () => clearInterval(timer);
  }, [time]);

  const verifyOtp = async (data) => {
    await axios.post(baseUrl + "Api/VerifyOTP", data).then((res) => {
      if (res.data.status === 1) {
        if (res.data.message === "OTP Expired") {
          localStorage.clear();
          navigate("/");
          toast.warning(res.data.message);
        } else {
          toast.warning(res.data.message);
        }
      } else {
        console.log("otp verified");
      }
    });
  };
  const { handleChange, handleSubmit, values, formik } = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (values, { resetForm }) => {
      values = {
        ...values,
        email: localStorage.getItem("email"),
        userType: localStorage.getItem("userType"),
      };
      console.log("submitted");
      console.log(values);
      verifyOtp(values);
      resetForm();
    },
  });
  return (
    <div className="flex w-screen h-[93vh] bg-slate-100 justify-center items-center ">
      <form
        className="  bg-primary w-[500px] border-solid h-fit border-[4px] border-quaternary  p-5 z-10 flex items-center rounded-3xl  "
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <div className="item py-2">
            <div className="flex justify-between">
              <label>OTP</label>
            </div>
            <input
              className="p-1 border-2 rounded  border-quaternary w-full "
              id="otp"
              name="otp"
              type="text"
              onChange={handleChange}
              value={values.otp}
            />
          </div>

          <div className="w-[100%] flex flex-col items-center justify-center mt-[12px]">
            {isOtpFieldEnabled ? (
              <input
                type="submit"
                className="w-[100%] bg-secondary border-solid border-2 border-quaternary ease-in-out duration-200 hover:cursor-pointer hover:bg-tertiary hover:text-white rounded-3xl py-[5px] "
                value={"Verify OTP"}
              ></input>
            ) : (
              <div
                onClick={() => {
                  resendOtp();
                }}
                className="text-center w-[100%] bg-secondary border-solid border-2 border-quaternary ease-in-out duration-200 hover:cursor-pointer hover:bg-tertiary hover:text-white rounded-3xl py-[5px] "
              >
                Resend OTP
              </div>
            )}
            {isOtpFieldEnabled && <p className="mt-3">Resend OTP in... {time} sec</p>}
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default VerifyOTP;
