import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const className = [
    { name: 'communal', src: 'https://assets-news.housing.com/news/wp-content/uploads/2022/11/07061149/Marble-design-to-give-interiors-a-luxurious-appeal-11.jpg' },
    { name: 'residential', src: 'https://5.imimg.com/data5/KU/XE/TP/SELLER-98267716/marble-flooring-design-service-500x500.jpg' },
    { name: 'international', src: 'https://aaltomarbleinlay.com/wp-content/uploads/gold-blue-marble-inlay-lobby-design-riviera-480x480.jpg' },
]

const Projects = () => {

    const router = useRouter()

    const [content, setContent] = useState(null)
    const [imgSrc, setSrc] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        router.query.slug == 'communal' ? (setSrc(className[0].src), setTitle("Communal")) : router.query.slug == 'residential' ? (setSrc(className[1].src), setTitle("Residential")) : (setSrc(className[2].src, setTitle("International")))

        console.log(router.query.slug == 'communal')
    }, [router.query])

    useEffect(() => {
        console.log(imgSrc)
    }, [imgSrc])



    return (
        <div>
            {/* upper section  */}
            {imgSrc != "" && <div style={{ backgroundImage: `url(${imgSrc})` }} className={` h-[100vh] w-full bg-cover bg-no-repeat bg-[50%_50%] flex justify-center items-center`}>
                <div className='absolute left-[5%] text-[#ffefc1] text-4xl z-20'>
                    Transforming pure marble <br /> into timeless works of luxury <br />for your home and spaces.
                </div>
                {/* Dark overlay */}
                <div className="absolute h-[100vh] left-0 right-0 bg-black/50"></div>
            </div>}

            {/* project section  */}
            <div className='p-5 p-10 flex flex-col items-center justify-center gap-7'>
                <h1 className='font-semibold text-2xl'>{title} Projects</h1>
                <div className='flex flex-col gap-10 w-[80%] justify-center items-center'>
                    {/* search bar  */}
                    <div className="flex w-full max-w-sm items-center gap-2 col-span-3">
                        <Input type="text" placeholder="Seach..." />
                        <Button type="submit" variant="outline">
                            Search
                        </Button>
                    </div>
                    {/* projects  */}
                    <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-4'>
                        <div style={{ backgroundImage: `url(${imgSrc})`}} className='h-[70vh] w-full bg-fit bg-center bg-no-repeat'>
dsds
                        </div>
                        <div style={{ backgroundImage: `url(${imgSrc})`}} className='h-[70vh] w-full bg-fit bg-center bg-no-repeat'>
xsx
                        </div>
                        <div style={{ backgroundImage: `url(${imgSrc})`}} className='h-[70vh] w-full bg-fit bg-center bg-no-repeat'>
za
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects