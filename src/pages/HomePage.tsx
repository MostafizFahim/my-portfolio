import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ExperienceSection from '../components/Home/ExperienceSection';
import ProjectsSection from '../components/Home/ProjectsSection';
import ResearchSection from '../components/Home/ResearchSection';
import SkillsSection from '../components/Home/SkillsSection';
import EducationSection from '../components/Home/EducationSection';
import ContactSection from '../components/Home/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
