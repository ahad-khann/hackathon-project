// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fill py-4">
      <div className="container mx-auto flex justify-center items-center">
        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-800">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        {/* Icons */}
        <div className="flex space-x-6 text-gray-800 ">
          <button>👤</button>
          <button>🔍</button>
          <button>❤️</button>
          <button>🛒</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;