"use client";

import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-background text-foreground min-h-screen flex flex-col justify-center items-center py-16 px-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Skill 1 */}
        <div className="border-4 border-red-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-red-500 text-lg font-bold mb-4">
            JavaScript / TypeScript
          </h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-red-500 h-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="border-4 border-blue-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-blue-500 text-lg font-bold mb-4">
            React / Next.js
          </h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-blue-500 h-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="border-4 border-green-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-green-500 text-lg font-bold mb-4">C# / .NET</h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-green-500 h-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="border-4 border-yellow-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-yellow-500 text-lg font-bold mb-4">Svelte</h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-yellow-500 h-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="border-4 border-purple-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-purple-500 text-lg font-bold mb-4">C++</h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-purple-500 h-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        {/* Skill 6 */}
        <div className="border-4 border-pink-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-pink-500 text-lg font-bold mb-4">Python</h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-pink-500 h-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        {/* Skill 7 */}
        <div className="border-4 border-indigo-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-indigo-500 text-lg font-bold mb-4">Rust</h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-indigo-500 h-full"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>

        {/* Skills Header */}
        <div className="bg-primary text-background flex justify-center items-center rounded-lg shadow-md p-6">
          <h2 className="text-4xl font-bold">Skills</h2>
        </div>

        {/* Skill 8 */}
        <div className="border-4 border-orange-500 rounded-lg p-6 bg-background hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-orange-500 text-lg font-bold mb-4">
            Data Structures / Algorithms
          </h3>
          <div className="relative w-full bg-secondary h-3 rounded-full overflow-hidden">
            <div
              className="absolute bg-orange-500 h-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
