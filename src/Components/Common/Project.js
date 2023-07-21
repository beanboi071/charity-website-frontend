import { imagePath } from "./endpoints"

export const Project = ({item}) => {
    return(
            <div className="w-full h-[200px] flex shadow-md bg-yellow-200 mt-[30px] mb-[30px] hover:shadow-xl hover:scale-[102%] ease-in-out duration-200 hover:cursor-pointer active:shadow-md active:scale-100">
            <div className="w-3/5">
                <img className="w-[100%] h-[100%] object-cover" src={"/images/"+item.imagePath} alt="Project img"></img>    
            </div>
            <div className="h-[100%] bg-secondary w-2/5 flex items-center">
                <div className="ml-[30px]">
                <p className="mb-[5px]">{item.title}</p>
                <p>{item.amountRaised}/{item.targetAmount}</p>
                </div>
            </div>
        </div>
    )
}