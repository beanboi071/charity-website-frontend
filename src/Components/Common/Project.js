import { baseUrl, imagePath } from "./endpoints"
import { useNavigate , useParams } from "react-router-dom"
export const Project = ({ item }) => {
    let navigate = useNavigate();
    
    return (
        <div  onClick={() => {navigate("/NGO/ProjectDetail/"+item.id)}}>
            <div class=" rounded shadow-lg hover:shadow-xl hover:scale-[102%] ease-in-out duration-200 hover:cursor-pointer active:shadow-lg active:scale-100">
                <div className="h-[250px] overflow-hidden">
                   <img class="w-full  object-cover" src={baseUrl +"File?fileName="+ item.imagePath} alt="Project img" />
                </div>
                <div class="px-6 py-4 h-[150px]">
                    <div className="h-full flex flex-col justify-center">
                    <div class="font-bold text-xl mb-2">{item.title}</div>
                    <p class="text-gray-700 text-base">
                        {item.amountRaised}/{item.targetAmount}</p>
                    </div>
                </div>
                
            </div>

        </div>


    )   
}