import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 text-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide">
          <Link to="/">MyWebsite</Link>
        </h1>
        <nav className="flex items-center space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition duration-300'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-semibold' : 'hover:text-yellow-300 transition duration-300'
            }
          >
            Services
          </NavLink>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-4 py-1 rounded-full hover:bg-yellow-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
