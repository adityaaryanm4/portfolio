import React from 'react'
import {skillUrls} from "../data"

const SkillIcon = ({url}) => {
  return (
    <div className="skill-icon">
      <img src={url} alt="" />
    </div>
  )
}

const Skills = () => {
  return (
    <div className="skills">

      <div className="icons">
        {skillUrls.map(item=><SkillIcon key={item.id} url={item.url}/>)}
        
      </div>

    </div>
  )
}

export default Skills