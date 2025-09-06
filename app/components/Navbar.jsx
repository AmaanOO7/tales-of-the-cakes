'use client'
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bakery-pink to-bakery-amber flex items-center justify-center shadow">
            <span className="text-white font-dancing">T</span>
          </div>
          <div>
            <a href="#" className="text-lg font-semibold">Tales of the Cake</a>
            <div className="text-xs text-gray-500">Every cake tells a story</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#story" className="hover:underline">Our Story</a>
          <a href="#order" className="rounded-md px-4 py-2 bg-bakery-pink text-white font-medium">Order Now</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />)
                     : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />)}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <a href="#products" className="block py-2">Products</a>
          <a href="#gallery" className="block py-2">Gallery</a>
          <a href="#story" className="block py-2">Our Story</a>
          <a href="#order" className="block py-2">Order Now</a>
        </div>
      )}
    </header>
)
}
