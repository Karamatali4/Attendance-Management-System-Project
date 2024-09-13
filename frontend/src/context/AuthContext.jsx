import React, { createContext, useState,useContext } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';


export const AuthContext = createContext();
export const  AuthProvider = ({children}) => {
   
const [token,setToken] = useState(localStorage.getItem("token"));

const [user,setUser] = useState("");
const [isLoading,setIsLoading] = useState(true);

const authorizationToken = token ? `Bearer ${token}` : null;

const storeTokenInLS = (serverToken) => {
setToken(serverToken);

localStorage.setItem("token",serverToken);
};

const isLoggenIn = !!token;
console.log("isLoggenIn: ",isLoggenIn);


// Logout functionality

const LogoutUser = () => {
  toast.info("Logout Succesfully ...");
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    setIsLoading(false);
    console.log("Logout User ...")
};



//userAuthentication

const userAuthentication = async() => {
  if (!token) {
    setIsLoading(false);
    return;
  }

  try {
    setIsLoading(true);
    const response = await fetch(`http://localhost:8000/api/auth/user`,{
      method:"GET",
     headers: {
        "Authorization": authorizationToken
      },
    });
    const data = await response.json();
    if(response.ok){
      
      console.log("user data ", data.userResponse);
      setUser(data.userResponse);
      setIsLoading(false);
    }
    else {
      console.error("Error fetching user data: ", response.statusText);
      LogoutUser();  // If token is invalid, log out the user
    }
  }
   catch (error) {
    console.log("Error fetching user data: ", response.statusText);
    LogoutUser();
  }
  finally {
    setIsLoading(false);
  }
}

useEffect(() => {
userAuthentication();
},[token]);




  return (
    <AuthContext.Provider value={{
        user,storeTokenInLS,isLoading,authorizationToken,LogoutUser,isLoggenIn
    }}>
        {children}
    </AuthContext.Provider>
  )
}

