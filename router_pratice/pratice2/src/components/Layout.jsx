import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header />

      
      <main className="pt-20"> {/* Add padding top to offset fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
