import React from 'react'

const OtherHeroSection = () => {
    return (
        <div className='min-h-[60vh] relative h-[60vh] bg-center'>
            <img className=' absolute inset-0 h-full w-full object-cover' src="https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSMT01468-Edit.eee177b8.webp&w=1920&q=75" alt="img" />

            {/* Dark overlay */}
            <div className="absolute inset-0  bg-black/50 hover:bg-black/30 transition-colors duration-500" />

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-3xl font-bold">Welcome</h1>
            </div>
        </div>
    )
}

export default OtherHeroSection