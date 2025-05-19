'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-drah-blue mb-6">About DRAH</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
          <div className="relative w-full h-64">
            <Image 
              src="/images/DRAH Logo 284x300.jpg" 
              alt="DRAH Logo" 
              fill
              style={{objectFit: 'contain'}}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-drah-green mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            Disaster Recovery &amp; Affordable Housing (DRAH) is a global one-stop-shop solution for disaster recovery and affordable housing. 
            We help victims of man-made and natural disasters through comprehensive physical development solutions that address 
            the complex process of rebuilding housing and assisting victims.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-drah-green mb-4">History and Vision</h2>
        <p className="text-lg text-gray-700 mb-4">
          DRAH originated from Hurricane Katrina recovery efforts and has evolved into a global affordable housing and disaster recovery solution. 
          Our vision is to simplify the complex process of real estate by providing a comprehensive solution that includes development, 
          commerce transactions, and disaster management.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We aim to create a universal platform where victims can access solutions instantly through a simple interface, 
          while also being protected by our prevention and correction solutions.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-drah-green mb-4">Mission and Values</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to democratize housing, promote sustainable construction, and utilize innovative technologies to create 
          affordable housing solutions for all. We believe in:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-4 space-y-2">
          <li>Accessibility - Making housing solutions available to everyone regardless of economic status</li>
          <li>Sustainability - Building with environmentally responsible practices and materials</li>
          <li>Innovation - Leveraging cutting-edge technology including blockchain and multiverse solutions</li>
          <li>Community - Creating spaces that foster connection and support</li>
          <li>Resilience - Developing housing that can withstand environmental challenges</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-drah-green mb-4">Core Achievements</h2>
        <p className="text-lg text-gray-700 mb-4">
          DRAH has pioneered several groundbreaking initiatives in affordable housing, including:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-4 space-y-2">
          <li>Development of the $50 per square foot housing model</li>
          <li>Integration of blockchain technology for transparent property transactions</li>
          <li>Creation of multiverse real estate solutions that bridge physical and digital spaces</li>
          <li>Implementation of rapid deployment housing for disaster recovery</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-drah-green mb-4">Strategic Alliances</h2>
        <p className="text-lg text-gray-700 mb-4">
          DRAH has established partnerships with numerous businesses worldwide to enhance our mission and expand our impact. 
          Our network includes marketing partners, regulatory partners for compliance with US laws, and property developer partners 
          for investment opportunities.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We are continuously expanding our strategic alliances with organizations that share our vision for affordable, 
          sustainable housing solutions. In the coming year, DRAH plans to announce new brand ambassadors, strategic advisors, 
          and institutional finance associates to further support our mission.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-drah-green mb-4">Future Direction</h2>
        <blockquote className="border-l-4 border-drah-blue pl-4 italic text-lg text-gray-700 mb-4">
          "Join us in our new chapter of Real Estate development and construction, where we integrate cutting-edge 
          technology such as Blockchain, NFT Token, and Multiverse solutions to revolutionize the industry. 
          Get ready to experience the future of Real Estate with us."
        </blockquote>
        <p className="text-lg text-gray-700">
          Through the Silicon Valley South Unicorn Incubation Campus (SVS UIC) development, DRAH is creating a model 
          for future communities that combine affordable housing with innovative business solutions and sustainable living practices.
        </p>
      </div>

      <div className="text-sm text-gray-500 mt-8">
        <p>Source: Content adapted from <a href="https://drah.tech/" className="text-drah-blue hover:underline" target="_blank" rel="noopener noreferrer">drah.tech</a></p>
      </div>
    </div>
  );
}
