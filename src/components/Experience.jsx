import React from 'react'

const Experience = () => {
  return (
    <div class="py-10 bg-[#232325]" id="experience">
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>

        {/* First experience */}

        <div class="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>Student</p>
            <p className='text-gray-400'>(2018 - Start)</p>
            <p className='text-gray-500'>
                Starting learning Web Dev (HTML & CSS)
            </p>
        </div>

        <div class="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

        {/* Second experience */}

        <div class="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>CoursLabs</p>
            <p className='text-gray-400'>(2020 - First Project)</p>
            <p className='text-gray-500'>
                My first Front and Back end projects for students. With this site students was able to shares their lessons via pictures.
            </p>
        </div>

        <div class="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

        {/* Third experience */}

        <div class="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>Study</p>
            <p className='text-gray-400'>(2022 - Starting my Degree)</p>
            <p className='text-gray-500'>
                With Study I start my degree to grow-up in tech dev
            </p>
        </div>

        <div class="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

        {/* Last experience */}

        <div class="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>Arion France</p>
            <p className='text-gray-400'>(September 2023 to March 2024 - Arion Consulting France)</p>
            <p className='text-gray-500'>
                A short entreprise experience at Arion as a Web Dev fullstack.
            </p>
        </div>
    </div>
  )
}

export default Experience