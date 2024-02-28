
import './Skills.css'
import htmlLogo from '../../images/html-logo.png'
import cssLogo from '../../images/css-logo.png'
import jsLogo from '../../images/js-logo.png'
import reactLogo from '../../images/react-logo.png'
import gitlabLogo from '../../images/gitlab-logo.png'
import githubLogo from '../../images/github-logo.png'
import nodeLogo from '../../images/nodejs-logo.png'
import expressLogo from '../../images/express-white-logo.png'
import mongoLogo from '../../images/mongodb.png'
import figmaLogo from '../../images/figma-logo.png'

const Skills = () => {
  return <section id='skills'>
          <h1 className='skill-header'> my Skills</h1>
          <div className='skills'>
            {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={htmlLogo} alt="html-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>HTML</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={cssLogo} alt="css-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>CSS</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={jsLogo} alt="js-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>JavaScript</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={reactLogo} alt="react-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>React</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={nodeLogo} alt="css-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>Node.js</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={expressLogo} alt="express-logo" id='express-logo' className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>Express.js</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={gitlabLogo} alt="gitlab-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>GitLab</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={githubLogo} alt="github-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>GitHub</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={mongoLogo} alt="mongodb-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>MongoDB</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
              <div className='skill'>
                <div className='skill-img'>
                    <img src={figmaLogo} alt="figma-logo" className='skill-image' />
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>Figma</p>
                  <div className='skill-level'>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>
                    </div>
                    <div className='level'>
                      <div className='percentage' id='without-color'></div>  
                    </div>
                  </div>
                </div>
              </div>
              {/* SKILL */}
        </div>
    </section>
    
}

export default Skills