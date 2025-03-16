import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Section from './components/Section.jsx'
import EditSection from "./components/EditSection.jsx"
import { EditData, ExperienceData, PhotoTourData } from "./utils/PhotoData.js"
import PrintSection from "./components/PrintSection.jsx"
import Experience from "./components/Experience.jsx"
import Phototour from "./components/Phototour.jsx"
function App() {

  return (
    <>
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

export default App
