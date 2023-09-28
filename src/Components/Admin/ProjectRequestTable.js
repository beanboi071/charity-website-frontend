import axios from "axios";
import { authHeader, baseUrl, imageUrl } from "../Common/endpoints";

export const ProjectRequestTable = ({projectRequests,setprojectRequests}) =>{
  console.log(projectRequests);
    const approveProject = async (id) => {
        await axios.get(`${baseUrl}Api/ProjectApi/ApproveProject?projectId=`+id, { headers: { Authorization: authHeader } }).then((res) => {
             axios.get(`${baseUrl}Api/ProjectApi/GetPendingProjects?skip=0&take=10`, { headers: { Authorization: authHeader } }).then((res) => {
            
                setprojectRequests(res.data.data);
               
            });
        });

    }
    return (
        <div className="h-full w-10/12 flex justify-center">
          <div className="w-[80%] mt-16">
            
            {projectRequests.length !== 0 &&
              projectRequests.map((x) => {
                return (
                  <div key={x.id} className="mb-3 mt-3 w-full overflow-hidden h-[128px] bg-gray-100 flex justify-ends">
                    <div className="w-[75%] flex">
                      <img className="w-1/3" src={imageUrl + x.imagePath} alt="Project img" />
                      <div className="pl-2 w-2/3 flex flex-col justify-center">
                        <p className="text-xl font-semibold">{x.title}</p>
                        <p>{x.ngoName}</p>
                        <p>{x.targetAmount}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div onClick={()=>approveProject(x.id)} className="h-[32px] flex justify-center items-center hover:shadow-xl hover:scale-[102%] ease-in-out duration-200 hover:cursor-pointer active:scale-[100%] active:shadow-none active:bg-emerald-400 rounded-lg w-[128px] bg-emerald-200">
                        <p>Approve</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      );
      
      
      
      
      
      
}