import React from 'react'

const OtherHeroSection = () => {
    return (
        <div className='min-h-[60vh] relative h-[80vh] bg-center'>
            <img className=' absolute inset-0 h-full w-full object-fit' src="https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />

            {/* Dark overlay */}
            <div className="absolute inset-0  bg-black/50 hover:bg-black/30 transition-colors duration-500" />

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-3xl font-bold">Welcome</h1>
            </div>
        </div>
    )
}

export default OtherHeroSection