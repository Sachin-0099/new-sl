import React from 'react'
import HeaderNav from '../components/Navigation/headerNav'
import Header from '../components/Header'
import About from '../components/About'
import Section from '../components/Section'
import EditSection from '../components/EditSection'
import { EditData,ExperienceData,PhotoTourData } from '../utils/PhotoData'
import PrintSection from '../components/PrintSection'
import Experience from '../components/Experience'
import Phototour from '../components/Phototour'
const Home = () => {
  return (
    <>
    <HeaderNav/>
    <Header/>
    <About/>
    <Section/>
    <EditSection EditData={EditData}/>
    <PrintSection EditData={EditData}/>
    <Experience ExperienceData={ExperienceData}/>
    <Phototour Phototour={PhotoTourData}/>
    </>
  )
}

export default Home