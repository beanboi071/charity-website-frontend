import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import {  baseUrl, imageUrl } from './endpoints'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { FaArrowLeft, FaArrowRight, FaPlus, FaSearch } from 'react-icons/fa';
import { ProjectList } from './ProjectList';
import Footer from './Footer';

export default function NGODetail() {
  let props = useParams();
const [NGODetail,setNGODetail] = useState();
const getNGODetail = async () => {
  await axios.get(`${baseUrl}Api/NGOApi/GetNGODetail?ngoId=`+props.id, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
    setNGODetail(res.data.data);
    console.log(res.data.data);
  });
}
useEffect(() => {
  getNGODetail();
  
}, [])
const [projects, setProjects] = useState([]);
const [search, setSearch] = useState("");
const [skip, setSkip] = useState(0);
const [take, setTake] = useState(12);
const [count, setCount] = useState(0);
const [isHovered, setHover] = useState(false);
const [showProjects,setShowProjects] = useState(false);
const getProjects = async () => {
  await axios
    .get(
      `${baseUrl}Api/ProjectApi/GetNGOProjects?ngoId=${props.id}&search=${search}&skip=${skip}&take=${take}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((res) => {
      setProjects(res.data.data.list);
      setCount(res.data.data.count);
      console.log(`${skip} ${take}`);
    });
};
const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    getProjects();
  }
};
useEffect(() => {
  getProjects();
}, [skip, take]);
    return (
        <div>
          <Navbar />
          <div className={showProjects ? "bg-gray-50 flex flex-col items-center w-full relative pb-24":" h-[93vh] bg-gray-50 flex flex-col items-center w-full relative "} >
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
                src={imageUrl + NGODetail?.image_Path}
                alt="Project img"
              />
            </div>
            <div className="text-darkText mt-32 w-full flex flex-col items-center">
              <p>{NGODetail?.username}</p>
              <p>{NGODetail?.name}</p>
              <p>{NGODetail?.email}</p>
              <a className='text-blue-700 underline' href={NGODetail?.website_Link}>visit website</a>
            </div>
            <div className="flex flex-col w-full items-center  ">
            <p className='text-2xl hover:cursor-pointer my-4' onClick={()=>setShowProjects(!showProjects)}>Projects</p>
            </div>
            {showProjects &&
        <div className='w-full '>
            <div className="w-full w-full flex flex-row px-36 pt-6 ">
        <div className="w-[300px]  border-solid  border-2 border-quaternary rounded-3xl flex items-center justify-between ">
          <input
            placeholder="Search..."
            onKeyDown={handleKeyDown}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
          ></input>

          <div
            className="mr-[10px] hover:cursor-pointer "
            onClick={() => getProjects()}
          >
            <IconContext.Provider value={{ size: 20 }}>
              <FaSearch className="text-darkText" />
            </IconContext.Provider>
          </div>
        </div>
       
      </div>

      <div className=' bg-grey-50'>
      <ProjectList projects={projects} />
      <div className=" w-full flex flex-col mt-[48px]  justify-center items-center py-1">
          <div className="flex flex-row w-[96px] justify-between">
            <button
              className="w-1/2 flex items-center justify-center"
              disabled={skip <= 0}
              onClick={() => {
                setSkip(skip - 12);
              }}
            >
              <IconContext.Provider value={{ size: 30 }}>
                <FaArrowLeft className ={(skip <= 0)?"text-slate-400":"text-lime-600 hover:text-lime-800"} />
              </IconContext.Provider>
            </button>
            <button
              className="w-1/2 flex items-center justify-center"
              disabled={skip + take >= count}
              onClick={() => {
                setSkip(skip + 12);
              }}
            >
              <IconContext.Provider value={{ size: 30 }}>
                <FaArrowRight className ={(skip + take >= count)?"text-slate-400":"text-lime-600 hover:text-lime-800"} />
              </IconContext.Provider>
            </button>
          </div>
          <p className="darkText">
            {skip + 1} - {(skip+take) > count ? count : skip+take} of {count}
          </p>
        </div>
</div>
     
        
        
      </div>
    
        }
        </div>
        </div>
      
     
      )
}
