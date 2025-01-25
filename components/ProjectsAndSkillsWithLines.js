// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import LineTo from "react-lineto";
// import { motion } from "framer-motion";

// export default function ProjectsAndSkillsWithLines() {
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.getElementById("projects-skills");
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= window.innerHeight / 1.5) {
//           setIsInView(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <main className="relative bg-background text-foreground min-h-screen">
//      {/** ----------------- PROJECTS SECTION ----------------- */}
//      <section
//         id="projects"
//         className="font-mono flex justify-center items-start py-8 px-4"
//       >
//         <motion.div
//           className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
//           variants={fadeInVariant}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Company Box */}
//           <motion.div
//             className="border-4 border-primary bg-secondary rounded-lg p-6 shadow-lg relative group"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="flex items-center space-x-4 mb-4">
//               <img
//                 src="/boreas_logo_vector.png"
//                 alt="Studio Boreas Logo"
//                 className="w-10 h-10 rounded-full"
//               />
//               <h2 className="text-primary text-3xl font-bold">Studio Boreas</h2>
//             </div>
//             <p className="text-text text-base">
//               Co-founded Studio Boreas, delivering innovative projects globally.
//             </p>
//             <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <p className="px-4 text-center">
//                 Studio Boreas is dedicated to creating innovative and impactful
//                 projects that empower users worldwide.
//               </p>
//             </div>
//           </motion.div>

//           {/* Projects Container */}
//           <motion.div
//             className="border-4 border-primary bg-secondary rounded-lg p-6 shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="grid grid-cols-1 gap-4">
//               {/* Project 1 */}
//               <motion.div
//                 className="border-4 border-secondary bg-background rounded-lg p-4 shadow relative group project-clever-ledger"
//                 onMouseEnter={() => setHoveredProject("clever-ledger")}
//                 onMouseLeave={() => setHoveredProject(null)}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3 className="text-primary text-xl font-bold mb-2">
//                   Clever Ledger
//                 </h3>
//                 <p className="text-text text-sm">
//                   A personal finance management app to track expenses and manage
//                   budgets effectively.
//                 </p>
//                 <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="px-4 text-center">
//                     Clever Ledger helps users track expenses, set budgets, and
//                     visualize financial goals. 30K+ downloads on the Android
//                     store.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Project 2 */}
//               <motion.div
//                 className="border-4 border-secondary bg-background rounded-lg p-4 shadow relative group project-win-road-test"
//                 onMouseEnter={() => setHoveredProject("win-road-test")}
//                 onMouseLeave={() => setHoveredProject(null)}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3 className="text-primary text-xl font-bold mb-2">
//                   Win Road Test
//                 </h3>
//                 <p className="text-text text-sm">
//                   A forum that provided users with resources to pass their road
//                   tests.
//                 </p>
//                 <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="px-4 text-center">
//                     Collaborated with a team to design and develop Win Road
//                     Test. Full 5-stars ratings. Available on iOS, Android and
//                     Web.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/** ------------------ SKILLS SECTION ------------------ */}
//       <section
//         id="skills"
//         className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center py-16 px-6"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
//           {/* Skill 1 */}
//           <div className="border-4 border-red-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-jsts">
//             <h3 className="text-red-500 text-lg font-bold mb-4">
//               JavaScript / TypeScript
//             </h3>
//             <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//               <div
//                 className="absolute bg-red-500 h-full"
//                 style={{ width: "80%" }}
//               ></div>
//             </div>
//           </div>

//           {/* Skill 2 */}
//           <div className="border-4 border-blue-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-react">
//             <h3 className="text-blue-500 text-lg font-bold mb-4">
//               React / Next.js / React Native
//             </h3>
//             <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//               <div
//                 className="absolute bg-blue-500 h-full"
//                 style={{ width: "75%" }}
//               ></div>
//             </div>
//           </div>

//           {/* Skill 3 */}
//           <div className="border-4 border-green-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-csharp">
//             <h3 className="text-green-500 text-lg font-bold mb-4">C# / .NET</h3>
//             <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//               <div
//                 className="absolute bg-green-500 h-full"
//                 style={{ width: "70%" }}
//               ></div>
//             </div>
//           </div>

//           {/* Skill 4 */}
//           <div className="border-4 border-yellow-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-svelte">
//             <h3 className="text-yellow-500 text-lg font-bold mb-4">Linux</h3>
//             <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//               <div
//                 className="absolute bg-yellow-500 h-full"
//                 style={{ width: "60%" }}
//               ></div>
//             </div>
//           </div>

//     {/* Skill 5 */}
//     <div className="border-4 border-purple-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-cpp">
//       <h3 className="text-purple-500 text-lg font-bold mb-4">C++</h3>
//       <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//         <div
//           className="absolute bg-purple-500 h-full"
//           style={{ width: "70%" }}
//         ></div>
//       </div>
//     </div>

//     {/* Skill 6 */}
//     <div className="border-4 border-pink-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-python">
//       <h3 className="text-pink-500 text-lg font-bold mb-4">Python</h3>
//       <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//         <div
//           className="absolute bg-pink-500 h-full"
//           style={{ width: "85%" }}
//         ></div>
//       </div>
//     </div>

//     {/* Skill 7 */}
//     <div className="border-4 border-indigo-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-sql">
//       <h3 className="text-indigo-500 text-lg font-bold mb-4">
//         Supabase / PostgreSQL
//       </h3>
//       <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//         <div
//           className="absolute bg-indigo-500 h-full"
//           style={{ width: "50%" }}
//         ></div>
//       </div>
//     </div>

// {/* Skills Header */}
// <div className="bg-primary text-background flex justify-center items-center rounded-lg shadow-md p-6">
//   <h2 className="text-4xl font-bold">Skills</h2>
// </div>

//     {/* Skill 8 */}
//     <div className="border-4 border-orange-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-dsa">
//       <h3 className="text-orange-500 text-lg font-bold mb-4">
//         Data Structures / Algorithms
//       </h3>
//       <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
//         <div
//           className="absolute bg-orange-500 h-full"
//           style={{ width: "90%" }}
//         ></div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/** --------------- LINES ON HOVER --------------- */}
//       {hoveredProject === "clever-ledger" && (
//         <>
//           <LineTo
//             from="project-clever-ledger"
//             to="skill-jsts"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//           <LineTo
//             from="project-clever-ledger"
//             to="skill-react"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//           <LineTo
//             from="project-clever-ledger"
//             to="skill-dsa"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//         </>
//       )}

//       {hoveredProject === "win-road-test" && (
//         <>
//           <LineTo
//             from="project-win-road-test"
//             to="skill-react"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//           <LineTo
//             from="project-win-road-test"
//             to="skill-csharp"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//           <LineTo
//             from="project-win-road-test"
//             to="skill-dsa"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//           <LineTo
//             from="project-win-road-test"
//             to="skill-sql"
//             borderColor="orange"
//             borderWidth={3}
//             borderStyle="dashed"
//           />
//         </>
//       )}
//     </main>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import LineTo from "react-lineto";
import { motion } from "framer-motion";

export default function ProjectsAndSkillsWithLines() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects-skills");
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

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      id="projects-skills"
      className="relative bg-background text-foreground min-h-screen"
    >
      {/** ----------------- PROJECTS SECTION ----------------- */}
      <section
        id="projects"
        className="font-mono flex justify-center items-start py-8 px-4"
      >
        <motion.div
          className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={fadeInVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          {/* Company Box */}
          <motion.div
            className="border-4 border-primary bg-secondary rounded-lg p-6 shadow-lg relative group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/boreas_logo_vector.png"
                alt="Studio Boreas Logo"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-primary text-3xl font-bold">Studio Boreas</h2>
            </div>
            <p className="text-text text-base">
              Co-founded Studio Boreas, delivering innovative projects globally.
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="px-4 text-center">
                Studio Boreas is dedicated to creating innovative and impactful
                projects that empower users worldwide.
              </p>
            </div>
          </motion.div>

          {/* Projects Container */}
          <motion.div
            className="border-4 border-primary bg-secondary rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="grid grid-cols-1 gap-4">
              {/* Project 1 */}
              <motion.div
                className="border-4 border-secondary bg-background rounded-lg p-4 shadow relative group project-clever-ledger"
                onMouseEnter={() => setHoveredProject("clever-ledger")}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-primary text-xl font-bold mb-2">
                  Clever Ledger
                </h3>
                <p className="text-text text-sm">
                  A personal finance management app to track expenses and manage
                  budgets effectively.
                </p>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-4 text-center">
                    Clever Ledger helps users track expenses, set budgets, and
                    visualize financial goals. 30K+ downloads on the Android
                    store.
                  </p>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                className="border-4 border-secondary bg-background rounded-lg p-4 shadow relative group project-win-road-test"
                onMouseEnter={() => setHoveredProject("win-road-test")}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-primary text-xl font-bold mb-2">
                  Win Road Test
                </h3>
                <p className="text-text text-sm">
                  A forum that provided users with resources to pass their road
                  tests.
                </p>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="px-4 text-center">
                    Collaborated with a team to design and develop Win Road
                    Test. Full 5-stars ratings. Available on iOS, Android and
                    Web.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/** ------------------ SKILLS SECTION ------------------ */}
      <section
        id="skills"
        className="bg-background -mt-12 text-foreground min-h-screen flex flex-col justify-center items-center py-16 px-6"
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Skills Header
          <motion.div
            className="bg-primary text-background flex justify-center items-center rounded-lg shadow-md p-6 col-span-full"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-4xl font-bold">Skills</h2>
          </motion.div> */}

          {/* Skill 1 */}
          <motion.div
            className="border-4 border-red-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-jsts"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-red-500 text-lg font-bold mb-4">
              JavaScript / TypeScript
            </h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-red-500 h-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            className="border-4 border-blue-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-react"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-blue-500 text-lg font-bold mb-4">
              React / Next.js / React Native
            </h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-blue-500 h-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            className="border-4 border-green-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-csharp"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-green-500 text-lg font-bold mb-4">C# / .NET</h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-green-500 h-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </motion.div>

          {/* Skill 4 */}
          <motion.div
            className="border-4 border-yellow-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-linux"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-yellow-500 text-lg font-bold mb-4">Linux</h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-yellow-500 h-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </motion.div>

          {/* Skill 5 */}
          <motion.div
            className="border-4 border-purple-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-cpp"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-purple-500 text-lg font-bold mb-4">C++</h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-purple-500 h-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </motion.div>

          {/* Skill 6 */}
          <motion.div
            className="border-4 border-pink-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-python"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-pink-500 text-lg font-bold mb-4">Python</h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-pink-500 h-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </motion.div>

          {/* Skill 7 */}
          <motion.div
            className="border-4 border-indigo-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-sql"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-indigo-500 text-lg font-bold mb-4">
              Supabase / PostgreSQL
            </h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-indigo-500 h-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </motion.div>
          {/* Skills Header */}
          <div className="bg-primary text-background flex justify-center items-center rounded-lg shadow-md p-6">
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          {/* Skill 8 */}
          <motion.div
            className="border-4 border-orange-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300 skill-dsa"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-orange-500 text-lg font-bold mb-4">
              Data Structures / Algorithms
            </h3>
            <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div
                className="absolute bg-orange-500 h-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/** --------------- LINES ON HOVER --------------- */}
      {hoveredProject === "clever-ledger" && (
        <>
          <LineTo
            from="project-clever-ledger"
            to="skill-jsts"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
          <LineTo
            from="project-clever-ledger"
            to="skill-react"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
          <LineTo
            from="project-clever-ledger"
            to="skill-dsa"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
        </>
      )}

      {hoveredProject === "win-road-test" && (
        <>
          <LineTo
            from="project-win-road-test"
            to="skill-react"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
          <LineTo
            from="project-win-road-test"
            to="skill-csharp"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
          <LineTo
            from="project-win-road-test"
            to="skill-dsa"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
          <LineTo
            from="project-win-road-test"
            to="skill-sql"
            borderColor="orange"
            borderWidth={3}
            borderStyle="dashed"
          />
        </>
      )}
    </main>
  );
}
