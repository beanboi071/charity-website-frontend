import { Navbar } from "../Common/Navbar"
import { CreateForm } from "./CreateForm"
export const CreatePage = () => {
    return(
        <div>
            <Navbar isDonor={false} />
            <div className="bg-primary w-[100%] h-[calc(100vh-50px)] flex justify-center items-center p-0 w-700 shadow-xl border-solid border-green-600">
            <CreateForm/>
            </div>
        </div>
    )
}