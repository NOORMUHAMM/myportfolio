import React from 'react'
import "./Work.css"
const Work = () => {
    return (
         <div className="work" id="work">

                <div className="work bd-grid">
                    <div className="work__img">
                        <img src="hot.png" alt=""/>
                        <div className="description"><h1>Hotwire_clone</h1>
                        <p>Hotwire is a travel website that offers airline tickets, hotel rooms,
                             rental cars, and vacation packages. It operates by selling off
                              unsold travel inventory at discounted prices.</p>
                            <button><a href="https://hotwire.netlify.app/">LIVE DEMO </a></button> <button><a href="https://github.com/pallav1998/hotwire_clone">CODE</a></button>
                        </div>
                    </div>
                   <div className="work__img">
                        <img src="hirist.png" alt=""/>
                        <div className="description"><h1>Hirist_clone</h1>
                        <p>Hirist is a platform that helps jobseekers connect with their dream job. Hirist.com connected with over 13,00,000 jobseekers already and this is just the beginning...they feature some of the best jobs in Banking & Finance, Consulting, Research & Analytics, Sales & Marketing, HR, IT and Operations.And also on hirist.com recruiters can post their jobs here and choose the jobseeker with best skills.</p>
                            <button><a href="https://hotwire.netlify.app/">LIVE DEMO </a></button> <button><a href="https://github.com/amit-web/Project-hirist-clone">CODE</a></button>
                        </div>
                    </div>
                     <div className="work__img">
                        <img src="port.png" alt=""/>
                        <div className="description"><h1>Portfolio</h1>
                        <p>In my portfolio, you can see my achievement my skill my resume and you can contact me as well.</p>
                            <button><a href="https://hotwire.netlify.app/">LIVE DEMO </a></button> <button><a href="https://github.com/amit-web/Project-hirist-clone">CODE</a></button>
                        </div>
                    </div>
                   
                </div>
      </div>
            
    )
}

export default Work
