import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>
          
             <div className="about__container">
                    <div className="about__img">
                        <img src="noor.jpg" alt="loading" width="500px"/>
                    </div>
                    
                    <div className="detail">
                        <h2 className="about__subtitle">I'am Noor Muhammed</h2>
                        <p className="about__text">A Passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s intensive and
                        immersive learning. Look forward to joining a company where I will be able to contribute towards individual and company
                        growth</p>   <br />  <br />
                     <h1 style={{fontSize:"50px"}}>Follow me</h1>
                    <div className="home__social">
                    <a href="https://www.linkedin.com/in/noor-muhammed-a96a10116/" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://twitter.com/noormuhammed143" class="home__social-icon"><i class='bx bxl-twitter' ></i></a>
                    <a href="https://github.com/NOORMUHAMM" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>        
                    </div>         
              </div>
        </>
    )
}

export default About
