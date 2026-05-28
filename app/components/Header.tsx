"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/asl", label: "ASL" },
    { href: "/blog", label: "Blog" },
    { href: "/donate", label: "Donate" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl"
            : "bg-white/90 backdrop-blur-md shadow-lg"
        } rounded-full border border-gray-200/50`}
      >
        <div className="flex justify-between items-center px-8 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-teal-700 transition-colors duration-200"
          >
            SignLearn
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 relative group ${
                  isActive(link.href)
                    ? "text-teal-700"
                    : "text-gray-700 hover:bg-teal-50/80 hover:text-teal-700"
                }`}
              >
                {link.label}
                {/* Active underline */}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-teal-700 rounded-full transition-all duration-300"></span>
                )}
                {/* Hover underline */}
                {!isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-teal-400 rounded-full transition-all duration-300 group-hover:w-10"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/courses"
              className="bg-gradient-to-r from-teal-700 to-teal-600 text-white px-7 py-2.5 rounded-full hover:from-teal-800 hover:to-teal-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-5 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-teal-700 bg-teal-50/50"
                    : "text-gray-700 hover:bg-teal-50/80 hover:text-teal-700"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-teal-700 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              href="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 bg-gradient-to-r from-teal-700 to-teal-600 text-white px-5 py-3.5 rounded-full text-center font-semibold hover:from-teal-800 hover:to-teal-700 transition-all duration-200 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
