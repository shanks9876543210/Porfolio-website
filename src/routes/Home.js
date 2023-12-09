import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'
const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg/>
      <WorkCard />
      <Footer/>
    </div>
  )
}

export default Home
