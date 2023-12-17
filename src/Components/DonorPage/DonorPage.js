import { Navbar } from "../Common/Navbar"
import { Home } from "../Common/Home"
import Footer from "../Common/Footer"
export const DonorPage = () => {
    return(
        <div>
            <Navbar/>
            <Home isDonor={true}/>
            <Footer/>
        </div>
    )
}