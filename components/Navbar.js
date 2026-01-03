"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link"; 
// 修正：使用 MoveRight (移动) 或 SquareArrowOutUpRight (跳转)
import { MoveRight } from "lucide-react"; 

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(currentScrollPos < lastScrollPos || currentScrollPos < 50);
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`bg-background text-text fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="font-mono max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className="text-primary text-2xl font-bold hover:text-secondary cursor-pointer"
            >
              JustinCase
            </ScrollLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ScrollLink
              to="aboutMe"
              smooth={true}
              duration={800}
              offset={-50}
              className="hover:text-primary cursor-pointer"
            >
              About
            </ScrollLink>
                        {/* --- 修复后的 Translation 链接 --- */}
                        <Link 
              href="/translation" 
              className="group flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
            >
              Translation
              <MoveRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={800}
              className="hover:text-primary cursor-pointer"
            >
              Experience
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              className="hover:text-primary cursor-pointer"
            >
              Projects
            </ScrollLink>


            {/* --------------------------- */}

            <ScrollLink
              to="skills"
              smooth={true}
              duration={800}
              className="hover:text-primary cursor-pointer"
            >
              Skills
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="bg-primary text-background px-4 py-2 rounded-full hover:bg-secondary cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;