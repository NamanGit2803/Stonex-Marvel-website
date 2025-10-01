import React from 'react'
import ClientCarousel from "../components/ClientCarousel";

const OurClients = () => {
    return (
        <div>
            {/* hero section  */}
            <div className='min-h-[60vh] relative h-[80vh] bg-center'>
                <img className=' absolute inset-0 h-full w-full object-fit' src="/OurClients.jpg" alt="img" />

                {/* Dark overlay */}
                <div className="absolute inset-0  bg-black/50 hover:bg-black/30 transition-colors duration-500" />

                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-full">
                    <h1 className="text-white text-3xl font-bold">Trusted by the Finest</h1>
                </div>
            </div>
            <div className='w-full p-10 py-15 leading-relaxed text-2xl text-center text-gray-700'>
                At Stone Arts, we take immense pride in crafting luxurious, bespoke marble temples and pooja rooms for homes across India and around the world. Our clientele includes discerning homeowners, architects, interior designers, and spiritual leaders who seek nothing less than flawless craftsmanship and timeless artistry. Each project is a reflection of our clients’ vision and devotion, meticulously transformed into a masterpiece that brings serenity and sacred energy into their homes. From intimate home temples to majestic custom mandirs, every creation is thoughtfully designed to complement the space and fulfill the spiritual aspirations of those who cherish it.
            </div>

            <div className='py-3 pb-10'>
                <ClientCarousel />
            </div>
        </div>
    )
}

export default OurClients