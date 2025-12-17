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
    <div className="relative w-full min-h-screen">
      
      {/* 1. The Game Background 
         Fixed position, sits behind everything (z-0 in the component)
      */}
      <StarshipGameBackground />

      {/* 2. The Page Content 
         We wrap everything in a relative div with z-10 to ensure it sits ON TOP of the canvas.
         IMPORTANT: You must ensure your components (Hero, AboutMe, etc.) have 
         transparent backgrounds (e.g., bg-transparent or bg-black/50) 
         if you want to see the game behind them.
      */}
      <div className="relative z-10 pointer-events-none">
        
        {/* Enable pointer events only for the actual interactive parts (Navbar, Buttons) 
            if you want the background to be clickable everywhere else. 
            However, usually, standard behavior is:
            - Content has pointer-events-auto
            - Background catches clicks where there is no content.
        */}
        <div className="pointer-events-auto">
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