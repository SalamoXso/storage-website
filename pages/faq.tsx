'use client'
import "/src/app/styles/globals.css";
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState(null)
  const FaqComponent = () => {
  const [openQuestion, setOpenQuestion] = useState<null | number>(null);

  const faqs = [
    {
      question: "What sizes of storage units do you offer?",
      answer: "We offer a variety of storage unit sizes to meet different needs. Our units range from small 1m² lockers suitable for document storage, up to large 100m² units perfect for business inventory or large household items. Popular sizes include 5m², 10m², and 20m² units."
    },
    {
      question: "How secure are your storage facilities?",
      answer: "Security is our top priority. Our facilities are equipped with 24/7 video surveillance, individual unit alarms, secure access control systems, and on-site staff during business hours. Each unit is individually locked, and only you have the key or access code."
    },
    {
      question: "Can I access my storage unit at any time?",
      answer: "Yes, we offer 24/7 access to your storage unit. You can visit your unit whenever you need, day or night, using your personal access code or key card."
    },
    {
      question: "Do you offer climate-controlled units?",
      answer: "Yes, we have climate-controlled units available. These units maintain a consistent temperature and humidity level, which is ideal for storing sensitive items such as electronics, wooden furniture, important documents, or artwork."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is based on the size of the unit and the duration of storage. We offer flexible contracts with monthly rates starting from €49 for our smallest units. For detailed pricing, please check our pricing page or contact us for a personalized quote."
    },
    {
      question: "Do I need insurance for my stored items?",
      answer: "While we take every precaution to ensure the safety of your belongings, we recommend having insurance coverage for your stored items. We offer insurance options, or you can check if your homeowner's or renter's insurance policy covers items in storage."
    }
  ]

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
        <Link href="/services" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Services
        </Link>
        <Link href="/pricing" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Pricing
        </Link>
        <Link href="/about" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          About
        </Link>
        <Link href="/contact" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Contact
        </Link>
      </nav>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Link href="/contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out">
          Get Started
        </Link>
      </div>
    </div>
  </div>
</header>

      <main className="flex-grow">
        <div className="bg-teal-700">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
            <p className="mt-6 max-w-3xl text-xl text-teal-100">
              Find answers to common questions about our storage solutions and services.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6 pb-8">
                <dt className="text-lg">
                  
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="text-left w-full flex justify-between items-start text-gray-400"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg
                        className={`${openQuestion === index ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 pr-12 ${openQuestion === index ? 'block' : 'hidden'}`}>
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            ))}
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
}}