import { AdminNavbar } from "./AdminNavbar"

export const AdminDashboard = ()=>{
    return (
        <div className="flex h-[100vh] w-[100vw] flex-row justify-between ">
            <AdminNavbar/>
            <div className="flex justify-center items-center w-full ml-64 h-full ">
                <p className="text-[3rem] text-green-700">Welcome to the admin panel</p>

            </div>
        </div>
    )
}