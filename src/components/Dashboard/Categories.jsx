import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Table from './Table';
import { TableData } from '../../utils/PhotoData';
import { useState } from 'react';
const Categories = () => {
  const [typeOpen, setTypeOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);


  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'type') {
      setTypeOpen(!typeOpen);
    } else if (dropdown === 'status') {
      setStatusOpen(!statusOpen);
    }
  };

  const handleSelect = (filterType, value) => {
    if (filterType === 'type') {
      setSelectedType(value);
      setTypeOpen(false); // Close dropdown after selection
    } else if (filterType === 'status') {
      setSelectedStatus(value);
      setStatusOpen(false); // Close dropdown after selection
    }
  };

  const filterData = () => {
    return TableData.filter((data) => {
      const matchesType = selectedType ? data.type === selectedType : true;
      const matchesStatus = selectedStatus ? data.status === selectedStatus : true;
      return matchesType && matchesStatus;
    });
  };
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
        <div className="w-full h-[10%] flex items-center p-1 gap-4">
              {/* Type Dropdown */}
              <div className="relative">
                <div
                  className="bg-black lg:w-30 w-18 h-8 lg:h-10 rounded-full text-gray-100 flex items-center justify-between pl-3 pr-5 py-1.5 cursor-pointer transition ease-in-out hover:bg-white hover:border-1 hover:border-gray-500 hover:text-gray-900"
                  onClick={() => toggleDropdown('type')}
                >
                  {selectedType || 'Type'}
                  <MdKeyboardArrowDown className="ml-2" />
                </div>
        
                {typeOpen && (
                  <div className="absolute bg-black w-full rounded-lg mt-1 z-10">
                    <div
                      className="text-gray-100 p-2 cursor-pointer hover:bg-gray-700 rounded-lg"
                      onClick={() => handleSelect('type', 'shipping')}
                    >
                      Shipping
                    </div>
                    <div
                      className="text-gray-100 p-2 cursor-pointer hover:bg-gray-700 rounded-lg"
                      onClick={() => handleSelect('type', 'pickup')}
                    >
                     Pickup
                    </div>
                  </div>
                )}
              </div>
        
              {/* Status Dropdown */}
              <div className="relative">
                <div
                  className="bg-black lg:w-30 w-18 h-8 lg:h-10 rounded-full text-gray-100 flex items-center justify-between pl-3 pr-5 py-1.5 cursor-pointer transition ease-in-out hover:bg-white hover:border-1 hover:border-gray-500 hover:text-gray-900"
                  onClick={() => toggleDropdown('status')}
                >
                  {selectedStatus || 'Status' }
                  <MdKeyboardArrowDown className="ml-2" />
                </div>
        
                {statusOpen && (
                  <div className="absolute bg-black w-full rounded-lg mt-1 z-10">
                    <div
                      className="text-gray-100 p-2 cursor-pointer hover:bg-gray-700 rounded-lg"
                      onClick={() => handleSelect('status', 'pickup')}
                    >
                      Pickup
                    </div>
                    <div
                      className="text-gray-100 p-2 cursor-pointer hover:bg-gray-700 rounded-lg"
                      onClick={() => handleSelect('status', 'refresh')}
                    >
                      Refresh
                    </div>
                    <div
                      className="text-gray-100 p-2 cursor-pointer hover:bg-gray-700 rounded-lg"
                      onClick={() => handleSelect('status', 'cancelled')}
                    >
                      Cancelled
                    </div>
                  </div>
                )}
              </div>
            </div>

        <div className='h-[80%] w-[98%] lg:overflow-x-hidden overflow-y-auto overflow-x-auto'>
          <Table data={filterData()}/>
        </div>
      </div>
    </>
  )
}

export default Categories