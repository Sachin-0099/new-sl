import React from 'react'
import about2 from '/images/about2.png'
const About = () => {
  return (
    <>
    <div className='min-h-[90vh] w-screen flex flex-wrap mt-5 lg:flex-col md:flex-col sm:flex-row justify-center items-center'>
        <div className='h-[70vh] w-[100%] flex flex-wrap'>
            <div className='lg:h-full lg:w-[90vh] md:h-[70%] md:w-[50vh] w-full h-[40vh]'>
                <img src={about2} className='w-full h-full object-cover'/>
            </div>
            <div className='lg:h-full lg:w-[50%] md:h-full md:w-[55%] w-full h-[50vh]'>
                <div className='flex flex-wrap items-center justify-center'>
                    <h1 className='lg:text-6xl md:text-3xl mb-2 text-3xl font-semibold text-[#3087D1] underline underline-offset-8'>About Us</h1>
                    <p className='lg:text-xl md:text-md text-gray-700 text-xs p-2 md:p-3 lg:p-8 leading-4 md:leading-6 lg:leading-10'>My journey has taken me across the United Arab Emirates, Thailand, parts of Africa, and Pakistan, enriching my creative vision and expertise. Whether it's dynamic social media content, fashion and modeling shoots, immersive 360° real estate coverage, construction timelapses, stunning drone visuals, intimate portraits, food restaurant imagery, or lively corporate events, weddings, birthdays, and product shoots, I bring passion and precision to every project.<br/> Now, I'm excited to elevate my creative horizons further as I venture into Saudi Arabia through a vibrant partnership with “Slasa”, promising fresh perspectives and innovative storytelling in every frame.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About