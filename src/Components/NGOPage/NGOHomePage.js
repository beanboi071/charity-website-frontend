import { Navbar } from "../Common/Navbar"
import { Home } from "../Common/Home"
export const NGOHomePage = () => {
    return(
        <div>
            <Navbar />
            <Home isDonor={false}/>
        </div>
    )
}