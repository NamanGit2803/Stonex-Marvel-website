import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full'>
            <div className='bg-[url("https://classicinfrahomesinterior.com/wp-content/uploads/2022/02/Latest-Marble-Pooja-Mandir-Designs-for-indian-home-in-2021.jpg")] h-[100vh] w-full bg-cover bg-no-repeat bg-[100%_100%] flex justify-center items-center'>
                <div className='absolute left-[5%] text-[#303030] text-4xl'>
                    Transforming pure marble <br /> into timeless works of luxury <br />for your home and spaces.
                </div>
                {/* Dark overlay */}
                <div className="absolute h-[100vh] left-0 right-0 bg-black/30"></div>
            </div>
        </div>
    )
}

export default HeroSection