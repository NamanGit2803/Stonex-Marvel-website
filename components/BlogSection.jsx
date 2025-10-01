import React from 'react'
import { Card, CardContent } from "../components/ui/card";


const blogPosts = [
  {
    id: 1,
    title: "Timeless Elegance: Why Marble Temples Remain a Symbol of Devotion",
    description:
      "Explore the enduring beauty of marble temples and how their intricate carvings reflect both spiritual significance and exquisite craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1678593628844-6ea49dee8ce3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: true,
  },
  {
    id: 2,
    title: "From Quarry to Creation: The Journey of Natural Stone Art",
    description:
      "Discover the fascinating process of transforming raw stone into breathtaking sculptures, artifacts, and architectural elements that define luxury living.",
    image:
      "https://images.unsplash.com/photo-1712817616366-00edffdb0e9d?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: true,
  },
  {
    id: 3,
    title: "Vietnam White Marble: The Premium Choice for Mandirs & Interiors",
    description:
      "Learn why Vietnam White Marble stands out for its purity, durability, and elegance—making it the perfect material for temples and modern interiors.",
    image:
      "https://plus.unsplash.com/premium_photo-1691030925304-ef49180577d2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: true,
  },
  {
    id: 4,
    title: "Blending Tradition with Modern Design in Marble Architecture",
    description:
      "See how Indian Stonex combines age-old carving techniques with contemporary aesthetics to create unique spaces that are both sacred and stylish.",
    image:
      "https://images.unsplash.com/photo-1621880725265-ad7c9d22d8d3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: false,
  },
  {
    id: 5,
    title: "Caring for Your Marble Temple: Tips for Lasting Shine and Beauty",
    description:
      "Practical advice on maintaining the pristine look of your marble mandir, ensuring it remains a spiritual and aesthetic centerpiece for years to come.",
    image:
      "https://images.unsplash.com/photo-1642347983243-b3e10029f41b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: false,
  },
  {
    id: 6,
    title: "The Spiritual Power of Natural Stone in Modern Homes",
    description:
      "Learn how incorporating natural stone into your home design enhances positive energy, spiritual connection, and timeless beauty.",
    image:
      "https://images.unsplash.com/photo-1756906839147-2579ba33400b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: false,
  },
  {
    id: 7,
    title: "Handcrafted Excellence: Inside the World of Indian Stone Artisans",
    description:
      "A behind-the-scenes look at the skilled craftsmen who bring life to marble temples and sculptures with centuries-old techniques.",
    image:
      "https://images.unsplash.com/photo-1712210332568-37231ad76a7f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: false,
  },
  {
    id: 8,
    title: "Luxury Interiors: How Marble Accents Elevate Every Space",
    description:
      "Discover how marble pillars, flooring, and artifacts create a sense of opulence and sophistication in contemporary interiors.",
    image:
      "https://plus.unsplash.com/premium_photo-1661873298245-e78a12a3d157?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: false,
  },
  {
    id: 9,
    title: "Sacred Geometry in Temple Architecture",
    description:
      "Explore the mystical role of geometry and proportions in temple design and how marble brings precision to spiritual spaces.",
    image:
      "https://images.unsplash.com/photo-1717223992414-ae85b0572ced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FjcmVkJTIwR2VvbWV0cnklMjBpbiUyMFRlbXBsZSUyMEFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    isLatest: false,
  },
  {
    id: 10,
    title: "Global Appeal: How Indian Marble Temples Inspire the World",
    description:
      "From private residences to international landmarks, see how Indian marble craftsmanship is celebrated across continents.",
    image:
      "https://plus.unsplash.com/premium_photo-1691030925341-71b0a6994815?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLatest: false,
  },
];



const LatestBlogSection = ({ title }) => {
  return (
    <div className="container mx-auto px-8 sm:px-4 py-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl text-center mb-8">
        {title}
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          title == 'Our Latest Blog Post' ? post.isLatest == true && <Card
            key={post.id}
            className="overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 p-0"
          >
            {/* Blog Image */}
            <div className="relative w-full h-48 sm:h-60 md:h-72">
              <img
                src={post.image}
                alt={post.title}
                fill
                className="object-cover h-full w-full"
              />
            </div>

            {/* Blog Content */}
            <CardContent className="p-3">
              <h3 className="text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.description}
              </p>
            </CardContent>
          </Card> : post.isLatest == false && <Card
            key={post.id}
            className="overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 p-0"
          >
            {/* Blog Image */}
            <div className="relative w-full h-48 sm:h-60 md:h-72">
              <img
                src={post.image}
                alt={post.title}
                fill
                className="object-cover h-full w-full"
              />
            </div>

            {/* Blog Content */}
            <CardContent className="p-3">
              <h3 className="text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LatestBlogSection