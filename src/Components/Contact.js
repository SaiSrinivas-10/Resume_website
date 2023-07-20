import React from "react";
import {FaGithubSquare,FaLinkedin,FaPhoneSquare, FaHackerrank} from 'react-icons/fa'
import './styles/Contact.css';


export const Contact = () => {
   
    return (
<div className="contact">
            <div className="contact-text">
                <h1>110 CONTACT</h1>
                <div className="paragraphs_contact">
                    <h2 style = {{color : "orange", textAlign:"center", paddingTop:"2rem", marginBottom : '2rem'}}>Socials</h2>
                    <div className = "social-icons" style = {{display : "flex"}}>
                    <a href = "https://github.com/SaiSrinivas-10" style = {{color : "black"}}><FaGithubSquare style = {{height : "50px"}}/></a>
                    <a href = "https://www.linkedin.com/in/sai-srinivas-keesari/" style = {{color : "black"}}><FaLinkedin style = {{height : "50px"}}/></a>
                    <a href = "tel:980-250-3829" style = {{color : "black"}}><FaPhoneSquare style = {{height : "50px"}}/></a>
                    <a href = "https://www.hackerrank.com/saikeesari2000" style = {{color : "black"}}><FaHackerrank style = {{height : "50px"}}/></a>
                    </div>



                    <h2 style = {{color : "orange", textAlign:"center", paddingTop:"2rem", marginBottom : '2rem'}}>Let's Connect</h2>
                     <a href = "mailto:saikeesari2000@gmail.com"><button>Send mail</button></a>

                </div>
            </div>
        </div>
    )
}