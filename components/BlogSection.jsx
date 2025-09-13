import React from 'react'
import { Card, CardContent } from "@/components/ui/card";


const blogPosts = [
  {
    id: 1,
    title: "The Art of Marble Temple Carving in Contemporary Spaces",
    description:
      "Ancient marble temple carving brings heritage into modern homes, with Vietnam White Marble offering timeless beauty and spiritual significance.",
    image:
      "https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSMT01468-Edit.eee177b8.webp&w=1920&q=75",
  },
  {
    id: 2,
    title: "The Intersection of Artistry and Spirituality in Pooja Rooms",
    description:
      "Sacred pooja rooms blend artistry with spirituality using Vietnam White Marble, creating distinctive spaces that elevate both design and divine connection.",
    image:
      "https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSMT01468-Edit.eee177b8.webp&w=1920&q=75",
  },
  {
    id: 3,
    title:
      "Vietnam White Marble Mandir Design for Home: Why This Premium Material Transforms Your Sacred Space",
    description:
      "Discover why Vietnam White Marble mandir design for home creates the perfect sacred space. Explore its unique properties, design versatility, and spiritual significance for your home.",
    image:
      "https://www.tilakstonearts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSMT01468-Edit.eee177b8.webp&w=1920&q=75",
  },
];

const LatestBlogSection = ({ title }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl text-center mb-8">
        {title}
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-0"
          >
            {/* Blog Image */}
            <div className="relative w-full">
              <img
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
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