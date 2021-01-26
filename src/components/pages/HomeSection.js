import React from 'react'
import './HomeSection.css'
import { AiOutlineLinkedin , AiFillGithub } from  'react-icons/ai'

function HomeSection() {
    return (
        <>
        <div className="container">
            <div className="description-container">
                <h1>Hello</h1>

                <div className="description-second">
                    <h2>Created with passion</h2>
                    <p>Making sense of things for brands, people and places. Making sense of things for brands, people and places</p>
                    <div className="icons-container">
                        <a href="https://github.com/RafalDembowski" className="icon-home" >
                            <AiFillGithub size={45}/>
                        </a>
                        <a href=""  className="icon-home">
                            <AiOutlineLinkedin size={51}/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default HomeSection
