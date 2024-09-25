import React from "react";

import './styles/education.css'

export const Education = () => {
    return (
<div className="intro">
            <div className="intro-text">
                <h1>100 EDUCATION</h1>
                <div className="paragraphs">

                    <h2 style = {{color : "orange", textAlign:"left", paddingTop:"2rem"}}>Masters in Computer Science</h2>
                    <h4 style = {{color : "white", textAlign:"left", paddingTop:"1rem"}}>George Mason University</h4>
                    <h4 style = {{color : "white", textAlign:"left", paddingTop:"1rem"}}>Computer Science</h4>
                    <h4 style = {{color : "orange", textAlign:"left", paddingTop:"2rem" , paddingBottom:"1rem"}}>Academic Coursework : </h4>
                <p>
                    <li><strong>Artificial Intelligence:</strong> Gained hands on experience by building projects using various search algorithms and rebuilt the PACMAN game using the reinforcement learning.</li>        
                    <li><strong>Analysis of Algorithms</strong> Explored techniques for optimizing code by studying and applying different algorithms, focusing on their efficiency and effectiveness in solving computational problems.</li>      
                    // <li><strong>Computer Programming and Data Structures:</strong> Covered programming concepts in C, C++, Java and data structures such as arrays, linked lists, stacks, and queues.</li>
                    // <li> <strong>Design and Analysis of Algorithms:</strong> Learned about various algorithmic techniques and their applications in problem-solving.</li>
                    // <li> <strong>Web Technologies:</strong> Gained proficiency in web development using HTML, CSS, JavaScript, and PHP.</li>
                </p>

                    <h2 style = {{color : "orange", textAlign:"left", paddingTop:"2rem"}}>Bachelor of Technology</h2>
                    <h4 style = {{color : "white", textAlign:"left", paddingTop:"1rem"}}>Jawaharlal Nehru Technological University</h4>
                    <h4 style = {{color : "white", textAlign:"left", paddingTop:"1rem"}}>Computer Science and Information Technology</h4>
                    <h4 style = {{color : "orange", textAlign:"left", paddingTop:"2rem" , paddingBottom:"1rem"}}>Academic Coursework : </h4>
                <p>
                    <li><strong>Artificial Intelligence and Machine Learning:</strong> Acquired theoritical knowledge in AI and ML concepts such as supervised and unsupervised learning, decision trees, and neural networks, statistics, etc.  </li>        
                    <li><strong>Data Analysis and Visualization:</strong> Learned about data cleaning, manipulation, and visualization using tools such as R and Python.</li>      
                    <li><strong>Computer Programming and Data Structures:</strong> Covered programming concepts in C, C++, Java and data structures such as arrays, linked lists, stacks, and queues.</li>
                    <li> <strong>Design and Analysis of Algorithms:</strong> Learned about various algorithmic techniques and their applications in problem-solving.</li>
                    <li> <strong>Web Technologies:</strong> Gained proficiency in web development using HTML, CSS, JavaScript, and PHP.</li>
                </p>

                <h4 style = {{color : "orange", textAlign:"left", paddingTop:"4rem" , paddingBottom:"1rem"}}>Extra Curricular : </h4>
                <p>
                    <div className="curricular_container">

                        <div className="curricular_card">
                            <h4>2021 - 2022</h4>
                            <li style = {{margin: "0", padding : "0"}}>Chairperson | IEEE - VBIT SB</li>
                            <li style = {{margin: "0", padding : "0"}}>Talent Acquisition Lead | VIBHA</li>
                            <li style = {{margin: "0", padding : "0"}}>Marketing Lead | Virinchi</li>
                        </div>

                        <div className = "curricular_card">
                            <h4>2020 - 2021</h4>
                            <li style = {{margin: "0", padding : "0"}}>Vice Chairperson | Computer Society | IEEE - VBIT SB</li>
                            <li style = {{margin: "0", padding : "0"}}>Secretary and Designer | Ecoclub VBIT</li>
                            <li style = {{margin: "0", padding : "0"}}>Web Development and Marketing Mentor | Avishkar</li>
                        </div>

                    </div>

                </p>


                </div>
            </div>
        </div>
    )
}
