"use client";

import React, { useState, useEffect } from "react";

// Custom Typewriter Hook
const useTypewriter = (sequence, speed = 50) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let timer;
    
    const handleTyping = () => {
      const i = loopNum % 2; // Simple toggle between two phrases for this specific sequence
      const fullText = i === 0 ? "Hello World," : "Hello World, I'm Qinglan Xia!";
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(speed / 2);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(speed);
      }

      if (!isDeleting && text === fullText) {
        // Finished typing phrase
        setTypingSpeed(i === 0 ? 1000 : 2000); // Wait time
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Finished deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(speed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, speed]);

  return text;
};

const Hero = () => {
  const text = useTypewriter([], 100); // Sequence handled internally in hook for simplicity in this fix

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-transparent text-foreground min-h-screen flex flex-col justify-center items-center -mt-16 relative"
    >
      <h1 className="font-mono text-primary text-5xl md:text-7xl font-bold text-center z-10 min-h-[1.2em]">
        <span>{text}</span>
        <span className="animate-pulse">|</span>
      </h1>
      <p className="font-mono text-secondary text-2xl md:text-4xl mt-4 text-center z-10">
        Mathematician | Mobile Developer | Fullstack Developer
      </p>
      <p className="font-mono text-text mt-6 text-center max-w-3xl z-10">
        Fire can be extinguished but not stripped of its heat; a person can be
        harmed but not robbed of their determination.
      </p>
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => handleScroll("projects")}
          className="font-mono bg-primary text-background z-10 px-6 py-3 rounded-full text-lg hover:bg-secondary cursor-pointer transition-colors"
        >
          View My Projects
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="font-mono border z-10 border-primary text-primary px-6 py-3 rounded-full text-lg hover:bg-secondary hover:text-background cursor-pointer transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;