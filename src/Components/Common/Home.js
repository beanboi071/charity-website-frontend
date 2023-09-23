import { useEffect } from "react"
import homeBanner from '../../images/homebanner.jpg'
import '../../CSS/DonorPage/Home.css'
import { Link } from "react-router-dom"
export const Home = ({isDonor}) => {
    
    
    const onScrollAnimation = ()=>{
        const hiddenElements = document.querySelectorAll('.hide');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                } 
            })
        })
        hiddenElements.forEach((el) => observer.observe(el));
    }
    useEffect(() => {
        onScrollAnimation();
    },[])
    return (
        <div className="bg-primary">
            <div className="w-full h-full relative">
                <img className="grayscale  brightness-[0.6] h-[90vh]" style={{ width: '100%', objectFit: 'cover'}} src={homeBanner} alt="login logo" />
                <div className="w-[600px] text-white absolute left-[50px] top-[250px]">
                    <p className="hide text-5xl">A non-profit that connects other non-profits to donors</p>
                    
                    {isDonor ?
                     <div className=" mt-8 rounded-xl hover:bg-[#a4b292] ease-in-out duration-200 hover:cursor-pointer w-[300px] h-[75px] bg-tertiary flex justify-center items-center">
                         <p className="text-2xl text-darkText">Donate now</p>
                     </div>:
                     <Link to={"/NGO/Create"} className=" mt-8 rounded-xl hover:bg-[#a4b292] ease-in-out duration-200 hover:cursor-pointer w-[300px] h-[75px] bg-tertiary flex justify-center items-center">
                          <p className="text-2xl text-darkText" >Create Project</p>
                     </Link>
                    }
                </div>
            </div>
            <div className="flex justify-center mt-[20px]">
                <div className="w-full">
                <div className="flex justify-center m-[30px]">
                <p className="text-4xl">How it works?</p>
                </div>
                <div className="flex h-[300px] justify-center m-[30px]">
                    <div className="w-1/4 h-full m-[20px] bg-secondary rounded-md shadow-xl flex justify-center items-center text-center p-3">
                        <p className="text-xl">
                            Nonprofits around the world apply and join GlobalGiving to access more funding, to build new skills, and to make important connections.
                        </p>
                    </div>
                    <div className="w-1/4 h-full m-[20px] bg-secondary rounded-md shadow-xl flex justify-center items-center p-3">
                        <p className="text-xl">Admin approves project</p>
                    </div>
                    <div className="w-1/4 h-full m-[20px] bg-secondary rounded-md shadow-xl flex justify-center items-center p-3">
                        <p className="text-xl">DOnor donates to project</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}