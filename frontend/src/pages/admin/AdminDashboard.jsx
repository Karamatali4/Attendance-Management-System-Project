import AdminHomePage from "./AdminHomePage";
import SideBar from "./SideBar"
import { Navigate, Route, Routes } from 'react-router-dom';
import StudentDetail from "./StudentDetail";
import AdminProfile from "./AdminProfile";
import SeeComplains from "./SeeComplains";
import Logout from "../Logout";
import Login from "../Login";
import Register from "../Register";
import { useAuth } from "../../hooks/useAuth";

function AdminDashboard() {

  const {user} = useAuth();
  return (
    <>
    <div className="container ">
     {/* navbar */}
<div className="flex justify-between">
<h2 className="text-2xl font-bold text-teal-500"> Admin Dashboard</h2>
<h2 className="text-2xl text-teal-500">{user.role}</h2>
</div>


{/* dashboard section */}
<div className="flex h-[100vh] w-[100%] justify-between  ">
    {/* sidebar */}
        <div className=" w-[26%] lg:w-[15%]">
        <SideBar/>
        </div>



    {/* main section */}
        <div className="w-[80%] ">
       
        <Routes>
            <Route path="/" element={<AdminHomePage/>} />
            <Route path="*" element={<Navigate to='/'/>} />
            <Route path="/admin/dashboard" element={<AdminHomePage/>} />
            <Route path="/admin/markAttendance" element={<AdminHomePage/>} />
            <Route path="/admin/approvelLeave" element={<AdminHomePage/>} />
            <Route path="/admin/markLeave" element={<AdminHomePage/>} />
            <Route path="/admin/gradingSystem" element={<AdminHomePage/>} />
            <Route path="/admin/report" element={<AdminHomePage/>} />
            <Route path="/admin/studentdetail" element={<StudentDetail/>} />
            <Route path="/admin/profile" element={<AdminProfile/>} />
            <Route path="/Admin/complains" element={<SeeComplains/>} />
   <Route path="/logout" element={<Logout/>} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />

        </Routes>
        </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard