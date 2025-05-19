'use client';
import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';
import Link from 'next/link';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-drah-blue mb-4">Welcome to the DRAH Multiverse Platform</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is the central hub for the Multiverse Platform Portal Exchange, featuring Real Estate and Business Solutions powered by DRAH.
        Explore SVSUIC properties, leverage AI business tools, and manage your account.
      </p>
      
      <div className="my-8">
        <p className="text-xl font-semibold text-drah-green mb-4">
          Reserve your new home today and build your future affordably.
        </p>
        
        <div className="cursor-pointer hover:opacity-90 transition-opacity inline-block">
          <img 
            src="/images/SVS Lots.jpg" 
            alt="SVS Lots" 
            className="rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto"
            onClick={openModal}
            role="button"
            aria-label="Click to view full SVS Lots image"
          />
          <p className="text-sm text-center text-gray-600 mt-2">Click image to view full size</p>
        </div>
      </div>
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        imageSrc="/images/SVS Lots.jpg" 
        altText="SVS Lots - Full View" 
      />
      
      {/* Restored content below */}
      
      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-lg mt-8">
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
              <p className="text-xl text-gray-800"><span className="text-2xl mr-2">🌎</span> A visionary hub for tomorrow's unicorn startups</p>
            </div>
          </div>
          <p className="text-center text-xl font-semibold text-drah-green">
            Secure your spot now—spaces are limited!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-drah-blue mb-8 text-center">
            Our Mission: Building Sustainable Futures Together
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            At the Silicon Valley South Unicorn Incubation Campus (SVSUIC), we're on a mission to make high-quality living and entrepreneurship accessible to all. By combining innovative modular housing with an integrated business incubation ecosystem, SVSUIC empowers residents to build wealth, community, and groundbreaking ventures.
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
            Join SVSUIC and become part of a transformative movement—where your home is more than a place to live; it's your launchpad to success.
          </p>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-8 md:py-12 bg-drah-blue text-white rounded-lg mt-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the SVSUIC Community?</h2>
          <p className="text-lg mb-8">
            Take the first step toward your future in our innovative live-work community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/properties" className="bg-drah-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Explore Properties
            </Link>
            <Link href="/property-models" className="bg-white hover:bg-gray-100 text-drah-blue font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              View Model Homes
            </Link>
            <Link href="/reserve" className="bg-drah-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
