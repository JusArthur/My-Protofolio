'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(
  () => import('@/components/Hero'),
  { 
    ssr: false,
    loading: () => <div className="h-screen bg-background" /> 
  }
);
const AboutMe = dynamic(() => import('@/components/AboutMe'));
const ProjectsAndSkillsWithLines = dynamic(
  () => import('@/components/ProjectsAndSkillsWithLines'),
  { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-background" />
  }
);
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