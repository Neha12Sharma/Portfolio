import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { CodingProfiles } from '../components/CodingProfiles';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Certificates } from '../components/Certificates';
import { Endorsements } from '../components/Endorsements';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <CodingProfiles />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Endorsements />
      <Contact />
    </main>
  );
};
