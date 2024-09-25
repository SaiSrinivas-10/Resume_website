import React from "react";
import './styles/navbar.css'
import {FaGithubSquare,FaLinkedin,FaPhoneSquare, FaHackerrank} from 'react-icons/fa'

// import {Container, Navbar, Nav,NavDropdown} from 'react-bootstrap';

export const NavBar = () => {
    return(
        <div className="navbar" style = {{display : "flex"}}>
            <p>SAI KEESARI</p>  
     <a href = "https://github.com/SaiSrinivas-10" style = {{color : "black"}}><FaGithubSquare style = {{height : "50px"}}/></a>
                    <a href = "https://www.linkedin.com/in/sai-srinivas-keesari/" style = {{color : "black"}}><FaLinkedin style = {{height : "50px"}}/></a>
                    <a href = "tel:980-250-3829" style = {{color : "black"}}><FaPhoneSquare style = {{height : "50px"}}/></a>
                    <a href = "https://www.hackerrank.com/saikeesari2000" style = {{color : "black"}}><FaHackerrank style = {{height : "50px"}}/></a>
        </div>
    );
}
