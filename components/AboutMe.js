"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="bg-transparent text-white py-12 flex flex-col justify-center items-center relative font-mono overflow-hidden"
    >
      {/* 装饰性背景 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 标题 - 使用 whileInView */}
      <motion.h2
        className="text-purple-500 text-xl md:text-3xl font-bold mb-8 z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        &lt; About Me /&gt;
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12 z-10 max-w-5xl px-6 w-full">
        {/* 头像容器 */}
        <div className="relative">
          {/* Cyber Lantern - 在手机端稍微缩小并调整位置 */}
          <motion.div
            className="absolute -top-8 -right-4 md:-top-6 md:-right-2 z-20 pointer-events-none flex flex-col items-center scale-75 md:scale-100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
            <motion.div
              animate={{
                rotate: [-10, 10, -10],
                filter: [
                  "drop-shadow(0 0 8px rgba(34,197,94,0.4))",
                  "drop-shadow(0 0 20px rgba(34,197,94,0.8))",
                  "drop-shadow(0 0 8px rgba(34,197,94,0.4))",
                ],
              }}
              transition={{
                rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                filter: { repeat: Infinity, duration: 2, ease: "linear" },
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" // 使用 Tailwind 处理响应式尺寸
              >
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-30"
                />
                <path
                  d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
                  fill="url(#starGradient)"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="white"
                  className="animate-pulse"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* 头像 */}
          <motion.div
            className="w-36 h-36 md:w-48 md:h-48 rounded-2xl bg-zinc-900 overflow-hidden border border-white/10 relative z-10 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          >
            <img
              src="/justin_xia.png"
              alt="Profile Picture"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* 介绍文本 */}
        <motion.div
          className="max-w-md text-center md:text-left"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-sm md:text-base leading-relaxed text-zinc-400">
            Hello! I’m <span className="text-white font-bold">Qinglan Xia</span>
            , a developer with a deep background in{" "}
            <span className="text-purple-400">mathematics</span> and fullstack
            engineering. I focus on creating high-impact software using modern,
            scalable tech stacks.
          </p>

          <div className="mt-6 flex flex-col items-center md:items-start space-y-1">
            <div className="h-[1px] w-10 bg-purple-500/50" />
            <p className="text-xs italic text-purple-400/80 leading-tight">
              "To live is to change the world"
            </p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-600">
              — Steve Jobs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
