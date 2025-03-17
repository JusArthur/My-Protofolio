"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import LineTo from "react-lineto";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="font-mono bg-background text-foreground min-h-screen flex justify-center items-center py-16 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Box */}
        <div className="border-4 border-primary bg-secondary rounded-lg p-8 shadow-lg relative group">
          {/* Logo and Name on the Same Line */}
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="/boreas_logo_vector.png" // Replace with your actual logo path
              alt="Studio Boreas Logo"
              className="w-12 h-12 rounded-full" // Adjust size and styling as needed
            />
            <h2 className="text-primary text-4xl font-bold">Studio Boreas</h2>
          </div>
          <p className="text-text text-lg">
            Co-founded Studio Boreas, delivering innovative projects globally.
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="px-4 text-center">
              Studio Boreas is dedicated to creating innovative and impactful
              projects that empower users worldwide.
            </p>
          </div>
        </div>

        {/* Projects Container */}
        <div className="border-4 border-primary bg-secondary rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 gap-6">
            {/* Project 1 */}
            <div className="border-4 border-secondary bg-background rounded-lg p-6 shadow relative group">
              <h3 className="text-primary text-2xl font-bold mb-4">
                Clever Ledger
              </h3>
              <p className="text-text">
                A personal finance management app to track expenses and manage
                budgets effectively.
              </p>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="px-4 text-center">
                  Clever Ledger helps users track expenses, set budgets, and
                  visualize financial goals.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-4 border-secondary bg-background rounded-lg p-6 shadow relative group">
              <h3 className="text-primary text-2xl font-bold mb-4">
                Win Road Test
              </h3>
              <p className="text-text">
                A description of an exciting upcoming project from Studio
                Boreas.
              </p>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="px-4 text-center">
                  This future project will deliver innovative features to
                  improve user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Contribution */}
        <div className="border-4 border-primary bg-secondary rounded-lg p-8 shadow-lg relative group col-span-1 lg:col-span-2 mt-6">
          {/* Header with GitHub Icon */}
          <div className="flex items-center space-x-4 mb-4">
            <FaGithub className="text-4xl text-primary" />
            <h2 className="text-primary text-4xl font-bold">Open Source Contribution</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Spotube Project */}
            <div className="border-4 border-secondary bg-background rounded-lg p-6 shadow relative group">
              <h3 className="text-primary text-2xl font-bold mb-4">
                Spotube
              </h3>
              <p className="text-text">
                Contributed to this open-source Spotify client focused on privacy and resource efficiency.
              </p>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="px-4 text-center">
                  Helped implement features and fix bugs for this popular alternative Spotify client that works without premium.
                </p>
              </div>
            </div>

            {/* Road To Reconciliation Project */}
            <div className="border-4 border-secondary bg-background rounded-lg p-6 shadow relative group">
              <h3 className="text-primary text-2xl font-bold mb-4">
                Road To Reconciliation
              </h3>
              <p className="text-text">
                Open-source project focused on fostering understanding and reconciliation in communities.
              </p>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="px-4 text-center">
                  Developed key features that help community members engage in meaningful dialogue and work toward reconciliation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
