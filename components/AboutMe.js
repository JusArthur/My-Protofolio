"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("aboutMe");
      if (element) {
        const rect = element.getBoundingClientRect();
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
    <section
      id="aboutMe"
      className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center relative font-mono"
    >
      <motion.h2
        className="text-primary text-4xl md:text-6xl font-bold mb-8"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Profile Picture */}
        <motion.div
          className="w-48 h-48 rounded-full bg-secondary overflow-hidden"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.2,
            duration: 1,
          }}
        >
          <img
            src="/justin_xia.png"
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.4,
            duration: 1,
          }}
        >
          <p className="text-lg md:text-xl">
            Hello! I’m Qinglan Xia, a passionate developer with a strong
            background in mathematics and fullstack development. I specialize in
            crafting innovative solutions with cutting-edge technologies and
            have a deep enthusiasm for building impactful software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
