import React from 'react'
import imageProjectFirst from '../../images/image1.png'
import imageProjectSecond from '../../images/image2.png'
import './Projects.css';

function Projects() {
    return (
        <>
        <div className="page-container">
            <div className="page-title">
                <h1>Projekty</h1>
            </div>
                <div className="project">
                    <div className="image-project">
                        <img src={imageProjectFirst}></img>
                    </div>
                    <div className="project-description">
                        <div className="project-title"> 
                        <h2>Name of project</h2>
                        <p>2019</p>
                        </div>
                        <div class="short-description">
                        <p>Making sense of things for brands, people and places. Making sense of things for brands.</p>
                        </div>
                    </div>
                </div>
            <div className="project">
                    <div className="image-project">
                        <img src={imageProjectSecond}></img>
                    </div>
                    <div className="project-description">
                        <div className="project-title"> 
                        <h2>Name of project</h2>
                        <p>2019</p>
                        </div>
                        <div class="short-description">
                        <p>Making sense of things for brands, people and places. Making sense of things for brands.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
