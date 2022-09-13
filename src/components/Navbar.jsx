import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="wrapper">

                <h1 className="logo"><span className="red">A</span>ditya.</h1>

                <div className="menu">
                    <div className="menu-item"><Link to="/">Home</Link></div>
                    <div className="menu-item"><Link to="about">About Me</Link></div>
                    <div className="menu-item"><Link to="skills">My Skills</Link></div>
                    <div className="menu-item"><Link to="work">My Work</Link></div>
                    <div className="menu-item"><Link to="contact">Contact</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar