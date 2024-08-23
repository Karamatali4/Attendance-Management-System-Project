import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';
function Logout() {
    const {LogoutUser} = useAuth();

    useEffect(() => {
        
        LogoutUser();
    },[LogoutUser])
  return <Navigate to={"/login"}/>
}

export default Logout