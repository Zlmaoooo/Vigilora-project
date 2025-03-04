"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group hover-lift"
          >
            <Shield className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold text-gradient-animate">
              Vigilora
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5 transition-all duration-300"
              style={{
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}
            />
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5 transition-opacity duration-300"
              style={{
                opacity: isMenuOpen ? 0 : 1
              }}
            />
            <div className="w-6 h-0.5 bg-gray-600 transition-all duration-300"
              style={{
                transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
              }}
            />
          </button>
          
          <nav className={cn(
            "absolute md:static top-16 left-0 w-full md:w-auto glass-effect md:bg-transparent shadow-lg md:shadow-none transition-all duration-500 overflow-hidden",
            "md:flex md:items-center md:space-x-8",
            isMenuOpen ? "max-h-64" : "max-h-0 md:max-h-full"
          )}>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <Link 
                href="/fraud-types" 
                className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Fraud Types
              </Link>
              <Link 
                href="/ai-tools" 
                className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                AI Tools
              </Link>
              <Link 
                href="/contact" 
                className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

            <div className="p-4 md:p-0">
              <Link 
                href="/dashboard"
                className="block w-full md:w-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 
                  text-white px-6 py-2 rounded-full button-hover ripple"
              >
                Dashboard
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}