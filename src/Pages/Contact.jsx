import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  return (
    <div className="contact">
      <div className="links">

        <div className="info">
          <GitHubIcon />
          <a href="https://github.com/adityaaryanm4" target="_main">adityaaryanm4</a>
        </div>
        <div className="info">
          <LinkedInIcon />
          <a href="https://www.linkedin.com/in/adityaaryanm4/" target="_main">adityaaryanm4</a>
        </div>
        <div className="info">
          <MailIcon />
          <a href="mailto: adityaaryan.m4@gmail.com" target="_main">adityaaryan.m4@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact