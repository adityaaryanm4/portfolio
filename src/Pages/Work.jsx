import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import {urls} from "../data"

const Container = ({ item }) => {
  return (
    <div className="container">
      <img src={item.url} alt="work" />
      <div className="info">

        <a href={item.git} target="_main"><div className="icon"><GitHubIcon style={{ fill: "black" }} /></div></a>

        <a href={item.web} target="_main"><div className="icon"><SearchIcon style={{ fill: "black" }} /></div></a>

      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="work">
      {urls.map(item => <Container key={item.id} item={item} />)}
    </div>
  )
}

export default Work