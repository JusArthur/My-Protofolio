"use client";

import React, { useEffect } from "react";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById("cometCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const comet = {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 3,
      dx: Math.random() * 2 + 2,
      dy: Math.random() * 2 - 1,
      tail: [],
    };

    function drawComet() {
      ctx.clearRect(0, 0, width, height);

      // Draw the comet tail
      for (let i = comet.tail.length - 1; i >= 0; i--) {
        const opacity = i / comet.tail.length;
        ctx.beginPath();
        ctx.arc(comet.tail[i].x, comet.tail[i].y, comet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(0, 255, 106, ${opacity})`;
        ctx.fill();
      }

      // Draw the comet head
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, comet.radius * 2, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(0, 255, 106, 1)";
      ctx.fill();
    }

    function updateComet() {
      comet.tail.push({ x: comet.x, y: comet.y });

      if (comet.tail.length > 20) {
        comet.tail.shift();
      }

      comet.x += comet.dx;
      comet.y += comet.dy;

      if (comet.x > width || comet.y > height || comet.y < 0) {
        comet.x = Math.random() * width;
        comet.y = Math.random() * height / 2;
        comet.dx = Math.random() * 2 + 2;
        comet.dy = Math.random() * 2 - 1;
        comet.tail = [];
      }
    }

    function animate() {
      updateComet();
      drawComet();
      requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas on window resize
    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <section id="hero" className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center -mt-16">
      {/* Canvas for the comet animation */}
      <canvas
        id="cometCanvas"
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

      <h1 className="font-mono text-primary text-5xl md:text-7xl font-bold text-center">
        <Typical
          steps={["Hello World,", 1000, "Hello World, I'm Qinglan Xia!", 2000]}
          loop={1}
          wrapper="span"
        />
      </h1>
      <p className="font-mono text-secondary text-2xl md:text-4xl mt-4 text-center">
        Mathematician | Mobile Developer | Fullstack Developer
      </p>
      <p className="font-mono text-text mt-6 text-center max-w-3xl">
        Fire can be extinguished but not stripped of its heat; a person can be
        harmed but not robbed of their determination.
      </p>
      <div className="mt-8 flex space-x-4">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={800}
          className="font-mono bg-primary text-background z-10 px-6 py-3 rounded-full text-lg hover:bg-secondary cursor-pointer"
        >
          View My Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={800}
          className="font-mono border z-10 border-primary text-primary px-6 py-3 rounded-full text-lg hover:bg-secondary hover:text-background cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
