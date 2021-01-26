import React from 'react'
import './Projects.css';
import { Link } from 'react-router-dom';
import { projectsData, roomMateObj } from './ProjectsData/projectsData'

function Projects() {
    return (
        <>
        <div className="page-container">
            <div className="page-title">
                <h1>Projekty</h1>
            </div>
            {projectsData.map((project , index) =>(
            <Link to={`/Project/${index + 1}`} className='project'> 
                    <div className="image-project">
                        <img src={project.img}></img>
                    </div>
                    <div className="project-description">
                        <div className="project-title"> 
                        <h2>{project.projectName}</h2>
                        <p>{project.year}</p>
                        </div>
                        <div class="short-description">
                        <p>{project.shortDescription}</p>
                        </div>
                    </div>
            </Link>
            ))}
        </div>
        </>
    )
}

export default Projects
