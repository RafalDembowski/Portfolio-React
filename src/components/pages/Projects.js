import React from 'react'
import './Projects.css';
import { Link } from 'react-router-dom';
import { projectsData, roomMateObj } from './ProjectsData/projectsData';
import ProgressiveImage from '../ProgressiveImage';

function Projects() {

    return (
        <>
        <div className="page-container">
            <div className="page-title">
                <h1>Projekty</h1>
            </div>
        
            {projectsData.map((project , index) =>{
                
                const [src, { blur }] = ProgressiveImage( project.tinyImage, project.largeImage);

                return(<div key={index} className="project-container">
                    <Link to={`/Project/${index + 1}`} className='project'> 
                            <div className="image-project">
                                <img
                                    src={src}
                                    style={{
                                        filter: blur ? "blur(20px)" : "none",
                                        transition: blur ? "none" : "filter 0.7s ease-out"
                                    }}
                                />
                            </div>
                            <div className="project-description">
                                <div className="project-title"> 
                                <h2>{project.projectName}</h2>
                                <p>{project.year}</p>
                                </div>
                                <div className="short-description">
                                <p>{project.shortDescription}</p>
                                </div>
                            </div>
                    </Link>
                    </div>)
            })}
        </div>
        </>
    )
}

export default Projects;
