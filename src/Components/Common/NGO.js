import { useContext } from "react";
import { baseUrl, imagePath, imageUrl } from "./endpoints"
import { Link, useNavigate , useParams } from "react-router-dom"
import { AppContext } from "../../App";
export const NGO = ({ item }) => {
    let navigate = useNavigate();
    
    return (
        <div  onClick={() => {navigate("/NGODetail/"+item.id)}}>
            <div class="w-full rounded shadow-lg hover:shadow-xl hover:scale-[103%] ease-in-out duration-200 hover:cursor-pointer active:shadow-lg active:scale-100 z-40">
                <div className="h-[250px] overflow-hidden">
                   <img class="w-full  object-cover" src={imageUrl+ item.image_Path} alt="Project img" />
                </div>
                <div class="px-6 py-4 h-[150px]">
                    <div className="h-full flex flex-col justify-center">
                    <div class="font-bold text-xl mb-2">{item.name}</div>
                    <p class="text-gray-700 text-base">
                        
                    </p>
                    
                    </div>

                </div>
                
            </div>

        </div>


    )   
}