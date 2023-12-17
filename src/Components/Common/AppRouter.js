import { LoginSignup } from "../LoginSignup/LoginSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DonorPage } from "../DonorPage/DonorPage";
import { NGOHomePage } from "../NGOPage/NGOHomePage";
import { CreatePage } from "../NGOPage/CreatePage";
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
import NGOProfile from "../NGOPage/NGOProfile";
import DonorProfile from "../DonorPage/DonorProfile";
import EditDonorProfile from "../DonorPage/EditDonorProfile";
import DonationHistory from "../Admin/DonationHistory";
import EditNGOProfile from "../NGOPage/EditNGOProfile";
import AdminProjectDetail from "../Admin/AdminProjectDetail";
import NGOs from "../DonorPage/NGOs";
import NGODetail from "./NGODetail";
import NotFound from "./NotFound";
export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Owner/Login" element={<AdminLogin />} />
          <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/SignUps" element={<SignUpRequests />} />
          <Route path="/Admin/ProjectRequests" element={<ProjectRequests />} />
          <Route path="/Admin/DonationHistory" element={<DonationHistory />} />
          <Route path="/Login" element={<LoginSignup />} />
          <Route path="/Donor/Home" element={<DonorPage />} />
          <Route path="/NGO/Home" element={<NGOHomePage />} />
          <Route path="/NGO/Create" element={<CreatePage />} />
          <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
          <Route path="/NGODetail/:id" element={<NGODetail/>} />
          <Route path="/VerifyNGO/:id" element={<VerifyNGO />} />
          <Route path="/NGO/MyProjects" element={<MyProjects />} />
          <Route path="/Donor/Projects" element={<Projects />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/VerifyOTP" element={<VerifyOTP />} />
          <Route path="/NGO/Profile" element={<NGOProfile />} />
          <Route path="/Donor/Profile" element={<DonorProfile />} />
          <Route path="/Donor/Profile/Edit" element={<EditDonorProfile />} />
          <Route path="/Donor/NGOs" element={<NGOs />} />

          <Route path="/NGO/Profile/Edit" element={<EditNGOProfile />} />
          <Route path="/Admin/PendingProjectDetail/:id" element={<AdminProjectDetail />} />

          <Route path="/" element={<LoginSignup />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};
