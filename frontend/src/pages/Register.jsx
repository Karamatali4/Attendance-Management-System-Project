import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of Navigate
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

function Register() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profilePic: null,
    gender: "",
    class: "",
  });

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const { storeTokenInLS } = useAuth();
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
    formData.append("classes", user.classes);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          body: formData, // No need to set the Content-Type header manually
        }
      );

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
          gender: "",
          classes: "",
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
      <div
        className="container bg-teal-500 max-w-[75rem] mx-auto h-auto overflow-auto  lg:overflow-auto  pt-10 pb-5"
        style={{ overflowY: "hidden" }}
      >
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
          <div className="text-center mb-16">
            <a onClick={(e) => e.preventDefault()}>
              <img src={logo} alt="logo" className="w-20 inline-block" />
            </a>
            <h4 className="text-gray-800 text-base font-semibold mt-6">
              Student registration
            </h4>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  UserName
                </label>
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
                <label className="text-gray-800 text-sm mb-2 block">
                  Email Id
                </label>
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
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
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
                <label className="text-gray-800 text-sm mb-2 block">
                  Profile Picture
                </label>
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
                <label className="text-gray-800 text-sm mb-2 block">
                  Gender
                </label>
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

              {/* class field */}
              <button 
        id="dropdownRadioButton" 
        onClick={toggleDropdown} 
        className="text-black bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button">
        Select Class 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button> <br />

      {isDropdownOpen && (
        <div id="dropdownDefaultRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
            <li>
              <div className="flex items-center">
                <input id="default-radio-1" type="radio" value="class8" name="classes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked={user.classes === "class8"}
                      onChange={handleInput}/>
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">class 8</label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input  id="default-radio-2" type="radio" value="class9" name="classes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked={user.classes === "class9"}
                      onChange={handleInput}/>
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">class 9</label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input id="default-radio-3" type="radio" value="class10" name="classes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked={user.classes === "class10"}
                      onChange={handleInput}/>
                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">class 10</label>
              </div>
            </li>
          </ul>
        </div>
      )}
              
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
                <Link
                  className="text-blue-600 font-semibold hover:underline ml-1"
                  to={"/login"}
                >
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
