import React from 'react'

const Home = () => {
    return (
        <div className="home">

            <div className="wrapper">

                <img src="https://i.postimg.cc/NFjhNfkv/pink-gradient-designify-modified.png" alt="avt" />

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