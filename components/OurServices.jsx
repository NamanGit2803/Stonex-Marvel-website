import React from 'react'

const services = [
    {name: 'Wall Cladding', src: 'https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon1.53e2c26d.png&w=1920&q=75'},
    {name: 'Floor Inlay', src: 'https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon6.b8508dfc.png&w=1920&q=75'},
    {name: 'Virtual Tour', src: 'https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon3.7b73a018.png&w=1920&q=75'},
    {name: 'Custom Design', src: 'https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon2.70a949d6.png&w=1920&q=75'},
    {name: '3D visualisation', src: 'https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon4.c225f555.png&w=1920&q=75'},
    {name: 'Project Tracking', src: 'https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon5.207ee35b.png&w=1920&q=75'},
]

const OurServices = () => {
  return (
    <div className='p-10 flex flex-col gap-12 justify-center items-center'>
        <div className='flex justify-center items-center'>
            <h2 className='text-2xl font-[500] tracking-[.1875rem]'>We offer Unparalleled Services</h2>
        </div>

        <div className='w-[90%]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {services.map(val=>(<div key={val.src} className='border rounded-md flex justify-between items-center flex-col p-8'>
                    <img className='h-28' src={val.src} alt="img" />
                    <div>{val.name}</div>
                </div>))}
            </div>
        </div>

    </div>
  )
}

export default OurServices