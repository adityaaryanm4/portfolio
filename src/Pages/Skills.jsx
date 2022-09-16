import React from 'react'
import { skillUrls } from "../data"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const SkillIcon = ({ url }) => {
  return (
    <div className="skill-icon">
      <LazyLoadImage
        alt="skill"
        src={url}
        effect="blur"
        placeholderSrc={url}
      />
    </div>
  )
}

const Skills = () => {
  return (
    <div className="skills">

      <div className="icons">
        {skillUrls.map(item => <SkillIcon key={item.id} url={item.url} />)}

      </div>

    </div>
  )
}

export default Skills