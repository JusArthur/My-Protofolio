// components/Navbar.js
"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Added to detect current route
import { MoveRight, Menu, X, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === "/"; // Determine if we are on the home page

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (!isMenuOpen) {
        setShowNavbar(currentScrollPos < lastScrollPos || currentScrollPos < 50);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, isMenuOpen]);

  const navLinks = [
    { name: "About", to: "aboutMe" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`bg-background/80 backdrop-blur-md text-text fixed top-0 left-0 w-full z-[100] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="font-mono max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo routing logic */}
          <div className="flex-shrink-0">
            {isHome ? (
              <ScrollLink to="hero" smooth={true} duration={800} onClick={closeMenu} className="text-primary text-2xl font-bold hover:text-secondary cursor-pointer">
                JustinCase
              </ScrollLink>
            ) : (
              <Link href="/" onClick={closeMenu} className="text-primary text-2xl font-bold hover:text-secondary cursor-pointer">
                JustinCase
              </Link>
            )}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              isHome ? (
                <ScrollLink key={link.to} to={link.to} smooth={true} duration={800} offset={-50} className="hover:text-primary cursor-pointer transition-colors">
                  {link.name}
                </ScrollLink>
              ) : (
                <Link key={link.to} href={`/#${link.to}`} className="hover:text-primary cursor-pointer transition-colors">
                  {link.name}
                </Link>
              )
            ))}

            <Link href="/books" className="group flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              Books
              <Book size={16} className="text-primary transition-transform duration-300 group-hover:-translate-y-1" />
            </Link>

            <Link href="/translation" className="group flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              Translation
              <MoveRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Contact routing logic */}
            {isHome ? (
              <ScrollLink to="contact" smooth={true} duration={800} className="bg-primary text-background px-4 py-2 rounded-full hover:bg-secondary cursor-pointer transition-all">
                Contact
              </ScrollLink>
            ) : (
              <Link href="/#contact" className="bg-primary text-background px-4 py-2 rounded-full hover:bg-secondary cursor-pointer transition-all">
                Contact
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary p-2 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                isHome ? (
                  <ScrollLink key={link.to} to={link.to} smooth={true} duration={800} offset={-50} onClick={closeMenu} className="text-xl py-2 border-b border-white/5 hover:text-primary transition-colors">
                    {link.name}
                  </ScrollLink>
                ) : (
                  <Link key={link.to} href={`/#${link.to}`} onClick={closeMenu} className="text-xl py-2 border-b border-white/5 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                )
              ))}

              <Link href="/books" onClick={closeMenu} className="text-xl py-2 border-b border-white/5 flex items-center justify-between group">
                Books
                <Book size={20} className="text-primary" />
              </Link>

              <Link href="/translation" onClick={closeMenu} className="text-xl py-2 border-b border-white/5 flex items-center justify-between group">
                Translation
                <MoveRight size={20} className="text-primary" />
              </Link>

              {isHome ? (
                <ScrollLink to="contact" smooth={true} duration={800} onClick={closeMenu} className="bg-primary text-background text-center py-3 rounded-xl font-bold mt-4">
                  Contact Me
                </ScrollLink>
              ) : (
                <Link href="/#contact" onClick={closeMenu} className="bg-primary text-background text-center py-3 rounded-xl font-bold mt-4 block">
                  Contact Me
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;