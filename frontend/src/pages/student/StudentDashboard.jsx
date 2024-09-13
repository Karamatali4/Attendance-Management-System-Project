import { Navigate, Route, Routes } from 'react-router-dom';

import Login from "../Login"
import Logout from "../Logout"
import Register from "../Register"
import StudentHomePage from "./StudentHomePage"
import StudentProfile from "./StudentProfile"
import StudentSidebar from "./StudentSidebar"


function StudentDashboard() {
  return (
<>
<div className="container">

<h2 className=""> Student Dashboard</h2>
<a href="logout">ll</a>
    {/* sidebar */}
        <div className="">
        <StudentSidebar/>
        </div>



    {/* main section */}
        <div className="">
       
        <Routes>
            <Route path="/" element={<StudentHomePage/>} />
            <Route path="*" element={<Navigate to='/'/>} />
            <Route path="/student/dashboard" element={<StudentHomePage/>} />
            <Route path="/student/profile" element={<StudentProfile/>} />
   <Route path="/logout" element={<Logout/>} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />

        </Routes>
        </div>
    </div>
</>
  )
}

export default StudentDashboard