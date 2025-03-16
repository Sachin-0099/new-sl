import React from 'react'
const Experience = ({ExperienceData}) => {
  return (
    <>
        <div className='h-[90vh] w-screen flex flex-wrap lg:flex-col md:flex-col sm:flex-row justify-center items-center my-5'>
            {ExperienceData.map((data,index)=>(
                <div className='h-[90%] w-[90%] flex flex-wrap'>
                    <div className='lg:h-full lg:w-[50%] md:h-full md:w-[60%] w-full h-[50vh]'>
                        <div className='flex flex-wrap items-center justify-center'>
                            <h1 className='lg:text-6xl md:text-3xl mb-2 text-3xl font-semibold text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text underline underline-offset-8'>{data.title}</h1>
                            <p className='lg:text-xl md:text-md text-sm p-4 text-gray-500 md:p-10 lg:p-10 leading-5 md:leading-7 lg:leading-10'>{data.description}</p>
                            <button className='lg:px-12 rounded-full lg:py-3 md:px-8 md:py-5 px-4 py-3 bg-gradient-to-r font-bold lg:text-xl md:text-xl text-sm from-[#3087D1] to-[#19456B] border border-outline-2 text-white flex items-center justify-center gap-3'>{data.button}</button>
                        </div>
                    </div>
                    <div className='lg:h-full lg:w-[72vh] md:h-full md:w-[40vh] w-full h-[40vh]'>
                        <img src={data.src} className='w-full h-full object-cover'/>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Experience