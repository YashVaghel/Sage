import React,{useState} from 'react'
import Sidebar from '../Siderbar'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { homeObjOne,  homeObjTwo ,homeObjFour} from '../InfoSection/Data'
import Services from '../Services'


import MyChart from '../chart'
import Footer from '../Footer'




const Home = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
   setIsOpen(!isOpen)
    }
    return (
      <>

      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>

      <InfoSection {...homeObjFour}/>
        <MyChart id="oursales" />
      <Services/>
      <Footer/>


      </>
    )
}

export default Home
