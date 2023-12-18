import React, { useEffect, useState } from 'react'
import { Navbar } from '../Common/Navbar'
import {  baseUrl, imageUrl } from '../Common/endpoints';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaEdit } from 'react-icons/fa';

export default function NGOProfile() {
  const [profile, setProfile] = useState({});
  const[hover,setHover] = useState(false);
  const getDonorProfile = async () => {
    await axios
      .get(`${baseUrl}Api/NGOApi/MyProfile`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setProfile(res.data.data);
      });
  };
  useEffect(() => {
    getDonorProfile();
  },[]);
  return (
    <div>
      <Navbar />
      <div className=" h-[93vh] bg-gray-50 flex flex-col items-center w-full relative ">
        <div className="w-full h-[250px] bg-red-100 overflow-hidden z-5 ">
          <img
            class="blur-sm w-full h-[250px] object-cover"
            src={imageUrl + "Default/ProfileBackground.jpg"}
            alt="Project img"
          />
        </div>
        <div className="absolute top-[250px] w-[200px] h-[200px] overflow-hidden border-solid border-4 rounded-[50%] border-slate-300 bg-white flex justify-center z-10  translate-y-[-50%] ">
          <img
            class=" h-full  object-cover"
            src={imageUrl + profile.image_Path}
            alt="Project img"
          />
        </div>
        <div className="text-darkText mt-32 flex flex-col items-center">
          <p>{profile.username}</p>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>Balance: {profile.balance}</p>
          <a className='text-blue-700 underline' href={profile.website_Link}>visit website</a>
          <Link to={"/NGO/Profile/Edit"} onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} className="my-8 rounded-lg border-solid border-2 border-lime-400 w-[100px] bg-lime-200 flex flex-row justify-center items-center py-1 hover:text-white hover:bg-lime-400 ease-in-out duration-200">
          <IconContext.Provider value={{ size: 20 }}>
                  <FaEdit  className={hover?"text:white":"text-lime-800"} />
                </IconContext.Provider><p className="ml-2">Edit</p></Link>
        </div>
      </div>
    </div>
  )
  }
  