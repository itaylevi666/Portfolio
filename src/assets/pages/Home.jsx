import React from 'react'
import ThemeToggle from '../../components/ThemeToggle';
import StarBG from '../../components/StarBG';
import NavBar from '../../components/NavBar';
import MainSection from '../../components/MainSection';
import AboutMe from '../../components/AboutMe';
import SkillsSection from '../../components/SkillsSection';
import ProjectsSection from '../../components/ProjectsSection';
import Footer from '../../components/Footer';

export const Home = () => {
  return (
      <div ClassName="min-h-screen  overflow-x-hidden  ">
          {/*theme toggle*/}
        <ThemeToggle/>
          {/* BACKGROUND EFFECTS */}
          <StarBG/>
          <NavBar/>
          
      <main>
        <MainSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer/>
     {/*FOOTER*/}


    </div>
  )
}
