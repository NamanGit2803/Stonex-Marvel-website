import React from "react";


// Usage: place an illustration at /public/about-illustration.svg or pass a custom path to imageSrc
export default function AboutUs() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 pb-10">
            <section className=" mx-auto grid grid-cols-1 gap-12 items-center">
                {/* Illustration */}
                <div className="bg-[#fff7f2] w-full p-5 grid grid-cols-6 h-[60vh]">
                    <div className="h-full w-full flex justify-center items-center flex-col col-span-2">
                        <div>
                            <h3 className="text-5xl font-bold text-theme">Indian</h3>
                            <h3 className="text-7xl">Stonex</h3>
                        </div>
                    </div>
                    <div className="col-span-4 relative">
                        <img
                            src={'/about2.svg'}
                            alt="Artisan carving marble illustration"
                            className=" object-contain"
                        />
                        

                    </div>
                </div>
                {/* Content */}
                <div
                    className="space-y-6"
                >
                    <span className="inline-block text-sm font-semibold tracking-wide text-[#ff7e2e] bg-[#ff7e2e]/10 px-3 py-1 rounded-full">
                        ABOUT US
                    </span>

                    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                        About Us – <span className="text-[#ff7e2e]">Indian Stonex</span>
                    </h1>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        At <strong>Indian Stonex</strong>, we believe that stone is not just a
                        material – it is a timeless art form. With years of expertise in the
                        stone industry, we specialize in crafting premium marble temples,
                        stone artifacts, sculptures, and architectural elements that bring
                        elegance, spirituality, and heritage into every space.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Founded with a vision to blend traditional craftsmanship with modern
                        design, Indian Stonex has become a trusted name among homeowners,
                        architects, interior designers, and builders across India and
                        abroad. Every creation we deliver is a symbol of purity, durability,
                        and beauty – where stone truly becomes art.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <article className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold mb-3">What We Do</h3>

                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="flex-shrink-0 mt-1 h-5 w-5 text-[#ff7e2e]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Marble Temples & Mandirs</strong> – Intricately carved
                                        temples that embody devotion and grace.
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <svg
                                        className="flex-shrink-0 mt-1 h-5 w-5 text-[#ff7e2e]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Stone Art & Sculptures</strong> – Handcrafted
                                        masterpieces that add luxury and culture to interiors or
                                        exteriors.
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <svg
                                        className="flex-shrink-0 mt-1 h-5 w-5 text-[#ff7e2e]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Custom Stonework</strong> – Tailored designs to match
                                        your vision, from small details to large architectural
                                        projects.
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <svg
                                        className="flex-shrink-0 mt-1 h-5 w-5 text-[#ff7e2e]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Export Quality Craft</strong> – Delivering superior
                                        quality products with global standards and timely service.
                                    </span>
                                </li>
                            </ul>
                        </article>

                        <article className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-semibold mb-3">Why Choose Indian Stonex?</h3>

                            <ul className="space-y-3 text-gray-700">
                                {[
                                    "Finest selection of natural stones & marbles",
                                    "Experienced artisans and expert craftsmanship",
                                    "Commitment to quality & authenticity",
                                    "Personalized service for every client",
                                    "A legacy of trust in stone artistry",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#ff7e2e]/10 text-[#ff7e2e]">
                                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="pt-2">
                        <p className="text-gray-700">At Indian Stonex, our mission is simple: to transform natural stone into lasting works of art that inspire generations.</p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="/AppointmentPage"
                                className="inline-flex items-center gap-2 bg-[#ff7e2e] text-white px-5 py-3 rounded-xl shadow hover:shadow-lg font-medium"
                            >
                                Contact Us
                            </a>

                            <a
                                href="/Testimonials"
                                className="inline-flex items-center gap-2 border border-[#ff7e2e]/20 text-[#ff7e2e] px-5 py-3 rounded-xl font-medium bg-white hover:bg-[#ff7e2e]/10"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
