'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(() => import('@/components/Hero'));
const AboutMe = dynamic(() => import('@/components/AboutMe'));
const ProjectsAndSkillsWithLines = dynamic(() => import('@/components/ProjectsAndSkillsWithLines'));
const CompetitionExperience = dynamic(() => import('@/components/CompetitionExperience'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <div className="-mt-96">
          <AboutMe />
        </div>
        <ProjectsAndSkillsWithLines />
        <CompetitionExperience />
        <ContactForm />
      </div>
    </div>
  );
} 