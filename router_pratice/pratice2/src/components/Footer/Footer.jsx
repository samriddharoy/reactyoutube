import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white py-4 mt-10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-lg font-bold">
          <Link to="/">MyWebsite</Link>
        </div>

        {/* Links */}
        <nav className="flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
          <Link to="/services" className="hover:text-yellow-300 transition duration-300">Services</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
        </nav>

        {/* Copyright */}
        <div className="text-sm opacity-75">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
