import React from 'react'
import { useRef } from 'react';

const VideoSectionCard = ({PhotoData,title,width,Description}) => {
    const videoRefs = useRef([]);
  
    const handleMouseEnter = (index) => {
        videoRefs.current[index].play();
      };
  
      const handleMouseLeave= (index) => {
        videoRefs.current[index].pause();
        videoRefs.current[index].currentTime = 0; 
      };
  return (
    <>
    <div className='h-full w-screen lg:mb-10 md:mb-5 mb-2 flex flex-col items-center'>
          <h1 className='relative text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold'>
          <span className={`hidden lg:inline-block absolute bottom-0 lg:w-[${width}] h-[4px] bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black mt-[20vh]`}></span>
            {title}</h1>
           {
            Description.map((desc,index)=>(
              <p key={index} className='lg:px-10 lg:mx-50 md:mx-30 lg:py-5 py-2 mx-5 text-gray-500 md:text-xl text-sm lg:text-2xl'>{desc.description}</p>
            ))
           } 
          <div className='h-full w-full flex items-center justify-center'>
            <div className='h-[80%]  lg:w-[70%] md:w-[70%] w-[90%] mt-10 flex flex-wrap lg:flex-col-3 md:flex-col-2 sm:flex-col-2 items-center justify-around'>
                {PhotoData.map((photo,index)=>(
                     <div id='videoList'
                     onMouseEnter={() => handleMouseEnter(index)}
                     onMouseLeave={() => handleMouseLeave(index)}
                      key={index} className='lg:h-[40vh] lg:w-[40vh] md:h-[30vh] md:w-[40vh] h-[20vh] w-[18vh] '>
                      <video className='thevideo'  ref={(el) => (videoRefs.current[index] = el)} muted loop autoPlay={false}>
                        <source src={photo.src}/>
                      </video>
                     </div>
                ))}
            </div>
          </div>
          {Description.map((des,index)=>(
            <div key={index} className='w-[40%] h-[10%] flex lg:py-5 py-2 items-center justify-center'>
              <img src={des.icon} alt={des.icon} className='lg:w-[10vh] md:w-[8vh] w-[5vh]'/>
              <a href={des.link} className='hover:text-cyan-600 text-cyan-500 px-5 lg:text-3xl md:text-2xl text-md'>{des.link}</a>
            </div>
          ))}
    </div>
    </>
  )
}

export default VideoSectionCard