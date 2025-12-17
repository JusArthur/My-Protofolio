"use client";

import React, { useEffect, useRef } from "react";

const StarshipGameBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Game State
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Mouse position tracking
    const mouse = { x: width / 2, y: height - 100 };
    // Removed isMouseDown since shooting is automatic

    // Game Entities
    let bullets = [];
    let enemies = [];
    let particles = []; // For explosions
    let stars = [];
    let score = 0;
    let lastEnemySpawn = 0;
    let lastShot = 0;

    // Configuration
    const STAR_COUNT = 100;
    const ENEMY_SPAWN_RATE = 1000; // ms
    const FIRE_RATE = 150; // ms
    const PLAYER_SIZE = 20;

    // --- Classes / Helpers ---

    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // Start anywhere
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 3 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y += this.speed;
        if (this.y > height) this.reset();
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Bullet {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.radius = 3;
        this.color = "#00ff6a"; // Primary green color
      }

      update() {
        this.y -= this.speed;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Enemy {
      constructor() {
        this.radius = Math.random() * 10 + 10;
        this.x = Math.random() * (width - this.radius * 2) + this.radius;
        this.y = -this.radius;
        this.speed = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 330}, 80%, 60%)`; // Red/Pink hues
        this.hp = Math.floor(this.radius / 5);
      }

      update() {
        this.y += this.speed;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Draw a simple alien shape (triangle pointing down)
        ctx.moveTo(this.x, this.y + this.radius);
        ctx.lineTo(this.x - this.radius, this.y - this.radius);
        ctx.lineTo(this.x + this.radius, this.y - this.radius);
        ctx.closePath();
        ctx.fill();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
          x: (Math.random() - 0.5) * 5,
          y: (Math.random() - 0.5) * 5
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.03 + 0.01;
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // --- Initialization ---

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    };

    // --- Main Loop ---

    const animate = (timestamp) => {
      // Clear Screen with trailing effect
      ctx.fillStyle = "rgba(10, 10, 15, 0.3)"; // Slight trail for speed effect
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Stars (Background)
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      // 2. Player Logic
      // Draw Player Ship
      ctx.fillStyle = "#00ff6a";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#00ff6a";
      ctx.beginPath();
      // Simple Fighter Shape
      ctx.moveTo(mouse.x, mouse.y - PLAYER_SIZE);
      ctx.lineTo(mouse.x - PLAYER_SIZE, mouse.y + PLAYER_SIZE);
      ctx.lineTo(mouse.x, mouse.y + PLAYER_SIZE / 2);
      ctx.lineTo(mouse.x + PLAYER_SIZE, mouse.y + PLAYER_SIZE);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // Shooting Logic - AUTOMATIC
      // Checks time elapsed instead of click state
      if (timestamp - lastShot > FIRE_RATE) {
        bullets.push(new Bullet(mouse.x, mouse.y - PLAYER_SIZE));
        lastShot = timestamp;
      }

      // 3. Bullets Logic
      bullets.forEach((bullet, index) => {
        bullet.update();
        bullet.draw();

        // Remove off-screen bullets
        if (bullet.y < 0) {
          bullets.splice(index, 1);
        }
      });

      // 4. Enemy Logic
      if (timestamp - lastEnemySpawn > ENEMY_SPAWN_RATE) {
        enemies.push(new Enemy());
        lastEnemySpawn = timestamp;
      }

      enemies.forEach((enemy, eIndex) => {
        enemy.update();
        enemy.draw();

        // Check Collision with Player (Game Over / Reset logic could go here)
        const distToPlayer = Math.hypot(mouse.x - enemy.x, mouse.y - enemy.y);
        if (distToPlayer < enemy.radius + PLAYER_SIZE) {
            // Collision with player
            createExplosion(enemy.x, enemy.y, enemy.color);
            enemies.splice(eIndex, 1);
        }

        // Check Collision with Bullets
        bullets.forEach((bullet, bIndex) => {
          const dist = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);
          if (dist < enemy.radius + bullet.radius) {
            // Hit!
            createExplosion(enemy.x, enemy.y, enemy.color);
            
            // Remove bullet
            bullets.splice(bIndex, 1);
            
            // Destroy enemy
            enemies.splice(eIndex, 1);
            score += 10;
          }
        });

        // Remove off-screen enemies
        if (enemy.y > height) {
          enemies.splice(eIndex, 1);
        }
      });

      // 5. Particles Logic
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.alpha <= 0) particles.splice(index, 1);
      });

      // Draw Score
      ctx.fillStyle = "white";
      ctx.font = "16px monospace";
      ctx.fillText(`Score: ${score}`, 20, 30);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const createExplosion = (x, y, color) => {
      for (let i = 0; i < 8; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    // --- Event Listeners ---

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    // Removed mousedown/mouseup listeners as they are no longer needed

    // Start
    init();
    animate(0);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starship-game-bg"
      // Added pointer-events-none so clicks pass through to underlying content
      className="fixed top-0 left-0 w-full h-full pointer-events-none" 
      style={{ zIndex: 0 }}
    />
  );
};

export default StarshipGameBackground;