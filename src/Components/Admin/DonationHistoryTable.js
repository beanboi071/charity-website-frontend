import React, { useEffect, useState } from "react";
import { authHeader, baseUrl, imageUrl } from "../Common/endpoints";
import axios from "axios";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

export default function DonationHistoryTable() {
  const [donationHistory, setDonationHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);

  const [take, setTake] = useState(12);
  const [count, setCount] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [ngoName, setNgoName] = useState("");
  const [donorName, setDonorName] = useState("");

  const GetDonationHistory = async () => {
    
    await axios
      .get(
        `${baseUrl}Api/ProjectApi/GetDonationHistory?projectName=${projectName}&ngoName=${ngoName}&donorName=${donorName}&skip=${skip}&take=${take}`,
        { headers: { Authorization: authHeader } }
      )
      .then((res) => {
        console.log(res.data.data);
        setDonationHistory(res.data.data.list);
        setCount(res.data.data.count);
      });
  };
  useEffect(() => {
    GetDonationHistory();
  }, [skip, take]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSkip(0);
      GetDonationHistory();
    }
  };
  return (
    <div className="h-full w-full ml-64 flex  justify-center">
      <div className="w-[80%] mt-16">
        <div className="flex flex-row">
          <div className="mr-2">
            Project Title
            <div className="mt-1 w-[300px] border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between bg-[#ffffff]">
              <input
                placeholder="Search..."
                onKeyDown={handleKeyDown}
                onChange={(event) => {
                  console.log(projectName,ngoName,donorName);setProjectName(event.target.value)}}
                type="text"
                className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
              ></input>

              <div
                className="mr-[10px] hover:cursor-pointer"
                onClick={() => {
                  setSkip(0);
                  GetDonationHistory();
                }}
              >
                <IconContext.Provider value={{ size: 20 }}>
                  <FaSearch className="text-darkText" />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="ml-2">
            NGO Name
            <div className="mt-1 w-[300px] border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between bg-[#ffffff]">
              <input
                placeholder="Search..."
                onKeyDown={handleKeyDown}
                onChange={(event) => setNgoName(event.target.value)}
                type="text"
                className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
              ></input>

              <div
                className="mr-[10px] hover:cursor-pointer"
                onClick={() => GetDonationHistory()}
              >
                <IconContext.Provider value={{ size: 20 }}>
                  <FaSearch className="text-darkText" />
                </IconContext.Provider>
              </div>
            </div>
          </div>
  
        <div className="ml-2">
            Donor Name
            <div className="mt-1 w-[300px] border-solid border-2 border-quaternary rounded-3xl flex items-center justify-between bg-[#ffffff]">
              <input
                placeholder="Search..."
                onKeyDown={handleKeyDown}
                onChange={(event) => setDonorName(event.target.value)}
                type="text"
                className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
              ></input>

              <div
                className="mr-[10px] hover:cursor-pointer"
                onClick={() => GetDonationHistory()}
              >
                <IconContext.Provider value={{ size: 20 }}>
                  <FaSearch className="text-darkText" />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
        
        {donationHistory.length !== 0 &&
          donationHistory.map((x) => {
            return (
              <div
                key={x.id}
                className="mb-3 mt-3 w-full  overflow-hidden h-[128px] bg-gray-100 flex justify-ends"
              >
                <div className="w-full flex">
                  <img
                    className="w-1/3 object-cover"
                    src={imageUrl + x.projectImg}
                    alt="Project img"
                  />
                  <div className="pl-2 w-1/3 flex flex-col justify-center">
                    <p className="text-xl font-semibold">{x.projectName}</p>
                    <p>NGO: {x.ngoUsername}</p>
                    
                  </div>
                  <div className="pl-2 w-1/3 flex flex-col justify-center">
                    <p>Donor: {x.donorUsername}</p>
                    <p>Amount: {x.amount}</p>
                    <p>Date: {x.dateTime}</p>
                  </div>
                </div>
              </div>
            );
          })}
        <div className=" w-full flex flex-col   justify-center items-center py-1">
          <div className="flex flex-row w-[96px] justify-between">
            <button
              className="w-1/2 flex items-center justify-center"
              disabled={skip <= 0}
              onClick={() => {
                setSkip(skip - 12);
              }}
            >
              <IconContext.Provider value={{ size: 30 }}>
                <FaArrowLeft
                  className={
                    skip <= 0
                      ? "text-slate-400"
                      : "text-lime-600 hover:text-lime-800"
                  }
                />
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
            {skip + 1} - {skip + take > count ? count : skip + take} of {count}
          </p>
        </div>
      </div>
    </div>
  );
}
