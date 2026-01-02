'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("aboutMe");
      if (element) {
        const rect = element.getBoundingClientRect();
        // 当元素进入视口一半时触发动画
        if (rect.top <= window.innerHeight / 1.5) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="aboutMe" className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center relative font-mono">
      <motion.h2
        // 缩小了标题字号：从 text-4xl/6xl 改为 text-2xl/4xl
        className="text-primary text-2xl md:text-4xl font-bold mb-6"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* 头像容器 */}
        <div className="relative">
          
          {/* 1. 动态小挂饰 */}
          <motion.div
            className="absolute -top-3 -right-1 z-20 w-10 h-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0], 
              rotate: [0, 5, -5, 0] 
            } : {}}
            transition={{ 
              opacity: { delay: 1, duration: 0.5 },
              scale: { delay: 1, type: "spring" },
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          >
            <svg viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
               <path d="M50 5 L62 38 L95 38 L68 58 L78 90 L50 72 L22 90 L32 58 L5 38 L38 38 Z" fill="#22c55e" />
               <circle cx="50" cy="5" r="4" fill="white" opacity="0.8" />
            </svg>
          </motion.div>

          {/* 2. 头像部分 - 略微缩小了边框感 */}
          <motion.div
            className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-secondary overflow-hidden border-2 border-primary/20 relative z-10 shadow-xl"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, delay: 0.2, duration: 1 }}
          >
            <img
              src="/justin_xia.png"
              alt="Profile Picture"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200";
              }}
            />
          </motion.div>
        </div>

        {/* Introduction Text */}
        <motion.div
          className="max-w-md text-center md:text-left"
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 50, delay: 0.4, duration: 1 }}
        >
          {/* 缩小了正文字号：从 text-lg/xl 改为 text-sm/base */}
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Hello! I’m Qinglan Xia, a passionate developer with a strong background in mathematics and fullstack development. I specialize in crafting innovative solutions with cutting-edge technologies and have a deep enthusiasm for building impactful software.
          </p>
          <p className="text-xs md:text-sm mt-4 italic text-primary/70">
            "To live is to change the world" -- Steve Jobs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;