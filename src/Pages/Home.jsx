import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
    return (
        <div className="home">

            <div className="wrapper">

                <LazyLoadImage
                    alt="avt"
                    src="https://i.postimg.cc/NFjhNfkv/pink-gradient-designify-modified.png"
                    effect="blur"
                    placeholderSrc="https://i.postimg.cc/NFjhNfkv/pink-gradient-designify-modified.png"
                />

                <div className="intro">
                    <h1>Hi, I'm <span className="red">Aditya</span></h1>
                    <p>A Full Stack Developer</p>
                </div>
                <a className="dndCVbtn" href="./file/aditya aryan.pdf" download>Download CV</a>
            </div>
        </div>
    )
}

export default Home