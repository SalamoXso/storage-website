'use client'
import "/src/app/styles/globals.css";
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <span className="sr-only">Storage Veendam</span>
                <svg className="h-8 w-auto sm:h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">Storage Veendam</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="bg-teal-700">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
            <p className="mt-6 max-w-3xl text-xl text-teal-100">
              Learn about our history, mission, and commitment to providing top-notch storage solutions in Veendam.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2010, Storage Veendam has been serving the Veendam community with reliable and flexible storage solutions for over a decade. What started as a small family business has grown into a trusted name in the storage industry, known for our commitment to customer satisfaction and innovative storage solutions.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our journey has been marked by continuous improvement and adaptation to meet the evolving needs of our customers. From individuals looking for personal storage to businesses requiring scalable solutions, we've always strived to provide the perfect space for every need.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
  <Image
    src="/istockphoto-1255176983-612x612.jpg"
    alt="Storage Veendam Facility"
    layout="fill"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    objectFit="cover"
    className="rounded-lg shadow-lg"
  />
</div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              At Storage Veendam, our mission is to provide secure, flexible, and accessible storage solutions that empower individuals and businesses to manage their space effectively. We are committed to delivering exceptional customer service, maintaining the highest standards of security, and continuously innovating to meet the diverse needs of our community.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900">Customer-Centric</h3>
                  <p className="mt-4 text-gray-500">
                    We put our customers first, always striving to exceed their expectations and provide solutions tailored to their unique needs.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
                  <p className="mt-4 text-gray-500">
                    We operate with honesty and transparency, building trust with our customers and within our community.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                  <p className="mt-4 text-gray-500">
                    We continuously seek new ways to improve our services and adapt to the changing needs of our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Behind Storage Veendam is a dedicated team of professionals committed to providing you with the best storage experience possible. From our friendly customer service representatives to our skilled maintenance staff, every member of our team plays a crucial role in ensuring your satisfaction.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Services
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Business Storage
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Personal Storage
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Administrative Storage
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Connect
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-300 hover:text-white">
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-300">
                Get the latest news and updates delivered to your inbox.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input type="email" name="email-address" id="email-address" autoComplete="email" required
                  className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                  placeholder="Enter your email" />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button type="submit"
                    className="w-full bg-teal-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 Storage Veendam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}