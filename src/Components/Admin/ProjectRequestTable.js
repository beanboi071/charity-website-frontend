import axios from "axios";
import { authHeader, baseUrl, imageUrl } from "../Common/endpoints";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowRight, FaArrowLeft, FaSearch } from "react-icons/fa";
export const ProjectRequestTable = () => {
  const [projectRequests, setprojectRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [ngoName, setNgoName] = useState("");
  const [take, setTake] = useState(12);
  const [count, setCount] = useState(0);
  const getProjectRequests = async () => {
    await axios
      .get(
        `${baseUrl}Api/ProjectApi/GetPendingProjects?search=${search}&ngoName=${ngoName}&skip=${skip}&take=${take}`,
        { headers: { Authorization: authHeader } }
      )
      .then((res) => {
        setprojectRequests(res.data.data.list);
        setCount(res.data.data.count);
      });
  };
  useEffect(() => {
    getProjectRequests();
  }, [skip,take]);
  console.log(projectRequests);
  const approveProject = async (id) => {
    await axios
      .get(`${baseUrl}Api/ProjectApi/ApproveProject?projectId=` + id, {
        headers: { Authorization: authHeader },
      })
      .then((res) => {
        axios
          .get(`${baseUrl}Api/ProjectApi/GetPendingProjects?skip=0&take=10`, {
            headers: { Authorization: authHeader },
          })
          .then((res) => {
            setprojectRequests(res.data.data.list);
          });
      });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSkip(0);
      getProjectRequests();
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
                onChange={(event) => setSearch(event.target.value)}
                type="text"
                className="ml-[15px] w-5/6 overflow-hidden focus:outline-none"
              ></input>

              <div
                className="mr-[10px] hover:cursor-pointer"
                onClick={() => {
                  setSkip(0);
                  getProjectRequests()}}
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
                onClick={() => getProjectRequests()}
              >
                <IconContext.Provider value={{ size: 20 }}>
                  <FaSearch className="text-darkText" />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
        {projectRequests.length !== 0 &&
          projectRequests.map((x) => {
            return (
              <div
                key={x.id}
                className="mb-3 mt-3 w-full overflow-hidden h-[128px] bg-gray-100 flex justify-ends"
              >
                <div className="w-[75%] flex">
                  <img
                    className="w-1/3"
                    src={imageUrl + x.imagePath}
                    alt="Project img"
                  />
                  <div className="pl-2 w-2/3 flex flex-col justify-center">
                    <p className="text-xl font-semibold">{x.title}</p>
                    <p>{x.ngoName}</p>
                    <p>{x.targetAmount}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    onClick={() => approveProject(x.id)}
                    className="h-[32px] flex justify-center items-center hover:shadow-xl hover:scale-[102%] ease-in-out duration-200 hover:cursor-pointer active:scale-[100%] active:shadow-none active:bg-emerald-400 rounded-lg w-[128px] bg-emerald-200"
                  >
                    <p>Approve</p>
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
  );
};
