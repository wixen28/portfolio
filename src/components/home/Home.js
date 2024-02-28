

import './Home.css'
import myPhoto from '../../images/myPhoto.jpeg'
import briefCase from '../../images/icons8-briefcase.svg'
import { GrHomeRounded } from "react-icons/gr";
import iconUp from '../../images/icon-up.png'
import {useState} from 'react'
import {Link} from 'react-scroll'


const Home = () => {
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 

  return (
        <section className='home' id='home'>
          <div className='about'>
            <div className='about-text'>
                <h1>Hey<span class="wave">👋🏻</span>, I'm Viktoria </h1>
                <p className='frontend'><span className='htmlTag'>&lt;p&gt; </span>Front-end developer <span className='htmlTag'>&lt;/p&gt;</span></p>
            </div>
            <div className='my-photo-div'>
              <img src={myPhoto} alt="" className='my-photo' />
            </div>
            </div>
            <div className='text-div'>
            <p className='text'>... I'm self taught software developer from Slovakia. 
              I've been learning to code for more than a year now with focus monstly on front-end but want to continue with back-end in the future as well.</p>
            </div>

            <div className='button'>
              <button className='btn' onClick={() => window.location = 'mailto:bystrianska.viktoria@gmail.com'}>
                <img src={briefCase} alt="briefcase photo" className='btn-img'/>
                Hire me
              </button>
            </div>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} className='go-up-btn'><img src={iconUp} alt="" style={{display: visible ? 'inline' : 'none'}} className='go-up-btn-img'/></Link>
        </section>
  )
}

export default Home