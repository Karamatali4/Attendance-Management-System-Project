// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components and pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MarkAttendance from './pages/MarkAttendance';
import ViewAttendance from './pages/ViewAttendance';
import MarkLeave from './pages/MarkLeave';
import AdminHome from './pages/AdminHome';
import ManageAttendance from './pages/ManageAttendance';
import ApproveLeave from './pages/ApproveLeave';
import Reports from './pages/Reports';
import GradingSystem from './pages/GradingSystem';
import Errorpage from './pages/errorpage';
import About from './pages/about';

// Importing context providers (if any)
// import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    // <AuthContextProvider>
      <Router>
        
          {/* Navbar component to be displayed on all pages */}
          <Navbar/>

          {/* Main content area where different pages will be rendered */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Errorpage/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mark-attendance" element={<MarkAttendance />} />
            <Route path="/view-attendance" element={<ViewAttendance />} />
            <Route path="/mark-leave" element={<MarkLeave />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/manage-attendance" element={<ManageAttendance />} />
            <Route path="/admin/approve-leave" element={<ApproveLeave />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/grading-system" element={<GradingSystem />} />
          </Routes>

          {/* Footer component to be displayed on all pages */}
          <Footer />
        
      </Router>
    // </AuthContextProvider>
  );
}

export default App;
