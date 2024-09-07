import {useState} from 'react'

import './Navbar.css'
import logo from '../../images/icons8-v-48 (1).png'
import { GrHomeRounded } from "react-icons/gr"
import {Link} from 'react-scroll'
import menu from '../../images/icons8-hamburger-menu-48 (1).png'
import closeMenu from '../../images/icons8-close-48.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div id='navbar'>
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className='desktop-menu'>
            <Link className='socials-item'  activeClass='active' to='home' spy={true} smooth={true} offset={-100}>
              <GrHomeRounded id='home-logo' fill='white'/>
            </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className='socials-item'>skills</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='socials-item'>projects</Link>
            <Link activeClass='active' to='socials' spy={true} smooth={true} offset={-100} className='socials-item'>contact</Link>
        </div> 
      {/* Mobile Menu */}
      <img 
        alt="menu" 
        className='menu' 
        onClick={() => {
          setShowMenu(prev => !prev)
          setActiveMenu( prev => !prev)
        }} 
        src={activeMenu ? closeMenu : menu}/>
        { showMenu && (
          <div className='nav-menu' style={{display: showMenu? 'flex' : 'none'}} >
            <Link className='mobile-item'  activeClass='active' to='home' spy={true} smooth={true} offset={-100}><GrHomeRounded id='home-logo' fill='white'  onClick={ () =>  {
                setShowMenu(false) 
                setActiveMenu(false)
              }} 
            /></Link>
            <Link 
              activeClass='active' 
              to='skills' 
              spy={true} 
              smooth={true}
              offset={-100} 
              className='mobile-item' 
              onClick={ () =>  {
                setShowMenu(false) 
                setActiveMenu(false)
              }} 
              >skills
            </Link>
            <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='mobile-item'  onClick={ () =>  {
                setShowMenu(false) 
                setActiveMenu(false)
              }} >projects</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className='mobile-item'  onClick={ () =>  {
                setShowMenu(false) 
                setActiveMenu(false)
              }} >contact</Link>
       </div> 
        )}
    </nav>
    </div>
  )
}

export default Navbar