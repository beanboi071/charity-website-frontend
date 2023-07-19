import { Navbar } from "../Common/Navbar"
import { Home } from "../Common/Home"
export const NGOHomePage = () => {
    return(
        <div>
            <Navbar isDonor={false} />
            <Home isDonor={false}/>
        </div>
    )
}