import React, { useEffect, useState } from "react";
import { Navbar } from "../Common/Navbar";
import { authHeader, baseUrl, imageUrl } from "../Common/endpoints";
import axios from "axios";
import { useFormik } from "formik";
import FileUpload from "../Common/FileUpload";
import { convertImageToBase64 } from "../utils/convertImageToBase64";
import { IconContext } from "react-icons";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function EditNGOProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const [isShown, setShown] = useState(false);
  const [isClose, setClose] = useState(false);
  const getNGOProfile = async() => {
    await axios
      .get(`${baseUrl}Api/NGOApi/MyProfile`, {
        headers: { Authorization: authHeader },
      })
      .then((res) => {
        setProfile(res.data.data);
        setFieldValue('name', res.data.data.name );
        setFieldValue('username', res.data.data.username );
        setFieldValue('email', res.data.data.email );
setFieldValue('website_Link',res.data.data.website_Link);

        console.log("check",res.data.data);
      });
  };
  const UpdateProfile = async (data) => {
    await axios.put(`${baseUrl}Api/NGOApi/MyProfile`, data).then((res) => {
      if (res.data.status === 0) {
        navigate("/NGO/Profile");
      }
    });
  };
  useEffect(() => {
    getNGOProfile();
  }, []);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    setFieldValue,
    formik,
  } = useFormik({
    initialValues: {
      username:  "",
      image_Path: null,
      email: "",
      name: "",
      website_Link:""
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      UpdateProfile(values);
      resetForm();
    },
  });
  return (
    <div>
      <Navbar />
      <div className=" h-[93vh] bg-gray-50 flex flex-col items-center  w-full relative ">
        <div className="my-16 border-solid border-2 border-quaternary  flex flex-col justify-center items-center py-6 w-1/2 rounded-3xl">
          <form className="w-full px-36 " onSubmit={handleSubmit}>
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
            <div className="flex flex-col  items-center w-full ">
              <div className="relative ">
                <div className="  w-[150px] h-[150px] overflow-hidden border-solid border-4 rounded-[50%] border-slate-300 bg-white z-10  flex justify-center">
                  {isClose ? (
                    <img
                      class=" h-full  object-cover"
                      src={imageUrl + "Default\\UserProfileImg.jpg"}
                      alt="Project img"
                    />
                  ) : (
                    <img
                      class=" h-full  object-cover"
                      src={imageUrl + profile.image_Path}
                      alt="Project img"
                    />
                  )}
                </div>
                {isShown && (
                  <div className="absolute translate-y-[-100%] w-[150px] h-[150px] flex justify-center items-center  overflow-hidden border-solid border-4 rounded-[50%] border-slate-300 object-cover bg-white z-10  ">
                    <FileUpload
                      className="flex-grow "
                      disabled={false}
                      value={values?.image_Path}
                      name="image_Path"
                      onChange={async (file) => {
                        setFieldValue(
                          "image_Path",
                          await convertImageToBase64(file)
                        );
                      }}
                      errors={() => {}}
                    />
                  </div>
                )}
                <div className=" h-[24px] w-[24px] border-solid border-2 rounded-[50%] border-slate-300 overflow-hidden absolute rounded-[50%] translate-x-[120px] translate-y-[-135px] z-40 flex justify-center">
                  <div onClick={()=>{
                    setClose(true);
                    setShown(false);
                    setFieldValue(
                      "image_Path",
                      ""
                    )
                  }} className="hover:cursor-pointer w-full flex items-center justify-center absolute h-full bg-white z-20 ">
                    <IconContext.Provider value={{ size: 15 }}>
                      <FaTimes className="text-red-500" />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="h-[24px] w-[24px] border-solid border-2 rounded-[50%] border-slate-300 overflow-hidden relative rounded-[50%] translate-x-[120px] translate-y-[-40px] z-30">
                  <div className=" w-full flex items-center justify-center absolute h-full bg-white z-20 ">
                    <IconContext.Provider value={{ size: 15 }}>
                      <FaPlus className="text-lime-600" />
                    </IconContext.Provider>
                  </div>

                  <div className="opacity-0 w-full h-full absolute z-30">
                    <FileUpload
                      disabled={false}
                      name="image_Path"
                      onChange={async (file) => {
                        setShown(true);
                        setFieldValue(
                          "image_Path",
                          await convertImageToBase64(file)
                        );
                      }}
                      errors={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="item w-72">
                <label htmlFor="name">NGO Name</label>
                <br />
                <input
                  className=" p-1 border-b-solid border-b-2 border-b-quaternary bg-gray-50 focus:outline-none w-full"
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>

              <div className="item w-72">
                <label htmlFor="username">Username</label>
                <br />
                <input
                  className="p-1 border-b-solid border-b-2 border-b-quaternary bg-gray-50 focus:outline-none w-full"
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  value={values.username}
                />
              </div>

              <div className="item w-72">
                <label htmlFor="email">E-mail</label>
                <br />
                <input
                  className={` p-1 border-b-solid border-b-2 border-b-quaternary bg-gray-50 focus:outline-none w-full
                             ${
                               errors.email
                                 ? "input-error"
                                 : "border-quaternary"
                             } `}
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
              </div>
              <div className="item w-72">
                <label htmlFor="email">Website Link</label>
                <br />
                <input
                  className={'p-1 border-b-solid border-b-2 border-b-quaternary bg-gray-50 focus:outline-none w-full'}
                  id="website_Link"
                  name="website_Link"
                  type="text"
                  onChange={handleChange}
                  value={values.website_Link}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-32 flex items-center justify-center mt-[12px]">
                <input
                  type="submit"
                  className="w-[100%] bg-lime-200 border-solid border-2 text-darkText border-lime-500 ease-in-out duration-200 hover:cursor-pointer hover:bg-lime-400 hover:text-white rounded-3xl py-[5px]"
                  value="Save"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
