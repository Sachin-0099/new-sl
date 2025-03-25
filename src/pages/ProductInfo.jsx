import React from 'react'
import { useParams } from 'react-router-dom'
import { TableData } from '../utils/PhotoData'

const ProductInfo = () => {
    const {orderId}=useParams();

    console.log('Product Id:',orderId);

    const product=TableData.find((item)=>item.orderId === orderId);

    if(!product){
        <h1>Product not found</h1>
    }

   return (
      <div className="h-full w-screen bg-[#CCC] flex justify-center items-center">
        <div className='w-[90vw] h-[90vh] bg-white m-2 flex flex-wrap'>
            <div className='lg:h-full lg:w-[50%] md:w-[50%] md:h-full w-full h-[50%] bg-red-100'>
                <img src={product.img} alt={product.title} className='w-full h-full object-cover'/>
            </div>
            <div className='lg:w-[50%] lg:h-full md:w-[50%] md:h-full h-[50%] w-full'>
                <p className='text-gray-500 text-[1rem] mt-5 pl-5'>{product.orderId}</p>
                <h1 className='lg:text-[3rem] md:text-[1.5rem] text-[1.3rem] font-semibold pl-5'>Customer:{product.customer}</h1>
                <p className='pl-5 text-gray-500 lg:text-[2rem] md:text-[1.5rem] text-[1.3rem] lg:mt-5 md:mt-3 mt-1'>Type:<span className={`${product.type == 'shipping' ? "text-green-500" : "text-red-500"} opacity-75`}>{product.type.toLocaleUpperCase()}</span></p>
            </div>
        </div>
      </div>
   );
}

export default ProductInfo;
