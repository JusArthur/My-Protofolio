'use client';

import dynamic from 'next/dynamic';

// Import the new Game Background
// We disable SSR because it relies on window/canvas
const StarshipGameBackground = dynamic(
  () => import('@/components/StarshipGameBackground'),
  { ssr: false }
);

const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(
  () => import('@/components/Hero'),
  { 
    ssr: false,
    loading: () => <div className="h-screen bg-transparent" /> 
  }
);
const AboutMe = dynamic(() => import('@/components/AboutMe'));
const ProjectsAndSkillsWithLines = dynamic(
  () => import('@/components/ProjectsAndSkillsWithLines'),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-transparent" />
  }
);
const CompetitionExperience = dynamic(() => import('@/components/CompetitionExperience'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));

export default function HomePage() {
  return (
    // The main wrapper is black to fill the "cropped" sides
    <div className="relative w-full min-h-screen bg-black">
      
      {/* 1. Background stays full width */}
      <StarshipGameBackground />

      {/* 2. The Page Content Container */}
      <div className="relative z-10 pointer-events-none">
        
        {/* CHAGNED HERE: 
            - max-w-5xl (or 6xl/screen-xl) sets the width
            - mx-auto centers the container
            - bg-transparent allows the game background to show through the center
        */}
        <div className="pointer-events-auto max-w-5xl mx-auto w-full px-4 md:px-8">
          <Navbar />
          
          <Hero />
          
          <div className="-mt-96">
            <AboutMe />
          </div>
          
          <ProjectsAndSkillsWithLines />
          
          <CompetitionExperience />
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}