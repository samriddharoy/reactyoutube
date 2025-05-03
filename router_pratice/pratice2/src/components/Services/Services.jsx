import React from 'react'

function Services() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">Our Services</h2>
        <p className="text-gray-700 text-lg mb-8">
          We offer a variety of services designed to help your business succeed. Our team is here to provide innovative solutions and dedicated support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Web Development</h3>
            <p className="text-gray-600">
              We create responsive and dynamic websites tailored to your business needs, helping you reach your audience effectively.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Mobile App Development</h3>
            <p className="text-gray-600">
              Our mobile app development services ensure that your business can engage customers on their favorite devices, whether it's iOS or Android.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Digital Marketing</h3>
            <p className="text-gray-600">
              We help grow your online presence through targeted digital marketing strategies, including SEO, social media, and paid advertising.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
