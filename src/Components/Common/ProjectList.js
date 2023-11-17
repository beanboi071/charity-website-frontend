import { Project } from "../Common/Project"
export const ProjectList =({projects})=>{
    return(
        <div>
             <div className=" w-full  bg-primary px-24">
                <div className="pt-[20px] grid grid-cols-3 px-[24px] gap-12 ">
                    {projects.length !== 0 &&
                        projects.map((x) => {
                            return( 
                            <div className=" col-span-1">
                            <Project item={x} />
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}