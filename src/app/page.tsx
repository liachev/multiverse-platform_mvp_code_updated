import React from 'react';
import Link from 'next/link';
import ModelHomesSection from '@/components/ModelHomesSection'; // Assuming ModelHomesSection is in components folder

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-drah-blue mb-6">
          Live, Work & Thrive: Affordable Smart Homes for the Future
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Discover the Silicon Valley South Unicorn Incubation Campus (SVSUIC)—200 cutting-edge live-work homes designed for entrepreneurs, families, and dreamers. Reserve your new home today and build your future affordably.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/reserve" legacyBehavior>
            <a className="bg-drah-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              ➡ Reserve Your Home Now
            </a>
          </Link>
          <Link href="/reserve" legacyBehavior> 
            <a className="bg-drah-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              ➡ Join Our Unicorn Incubation Program
            </a>
          </Link>        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-drah-blue mb-6 text-center">Building More Than Homes—Building Opportunities</h2>
          <p className="text-gray-700 text-lg mb-8 text-center">
            At SVSUIC, we&apos;re building more than homes—we&apos;re building opportunities. Our innovative community blends sustainable smart home design with business incubation, creating a space where residents can live, work, and grow together.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-800"><span className="text-2xl mr-2">🌿</span> Affordable homes with eco-smart features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-800"><span className="text-2xl mr-2">🏗️</span> Rapid modular construction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-800"><span className="text-2xl mr-2">🚀</span> Built-in business mentorship & coworking spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl text-gray-800"><span className="text-2xl mr-2">🌎</span> A visionary hub for tomorrow’s unicorn startups</p>
            </div>
          </div>
          <p className="text-center text-xl font-semibold text-drah-green">
            Secure your spot now—spaces are limited!
          </p>
        </div>
      </section>

      {/* Model Homes Section */}
      <ModelHomesSection />

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-drah-blue mb-8 text-center">
            Our Mission: Building Sustainable Futures Together
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            At the Silicon Valley South Unicorn Incubation Campus (SVSUIC), we’re on a mission to make high-quality living and entrepreneurship accessible to all. By combining innovative modular housing with an integrated business incubation ecosystem, SVSUIC empowers residents to build wealth, community, and groundbreaking ventures.
          </p>
          <h3 className="text-2xl font-semibold text-drah-green mb-6 text-center">Our commitment:</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-5xl mb-3">🌱</p>
              <p className="text-lg text-gray-800">Deliver affordable, eco-smart homes at $50/SF or less</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-5xl mb-3">🚀</p>
              <p className="text-lg text-gray-800">Foster startups through mentorship, coworking, and growth support</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-5xl mb-3">🤝</p>
              <p className="text-lg text-gray-800">Build resilient, sustainable communities with shared infrastructure</p>
            </div>
          </div>
          <p className="text-center text-xl font-semibold text-drah-blue mt-12">
            Join SVSUIC and become part of a transformative movement—where your home is more than a place to live; it’s your launchpad to success.
          </p>
        </div>
      </section>
    </div>
  );
}

