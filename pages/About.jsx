
import { useEffect, useRef } from "react"

export default function AboutUs() {
  const heroRef = useRef(null) // removed TypeScript generic

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll(".fade-in-section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full Width with Animation */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#fff7f2] to-[#ffe8d9]"
      >
        <div className="absolute inset-0 animate-fade-in">
          <img
            src="/Aboutuspage.jpg"
            alt="Indian Stonex craftsmanship showcase"
            className="h-full w-full object-fit opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white animate-slide-up">
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-sm">
              Since 1998
            </span>
            <h1 className="mt-6 font-serif text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
              Indian Stonex
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Crafting marble temples, sculptures, and bespoke stonework with timeless artistry
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-[#ff7e2e] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#ff7e2e]"
              >
                Get a Quote
              </a>
              <a
                href="#gallery"
                className="rounded-xl border-2 border-white/80 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="fade-in-section border-b border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "1200+", label: "Projects Delivered" },
              { num: "18", label: "Countries Served" },
              { num: "100%", label: "Custom Crafted" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="font-serif text-5xl font-bold text-[#ff7e2e]">{item.num}</p>
                <p className="mt-2 text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="fade-in-section scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <span className="inline-block rounded-full bg-[#ff7e2e]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#ff7e2e]">
            ABOUT US
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            About Us – <span className="text-[#ff7e2e]">Indian Stonex</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              At <strong>Indian Stonex</strong>, we believe that stone is not just a material – it is a timeless art
              form. With years of expertise in the stone industry, we specialize in crafting premium marble temples,
              stone artifacts, sculptures, and architectural elements that bring elegance, spirituality, and heritage
              into every space.
            </p>
            <p>
              Founded with a vision to blend traditional craftsmanship with modern design, Indian Stonex has become a
              trusted name among homeowners, architects, interior designers, and builders across India and abroad. Every
              creation we deliver is a symbol of purity, durability, and beauty – where stone truly becomes art.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="fade-in-section scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-4xl font-bold text-gray-900">What We Do</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Services List */}
            <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  {
                    title: "Marble Temples & Mandirs",
                    desc: "Intricately carved temples that embody devotion and grace.",
                  },
                  {
                    title: "Stone Art & Sculptures",
                    desc: "Handcrafted masterpieces that add luxury and culture to interiors or exteriors.",
                  },
                  {
                    title: "Custom Stonework",
                    desc: "Tailored designs to match your vision, from small details to large architectural projects.",
                  },
                  {
                    title: "Export Quality Craft",
                    desc: "Delivering superior quality products with global standards and timely service.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#ff7e2e]" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <strong className="text-gray-900">{item.title}</strong>
                      <p className="mt-1 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* Why Choose */}
            <article
              id="why"
              className="scroll-mt-20 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Indian Stonex?</h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                {[
                  "Finest selection of natural stones & marbles",
                  "Experienced artisans and expert craftsmanship",
                  "Commitment to quality & authenticity",
                  "Personalized service for every client",
                  "A legacy of trust in stone artistry",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ff7e2e]/10 text-[#ff7e2e]">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="fade-in-section scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-serif text-4xl font-bold text-gray-900">Our Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Explore our collection of handcrafted marble temples, sculptures, and custom stonework
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/img4.png", alt: "Intricate white marble temple carving detail" },
              { src: "/img5.png", alt: "Marble mandir with arches" },
              { src: "/project1.jpg", alt: "Handcrafted stone sculpture" },
              { src: "/project2.jpg", alt: "Custom stonework pillar" },
              { src: "/project3.jpg", alt: "Marble inlay floral pattern" },
              { src: "/project4.jpg", alt: "Temple entrance stone craft" },
            ].map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-xl"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-80 w-full object-fit transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="fade-in-section scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900">Let's Create Something Timeless</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
            At Indian Stonex, our mission is simple: to transform natural stone into lasting works of art that inspire
            generations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/AppointmentPage"
              className="rounded-xl bg-[#ff7e2e] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7e2e] focus-visible:ring-offset-2"
            >
              Contact Us
            </a>
            <a
              href="/Testimonials"
              className="rounded-xl border-2 border-[#ff7e2e]/30 bg-white px-8 py-4 font-semibold text-[#ff7e2e] transition-all hover:bg-[#ff7e2e]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7e2e]/40 focus-visible:ring-offset-2"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
