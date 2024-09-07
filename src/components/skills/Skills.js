
import { useState, useEffect } from 'react'
import './Skills.css'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect( () => {
    fetch('/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err))
  })

  const getSkillBarColor = (skillLevel, index) => {
    const threshold = (index + 1) * 20
    return skillLevel >= threshold ? 'filled' : 'unfilled'
  }

  return <section id='skills'>
          <h1 className='skill-header'> my Skills</h1>
          <div className='skills'>          
            { skills.map((skill) => (
              <div className='skill' key={skill.id}>
                <div className='skill-img'>
                  <img src={skill.logo} alt=""  className='skill-image'/>
                </div>
                <div className='skill-info'>
                  <p className='skill-name'>{skill.name}</p>
                <div className='skill-level'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className={`level ${getSkillBarColor(skill.progress, index)}`}></div>
                  ))}
                </div>
                </div>
              </div>
              ))
            }
          </div>
    </section>
}

export default Skills