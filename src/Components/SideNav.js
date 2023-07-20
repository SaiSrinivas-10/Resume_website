import React from 'react';
import './styles/SideNav.css';
import { handleScrollSkills } from './Skills';



export const SideNav = () => {
    return(
        <div className='sideNav'>
            <p onClick={handleScrollSkills}>INTRO</p>
            <p>SKILLS</p>
            <p>EXPERIENCE</p>
            <p>PROJECTS</p>
            <p>EDUCATION</p>
            <p>TRAININGS</p>
            <p>CONTACT</p>
        </div>
    )
}