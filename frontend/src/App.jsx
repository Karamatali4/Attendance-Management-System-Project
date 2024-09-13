import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components and pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Errorpage from './pages/errorpage';
import Logout from './pages/Logout';
import { useAuth } from './hooks/useAuth';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';

// Importing context providers (if any)
// import { AuthContextProvider } from './context/AuthContext';

function App() {
  const {user} = useAuth();
   
  return (
    
    
      <Router>
        
        

        
        {user?.role == null && (
          <>
          <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
   <Route path="/logout" element={<Logout/>} />
   <Route path="*" element={<Errorpage/>} />
   
 </Routes>
          </>
        )}
          
        

{/* Routes for Normal Users */}
{user?.role === "user" && (
          <>
           <StudentDashboard/>
  
          </>
        )}
      
          

          {
          user?.role === "admin" && 
          (
            <AdminDashboard/>
          )
          

}

          
         

         
        
      </Router>
    
  );
}

export default App;