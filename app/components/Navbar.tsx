'use client'
import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon, UserIcon, StarIcon, PhoneIcon } from '@heroicons/react/solid';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent py-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo1.webp" alt="CV Logo" className="h-8 w-8" />
          <span className="text-black text-xl font-bold handwriting-font">
            Al-Zeel Resume Builder
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="flex items-center text-black-400 hover:text-yellow-500 transition">
            <HomeIcon className="h-5 w-5 mr-2" />
            Home
          </Link>
          <Link href="/features" className="flex items-center text-black-400 hover:text-yellow-500 transition">
            <UserIcon className="h-5 w-5 mr-2" />
            Features
          </Link>
          <Link href="/reviews" className="flex items-center text-black-400 hover:text-yellow-500 transition">
            <StarIcon className="h-5 w-5 mr-2" />
            Reviews
          </Link>
          <Link href="/contact" className="flex items-center text-black-400 hover:text-yellow-500 transition">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-400 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 py-4`}>
        <div className="space-y-6 text-center">
          <Link href="/" className="flex items-center justify-center text-black-400 hover:text-yellow-500 transition">
            <HomeIcon className="h-5 w-5 mr-2" />
            Home
          </Link>
          <Link href="/features" className="flex items-center justify-center text-black-400 hover:text-yellow-500 transition">
            <UserIcon className="h-5 w-5 mr-2" />
            Features
          </Link>
          <Link href="/reviews" className="flex items-center justify-center text-black-400 hover:text-yellow-500 transition">
            <StarIcon className="h-5 w-5 mr-2" />
            Reviews
          </Link>
          <Link href="/contact" className="flex items-center justify-center text-black-400 hover:text-yellow-500 transition">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
