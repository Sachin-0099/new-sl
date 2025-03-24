import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Table from './Table';
const Categories = () => {
  return (
    <>
    {/* heading */}
      <div className='w-full h-[100%] overflow-hidden'>
        <div className='flex justify-between items-center h-[10%]'>
          <h1 className='lg:text-4xl md:text-2xl text-xl p-2 font-semibold'>Orders</h1>
          <div className='flex items-center justify-center p-2 lg:gap-5 gap-1'>
                {['Import','Export'].map((item,index)=>(
                    <span key={index} className='bg-black hover:border-1 hover:border-gray-500 lg:w-24 rounded-md lg:h-12 h-10 w-18 transition ease-in-ease-out flex items-center justify-center hover:bg-white text-gray-100 hover:text-gray-900'>
                    {item}
                    </span>
                ))}
            </div>
        </div>
        <div className='w-full h-[10%] flex items-center p-1 gap-2'>
          {['Type','Status','Order Date'].map((item,i)=>(
            <span key={i} className='bg-black lg:w-30 rounded-full lg:h-10 h-8 w-18 transition ease-in-ease-out flex items-center justify-center hover:bg-white hover:border-1 hover:border-gray-500 text-gray-100 hover:text-gray-900'>
              {item}
              <MdKeyboardArrowDown className='ml-2'/>
            </span>
          ))}
        </div>

        <div className='h-[80%] w-[98%]'>
          <Table/>
        </div>
      </div>


    </>
  )
}

export default Categories