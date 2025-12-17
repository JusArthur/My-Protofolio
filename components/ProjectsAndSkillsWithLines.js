"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Custom Icons ---

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TencentIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.46 7.64C8.75 6.96 9.49 6.41 10.36 6.16L10.5 6.13C10.97 6 11.47 5.94 11.99 5.94C12.51 5.94 13.01 6 13.48 6.13L13.62 6.16C14.49 6.41 15.23 6.96 15.52 7.64C15.84 8.38 15.93 9.3 15.79 10.15C16.89 10.82 17.65 11.96 17.82 13.27C18 14.65 17.47 15.94 16.44 16.82C16.35 17.45 16.03 18.01 15.55 18.42C15.25 18.68 14.9 18.88 14.53 19.01C14.15 19.86 13.16 20.45 12.01 20.45C10.84 20.45 9.85 19.85 9.47 18.99C9.09 18.86 8.74 18.66 8.44 18.39C7.96 17.98 7.64 17.42 7.55 16.8C6.52 15.92 6 14.63 6.18 13.26C6.35 11.95 7.11 10.82 8.21 10.15C8.06 9.3 8.15 8.38 8.46 7.64Z" />
  </svg>
);

// --- Custom Smart Rectangular Line Component ---

const RectangularLine = ({ from, to, borderColor, borderWidth, borderStyle }) => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const updatePosition = () => {
      const el1 = document.querySelector(`.${from}`);
      const el2 = document.querySelector(`.${to}`);
      const parent = document.getElementById("projects-skills");

      if (el1 && el2 && parent) {
        const rect1 = el1.getBoundingClientRect();
        const rect2 = el2.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        const isSourceAbove = rect1.top < rect2.top;

        // X: Always Center
        const x1 = rect1.left + rect1.width / 2 - parentRect.left;
        const x2 = rect2.left + rect2.width / 2 - parentRect.left;

        // Y: Connect opposing edges based on relative position
        // If source is above: Source Bottom -> Target Top
        // If source is below: Source Top -> Target Bottom
        const y1 = isSourceAbove 
            ? (rect1.bottom - parentRect.top) 
            : (rect1.top - parentRect.top);
        
        const y2 = isSourceAbove 
            ? (rect2.top - parentRect.top) 
            : (rect2.bottom - parentRect.top);

        setCoords({ x1, y1, x2, y2 });
      }
    };

    const timeoutId = setTimeout(updatePosition, 100);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [from, to]);

  if (!coords) return null;

  // Manhattan Routing
  const midY = (coords.y1 + coords.y2) / 2;
  const path = `M ${coords.x1} ${coords.y1} L ${coords.x1} ${midY} L ${coords.x2} ${midY} L ${coords.x2} ${coords.y2}`;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50, // Lines ON TOP
        overflow: "visible",
      }}
    >
      {/* Drop shadow for visibility */}
      <path
        d={path}
        stroke="rgba(0,0,0,0.5)"
        strokeWidth={borderWidth + 2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Actual Line */}
      <path
        d={path}
        stroke={borderColor}
        strokeWidth={borderWidth}
        strokeDasharray={borderStyle === "dashed" ? "10, 5" : "0"}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// --- Main Component ---

export default function ProjectsAndSkillsWithLines() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects-skills");
      if (element) {
        const rect = element.getBoundingClientRect();
        // Trigger slightly earlier
        if (rect.top <= window.innerHeight / 1.2) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      id="projects-skills"
      className="relative bg-background text-foreground min-h-screen py-12"
    >
      
      {/* =======================
          TOP SECTION: EXPERIENCE
          ======================= */}
      <section className="font-mono flex flex-col items-center justify-center px-4 mb-16">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
        >
            <h2 className="text-4xl font-bold border-b-4 border-primary pb-2">Experience</h2>
        </motion.div>

        <motion.div
          className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={fadeInVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          {/* Studio Boreas */}
          <motion.div
            className="border-4 border-primary bg-secondary rounded-lg p-6 shadow-lg relative group z-10"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/boreas_logo_vector.png"
                alt="Studio Boreas Logo"
                className="w-12 h-12 rounded-full bg-white object-cover"
                onError={(e) => { e.target.style.display = "none"; }} 
              />
              <h2 className="text-primary text-2xl font-bold">Studio Boreas</h2>
            </div>
            <p className="text-text text-base">
              Co-founded Studio Boreas, delivering innovative projects globally.
            </p>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="px-4 text-center">
                Studio Boreas is dedicated to creating innovative and impactful projects.
              </p>
            </div>
          </motion.div>

          {/* Tencent */}
          <motion.div
            className="border-4 border-primary bg-secondary rounded-lg p-6 shadow-lg relative group project-tencent z-10"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredProject("tencent")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <TencentIcon className="text-3xl text-primary w-10 h-10" />
                <h2 className="text-primary text-2xl font-bold">Tencent</h2>
              </div>
              <span className="text-xs bg-primary text-background px-2 py-1 rounded font-bold">INTERN</span>
            </div>
            <p className="text-sm font-bold text-text mb-2">Full Stack Developer | Chongqing</p>
            <p className="text-text text-sm">
              Worked on <span className="font-bold">Delta Force</span> at Linlang Tianshang Studio.
            </p>
            
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 text-white flex flex-col justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="px-4 text-center text-xl font-bold italic mb-2">"Just win everything."</p>
              <p className="px-4 text-center text-xs text-gray-300">High-performance game systems & web infrastructure.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* =======================
          MIDDLE SECTION: SKILLS
          ======================= */}
      <section id="skills" className="flex justify-center items-center px-6 mb-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Skills Header (Hidden visually but useful for structure if needed, currently separate) */}
          
          {/* Skill 1: JS/TS */}
          <motion.div
            className="border-4 border-red-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-jsts"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-red-500 text-lg font-bold mb-2">JavaScript / TypeScript</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full" style={{ width: "90%" }}></div>
            </div>
          </motion.div>

          {/* Skill 2: React */}
          <motion.div
            className="border-4 border-blue-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-react"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-blue-500 text-lg font-bold mb-2">React / Next.js</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: "85%" }}></div>
            </div>
          </motion.div>

          {/* Skill 3: C# */}
          <motion.div
            className="border-4 border-green-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-csharp"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-green-500 text-lg font-bold mb-2">C# / .NET</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full" style={{ width: "70%" }}></div>
            </div>
          </motion.div>

          {/* CENTER HUB: Skills Label */}
          <div className="hidden lg:flex justify-center items-center bg-primary text-background rounded-lg shadow-md p-4">
             <h2 className="text-2xl font-bold">TECH STACK</h2>
          </div>
          {/* For mobile, we just hide this or place it differently, currently grid-flow auto handles it */}
          
          {/* Skill 4: Linux */}
          <motion.div
            className="border-4 border-yellow-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-linux"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-yellow-500 text-lg font-bold mb-2">Linux</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full" style={{ width: "60%" }}></div>
            </div>
          </motion.div>

          {/* Skill 5: C++ */}
          <motion.div
            className="border-4 border-purple-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-cpp"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-purple-500 text-lg font-bold mb-2">C++</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full" style={{ width: "75%" }}></div>
            </div>
          </motion.div>

          {/* Skill 6: Python */}
          <motion.div
            className="border-4 border-pink-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-python"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-pink-500 text-lg font-bold mb-2">Python</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-pink-500 h-full" style={{ width: "80%" }}></div>
            </div>
          </motion.div>

          {/* Skill 7: SQL */}
          <motion.div
            className="border-4 border-indigo-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-sql"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-indigo-500 text-lg font-bold mb-2">PostgreSQL</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full" style={{ width: "65%" }}></div>
            </div>
          </motion.div>

           {/* Skill 8: DSA */}
           <motion.div
            className="border-4 border-orange-500 rounded-lg p-4 bg-background hover:shadow-xl transition-all duration-300 skill-dsa lg:col-start-2"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-orange-500 text-lg font-bold mb-2">Algorithms</h3>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-orange-500 h-full" style={{ width: "90%" }}></div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* =======================
          BOTTOM SECTION: PROJECTS
          ======================= */}
      <section className="font-mono flex flex-col items-center justify-center px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
        >
            <h2 className="text-4xl font-bold border-b-4 border-primary pb-2">Projects & Open Source</h2>
        </motion.div>

        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={fadeInVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
            {/* Project: Clever Ledger */}
            <motion.div
                className="border-4 border-secondary bg-background rounded-lg p-6 shadow-lg relative group project-clever-ledger z-10"
                onMouseEnter={() => setHoveredProject("clever-ledger")}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.05 }}
            >
                <h3 className="text-primary text-xl font-bold mb-2">Clever Ledger</h3>
                <p className="text-text text-sm mb-4">
                    Personal finance management app. 30K+ downloads on Android.
                </p>
                 <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="px-4 text-center">Tracks expenses, budgets, and visualizes goals.</p>
                </div>
            </motion.div>

            {/* Project: Win Road Test */}
            <motion.div
                className="border-4 border-secondary bg-background rounded-lg p-6 shadow-lg relative group project-win-road-test z-10"
                onMouseEnter={() => setHoveredProject("win-road-test")}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.05 }}
            >
                <h3 className="text-primary text-xl font-bold mb-2">Win Road Test</h3>
                <p className="text-text text-sm mb-4">
                    5-star rated driving test resource forum.
                </p>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="px-4 text-center">Resources to help users pass road tests with confidence.</p>
                </div>
            </motion.div>

            {/* Open Source: Spotube */}
            <motion.div
                className="border-4 border-secondary bg-background rounded-lg p-6 shadow-lg relative group project-spotube z-10"
                onMouseEnter={() => setHoveredProject("spotube")}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.05 }}
            >
                <div className="flex items-center space-x-2 mb-2">
                    <GithubIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-primary text-xl font-bold">Spotube</h3>
                </div>
                <p className="text-text text-sm mb-4">
                    Privacy-focused, open-source Spotify client.
                </p>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="px-4 text-center">Implemented features & fixes for this popular client.</p>
                </div>
            </motion.div>

            {/* Open Source: Reconciliation */}
            <motion.div
                className="border-4 border-secondary bg-background rounded-lg p-6 shadow-lg relative group project-reconciliation z-10"
                onMouseEnter={() => setHoveredProject("reconciliation")}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.05 }}
            >
                <div className="flex items-center space-x-2 mb-2">
                    <GithubIcon className="w-6 h-6 text-primary" />
                    <h3 className="text-primary text-xl font-bold">Road to Reconciliation</h3>
                </div>
                <p className="text-text text-sm mb-4">
                    Platform fostering community understanding.
                </p>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900/90 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="px-4 text-center">Developing tools for meaningful community dialogue.</p>
                </div>
            </motion.div>
        </motion.div>
      </section>

      {/** * ----------------------------------------
       * LINES LOGIC
       * ----------------------------------------
       * Lines are z-50 to show ON TOP of everything.
       * They use pointer-events-none so they don't block clicks.
       */}

      {/* Clever Ledger Lines (Bottom -> Up) */}
      {hoveredProject === "clever-ledger" && (
        <>
          <RectangularLine from="project-clever-ledger" to="skill-jsts" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-clever-ledger" to="skill-react" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-clever-ledger" to="skill-dsa" borderColor="orange" borderWidth={3} borderStyle="dashed" />
        </>
      )}

      {/* Win Road Test Lines (Bottom -> Up) */}
      {hoveredProject === "win-road-test" && (
        <>
          <RectangularLine from="project-win-road-test" to="skill-react" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-win-road-test" to="skill-csharp" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-win-road-test" to="skill-dsa" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-win-road-test" to="skill-sql" borderColor="orange" borderWidth={3} borderStyle="dashed" />
        </>
      )}

      {/* Tencent Lines (Top -> Down) */}
      {hoveredProject === "tencent" && (
        <>
          <RectangularLine from="project-tencent" to="skill-cpp" borderColor="#00a1d6" borderWidth={4} borderStyle="solid" />
          <RectangularLine from="project-tencent" to="skill-linux" borderColor="#00a1d6" borderWidth={4} borderStyle="solid" />
          <RectangularLine from="project-tencent" to="skill-dsa" borderColor="#00a1d6" borderWidth={4} borderStyle="solid" />
          <RectangularLine from="project-tencent" to="skill-csharp" borderColor="#00a1d6" borderWidth={4} borderStyle="dashed" />
        </>
      )}

      {/* Spotube Lines (Bottom -> Up) */}
      {hoveredProject === "spotube" && (
        <>
          <RectangularLine from="project-spotube" to="skill-jsts" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-spotube" to="skill-react" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-spotube" to="skill-python" borderColor="orange" borderWidth={3} borderStyle="dashed" />
        </>
      )}

      {/* Reconciliation Lines (Bottom -> Up) */}
      {hoveredProject === "reconciliation" && (
        <>
          <RectangularLine from="project-reconciliation" to="skill-react" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-reconciliation" to="skill-jsts" borderColor="orange" borderWidth={3} borderStyle="dashed" />
          <RectangularLine from="project-reconciliation" to="skill-sql" borderColor="orange" borderWidth={3} borderStyle="dashed" />
        </>
      )}
    </main>
  );
}