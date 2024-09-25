import React from "react";
import './styles/intro.css'
import pdf from './files/Sai Keesari Resume  (3).pdf'




export const Intro = () => {

    return (
        <div className="intro">
            <div className="intro-text">
                <h1 style = {{marginTop : "20px"}}>000 INTRO</h1>
                <div className="paragraphs">
                <p>Hey there! My name is <strong>Sai Keesari</strong>, and I'm an engineer who is always looking for new challenges and cutting-edge technology to learn about and experiment with. 
                    Welcome to my online portfolio. Development has always sparked my passion, and I'm ecstatic to be pursuing it professionally. 
                    I am committed to providing the greatest and most effective products, and I make it a point to give any project I take on my everything. 
                    You can view a sample of my work on this website. I really think that my work speaks for itself, and I'm constantly seeking new obstacles to overcome. 
                    Feel free to get in touch if you have a project you'd like to talk about or just want to say hello.</p>
<a href = {pdf} download><button style = {{marginTop : "20px"}}>View my Resume</button></a>
</div>
            </div>
        </div>
    )
}
