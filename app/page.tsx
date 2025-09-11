import React from 'react'

import Experience from '@/components/Experience'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PersonalInfo from '@/components/PersonalInfo'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full md:max-w-3xl'>
      {/* Header */}
      <Header />
      {/* HERO SECTION */}
      <HeroSection />
      {/* Personal Info */}
      <PersonalInfo />
      {/* Skills */}
      <Skills />
      {/* Experience */}
      <Experience />
      {/* Projects */}
      <Projects />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage