'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/drah-logo.jpg" alt="DRAH Logo" width={142} height={150} className="h-10 w-auto mr-4" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/about') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            About DRAH
          </Link>
          <Link 
            href="/property-models" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/property-models') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            Property Models
          </Link>
          <Link 
            href="/properties" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/properties') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            SVS UIC Properties
          </Link>
          <Link 
            href="/ai-tools" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/ai-tools') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            AI Business Tools
          </Link>
          <Link 
            href="/reserve" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/reserve') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            Reserve
          </Link>
          <Link 
            href="/account" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/account') 
                ? 'text-white bg-drah-blue' 
                : 'text-gray-700 hover:text-drah-blue'
            }`}
          >
            Account
          </Link>
          {/* Add Marketplace/Help later if needed */}
        </div>
        {/* Mobile menu button (implementation TBD) */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg className=" w-6 h-6 text-gray-500 hover:text-drah-blue "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu (implementation TBD) */}
      {/* <div className="hidden mobile-menu">
        <ul className="">
          <li><Link href="/" className="block text-sm px-2 py-4 text-white bg-drah-blue font-semibold">Home</Link></li>
          // ... other links
        </ul>
      </div> */}
    </header>
  );
};

export default Header;
