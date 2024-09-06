import { useEffect, useState } from 'react'
import './Projects.css'
import closeBtn from '../../images/icons8-close-48.png'

const Projects = () => {
  const [visibleDiv, setVisibleDiv] = useState("")
  const [projects, setProjects] = useState([])
  const [visibleProjectId, setVisibleProjectId] = useState(null)

  useEffect( () => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error))
  })

  const showMoreProjectInfo = (projectId) => {
    setVisibleProjectId(visibleProjectId === projectId ? null : projectId)
    setVisibleDiv(projectId)
  }

  return (
    <div id='projects'>
        <h1 className='project-header'> my Projects</h1>
        <div className='projects'>
          { projects.map( (project) => (
                <div className='project' key={project.id}>
                  <div className='project-div'>
                    <img className='project-img' src={`/${project.image}`} alt={project.title} />
                    <div className='project-info'>
                      <h3 className='project-name'>{project.name}</h3>
                      <div className='project-info-hidden' id='hover-content'>
                        <a href={project.websiteLink} target='_blank'><button className='show-website'>show website</button></a>
                        <a href={project.codeLink} target='_blank'><button className='show-code'>show code</button></a>
                        <button className='show-more-info' onClick={() => showMoreProjectInfo(project.id)}>show more</button>
                      </div>
                    </div>
                  { visibleProjectId === project.id && (
                      <div className={`${visibleDiv ? 'more-info' : 'hide-info'}`}>
                        <img  className='more-info-img smaller-img' src={`/${project.moreInfo.mobileImage}`} />
                        <p className='more-info-desc'>{project.moreInfo.description}</p>
                        <a href={project.websiteLink} target='_blank'><button className='more-info-show-website'>show website</button></a>
                        <a href={project.codeLink} target='_blank'><button className='more-info-show-code'>show code</button></a>
                        <ul className='tech-stack'>
                          {project.moreInfo.technologies.map( (tech, index) => (
                            <li className='tech-stack-item' key={index}>
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <button className='more-info-close' onClick={() => showMoreProjectInfo(null)}><img src={closeBtn} className='more-info-close-btn'/></button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }         
        </div>
    </div>
  )
}

export default Projects