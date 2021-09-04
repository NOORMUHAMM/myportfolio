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
                      <button className="btn"><a href="https://drive.google.com/file/d/1iYGEBpSOHXfaPrQD1JyikUvp5muJ4rQi/view?usp=sharing">Resume</a></button>
             </div>
             <div className="right">
                {/* <img src="https://cdn.dribbble.com/users/1025838/screenshots/6220885/devguy3.gif" alt=""></img> */}
                <img src="mupic.png"></img>
             </div>
              
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
