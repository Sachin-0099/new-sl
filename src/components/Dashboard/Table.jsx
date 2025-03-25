import React from 'react'
import { Link } from 'react-router-dom'

const HeaderData=['Order','Customer','Type','Status','Product','Total Product','Date']

const Table = ({data}) => {
  return (
    <div className='h-full w-full overflow-x-hidden overflow-y-auto'>
        <div className='h-[10%] w-full flex items-center justify-center gap-1'>
            {HeaderData.map((data,i)=>(
                <div key={i} className="w-[12%] text-gray-500 font-semibold opacity-70">
                    {data}
                </div>
            ))}
        </div>
        <div className='overflow-x-hidden overflow-y-auto'>
        {data.map((data,i)=>(
          <Link to={`/product/${data.orderId}`}>
            <TableRow data={data} key={i} />
          </Link>
        ))}
        </div>
    </div>
  )
}
const TableRow = ({data,onClick}) => (
    <div className="h-[10%] w-full flex items-center justify-center gap-1 hover:bg-gray-300 hover:scale-105 transition ease-in-ease-out hover:text-white" onClick={onClick}>
    {/* Render each property of the data object */}
    <div className="w-[12%] p-1 mb-1 text-gray-900 font-semibold opacity-70">{data.orderId}</div>
    <div className="w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.customer}</div>
    <div className="w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.type}</div>
    <div className="w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.status}</div>
    <div className="w-[16%] p-1  text-gray-900 font-semibold opacity-70">{data.product}</div>
    <div className="w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.totalProducts}</div>
    <div className="w-[12%] p-1 text-gray-900 font-semibold opacity-70">{data.date}</div>
  </div>
  );  
export default Table