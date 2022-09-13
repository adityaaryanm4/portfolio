import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import urls from "../data"
import { Link } from 'react-router-dom';

const Container = ({ url }) => {
  return (
    <div className="container">
      <img src={url} alt="work" />
      <div className="info">
        <div className="icon"><GitHubIcon style={{ background: "transparent", fill: "black" }} /></div>
        <Link to="https://karashop.netlify.app/"><div className="icon">
          <SearchIcon style={{ background: "transparent", fill: "black" }} />
        </div></Link>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="work">
      {urls.map(item => <Container key={item.id} url={item.url} />)}
    </div>
  )
}

export default Work