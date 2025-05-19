import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/drah-logo.jpg" alt="DRAH Logo" width={142} height={150} className="h-10 w-auto mr-4" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-700 hover:text-drah-blue px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-drah-blue px-3 py-2 rounded-md text-sm font-medium">About DRAH</Link>
          <Link href="/property-models" className="text-gray-700 hover:text-drah-blue px-3 py-2 rounded-md text-sm font-medium">Property Models</Link>
          <Link href="/properties" className="text-gray-700 hover:text-drah-blue px-3 py-2 rounded-md text-sm font-medium">SVS UIC Properties</Link>
          <Link href="/ai-tools" className="text-gray-700 hover:text-drah-blue px-3 py-2 rounded-md text-sm font-medium">AI Business Tools</Link>
          <Link href="/account" className="text-gray-700 hover:text-drah-blue px-3 py-2 rounded-md text-sm font-medium">Account</Link>
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
