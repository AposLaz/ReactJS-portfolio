//rfc create a component

import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import AboutSection from '../components/About/AboutSection'
import ServiceSection from '../components/Services/ServiceSection'
import ProjectsSection from '../components/Projects/ProjectsSection'
import ContactSection from '../components/Contact/ContactSection'

//style={{backgroundColor: '#1a1a1a'}}
//background-image: linear-gradient(to bottom, rgb(0 0 0 / 0), #1f2937);
export default function Home() {
  return (
    <div style={{backgroundColor: '#1a1a1a'}} >
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ProjectsSection />
        <ContactSection />
    </div>
  )
}
