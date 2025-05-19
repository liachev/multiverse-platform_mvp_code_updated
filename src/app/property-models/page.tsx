'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Define model home data
const modelHomes = [
  {
    id: 'gothic',
    name: 'Gothic Home',
    description: 'A stunning Gothic-inspired design featuring elegant architectural elements with modern functionality.',
    images: Array.from({ length: 14 }, (_, i) => `/images/model-homes/gothic/Gothic Home Pkg 51525 (${i + 1}).png`)
  },
  {
    id: 'hacienda',
    name: 'Hacienda Home',
    description: 'A beautiful Spanish-influenced hacienda design with open spaces and traditional elements.',
    images: [
      '/images/model-homes/hacienda/Hacienda Fig 1 3D Exterior Rendering — Dawn Lighting 50125(1).webp',
      '/images/model-homes/hacienda/Hacienda Fig 2 3D Exterior Rendering — Dawn Lighting 50125(10).webp',
      '/images/model-homes/hacienda/Hacienda Fig 3 3D Exterior Rendering — Evening Lighting 50125(3).webp',
      '/images/model-homes/hacienda/Hacienda Fig 4 3D Exterior Rendering — Glasswall Greenhouse 50125(4).webp',
      '/images/model-homes/hacienda/Hacienda Fig 5 3D Interior Rendering — Dawn Lighting 50125(5).webp',
      '/images/model-homes/hacienda/Hacienda Fig 6 3D Interior Rendering — Kitchen 50125(6).webp',
      '/images/model-homes/hacienda/Hacienda Fig 7 3D Interior Rendering — Master Bedroom 50125(7).webp',
      '/images/model-homes/hacienda/Hacienda Fig 8 3D Exterior Rendering — Plan House cutout 50125(8).webp',
      '/images/model-homes/hacienda/Hacienda Fig 9 3D Exterior Rendering — Plan Layout 50125(9).png'
    ]
  },
  {
    id: 'modern',
    name: 'Modern Home',
    description: 'A contemporary design with clean lines, open spaces, and innovative features for modern living.',
    images: Array.from({ length: 17 }, (_, i) => `/images/model-homes/modern/Modern Home Pkg 51525 (${i + 1}).png`)
  },
  {
    id: 'shotgun',
    name: 'Shotgun Home',
    description: 'A traditional shotgun-style home with efficient use of space and classic Southern charm.',
    images: Array.from({ length: 13 }, (_, i) => `/images/model-homes/shotgun/Shotgun 51525 (${i + 1}).png`)
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean Home',
    description: 'An elegant Mediterranean-style home featuring terracotta roofs, stucco walls, and beautiful arches.',
    images: Array.from({ length: 14 }, (_, i) => `/images/model-homes/mediterranean/Mediterranean Pkg 51525 (${i + 1}).png`)
  }
];

export default function PropertyModelsPage() {
  const [activeModel, setActiveModel] = useState(modelHomes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleModelChange = (model) => {
    setActiveModel(model);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === activeModel.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? activeModel.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-drah-blue mb-6">Property Models</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore our diverse range of home models available for the SVS UIC development. 
        Each design offers unique features while maintaining our commitment to quality, 
        sustainability, and affordability.
      </p>

      {/* Model Selection Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {modelHomes.map((model) => (
          <button
            key={model.id}
            onClick={() => handleModelChange(model)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeModel.id === model.id
                ? 'bg-drah-blue text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {model.name}
          </button>
        ))}
      </div>

      {/* Active Model Display */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-drah-green mb-2">{activeModel.name}</h2>
          <p className="text-gray-700 mb-4">{activeModel.description}</p>
        </div>

        {/* Slideshow */}
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <div className="relative w-full h-[500px]">
              {activeModel.images[currentImageIndex] && (
                <Image
                  src={activeModel.images[currentImageIndex]}
                  alt={`${activeModel.name} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity duration-500"
                />
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image Counter */}
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600">
            Image {currentImageIndex + 1} of {activeModel.images.length}
          </p>
        </div>

        {/* Thumbnail Navigation */}
        <div className="p-4 overflow-x-auto">
          <div className="flex space-x-2">
            {activeModel.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                  currentImageIndex === index ? 'border-drah-blue' : 'border-transparent'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${activeModel.name} thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-drah-blue mb-4">Interested in a Property Model?</h3>
        <p className="text-gray-700 mb-4">
          These model homes represent our commitment to quality, sustainability, and affordability. 
          Each design can be customized to meet your specific needs and preferences.
        </p>
        <p className="text-gray-700">
          For more information about availability, pricing, and customization options, 
          please visit our <a href="/properties" className="text-drah-blue hover:underline">SVS UIC Properties</a> page 
          or contact our sales team.
        </p>
      </div>
    </div>
  );
}
