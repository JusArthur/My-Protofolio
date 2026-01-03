"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react"; // 引入菜单图标
import { motion, AnimatePresence } from "framer-motion"; // 引入动画

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制手机端菜单

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // 菜单打开时，不隐藏 Navbar
      if (!isMenuOpen) {
        setShowNavbar(currentScrollPos < lastScrollPos || currentScrollPos < 50);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, isMenuOpen]);

  // 菜单项配置，方便复用
  const navLinks = [
    { name: "About", to: "aboutMe", type: "scroll" },
    { name: "Experience", to: "experience", type: "scroll" },
    { name: "Projects", to: "projects", type: "scroll" },
    { name: "Skills", to: "skills", type: "scroll" },
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
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              onClick={closeMenu}
              className="text-primary text-2xl font-bold hover:text-secondary cursor-pointer"
            >
              JustinCase
            </ScrollLink>
          </div>

          {/* 桌面端链接 (md 以上显示) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-50}
                className="hover:text-primary cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}

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
              to="contact"
              smooth={true}
              duration={800}
              className="bg-primary text-background px-4 py-2 rounded-full hover:bg-secondary cursor-pointer transition-all"
            >
              Contact
            </ScrollLink>
          </div>

          {/* 手机端汉堡按钮 (md 以下显示) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 手机端弹出菜单 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-50}
                  onClick={closeMenu}
                  className="text-xl py-2 border-b border-white/5 hover:text-primary transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}

              <Link
                href="/translation"
                onClick={closeMenu}
                className="text-xl py-2 border-b border-white/5 flex items-center justify-between group"
              >
                Translation
                <MoveRight size={20} className="text-primary" />
              </Link>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className="bg-primary text-background text-center py-3 rounded-xl font-bold mt-4"
              >
                Contact Me
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;