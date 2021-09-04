import React from 'react'
import "./Navbar.css"
import {NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
          <div className="navContainer">
              <div className="navLeft">
                  <h1>NOOR MUHAMMED</h1>
              </div>
              <div className="navRight">
                  
                       <NavLink to="/" className="Navlink">Home</NavLink>
                       <NavLink to="/About" className="Navlink">About</NavLink>
                       <NavLink to="/Contact" className="Navlink">Contact</NavLink>
                       <NavLink to="/Skill" className="Navlink">Skill</NavLink>
                       <NavLink to="/Work" className="Navlink">Work</NavLink>
                      
                    
              </div>
              </div>  
        </>
    )
}

export default Navbar
