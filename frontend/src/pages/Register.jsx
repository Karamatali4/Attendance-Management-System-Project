import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of Navigate
import { toast } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profilePic: null,
    gender: ""
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const {storeTokenInLS} = useAuth()
  const handleInput = (e) => {
    const { name, value, type, files } = e.target;
    setUser({
      ...user,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profilePic", user.profilePic);
    formData.append("gender", user.gender);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: "POST",
        body: formData, // No need to set the Content-Type header manually
      });

      const res_data = await response.json();
      console.log("register", res_data);

      
      if (response.ok) {

        storeTokenInLS(res_data.token);

        toast.success("Registration Successful!");
        setUser({
          username: "",
          email: "",
          password: "",
          profilePic: null,
          gender: ""
        });
        navigate("/"); // Use navigate to redirect after success
      } else {
        toast.error("Registration Not Successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container bg-teal-500 max-w-[75rem] mx-auto">
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
          <div className="text-center mb-16">
            <a onClick={(e) => e.preventDefault()}>
              <img src={logo} alt="logo" className="w-20 inline-block" />
            </a>
            <h4 className="text-gray-800 text-base font-semibold mt-6">
              Sign up into your account
            </h4>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">UserName</label>
                <input
                  name="username"
                  type="text"
                  value={user.username}
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter UserName"
                  onChange={handleInput}
                />
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                <input
                  name="email"
                  type="text"
                  value={user.email}
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter email"
                  onChange={handleInput}
                />
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  value={user.password}
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Enter password"
                  onChange={handleInput}
                />
              </div>

              {/* Picture Input Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Profile Picture</label>
                <input
                  name="profilePic"
                  type="file"
                  accept="image/*"
                  className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  onChange={handleInput}
                />
              </div>

              {/* Gender Selection */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Gender</label>
                <div className="flex items-center space-x-4">
                  <label className="text-gray-800 text-sm flex items-center">
                    <input
                      name="gender"
                      type="radio"
                      value="male"
                      className="mr-2"
                      checked={user.gender === "male"}
                      onChange={handleInput}
                    />
                    Male
                  </label>
                  <label className="text-gray-800 text-sm flex items-center">
                    <input
                      name="gender"
                      type="radio"
                      value="female"
                      className="mr-2"
                      checked={user.gender === "female"}
                      onChange={handleInput}
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="!mt-5">
              <button
                type="submit"
                className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-cyan-800 focus:outline-none hover:bg-neutral-100 hover:text-cyan-900 transition-all"
              >
                Sign up
              </button>
              <p className="text-gray-800 text-sm mt-6 text-start">
                Already have an account?
                <Link className="text-blue-600 font-semibold hover:underline ml-1" to={"/login"}>
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
