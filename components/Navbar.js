'use client'

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-background text-text mb-0 relative z-10">
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
              offset={-50} // Adjust offset for navbar height
              className="hover:text-primary cursor-pointer"
            >
              About
            </ScrollLink>
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
