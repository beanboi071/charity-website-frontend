import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { authHeader, baseUrl } from '../Common/endpoints';
import { IconContext } from 'react-icons';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';
import NGOList from '../Common/NGOList';
import { Navbar } from '../Common/Navbar';
import Footer from '../Common/Footer';

export default function NGOs() {
    const [ngos, setNgos] = useState([]);
    const [search, setSearch] = useState("");
    const [skip, setSkip] = useState(0);
    const [take, settake] = useState(12);
    const [count,setCount] = useState(0);
    const getNgos = async () => {
      console.log("called");
      await axios
        .get(
          `${baseUrl}Api/NGOApi/List?search=${search}&skip=${skip}&take=${take}`,
          { headers: { Authorization: authHeader } }
        )
        .then((res) => {
          console.log(res.data.data);
          setNgos(res.data.data.list);
          setCount(res.data.data.count);
        });
    };
    useEffect(() => {
      getNgos();
    }, [skip, take]);
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setSkip(0);
        getNgos();
      }
    };
    return (
      <div>
        <div>
          <Navbar/>
          <div className="w-full flex flex-row px-32 pt-6">
          
            <div className="ml-2">
              NGO Name
              <div className="mt-1 w-[300px] border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between bg-[#ffffff]">
                <input
                  placeholder="Search..."
                  onKeyDown={handleKeyDown}
                  onChange={(event) => setSearch(event.target.value)}
                  type="text"
                  className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
                ></input>
  
                <div
                  className="mr-[10px] hover:cursor-pointer"
                  onClick={() => {
                    setSkip(0);
                    getNgos();
                  }}
                >
                  <IconContext.Provider value={{ size: 20 }}>
                    <FaSearch className="text-darkText" />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NGOList ngos={ngos} />
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
          <Footer/>
      </div>
    );
}
