import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

function StudentSidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill",url:"/" },
    { title: "Mark Attendance", src: "Chat" },
    { title: "Approvel Leave", src: "User",  },
    { title: "Mark Leave ", src: "Calendar" },
    { title: "Grading System", src: "Search" },
    { title: "Report", src: "Search" },
    { title: "Grading System", src: "Search" },
    { title: "Profile ", src: "Folder",url:"/student/profile" },
    { title: "Complain ", src: "Folder",url:"/student/profile" },
    { title: "Logot", src: "Setting",url:"logout" },
  ];
  return (
    <>
     <div className="flex h-[100%] border-t-2 border-r-4 border-teal-500">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <FaArrowCircleLeft className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />

        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 items-center">
          <img
           src={logo}
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 hover:text-blue-600 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <NavLink to={Menu.url}>
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              {/* <NavLink> logout</NavLink> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              </NavLink>
            </li>
            
          ))}
        </ul>
      </div>
      
    </div>
    </>
  )
}

export default  StudentSidebar