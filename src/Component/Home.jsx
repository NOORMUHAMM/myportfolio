import React from 'react'
import "./Home.css"
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history=useHistory()
    const contact=()=>{
       history.push("/contact")
    }
    return (
        <>
        <div className="container">
            <div className="left">
             <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Noor Muhammed</span><br/> Full Stack Web Developer</h1>
             <button className="btn" onClick={contact}>Contact</button>
                      <button className="btn"><a href="https://drive.google.com/file/d/1p1uw9clCTHYLr--ebGCzd9j0vFUuoYsx/view?usp=sharing">Resume</a></button>
             </div>
             <div className="right">
                {/* <img src="https://cdn.dribbble.com/users/1025838/screenshots/6220885/devguy3.gif" alt=""></img> */}
                <img src="my.jpg"></img>
             </div>
              
         </div>
         <div style={{marginBottom:"-55px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L30,176C60,160,120,128,180,101.3C240,75,300,53,360,69.3C420,85,480,139,540,149.3C600,160,660,128,720,101.3C780,75,840,53,900,64C960,75,1020,117,1080,154.7C1140,192,1200,224,1260,202.7C1320,181,1380,107,1410,69.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
         </div>
         <footer class="footer">
            <p class="footer__title">Noor Muhammed</p>
            <div class="footer__social">
                <a href="https://www.linkedin.com/in/noor-muhammed-a96a10116/" class="footer__icon"><i class='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/NOORMUHAMM" class="footer__icon"><i class='bx bxl-github' ></i></a>
                <a href="https://twitter.com/noormuhammed143" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
    
        </>
    )
}

export default Home
