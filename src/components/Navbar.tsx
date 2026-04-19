"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { label: "Expertises", href: "#" },
    { label: "Work", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-background">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
          {/* Logo */}
          <Link href="/" className="font-extrabold text-2xl tracking-tighter z-50 relative">
            GETHYPED
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold text-lg hover:text-black">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:opacity-70 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center space-x-4 z-50 relative">
            <Link
              href="#"
              className="hidden md:flex bg-gh-orange text-white px-5 py-2 rounded-full font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span>Get Results</span>
              <span className="bg-white text-gh-orange rounded-full w-5 h-5 flex items-center justify-center text-xs">
                &rarr;
              </span>
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-6 mt-16">
          {links.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-5xl font-extrabold tracking-tighter hover:text-gh-orange transition-colors"
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${idx * 100}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.4s ease-out"
              }}
            >
              {link.label}
            </Link>
          ))}
          <div 
            className="pt-8"
            style={{
              transitionDelay: isOpen ? `${links.length * 100}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.4s ease-out"
            }}
          >
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="inline-flex bg-gh-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg hover:opacity-90 transition-opacity items-center gap-2"
            >
              Get Results
              <span className="bg-white text-gh-orange rounded-full w-6 h-6 flex items-center justify-center text-sm">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
