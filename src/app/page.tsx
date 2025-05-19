'use client';

import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';

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
      
      {/* Add more content or components for the homepage later */}
    </div>
  );
}
