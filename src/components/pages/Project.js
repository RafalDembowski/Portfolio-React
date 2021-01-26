import React from 'react'
import './Project.css'
import './Projects.css';
import './HomeSection.css'
import { AiFillGithub } from  'react-icons/ai'
import { projectsData, roomMateObj } from './ProjectPage/projectsData'

function Project (
    { match, location }
) {

    const { params: { projectId } } = match;

    return (
        <>
            <div className="page-container">
            <div className="page-title">
                <h1>
                    {projectsData[projectId - 1].projectName}
                </h1>
            </div>
                <div className="project">
                <div className="image-project">
                        <img src={projectsData[projectId - 1].img}></img>
                </div>
                <div className="project-description">
                        <div className="project-title"> 
                        <h2>{projectsData[projectId - 1].shortDescription}</h2>
                        </div>
                </div>
                <div className="project-long-description">
                         <p>{projectsData[projectId - 1].longDescription}</p>
                </div>
                <div className="project-technologics-information">
                    <div className="project-technologics-information-column">
                        <div className="project-technologics-information-title">
                            Rok utworzenia projektu
                        </div>
                        <p>2019</p>
                    </div>
                    <div className="project-technologics-information-column">
                        <div className="project-technologics-information-title">
                            Wykorzystane technologie
                        </div>
                        <p>
                            {projectsData[projectId - 1].technologics}
                        </p>
                    </div>
                    <div className="icons-container project-icon-container">
                        <a href={projectsData[projectId - 1].githubLink}>
                            <AiFillGithub size={36}/>
                        </a>
                        <a href={projectsData[projectId - 1].liveLink}>
                            <button className="normal-btn">Live</button>
                        </a>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default Project
