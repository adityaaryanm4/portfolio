import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import { urls } from "../data"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Container = ({ item }) => {
  return (
    <div className="container">

      <LazyLoadImage
        alt="work"
        src={item.url}
        effect="blur"
        placeholderSrc={item.url}
        height="100%"
      />

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