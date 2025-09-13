import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        id: 1,
        name: "Sonal Jaiswal",
        location: "Kolkata",
        message:
            "I’m so glad we came across Tilak Stone Arts. This temple has truly become the soul of our home.",
        image:
            "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1748116356484.png&w=384&q=75",
    },
    {
        id: 2,
        name: "Naresh Moolchandani",
        location: "Dubai",
        message:
            "Flew down from Dubai to select murtis for my New Home. Absolutely loved the collection and the hospitality of the team.",
        image:
            "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1748115758316.png&w=384&q=75",
    },
    {
        id: 3,
        name: "Violet",
        location: "France",
        message:
            "It was a beautiful surprise visiting the store. It is beautifully curated with the collections. Please visit this place when in Jaipur.",
        image:
            "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1748114892590.png&w=384&q=75",
    },
    {
        id: 4,
        name: "Yogesh Soni",
        location: "Jhunjhunu, Rajasthan",
        message: "Now we make time for our Temple Everyday.",
        image:
            "https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1746557685412.png&w=384&q=75",
    },
];

const TestimonialSection = () => {
    return (
        <div className="container mx-auto px-4 py-12">

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {testimonials.map((testimonial) => (
                    <Card
                        key={testimonial.id}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-0"
                    >
                        {/* Image */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover h-full w-full transition-transform duration-500 transform hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 flex flex-col items-center text-center">
                            <p className="text-sm italic text-gray-600 mb-3">
                                "{testimonial.message}"
                            </p>
                            <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide">
                                {testimonial.name} | {testimonial.location}
                            </h3>

                            {/* Small underline accent */}
                            <div className="mt-2 h-[2px] w-12 bg-orange-500 rounded"></div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TestimonialSection