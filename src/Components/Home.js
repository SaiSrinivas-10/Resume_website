import React from 'react';
import {NavBar} from './Navbar.js';
import {Intro} from './Intro.js';
import {Skills} from './Skills.js';
import {Experience} from './Experience.js';
import {Projects} from './Projects.js';
import {Education} from './Education.js'
import {Trainings} from './Trainings.js'
import {Contact} from './Contact.js'

import './styles/home.css'


const Home = ()=>{
    return(
        <div className='container'>
            <NavBar/>
            {/* <PageNav/> */}
            <Intro/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Education/>
            <Trainings/>
            <Contact/>
        </div>
    )
}

export default Home;