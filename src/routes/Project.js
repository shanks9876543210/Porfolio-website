import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'

const Project = (props) => {
  return (
    <div>
     <NavBar />
     <HeroImg2 heading="PROJECTS." text="Some of my recent project." />
     <WorkCard />
     {/* <Pricing /> */}
     <Footer />
    </div>
  )
}

export default Project
