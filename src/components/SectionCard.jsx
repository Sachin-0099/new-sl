import React from 'react'

const SectionCard = ({PhotoData,title,width,Description}) => {
  const {description,link,icon}=Description;
  return (
    <>
    <div className='h-full w-screen lg:mb-10 md:mb-5 mb-2 flex flex-col items-center'>
          <h1 className='relative text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold'>
          <span className={`hidden lg:inline-block absolute bottom-0 lg:w-[${width}] h-[4px] bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black mt-[20vh]`}></span>
            {title}</h1>
           {
            Description.map((desc,index)=>(
              <p key={index} className='lg:px-10 lg:mx-10 lg:py-5 py-2 mx-5 md:text-xl text-sm lg:text-2xl font-semibold'>{desc.description}</p>
            ))
           } 
          <div className='h-full w-full flex items-center justify-center'>
            <div className='h-[80%]  lg:w-[70%] md:w-[70%] w-[90%] mt-10 flex flex-wrap lg:flex-col-3 md:flex-col-2 sm:flex-col-2 items-center justify-around'>
                {PhotoData.map((photo,index)=>(
                     <div key={index} className='lg:h-[30vh] lg:w-[40vh] md:h-[30vh] md:w-[40vh] h-[20vh] w-[18vh] '>
                      <img src={photo.src}/>
                     </div>
                ))}
            </div>
          </div>
          {Description.map((des,index)=>(
            <div key={index} className='w-[40%] h-[10%] flex py-5 items-center justify-center'>
              <img src={des.icon} alt={des.icon} className='w-[10vh]'/>
              <a href={des.link} className='hover:text-cyan-600 text-cyan-500 px-5 text-3xl'>{des.link}</a>
            </div>
          ))}
    </div>
    </>
  )
}

export default SectionCard