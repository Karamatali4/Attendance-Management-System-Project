import AdminHomePage from "./AdminHomePage";
import SideBar from "./SideBar"
import { Navigate, Route, Routes } from 'react-router-dom';
import StudentDetail from "./StudentDetail";
import AdminProfile from "./AdminProfile";
import SeeComplains from "./SeeComplains";
import Logout from "../Logout";
import Login from "../Login";
import Register from "../Register";

function AdminDashboard() {
  return (
    <>
<h2 className="text-3xl"> Admin Dashboard</h2>
    <div className="container flex h-[100vh] w-[100%] justify-between items-center">

    {/* sidebar */}
        <div className="w-[20%]">
        <SideBar/>
        </div>



    {/* main section */}
        <div className="w-[80%] text-center">
       
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
    </>
  )
}

export default AdminDashboard