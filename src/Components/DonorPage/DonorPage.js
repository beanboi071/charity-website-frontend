import { Navbar } from "../Common/Navbar"
import { Home } from "../Common/Home"
export const DonorPage = () => {
    return(
        <div>
            <Navbar/>
            <Home isDonor={true}/>
        </div>
    )
}