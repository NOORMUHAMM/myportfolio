import React,{useRef} from 'react'
import "./Navbar.css"
import {NavLink } from 'react-router-dom'
const Navbar = () => {
  const popup = useRef(null)
  const handle = () => {

        if (popup.current.style.display === "none") {
            popup.current.style.display = "block";



        } else {
            popup.current.style.display = "none";
        }
    }
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
               <span className="popup" onClick={handle} style={{ color: "blue", cursor: "pointer" }}><i style={{ color: "blue",marginTop:"5px" ,cursor: "pointer",fontSize:"large", marginLeft:"10px"}}class="fas fa-bars"></i></span>
              <div className="nav" ref={popup} style={{ display: "none" ,border:"1px dolid green" }}>
                 <span style={{ marginLeft: "95%" }} onClick={handle}><i class="fas fa-times"></i></span>
                       <NavLink to="/" className="Navlink" onClick={handle} >Home</NavLink>
                       <NavLink to="/About" className="Navlink" onClick={handle} >About</NavLink>
                       <NavLink to="/Contact" className="Navlink" onClick={handle} >Contact</NavLink>
                       <NavLink to="/Skill" className="Navlink" onClick={handle} >Skill</NavLink>
                       <NavLink to="/Work" className="Navlink" onClick={handle} >Work</NavLink>
              </div>
            
        </>
    )
}

export default Navbar
