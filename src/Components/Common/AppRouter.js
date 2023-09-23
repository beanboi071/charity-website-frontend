import { LoginSignup } from "../LoginSignup/LoginSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DonorPage } from "../DonorPage/DonorPage";
import { NGOHomePage } from "../NGOPage/NGOHomePage";
import { CreatePage } from "../NGOPage/CreatePage";
import { NotFound } from "./NotFound";
import { MyProjects } from "../NGOPage/MyProjects";
import { Projects } from "../DonorPage/Projects";
import { ProjectDetail } from "./ProjectDetail";
export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/Login" element={<LoginSignup />} />
                    <Route path="/Donor/Home" element={<DonorPage />} />
                    <Route path="/NGO/Home" element={<NGOHomePage />} />
                    <Route path="/NGO/Create" element={<CreatePage />} />
                    <Route path="/ProjectDetail/:id" element={<ProjectDetail/>}/>
                    <Route path="/NGO/MyProjects" element={<MyProjects/>}/>
                    <Route path="/Donor/Projects" element={<Projects/>}/>
                    <Route path="/" element={<LoginSignup />} />
                    <Route path="*" element={<NotFound />} />
                    
                

                </Routes>
            </Router>
        </div>
    )
}