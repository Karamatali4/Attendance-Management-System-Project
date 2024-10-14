import { Navigate, Route, Routes } from 'react-router-dom';
import Logout from "../Logout";
import Login from "../Login";
import Register from "../Register";
import { useAuth } from "../../hooks/useAuth";
import StudentHomePage from "./StudentHomePage";
import StudentProfile from "./StudentProfile";
import StudentComplain from "./StudentComplain";
import StudentSidebar from "./StudentSidebar";
import ViewAttendance from './ViewAttendance';

function StudentDashboard() {

  const {user} = useAuth();
  return (
    <>
    <div className="container ">
     {/* navbar */}
<div className="flex justify-between">
<h2 className="text-2xl font-bold text-teal-500"> Admin Dashboard</h2>
<h2 className="text-2xl text-teal-500">{user.role && "Student"}</h2>
</div>
<hr />

{/* dashboard section */}
<div className="flex h-[100vh] w-[100%] justify-between  ">
    {/* sidebar */}
        <div className=" w-[28%] lg:w-[15%] ">
        <StudentSidebar/>
        </div>



    {/* main section */}
        <div className="w-[80%] lg:w-[85%]">
       
        <Routes>
            <Route path="/" element={<StudentHomePage/>} />
            <Route path="*" element={<Navigate to='/'/>} />
            <Route path="/student/dashboard" element={<StudentHomePage/>} />
            <Route path="/student/viewAttendance" element={<ViewAttendance/>} />
            <Route path="/student/approvelLeave" element={<StudentHomePage/>} />
            <Route path="/student/markLeave" element={<StudentHomePage/>} />
            <Route path="/student/gradingSystem" element={<StudentHomePage/>} />
            <Route path="/student/report" element={<StudentHomePage/>} />
            <Route path="/student/profile" element={<StudentProfile/>} />
            <Route path="/student/complain" element={<StudentComplain/>} />
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

export default StudentDashboard