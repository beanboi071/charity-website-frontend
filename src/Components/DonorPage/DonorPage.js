import { Navbar } from "../Common/Navbar"
import { Home } from "../Common/Home"
export const DonorPage = () => {
    return(
        <div>
            <Navbar isDonor={true} />
            <Home isDonor={true}/>
        </div>
    )
}