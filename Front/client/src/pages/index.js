import React, {useState} from 'react'
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'
import Content from '../components/Content'
import Demo from '../components/Demo'



const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>  
    <Content/>
    <Demo />
    </>    
  )
}

export default Home
