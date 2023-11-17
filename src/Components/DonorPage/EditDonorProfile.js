import React, { useEffect, useState } from 'react'
import { Navbar } from '../Common/Navbar'
import { authHeader, baseUrl } from '../Common/endpoints';
import axios from 'axios';
import { useFormik } from 'formik';

export default function EditDonorProfile() {
    const [profile, setProfile] = useState({});
    const getDonorProfile = async () => {
        await axios
          .get(`${baseUrl}Api/DonorApi/MyProfile`, {
            headers: { Authorization: authHeader },
          })
          .then((res) => {
            console.log(res.data.data);
            setProfile(res.data.data);
          });
      };
      useEffect(() => {
        getDonorProfile();
      });
      const { handleChange, handleSubmit, values,setFieldValue,formik } = useFormik({
        initialValues: {
            title: '',
            description: '',
            targetAmount: 0,
            imageBase64: ""
        },
        onSubmit: (values, { resetForm }) => {
            
            
            console.log(values);
            resetForm();
        },
    });
  return (
    <div>
        <Navbar />
        <div className=" h-[93vh] bg-gray-50 flex flex-col items-center w-full relative ">

        </div>
    </div>
  )
}
