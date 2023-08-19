import { useState } from "react";
import { useParams } from "react-router-dom";

export const ProjectDetail = () =>{
    let props = useParams();
    
    console.log(props?.id)
    const [projectDetails, setProjectDetails] = useState({})
    return(
        <hi>
            This is the detail page {props.id}
        </hi>
    )
}