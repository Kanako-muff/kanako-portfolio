import React from 'react'
import AboutImg from "../../assets/about.jpg"
import Resume from "../../assets/Kanako_Resume.pdf"
import "./about.css"

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <p className="about__description">
                    Hello, I'm Kate.<br /><br />
                    In my previous role, I worked as a web designer for an apparel e-commerce site, using HTML/CSS/Javascript/Photoshop. <br /><br />
                    Later, at a college in Vancouver, I studied Frontend (HTML/CSS/SCSS/Javascript/React/Redux) and Backend (Java/SQL/Node.js/Mongo.db) development.<br /><br />
                    While I studied both, my passion lies in frontend. Starting as a web designer, I've transitioned into a career focused on creating engaging user interfaces.<br /><br />
                    Feel free to explore my portfolio website to see some of my previous work.<br />
                </p>
                <a download="" href={Resume} className="button button--flex">
                    Download Resume&nbsp;
                    <i className="fa-regular fa-file"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About