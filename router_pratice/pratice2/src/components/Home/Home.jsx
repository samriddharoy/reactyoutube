import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex items-center justify-center">
      <div className="text-center px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6">
          Welcome to <span className="text-purple-600">MyWebsite</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          We provide amazing services that help you succeed. Explore our platform to learn more about what we offer!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/services"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-50 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
