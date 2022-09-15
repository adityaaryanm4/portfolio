import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [menubar, setMenubar] = useState("off")
    return (
        <div className="navbar">

            <div className="wrapper">

                <h1 className="logo"><span className="red">A</span>ditya.</h1>

                <div className={`menu ${menubar}`}>
                    <div className="menu-item"><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Home</NavLink></div>
                    <div className="menu-item"><NavLink to="about">About Me</NavLink></div>
                    <div className="menu-item"><NavLink to="skills">My Skills</NavLink></div>
                    <div className="menu-item"><NavLink to="work">My Work</NavLink></div>
                    <div className="menu-item"><NavLink to="contact">Contact</NavLink></div>
                    <CloseIcon className="toggle-menu-icon cross" onClick={() => setMenubar("off")} />
                </div>
                <MenuIcon className="toggle-menu-icon bar" onClick={() => setMenubar("onn")} />
            </div>
        </div>
    )
}

export default Navbar