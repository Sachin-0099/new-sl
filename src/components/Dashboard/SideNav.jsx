import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoPeople } from "react-icons/io5"
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
const SidebarData = [
    {
        icon: <CgMenuGridR />,
        title: "Dashboard",
    },
    {
        icon: <MdOutlineSpeakerNotes />,
        title: "Order",
    },
    {
        icon: <FaRegNoteSticky />,
        title: "Inventory",
    },
    {
        icon: <MdOutlinePayment />,
        title: "Payment",
    },{
        icon: <IoPeople />,
        title: "Customers",
    }
]

const SecondarySideNavData=[
    {
        icon: <IoIosNotifications/>,
        title: "Notification",
    },
    {
        icon: <CiSettings />,
        title: "Settings",
    },
    {
        icon: <FaHandsHelping />,
        title: "Help",
    },
]
export const SideNav = () => {
  return (
    <div className='h-full lg:w-[40vh] md:w-[40vh] bg-gray-900'>
        {/* heading */}
        <div className='flex items-center justify-start'>
            <h1 className='text-white lg:text-2xl md:text-xl text-md font-bold lg:p-5 md:p-2 p-1'>Slasa</h1>
        </div>

        <div className='relative'>
            <input
            placeholder='Search'
            className='bg-transparent border-1 border-outline-[0.5px] border-gray-100 rounded-full text-gray-100 opacity-[30%] px-3 py-1 pl-10 m-2'
            />
            <FaSearch className='absolute left-3 top-3 m-1 text-gray-100 opacity-50' size={18} />
        </div>

        <div className='w-full h-[70%] overflow-hidden mt-3'>
            {SidebarData.map((info,index)=>(
                <div key={index} className='text-md p-2 hover:bg-gray-100 text-gray-300 duration-200 opacity-50 hover:bg-gray-500 hover:text-gray-100 hover:scale-105 transition ease-in-ease-out px-4 mt-1'>
                    <div className='flex items-center justify-start flex-wrap gap-2'>
                        {info.icon}
                        <h1>{info.title}</h1>
                    </div>
                </div>
            ))}
            <hr className='bg-gray-100 opacity-50 h-[1px] my-2'/>
            {SecondarySideNavData.map((info,index)=>(
                <div key={index} className='text-md p-2 hover:bg-gray-100 text-gray-300 duration-200 opacity-50 hover:bg-gray-500 hover:text-gray-100 hover:scale-105 transition ease-in-ease-out px-4 mt-1'>
                    <div className='flex items-center justify-start flex-wrap gap-2'>
                        {info.icon}
                        <h1>{info.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
