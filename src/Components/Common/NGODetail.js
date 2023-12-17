import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { authHeader, baseUrl, imageUrl } from './endpoints'
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
  await axios.get(`${baseUrl}Api/NGOApi/GetNGODetail?ngoId=`+props.id, { headers: { Authorization: authHeader } }).then((res) => {
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
      { headers: { Authorization: authHeader } }
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
            <div className="text-darkText mt-32 flex flex-col items-center">
              <p>{NGODetail?.username}</p>
              <p>{NGODetail?.name}</p>
              <p>{NGODetail?.email}</p>
              <a className='text-blue-700 underline' href={NGODetail?.website_Link}>visit website</a>
            </div>
            <div className="flex flex-col bg-grey-50  items-center  ">
            <p className='text-2xl hover:cursor-pointer my-4' onClick={()=>setShowProjects(!showProjects)}>Projects</p>
            </div>
            {showProjects &&
        <>
            <div className="w-full flex flex-row justify-between px-32 relative">
        <div className="w-[300px] bg-grey-50 border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between ">
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

      <div className='bg-grey-50'>
      <ProjectList projects={projects} />
      </div>
        <div className=" w-[96px] bg-grey-50  rounded-xl mt-[48px] flex flex-row justify-between py-1">
          <button
            className="w-1/2 flex items-center justify-center"
            disabled={skip <= 0}
            onClick={() => {
              setSkip(skip - 12);
            }}
          >
            <IconContext.Provider value={{ size: 30 }}>
              <FaArrowLeft className="text-lime-600 hover:text-lime-800" />
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
              <FaArrowRight className="text-lime-600 hover:text-lime-800" />
            </IconContext.Provider>
          </button>
        </div>
        <p className="darkText">
        {skip + 1} - {(skip+take) > count ? count : skip+take} of {count}
        </p>
        
        </>
     
        
        
      
    
        }
        </div>
        
          </div>
         
  
     
      )
}
