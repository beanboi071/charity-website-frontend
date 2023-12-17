import { useEffect, useState } from "react";
import { Navbar } from "../Common/Navbar";
import { Project } from "../Common/Project";
import axios from "axios";
import { IconContext } from "react-icons";
import { FaArrowRight, FaArrowLeft, FaSearch, FaPlus } from "react-icons/fa";
import { authHeader, baseUrl } from "../Common/endpoints";
import { Link, useNavigate } from "react-router-dom";
import { ProjectList } from "../Common/ProjectList";
import { AppContext } from "../../App";
export const MyProjects = () => {
  const isDonor = false;
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(12);
  const [count, setCount] = useState(0);
  const [isHovered, setHover] = useState(false);
  const getProjects = async () => {
    await axios
      .get(
        `${baseUrl}Api/ProjectApi/GetProjectsByNGOId?search=${search}&skip=${skip}&take=${take}`,
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
    <div className="">
      <Navbar />
      <div className="flex flex-col bg-primary h-full items-center py-6 ">
        <div className="w-full">
        <div className="w-full flex flex-row justify-between px-32">
          <div className="w-[300px] border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between bg-[#ffffff]">
            <input
              placeholder="Search..."
              onKeyDown={handleKeyDown}
              onChange={(event) => setSearch(event.target.value)}
              type="text"
              className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
            ></input>

            <div
              className="mr-[10px] hover:cursor-pointer"
              onClick={() => getProjects()}
            >
              <IconContext.Provider value={{ size: 20 }}>
                <FaSearch className="text-darkText" />
              </IconContext.Provider>
            </div>
          </div>
          <Link
            to="/NGO/Create"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flec-row bg-lime-200 rounded-lg justify-center items-center text-darkText px-4 py-2 hover:bg-lime-400 hover:cursor-pointer hover:text-white"
          >
            <p className="mr-2">Create Project</p>
            <IconContext.Provider value={{ size: 20 }}>
              <FaPlus className={isHovered ? "text-white" : "text-lime-600"} />
            </IconContext.Provider>
          </Link>
        </div>

        <ProjectList projects={projects} />

        <div className="flex justify-center items-center flex-col">

        <div className=" w-[96px]  rounded-xl mt-[48px] flex flex-row justify-between py-1">
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
        </div>
        
        </div>
      </div>
     
    </div>
  );
};
