import React, { createContext, useState,useContext } from 'react'


export const AuthContext = createContext();
export const  AuthProvider = ({children}) => {
   
const [token,setToken] = useState(localStorage.getItem("token"));

const [user,setUser] = useState(null);
const [isLoading,setisLoading] = useState(true);

const authorizationToken = token ? `Bearer ${token}` : null;

const storeTokenInLS = (serverToken) => {
setToken(serverToken);

localStorage.setItem("token",serverToken);
};

// const isLoggenIn = !!token;
// console.log("isLoggenIn: ",isLoggenIn);


// Logout functionality

// const LogoutUser = () => {
//     setToken("");
//     setUser(null);
//     localStorage.removeItem("token");
//     setisLoading(false);
// };


  return (
    <AuthContext.Provider value={{
        user,storeTokenInLS,isLoading,authorizationToken
    }}>
        {children}
    </AuthContext.Provider>
  )
}

