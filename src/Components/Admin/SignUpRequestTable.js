import axios from "axios";
import { authHeader, baseUrl } from "../Common/endpoints";
import { ToastContainer, toast } from "react-toastify";
export const SignUpRequestTable = ({signUps}) =>{
    console.log(signUps);
    const sendVerificationLink = async (id) => {
        await axios.get(`${baseUrl}Api/NGOApi/SendVerificationLink?NGOId=`+id, { headers: { Authorization: authHeader } }).then((res) => {
            if(res.data.status === 0){
                toast.success(res.data.message);
            }
        });

    }
    return(
        <div className="w-10/12 h-full flex justify-center ">
            <div className="">
            <table className="w-full border-collapse mt-24">
    <tr className="bg-emerald-500">
        <th className="px-8 py-2">Username</th>
        <th className="px-8 py-2">Name</th>
        <th className="px-8 py-2">Email</th>
        <th className="px-8 py-2">Website</th>
        <th className="px-8 py-2">Action</th>
    </tr>
    {signUps.length !== 0 &&
        signUps.map((x,index) => {
            return (
                <tr key={x.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="px-8 py-2">{x.username}</td>
                    <td className="px-8 py-2">{x.name}</td>
                    <td className="px-8 py-2">{x.email}</td>
                    <td className="px-8 py-2">
                        <a target="_blank" href={x.website} className="text-blue-500 hover:underline">Visit Website</a>
                    </td>
                    <td className="px-8 py-2">
                        <button onClick={() => sendVerificationLink(x.id)} className="px-2 py-1 bg-emerald-400 hover:text-white rounded hover:bg-emerald-700">Send Verification Link</button>
                    </td>
                </tr>
            );
        })}
</table>

            </div>
        </div>
    )
}