import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="wrapper">

                <h1 className="logo"><span className="red">A</span>ditya.</h1>

                <div className="menu">
                    <div className="menu-item"><NavLink to="/" className={({ isActive }) => ({ isActive })}>Home</NavLink></div>
                    <div className="menu-item"><NavLink to="about">About Me</NavLink></div>
                    <div className="menu-item"><NavLink to="skills">My Skills</NavLink></div>
                    <div className="menu-item"><NavLink to="work">My Work</NavLink></div>
                    <div className="menu-item"><NavLink to="contact">Contact</NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar