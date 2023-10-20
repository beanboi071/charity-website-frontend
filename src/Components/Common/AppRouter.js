import { LoginSignup } from "../LoginSignup/LoginSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DonorPage } from "../DonorPage/DonorPage";
import { NGOHomePage } from "../NGOPage/NGOHomePage";
import { CreatePage } from "../NGOPage/CreatePage";
import { NotFound } from "./NotFound";
import { MyProjects } from "../NGOPage/MyProjects";
import { Projects } from "../DonorPage/Projects";
import { ProjectDetail } from "./ProjectDetail";
import { AdminLogin } from "../Admin/AdminLogin";
import { AdminDashboard } from "../Admin/AdminDashboard";
import { SignUpRequests } from "../Admin/SignUpRequests";
import { VerifyNGO } from "./VerifyNGO";
import { ProjectRequests } from "../Admin/ProjectRequests";
import { ChangePassword } from "./ChangePassword";
import ResetPassword from "./ResetPassword";
import VerifyOTP from "./VerifyOTP";
export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Owner/Login" element={<AdminLogin />} />
          <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/SignUps" element={<SignUpRequests />} />
          <Route path="/Admin/ProjectRequests" element={<ProjectRequests />} />
          <Route path="/Login" element={<LoginSignup />} />
          <Route path="/Donor/Home" element={<DonorPage />} />
          <Route path="/NGO/Home" element={<NGOHomePage />} />
          <Route path="/NGO/Create" element={<CreatePage />} />
          <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
          <Route path="/VerifyNGO/:id" element={<VerifyNGO />} />
          <Route path="/NGO/MyProjects" element={<MyProjects />} />
          <Route path="/Donor/Projects" element={<Projects />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/VerifyOTP" element={<VerifyOTP />} />
          <Route path="/" element={<LoginSignup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};
