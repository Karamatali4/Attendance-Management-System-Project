import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Login Successfully ...");
        navigate("/");
      } else {
        toast.error("Login Failed ...");
      }
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <>
      <div className="container bg-teal-500 max-w-[75rem] mx-auto h-auto">
        <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
          <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
            <div className="text-center mb-10 font-bold text-2xl text-neutral-100 ">
              Login here
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    type="text"
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <input
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    type="password"
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="!mt-12">
                <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Login
                </button>
              </div>
              <p className="text-gray-800 text-sm mt-6 text-center">
                Create new account 
                <Link className="text-blue-600 font-semibold hover:underline ml-1" to={"/register"}>
                  SignUp here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
