import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Layout} from './layout';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import {About} from './components/About';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ці компоненти відкриються всередині MainLayout на місці <Outlet /> */}
        <Route index element={<HeroSection />} />
        <Route path="about" element={<About/>} />
        <Route path="education" element={<EducationSection />} />
        <Route path="experience" element={<ExperienceSection />} />
        <Route path="skills" element={<SkillsSection />} />
        <Route path="portfolio" element={<PortfolioSection />} />
      </Route>
    </Routes>
  );
}