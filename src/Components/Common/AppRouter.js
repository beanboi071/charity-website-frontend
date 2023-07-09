import { LoginSignup } from "../LoginSignup/LoginSignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DonorPage } from "../DonorPage/DonorPage";
export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/Login" element={<LoginSignup />} />
                    <Route path="/Donor/Home" element={<DonorPage />} />
                    <Route path="/" element={<LoginSignup />} />

                </Routes>
            </Router>
        </div>
    )
}