"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "The 3rd Huashu Cup International College Students' Mathematical Modeling Competition",
    role: "Team Leader",
    award: "First Prize & Best Team Award",
    date: "August 2024",
    description: [
      "Led a team to secure the First Prize among international competitors, surpassing peers from leading universities worldwide.",
      "Designed and implemented advanced mathematical models to address real-world problems using statistical analysis, optimization techniques, and computational simulations.",
      "Directed team collaboration, ensuring each member contributed to precise model accuracy and comprehensive problem-solving.",
      "Authored a structured and detailed report that showcased innovative approaches and solutions, which stood out for their originality and effectiveness.",
    ],
  },
  {
    title: "5th National College Algorithm Design and Programming Contest (China)",
    role: "Team Member",
    award: "Excellent Award",
    date: "April 2024",
    description: [
      "Collaborated with a team to secure the Excellent Award among 800+ participants.",
      "Solved complex computational problems under time constraints using advanced algorithms and coding techniques.",
      "Developed efficient solutions with a focus on scalability, accuracy, and performance.",
    ],
  },
  {
    title: "14th Lanqiao TMT Cup",
    role: "Individual Competitor",
    award: "Provincial Second Prize",
    date: "April 2024",
    description: [
      "Secured the Provincial Second Prize in a highly competitive algorithmic challenge.",
      "Demonstrated strong problem-solving abilities and algorithmic thinking in a solo capacity.",
      "Applied optimization techniques to solve intricate programming tasks efficiently.",
    ],
  },
  {
    title: "ACM International Collegiate Programming Contest (ICPC) 2024",
    role: "Team Leader",
    award: "🥇 Jiangsu Regional First Prize",
    date: "March 2024",

  },
];

const CompetitionExperience = () => {
  return (
    <section id="experience" className="bg-background text-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Competition Experiences</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="border-4 border-primary rounded-lg p-6 shadow-lg bg-secondary hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-primary text-2xl font-bold mb-2">
                {experience.title}{" "}
                {experience.award.includes("🥇") && <span className="ml-2">👑</span>}
              </h3>
              <p className="text-text text-lg font-semibold mb-1">
                <strong>Role:</strong> {experience.role} | <strong>Award:</strong> {experience.award} |{" "}
                <strong>Date:</strong> {experience.date}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionExperience;
