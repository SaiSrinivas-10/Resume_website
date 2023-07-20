import React from "react";
import './styles/skills.css';
import {FaStar, FaStarHalf} from 'react-icons/fa';


export const Skills = () => {

    return(
        <div className="skills">
            <div className="skills-items">
                <h1>001 SKILLS</h1>
                <div className="skill-names">
                    
                    <div className="skill-name">
                        <p>Python</p>
                        <div className="stars" style = {{display : "flex"}}>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                        </div>
                    </div>
                    
                    <div className="skill-name">
                        <p>SQL</p>
                        <div className="stars" style = {{display : "flex"}}>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                        </div>
                    </div>

                    <div className="skill-name">
                        <p>Java</p>
                        <div className="stars" style = {{display : "flex"}}>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStarHalf/></p>
                        </div>
                    </div>
                    

                    <div className="skill-name">
                        <p>Data Analytics</p>
                        <div className="stars" style = {{display : "flex"}}>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p style = {{color : "black"}}><FaStar/></p>
                        </div>
                    </div>
                    

                    <div className="skill-name">
                        <p>Web Dev</p>
                        <div className="stars" style = {{display : "flex"}}>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStarHalf/></p>
                        </div>
                    </div>
                    
                    <div className="skill-name">
                        <p>Engineering</p>
                        <div className="stars" style = {{display : "flex"}}>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p><FaStar/></p>
                            <p style = {{color : "black"}}><FaStar/></p>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

