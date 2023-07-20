import React from 'react';
import './styles/projects.css'
import sql_paper from './files/Mini_paper_publication.docx'
import {FaGithub , FaFileWord} from 'react-icons/fa'

export const Projects = () => {
    return (
        <div>
            <h1>011 PROJECTS</h1>
            <div className = "project_container">
                <div className = "project_card">
                    <h2>Skill Fetch</h2>
                    <a href = "https://github.com/SaiSrinivas-10/Projects/tree/main/LinkedIn_Webscraper"><FaGithub style = {{color : "orange" , height : "30px", marginTop : "20px"}}/></a>
                    <p style = {{textAlign : 'justify'}}>
                        <li> Using Python Selenium to scrape LinkedIn pages and extract the skills required for specific job positions. The extracted data was then analyzed and visualized to identify the top skills required for the job. </li>
                        <li>Additionally, ChatGPT API was used to fetch the top 5 websites where the users can learn the required skills for free. </li>
                        <li>The project demonstrated the power of web scraping, data analysis, and natural language processing to provide valuable insights into job skills and improve employability. </li>
                        <li>It was a challenging but rewarding experience that helped me develop my skills in data science and engineering.</li>
                    </p>
                </div>

                <div className = "project_card">
                    <h2>Voice SQL</h2>
                    <a href = {sql_paper} ><FaFileWord style = {{color : "orange" , height : "30px", marginTop : "20px"}}/></a>
                    <p style = {{textAlign : 'justify'}}>
                        <li>This project involved using Python libraries such as text-to-speech and speech recognition to convert natural language into SQL queries.</li> 
                        <li>The aim of the project was to create a user-friendly interface for non-SQL users to interact with databases.</li> 
                        <li>Natural language queries were converted into SQL queries using NLTK library and executed against the database. </li>
                        <li>Finally, the results were converted back into natural language using text-to-speech and spoken out loud to the user. </li>
                        <li>The project highlighted the potential of natural language processing and speech recognition in database querying and helped me develop my Python and NLP skills.</li>
                    </p>
                </div>
                
                <div className = "project_card">
                    <h2>Nmart</h2>
                    <a href = "https://github.com/SaiSrinivas-10/Projects/tree/main/StockManagement"><FaGithub style = {{color : "orange" , height : "30px", marginTop : "20px"}}/></a>

                    <p style = {{textAlign : 'justify'}}>
                        <li> This project involved creating a stock management system using PHP to help small-scale industries compete in the market during COVID-19.</li> 
                        <li> The system provided real-time inventory tracking, order management, invoicing, and customer relationship management features. </li>
                        <li>It was designed to help small businesses optimize their operations and make data-driven decisions to improve their profitability. </li>
                        <li>The project was challenging, but it successfully demonstrated the power of technology in helping small-scale industries adapt to the changing market conditions. </li>
                    </p>
                </div>
                

                
                <div className = "project_card">
                    <h2>Attendance using OpenCV</h2>
                    <a href = "https://github.com/SaiSrinivas-10/RSM-Python/tree/main/Facialrecognition"><FaGithub style = {{color : "orange" , height : "30px", marginTop : "20px"}}/></a>

                    <p style = {{textAlign : 'justify'}}>
                        <li>This project involved developing an attendance system using OpenCV and computer vision algorithms. The system used a camera to capture images of individuals and then identified and matched them with a database of registered students or employees using OpenCV's face recognition algorithms. </li>
                        <li>The system provided a user-friendly solution for quick and easy attendance tracking, without the need for manual record-keeping. Attendance data was stored in a database for easy access and analysis. </li>
                        <li>The project highlighted the potential of computer vision and OpenCV in developing automated attendance systems, and helped me develop my skills in image processing, computer vision, and database management.</li>
                    </p>
                </div>
                
                <div className = "project_card">
                    <h2>Bluestar Marketplace</h2>
                    <p style = {{textAlign : 'justify'}}>
                        <li>This project involved building a liquor store marketplace website using the MERN stack. The website allowed users to browse and purchase liquor products from multiple vendors in one place, with features such as user authentication, product search and filtering, shopping cart, and checkout. </li>
                        <li>The project required a deep understanding of the MERN stack, RESTful API design, and ecommerce website development. It provided an innovative solution for the liquor industry to reach a broader customer base and helped me develop my skills in frontend and backend development, RESTful API design, and database management. </li>
                        <li>Overall, it successfully demonstrated the potential of the MERN stack in building robust and scalable ecommerce websites.</li>
                    </p>
                </div>
                
                
                <div className = "project_card">
                    <h2>C for Error</h2>
                    <a href = "https://github.com/SaiSrinivas-10/c_for_error_frontend"><FaGithub style = {{color : "orange" , height : "30px", marginTop : "20px"}}/></a>
                    <p style = {{textAlign : 'justify'}}>
                        <li>"C for Error" is a website designed to test the coding skills of participants by providing them with problem statements and code snippets that contained logical or syntactical errors. </li>
                        <li>The participants had to identify and correct the errors to obtain the correct output. </li>
                        <li>The website required a deep understanding of programming concepts and skills in web development, including frontend design, backend development, and database management. </li>
                        <li>The project was challenging but rewarding, as it helped me develop my skills in web development, problem-solving, and programming. </li>
                        <li>Overall, the project demonstrated the potential of coding challenge platforms in enhancing programming skills and providing an engaging learning experience.</li>
                    </p>
                </div>

                </div>
        </div>
    )
};