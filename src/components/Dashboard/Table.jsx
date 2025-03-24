import React from 'react'
import { TableData } from '../../utils/PhotoData'
const Table = () => {
    const HeaderData=['Order','Customer','Type','Status','Product','Total Product','Date']
  return (
    <div className='h-full w-full overflow-hidden'>
        <div className='h-[10%] w-full flex items-center justify-center gap-1'>
            {HeaderData.map((data,i)=>(
                <div key={i} className="w-[12%] text-gray-500 font-semibold opacity-70">
                    {data}
                </div>
            ))}
        </div>
        <div className='overflow-x-hidden overflow-y-auto'>
        {TableData.map((data,i)=>(
         <TableRow data={data} key={i}/>
        ))}
        </div>
    </div>
  )
}
const TableRow = ({data}) => (
    <div className="h-[10%] w-full flex items-center justify-center gap-1 hover:bg-gray-300 hover:scale-105 transition ease-in-ease-out hover:text-white">
    {/* Render each property of the data object */}
    <div className=" w-[12%] p-1 mb-1 text-gray-900 font-semibold opacity-70">{data.orderId}</div>
    <div className="  w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.customer}</div>
    <div className="  w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.type}</div>
    <div className="  w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.status}</div>
    <div className="  w-[16%] p-1  text-gray-900 font-semibold opacity-70">{data.product}</div>
    <div className="  w-[8%] p-1 text-gray-900 font-semibold opacity-70">{data.totalProducts}</div>
    <div className=" w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.date}</div>
  </div>
  );  
export default Table