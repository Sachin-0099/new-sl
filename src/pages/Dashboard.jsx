import React from 'react'
import { SideNav } from '../components/Dashboard/SideNav'
import Categories from '../components/Dashboard/Categories'
const Dashboard = () => {
  return (
    <div className='max-width-screen h-screen mx-auto bg-[#CCC] flex items-center justify-center'>
      <div className='w-[90%] h-[90%] bg-white rounded-md flex'>
        <SideNav />
        <Categories />
      </div>
    </div>
  )
}

export default Dashboard