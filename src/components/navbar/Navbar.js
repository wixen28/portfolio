


import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../images/icons8-v-48 (1).png'
import home from '../../images/icons8-house-64.png'
import { GrHomeRounded } from "react-icons/gr";

import {Link} from 'react-scroll'
import menu from '../../images/icons8-hamburger-menu-48 (1).png'
import closeMenu from '../../images/icons8-close-48.png'
import {useState} from 'react'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false); 

const showingMenu = () => {
  setShowMenu(!showMenu)
  setActiveMenu(!activeMenu)
}

const deactiveMenu = () => {
  setShowMenu(false)
  setActiveMenu(false)
}

  return (
    <div id='navbar'>
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className='desktop-menu'>
            <Link className='socials-item'  activeClass='active' to='home' spy={true} smooth={true} offset={-100}>
              <GrHomeRounded id='home-logo' fill='white'/>
              </Link>
            {/* <Link className='socials-item'>about</Link> */}
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className='socials-item'>skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='socials-item'>projects</Link>
            <Link activeClass='active' to='socials' spy={true} smooth={true} offset={-100} className='socials-item'>contact</Link>
        </div> 

{/* Mobile Menu */}
<img alt="menu" className='menu' onClick={showingMenu} src={activeMenu ? closeMenu : menu}/>
        <div className='nav-menu' style={{display: showMenu? 'flex' : 'none'}} >
            <Link className='mobile-item'  activeClass='active' to='home' spy={true} smooth={true} offset={-100}><GrHomeRounded id='home-logo' fill='white' onClick={ () => setShowMenu(false) }/></Link>
            {/* <Link className='mobile-item' onClick={ () => setShowMenu(false) }>about</Link> */}
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className='mobile-item' onClick={ () => deactiveMenu()} >skills</Link>
            <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='mobile-item' onClick={ () => deactiveMenu()}>projects</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='mobile-item' onClick={ () => deactiveMenu()}>contact</Link>
        </div> 
    </nav>
    </div>
  )
}

export default Navbar