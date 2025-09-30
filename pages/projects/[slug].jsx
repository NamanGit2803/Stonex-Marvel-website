import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const className = [
    { name: 'communal', src: '/img5.png', content: 'COMMUNAL-PROJECT' },
    { name: 'residential', src: 'https://api.servertsa.com/uploads/1733296958645.jpeg', content: 'RESIDENTIAL-PROJECT' },
    { name: 'international', src: 'https://api.servertsa.com/uploads/1733300646054.jpeg', content: 'INTERNATIONAL-PROJECT' },
]

const projects = [
    {}
]

const Projects = () => {

    const router = useRouter()

    const [content, setContent] = useState(null)
    const [imgSrc, setSrc] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        router.query.slug == 'communal' ? (setSrc(className[0].src), setTitle("Communal"), setContent(className[0].content)) : router.query.slug == 'residential' ? (setSrc(className[1].src), setTitle("Residential"), setContent(className[1].content)) : (setSrc(className[2].src, setTitle("International")), setContent(className[2].content))

        console.log(router.query.slug == 'communal')
    }, [router.query])

    useEffect(() => {
        console.log(imgSrc)
    }, [imgSrc])



    return (
        <div>
            {/* upper section  */}
            {imgSrc != "" && <div style={{ backgroundImage: `url(${imgSrc})` }} className={` h-[100vh] w-full bg-cover bg-no-repeat bg-[50%_50%] flex justify-center items-center`}>
                <div className='absolute left-[5%] text-[#ffefc1] text-4xl z-20 tracking-[.1875rem]'>
                    {content}
                </div>
                {/* Dark overlay */}
                <div className="absolute h-[100vh] left-0 right-0 bg-black/50"></div>
            </div>}

            {/* project section  */}
            <div className='p-10 flex flex-col items-center justify-center gap-7'>
                <h1 className='font-semibold text-2xl tracking-[.1500rem]'>{title} Projects</h1>
                <div className='flex flex-col gap-10 w-[90%] justify-center items-center'>

                    {/* search bar  */}
                    <div className="w-full flex justify-center gap-4">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Cities</SelectLabel>
                                    <SelectItem value="apple">Jaipur</SelectItem>
                                    <SelectItem value="banana">Ahmedabad</SelectItem>
                                    <SelectItem value="blueberry">Delhi</SelectItem>
                                    <SelectItem value="grapes">Bangluru</SelectItem>
                                    <SelectItem value="pineapple">Mumbai</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className='flex w-full max-w-sm items-center gap-2 col-span-3'>
                            <Input type="text" placeholder="Seach..." />
                            <Button type="submit" className='bg-yellow-500 hover:bg-yellow-600'>
                                Search
                            </Button>
                        </div>
                    </div>
                    {/* projects  */}
                    <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-6'>
                        <div className="relative h-[70vh] w-full overflow-hidden rounded-md group cursor-pointer">
                            {/* Image */}
                            <img
                                src={imgSrc}
                                alt="Temple"
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                            {/* Text content (slides from bottom to center) */}
                            <div className="absolute inset-0 flex items-center justify-center  px-6 text-white transform translate-y-full opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col gap-2.5'>
                                        <h3 className="text-2xl leading-relaxed">Shri 1008 Munisuvratnath Jain Temple</h3>
                                        <p className=" text-sm">
                                            5, Pandurang Marg, Satelite, Ahmedabad, Gujrat380015
                                        </p>
                                    </div>
                                    <Separator />
                                    <div className=" text-sm">Rishab Jain</div>
                                    <Separator />
                                    <div className=" text-sm">4 Months</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[70vh] w-full overflow-hidden rounded-md group cursor-pointer">
                            {/* Image */}
                            <img
                                src={imgSrc}
                                alt="Temple"
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                            {/* Text content (slides from bottom to center) */}
                            <div className="absolute inset-0 flex items-center justify-center  px-6 text-white transform translate-y-full opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col gap-2.5'>
                                        <h3 className="text-2xl leading-relaxed">Shri 1008 Munisuvratnath Jain Temple</h3>
                                        <p className=" text-sm">
                                            5, Pandurang Marg, Satelite, Ahmedabad, Gujrat380015
                                        </p>
                                    </div>
                                    <Separator />
                                    <div className=" text-sm">Rishab Jain</div>
                                    <Separator />
                                    <div className=" text-sm">4 Months</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[70vh] w-full overflow-hidden rounded-md group cursor-pointer">
                            {/* Image */}
                            <img
                                src={imgSrc}
                                alt="Temple"
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                            {/* Text content (slides from bottom to center) */}
                            <div className="absolute inset-0 flex items-center justify-center  px-6 text-white transform translate-y-full opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col gap-2.5'>
                                        <h3 className="text-2xl leading-relaxed">Shri 1008 Munisuvratnath Jain Temple</h3>
                                        <p className=" text-sm">
                                            5, Pandurang Marg, Satelite, Ahmedabad, Gujrat380015
                                        </p>
                                    </div>
                                    <Separator />
                                    <div className=" text-sm">Rishab Jain</div>
                                    <Separator />
                                    <div className=" text-sm">4 Months</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects