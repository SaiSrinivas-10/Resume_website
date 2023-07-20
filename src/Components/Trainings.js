import React from 'react';
import pandas_certificate from './files/Pandas_Udemy.jpg'

import './styles/trainings.css'

export const Trainings = () => {
    return (
        <div>
            <h1>101 TRAININGS</h1>
            <div className = "training_container">
                <div className = "training_card">
                    <h2>Data Engineering using Databricks</h2>
                    <button>Uploading Soon</button>
                    <p style = {{textAlign : 'justify', marginBottom : "10px"}}>
                       <li> Completed an intensive bootcamp focused on data engineering using tools such as Databricks, Apache, Spark, PySpark, SQL and AWS.</li>
                       <li> Ingested and processed large amounts of data from various sources, including databases, files and APIs</li>
                       <li>Cleaned and Preprocesses data to remove errors, inconsistencies and missing values</li>
                       <li>Transformed data using PySpark to aggregate data, join tables and create new features.</li>
                        <li>Developed skills in Machine Learning and Data Analysis, including building models and extraacting insights from data.</li>
                    </p>
                </div>

                <div className = "training_card">
                    <h2>Full - Stack Web Development</h2>
                    <a href = "https://www.coursera.org/account/accomplishments/certificate/N5PLWUJECWEQ"><button>View Certificate</button></a>
                    <p style = {{textAlign : 'justify', marginBottom : "10px"}}>
                        <li>Built and maintained multiple web applications using a range of technologies, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL.</li>
                        <li>Collaborated with a team of designers and developers to create responsive and user-friendly interfaces, ensuring seamless user experiences across all devices.</li>
                        <li>Designed and implemented RESTful APIs to handle server-side functionality, such as user authentication, data validation, and database interactions.</li>
                        <li>Participated in code reviews and collaborated with team members to identify areas for improvement and implement solutions.</li>
                        <li>Stayed up-to-date with the latest trends and technologies in full-stack development, and applied new concepts to improve application performance and user experience.</li>
                    </p>
                </div>
                
                <div className = "training_card">
                    <h2>Data Structures and Algorithms</h2>
                    <button>Uploading Soon</button>
                    <p style = {{textAlign : 'justify',  marginBottom : "10px"}}>
                        <li>Completed an intensive course focused on Data Structures and Algorithms, covering topics such as arrays, linked lists, trees, graphs, sorting algorithms, and searching algorithms.</li>
                        <li>Developed problem-solving skills by solving a wide range of algorithmic problems, utilizing concepts such as dynamic programming, recursion, and divide-and-conquer.</li>
                        <li>Studied time and space complexity analysis of algorithms, and implemented algorithms with optimal time and space complexities.</li>
                        <li>Participated in mock interviews and practice sessions, improving interview skills and knowledge of common algorithms and data structures questions.</li>
                    </p>

                </div>
                
                <div className = "training_card">
                    <h2>Data Science with Pandas</h2>
                    <a href = {pandas_certificate} download><button>View Certificate</button></a>
                    <p style = {{textAlign : 'justify',  marginBottom : "10px"}}>
                        <li>Completed an intensive bootcamp focused on data science using tools such as Python, Pandas, NumPy, Matplotlib, and Scikit-Learn.</li>
                        <li>Conducted data analysis, data cleaning, and data wrangling on large datasets using Pandas, NumPy, and other Python libraries.</li>
                        <li>Visualized data using Matplotlib and other data visualization tools to extract insights and comminicate findings.</li>
                        <li>Implemented statistical techniques such as hypothesis testing, A/B testing, and regression analysis to uncover meaningful relationships in data.</li>
                    </p>


                </div>
                
                <div className = "training_card">
                    <h2>AWS Certified Cloud Practitioner</h2>
                    <button>Uploading Soon</button>
                    <p style = {{textAlign : 'justify',  marginBottom : "10px"}}>
                        <li>Completed an intensive bootcamp focused on AWS Cloud Practitioner certification, covering topics such as AWS Cloud Concepts, AWS Security, AWS Pricing and Support, and AWS Services.</li>
                        <li>Developed skills in using AWS services, including EC2, S3, RDS, IAM, CloudFormation, and CloudWatch.</li>
                        <li>Practiced cloud architecture design and implementation using AWS, ensuring secure, scalable, and cost-effective solutions.</li>
                        <li>Learned about AWS pricing models and support plans, and how to optimize cost-effectiveness for cloud infrastructure.</li>
                        <li>Collaborated with team members on group projects, designing and implementing cloud-based solutions for real-world scenarios.</li>
                    </p>

                </div>
                
                <div className = "training_card">
                    <h2>Data Engineering on Microsoft Azure</h2>
                    <button>Uploading Soon</button>
                    <p style = {{textAlign : 'justify', marginBottom : "10px"}}>
                        <li>Completed an intensive bootcamp focused on data engineering on Microsoft Azure, covering topics such as data storage, data processing, data analysis, and data visualization.</li>
                        <li>Developed skills in using Azure services, including Azure Blob Storage, Azure Data Lake Storage, Azure Databricks, Azure Synapse Analytics, and Power BI.</li>
                        <li>Practiced data ingestion, data transformation, and data integration using Azure services, ensuring efficient and effective data processing.</li>
                        <li>Learned about data analysis techniques using Azure services, including SQL Server Analysis Services (SSAS), Azure Analysis Services (AAS), and Power BI.</li>
                        <li>Designed and implemented data pipelines for real-world scenarios, ensuring data quality, reliability, and scalability.</li>
                    </p>    

                </div>

                </div>
        </div>
    )
};