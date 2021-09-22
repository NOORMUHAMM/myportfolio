import React from 'react'
import "./Skill.css"
const Skill = () => {
    return (
        <>
        <h1 style={{textAlign:"center",margin:"20px"}}>My Skills</h1>
        <div className="container">
            <div className="front">
         <div className="skills section" id="skills">
               

                <div className="skills__container bd-grid">          
                    <div>
                        {/* <h2 className="skills__subtitle">Front-end</h2> */}
                        <p className="skills__text"></p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="skills__name">REACT</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-redux skills__icon'></i>
                                <span className="skills__name">REDUX</span>
                            </div>
                            <div className="skills__bar skills__css">
                        
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="assets/img/work3.jpg" alt="" className="skills__img"/>
                    </div>
                </div>
            </div>
            </div>
              <div className="back">
         <div className="skills section" id="skills">

                <div className="skills__container bd-grid">          
                    <div>
                        {/* <h2 className="skills__subtitle">Back-end</h2> */}
                        <p className="skills__text"></p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon'></i>
                                <span className="skills__name">Nodejs</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-firebase skills__icon'></i>
                                <span className="skills__name">Firebase</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                 <img className="skills__icon"src="express.png" alt="" height="40px" />
                                <span className="skills__name">EXPRESS</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                {/* <i className='bx bxl-react skills__icon'></i> */}
                                <img className="skills__icon"src="mongo.png" alt="" height="40px" />
                                <span className="skills__name">MongoDB</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                        {/* <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-redux skills__icon'></i>
                                <span className="skills__name">REDUX</span>
                            </div>
                            <div className="skills__bar skills__css">
                        
                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div> */}
                    </div>
                    
                    {/* <div>              
                        <img src="assets/img/work3.jpg" alt="" className="skills__img"/>
                    </div> */}
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Skill
