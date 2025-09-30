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
import { motion, AnimatePresence } from 'framer-motion'

// Project data with different images for each category
const projectCategories = [
    { 
        id: 'communal', 
        name: 'Communal', 
        bannerImage: '/img5.png', 
        displayName: 'COMMUNAL PROJECTS',
        description: 'Community-focused architectural marvels that bring people together',
        projects: [
            {
                id: 1,
                title: 'Shri 1008 Munisuvratnath Jain Temple',
                address: '5, Pandurang Marg, Satellite, Ahmedabad, Gujarat 380015',
                architect: 'Master Craftsman Rishab Jain',
                duration: '18 Months',
                image: '/img5.png'
            },
            {
                id: 2,
                title: 'Shri Adinath Bhagwan Temple Complex',
                address: 'Jain Temple Road, Paldi, Ahmedabad, Gujarat 380007',
                architect: 'Vastu Expert Priya Sharma',
                duration: '24 Months',
                image: '/img2.jpg'
            },
            {
                id: 3,
                title: 'Community Marble Temple',
                address: '34, MG Road, Bangalore, Karnataka 560001',
                architect: 'Arun Kumar',
                duration: '16 Months',
                image: '/img6.png'
            }
        ]
    },
    { 
        id: 'residential', 
        name: 'Residential', 
        bannerImage: '/img4.png', 
        displayName: 'RESIDENTIAL PROJECTS',
        description: 'Beautiful living spaces designed for comfort and elegance',
        projects: [
            {
                id: 1,
                title: 'Luxury Villa Home Temple',
                address: '67, Marine Drive, Mumbai, Maharashtra 400020',
                architect: 'Neha Patel',
                duration: '3 Months',
                image: '/img12.jpg'
            },
            {
                id: 2,
                title: 'Modern Apartment Temple',
                address: '23, Golf Course Road, Gurgaon, Haryana 122002',
                architect: 'Rahul Verma',
                duration: '2 Months',
                image: '/img10.jpg'
            },
            {
                id: 3,
                title: 'Garden Temple Pavilion',
                address: '45, Green Valley, Pune, Maharashtra 411001',
                architect: 'Sanjay Mehta',
                duration: '4 Months',
                image: '/img7.png'
            }
        ]
    },
    { 
        id: 'international', 
        name: 'International', 
        bannerImage: '/home-decor.jpg', 
        displayName: 'INTERNATIONAL PROJECTS',
        description: 'Global architectural excellence across continents',
        projects: [
            {
                id: 1,
                title: 'Jain Temple Complex',
                address: 'Dubai Marina, Dubai, UAE',
                architect: 'International Design Team',
                duration: '8 Months',
                image: '/img10.jpg'
            },
            {
                id: 2,
                title: 'Cultural Center Temple',
                address: 'Diplomatic Area, London, UK',
                architect: 'Global Architects Inc.',
                duration: '1 Months',
                image: '/murti1.jpg'
            },
            {
                id: 3,
                title: 'Peace Temple',
                address: 'Orchard Road, Singapore',
                architect: 'Oceanview Designs',
                duration: '3 Months',
                image: '/project5.jpg'
            }
        ]
    },
]

const cities = [
    "Jaipur", "Ahmedabad", "Delhi", "Bangalore", "Mumbai", 
    "Chennai", "Kolkata", "Hyderabad", "Pune", "Surat"
]

const Projects = () => {
    const router = useRouter()
    const [currentCategory, setCurrentCategory] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCity, setSelectedCity] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState([])

    useEffect(() => {
        const slug = router.query.slug
        const category = projectCategories.find(cat => cat.id === slug)
        
        if (category) {
            setCurrentCategory(category)
            setFilteredProjects(category.projects)
        }
    }, [router.query.slug])

    useEffect(() => {
        if (!currentCategory) return
        
        let filtered = currentCategory.projects
        
        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.architect.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        
        if (selectedCity && selectedCity !== 'all') {
            filtered = filtered.filter(project =>
                project.address.toLowerCase().includes(selectedCity.toLowerCase())
            )
        }
        
        setFilteredProjects(filtered)
    }, [searchTerm, selectedCity, currentCategory])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const bannerVariants = {
        initial: { scale: 1.1, opacity: 0 },
        animate: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    if (!currentCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-theme"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Animated Banner Section */}
            <motion.section 
                className="relative h-[85vh] w-full overflow-hidden"
                initial="initial"
                animate="animate"
            >
                <motion.div
                    variants={bannerVariants}
                    style={{ backgroundImage: `url(${currentCategory.bannerImage})` }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-end pb-20">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-white max-w-3xl"
                        >
                            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wider font-serif">
                                {currentCategory.displayName}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                                {currentCategory.description}
                            </p>
                            <div className="flex items-center space-x-6 text-lg">
                                <span className="bg-theme text-black px-4 py-2 rounded-full font-semibold">
                                    {filteredProjects.length} Divine Creations
                                </span>
                                <span className="text-theme">•</span>
                                <span className="text-gray-300">Crafted with Devotion</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white text-sm mb-2">Explore Projects</span>
                        <div className="w-6 h-10 border-2 border-theme rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-theme rounded-full mt-2" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Projects Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    {/* Search and Filter Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* City Selector */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Filter by City
                                    </label>
                                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="All Cities" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Cities</SelectLabel>
                                                <SelectItem value="all">
                                                    All Cities
                                                </SelectItem>
                                                {cities.map(city => (
                                                    <SelectItem key={city} value={city}>
                                                        {city}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Search Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Search Projects
                                    </label>
                                    <div className="flex gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Search by project name or architect..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="flex-1"
                                        />
                                        <Button 
                                            onClick={() => {
                                                setSearchTerm('')
                                                setSelectedCity('all')
                                            }}
                                            variant="outline"
                                            className="whitespace-nowrap"
                                        >
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-8"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <motion.h2 
                                variants={itemVariants}
                                className="text-3xl font-bold text-gray-900"
                            >
                                Featured Projects
                            </motion.h2>
                            <motion.span 
                                variants={itemVariants}
                                className="text-gray-600"
                            >
                                Showing {filteredProjects.length} of {currentCategory.projects.length} projects
                            </motion.span>
                        </div>

                        {filteredProjects.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-500">
                                    Try adjusting your search criteria or filters
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div 
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                <AnimatePresence>
                                    {filteredProjects.map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            variants={itemVariants}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="group cursor-pointer"
                                        >
                                            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                                                {/* Project Image */}
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                
                                                {/* Content Overlay */}
                                                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className="space-y-3">
                                                        <h3 className="text-xl font-bold leading-tight">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-200 leading-relaxed">
                                                            {project.address}
                                                        </p>
                                                        <Separator className="bg-white/30" />
                                                        <div className="flex justify-between text-sm">
                                                            <span>Architect: {project.architect}</span>
                                                            <span>{project.duration}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* View More Button */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileHover={{ opacity: 1, y: 0 }}
                                                        className="mt-4"
                                                    >
                                                        <Button 
                                                            variant="secondary" 
                                                            size="sm"
                                                            className="bg-white text-black hover:bg-gray-100"
                                                        >
                                                            View Details
                                                        </Button>
                                                    </motion.div>
                                                </div>

                                                {/* Hover Effect Indicator */}
                                                <div className="absolute top-4 right-4 w-2 h-2 bg-theme rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </motion.div>

                    
                </div>
            </section>
        </div>
    )
}

export default Projects