import { Navbar } from "../Common/Navbar"
import { Home } from "../Common/Home"
import Footer from "../Common/Footer"
export const NGOHomePage = () => {
    return(
        <div>
            <Navbar />
            <Home isDonor={false}/>
            <Footer/>
        </div>
    )
}