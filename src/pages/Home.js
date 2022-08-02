//rfc create a component

import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactBanner from '../components/ContactBanner'

export default function Home() {
  return (
    <div style={{backgroundColor: '#262626'}}>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ProjectsSection />
        <ContactBanner />
    </div>
  )
}