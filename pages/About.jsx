// Usage: place an illustration at /public/about-illustration.svg or pass a custom path to imageSrc
export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 pb-12">
      <section className="max-w-6xl mx-auto grid grid-cols-1 gap-10 items-center">
        {/* Illustration/Hero */}
        <div className="bg-[#fff7f2] w-full p-5 grid grid-cols-6 min-h-[50vh] rounded-2xl border border-orange-100 relative overflow-hidden">
          <div className="h-full w-full flex justify-center items-center flex-col col-span-2 text-center sm:text-left">
            <div className="space-y-1">
              <span className="inline-block text-xs font-semibold tracking-wide text-[#ff7e2e] bg-[#ff7e2e]/10 px-2.5 py-1 rounded-full">
                Since 1998
              </span>
              <h3 className="text-4xl sm:text-5xl font-bold text-[#ff7e2e] font-serif tracking-tight">Indian</h3>
              <h3 className="text-5xl sm:text-6xl font-extrabold font-serif tracking-tight">Stonex</h3>
              <p className="text-gray-700 mt-2 max-w-[28ch] text-sm leading-relaxed">
                Crafting marble temples, sculptures, and bespoke stonework with timeless artistry.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-[#ff7e2e] text-white px-4 py-2.5 rounded-lg font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7e2e]"
                >
                  Get a Quote
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center border border-[#ff7e2e]/30 text-[#ff7e2e] px-4 py-2.5 rounded-lg font-medium bg-white hover:bg-[#ff7e2e]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7e2e]/40"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-4 relative">
            <img
              src={"public/Aboutuspage.jpg"}
              alt="Abstract artisan motif with lotus-like emblem on warm orange field"
              className="object-cover w-full h-full rounded-xl border border-orange-100"
              loading="lazy"
            />
            {/* subtle animated ornaments */}
            <div className="pointer-events-none absolute inset-0">
              <span
                aria-hidden
                className="absolute right-6 top-6 h-8 w-8 rounded-full border-2 border-[#2f3347]/30 animate-float-slow"
              />
              <span
                aria-hidden
                className="absolute left-8 bottom-8 h-3 w-3 rounded-sm border border-[#2f3347]/30 animate-drift-slow"
              />
              <span aria-hidden className="absolute left-16 top-10 h-2 w-2 rounded-full bg-[#ff7e2e] animate-pulse" />
            </div>
          </div>
        </div>

        <nav
          aria-label="About page sections"
          className="sticky top-0 z-10 -mx-6 px-6 py-2 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100"
        >
          <ul className="max-w-6xl mx-auto flex items-center gap-4 overflow-x-auto text-sm">
            <li>
              <a className="px-3 py-1.5 rounded-full hover:bg-gray-100 font-medium" href="#about">
                Overview
              </a>
            </li>
            <li>
              <a className="px-3 py-1.5 rounded-full hover:bg-gray-100 font-medium" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="px-3 py-1.5 rounded-full hover:bg-gray-100 font-medium" href="#why">
                Why Choose
              </a>
            </li>
            <li>
              <a className="px-3 py-1.5 rounded-full hover:bg-gray-100 font-medium" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="px-3 py-1.5 rounded-full hover:bg-gray-100 font-medium" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Content */}
        <div id="about" className="space-y-6 scroll-mt-24">
          <span className="inline-block text-sm font-semibold tracking-wide text-[#ff7e2e] bg-[#ff7e2e]/10 px-3 py-1 rounded-full">
            ABOUT US
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-balance font-serif tracking-tight">
            About Us – <span className="text-[#ff7e2e]">Indian Stonex</span>
          </h1>

          <section aria-label="Key highlights" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-gray-100 p-4 bg-white text-center transition-transform hover:-translate-y-0.5 hover:shadow-sm">
              <p className="text-3xl font-extrabold text-[#ff7e2e] font-serif">25+</p>
              <p className="text-xs text-gray-600 mt-1">Years Experience</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 bg-white text-center transition-transform hover:-translate-y-0.5 hover:shadow-sm">
              <p className="text-3xl font-extrabold text-[#ff7e2e] font-serif">1200+</p>
              <p className="text-xs text-gray-600 mt-1">Projects Delivered</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 bg-white text-center transition-transform hover:-translate-y-0.5 hover:shadow-sm">
              <p className="text-3xl font-extrabold text-[#ff7e2e] font-serif">18</p>
              <p className="text-xs text-gray-600 mt-1">Countries Served</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4 bg-white text-center transition-transform hover:-translate-y-0.5 hover:shadow-sm">
              <p className="text-3xl font-extrabold text-[#ff7e2e] font-serif">100%</p>
              <p className="text-xs text-gray-600 mt-1">Custom Crafted</p>
            </div>
          </section>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At <strong>Indian Stonex</strong>, we believe that stone is not just a material – it is a timeless art form.
            With years of expertise in the stone industry, we specialize in crafting premium marble temples, stone
            artifacts, sculptures, and architectural elements that bring elegance, spirituality, and heritage into every
            space.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Founded with a vision to blend traditional craftsmanship with modern design, Indian Stonex has become a
            trusted name among homeowners, architects, interior designers, and builders across India and abroad. Every
            creation we deliver is a symbol of purity, durability, and beauty – where stone truly becomes art.
          </p>

          <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24">
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
                    <strong>Marble Temples & Mandirs</strong> – Intricately carved temples that embody devotion and
                    grace.
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
                    <strong>Stone Art & Sculptures</strong> – Handcrafted masterpieces that add luxury and culture to
                    interiors or exteriors.
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
                    <strong>Custom Stonework</strong> – Tailored designs to match your vision, from small details to
                    large architectural projects.
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
                    <strong>Export Quality Craft</strong> – Delivering superior quality products with global standards
                    and timely service.
                  </span>
                </li>
              </ul>
            </article>

            <article id="why" className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 scroll-mt-24">
              <h3 className="text-lg font-semibold mb-3">Why Choose Indian Stonex?</h3>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Finest selection of natural stones & marbles",
                  "Experienced artisans and expert craftsmanship",
                  "Commitment to quality & authenticity",
                  "Personalized service for every client",
                  "A legacy of trust in stone artistry",
                ].map((reason) => (
                  <li key={reason} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#ff7e2e]/10 text-[#ff7e2e]">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
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

          <div id="contact" className="pt-2 scroll-mt-24">
            <p className="text-gray-700">
              At Indian Stonex, our mission is simple: to transform natural stone into lasting works of art that inspire
              generations.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/AppointmentPage"
                className="inline-flex items-center gap-2 bg-[#ff7e2e] text-white px-5 py-3 rounded-xl shadow hover:shadow-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7e2e]"
                aria-label="Contact Indian Stonex"
              >
                Contact Us
              </a>
              <a
                href="/Testimonials"
                className="inline-flex items-center gap-2 border border-[#ff7e2e]/20 text-[#ff7e2e] px-5 py-3 rounded-xl font-medium bg-white hover:bg-[#ff7e2e]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff7e2e]/40"
                aria-label="View projects and testimonials"
              >
                View Projects
              </a>
            </div>
          </div>

          <section id="gallery" aria-label="Selected works gallery" className="pt-4 scroll-mt-24">
            <h2 className="text-xl font-semibold mb-3">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <img
                src="/white-marble-temple-carving-detail.jpg"
                alt="Intricate white marble temple carving detail"
                className="rounded-lg border border-gray-100 object-cover w-full h-[180px]"
              />
              <img
                src="/marble-mandir-with-arches.jpg"
                alt="Marble mandir with arches"
                className="rounded-lg border border-gray-100 object-cover w-full h-[180px]"
              />
              <img
                src="/handcrafted-stone-sculpture.jpg"
                alt="Handcrafted stone sculpture"
                className="rounded-lg border border-gray-100 object-cover w-full h-[180px]"
              />
              <img
                src="/custom-stonework-pillar.jpg"
                alt="Custom stonework pillar"
                className="rounded-lg border border-gray-100 object-cover w-full h-[180px]"
              />
              <img
                src="/marble-inlay-floral-pattern.jpg"
                alt="Marble inlay floral pattern"
                className="rounded-lg border border-gray-100 object-cover w-full h-[180px]"
              />
              <img
                src="/temple-entrance-stone-craft.jpg"
                alt="Temple entrance stone craft"
                className="rounded-lg border border-gray-100 object-cover w-full h-[180px]"
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
