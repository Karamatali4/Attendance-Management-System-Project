import React from 'react'
import { useAuth } from '../../hooks/useAuth'

function StudentProfile() {

  const {user} = useAuth();
  return (
    <>
    
    
<div className='h-[100%] w-[100%] mt-12'>
   <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
        <div className="md:col-span-1 h-48 shadow-xl ">
                <div className="flex w-full h-full relative">
                    <img src={user.profilePicUrl} className="w-44 h-44 m-auto" alt=""/>

                </div>
        </div>
        <div className="md:col-span-3 h-auto shadow p-4 space-y-10 mt-10">
            <h2 className='text-cyan-800 font-bold text-3xl'> {user.classes.slice(0, 5) + " " + user.classes.slice(5) }</h2>
                <div className="flex ">
                    <span
                        className="text-sm  font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Name:</span>
                    
                        <h3 className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6">{user.username}</h3>
                </div>
                <div className="flex ">
                    <span
                        className="text-sm   font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Email:</span>
                    <h3 className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6">{user.email}</h3>
                </div>
                 <div className="flex ">
                    <span
                        className="text-sm font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Role:</span>
                    <h3 className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6">{user.role}</h3>
                </div>
                <div className="flex ">
                    <span
                        className="text-sm font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/5">Gender:</span>
                    <h3 className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6">{user.gender}</h3>
                </div>
        </div>
        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 hidden md:block">
            <h3 className="font-bold uppercase"> Profile Description</h3>
            <p className=""> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget laoreet diam, id luctus lectus. Ut consectetur nisl ipsum, et faucibus sem finibus vitae. Maecenas aliquam dolor at dignissim commodo. Etiam a aliquam tellus, et suscipit dolor. Proin auctor nisi velit, quis aliquet sapien viverra a. 
            </p>
        </div>
            
    </div>
</div>
    
    </>
  )
}

export default StudentProfile