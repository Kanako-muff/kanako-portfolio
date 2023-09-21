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
                    Hello, I'm Kanako.<br /><br />
                    I'm a web developer with a background in web design. I have prior experience working as a web designer, where I created graphics using Photoshop/Illustrator and coded with HTML/CSS/Javascript.<br /><br />
                    Subsequently, I pursued comprehensive front-end to back-end development training at CICCC college in Vancouver. As a result, I have transitioned into a full-stack developer while still leveraging my design skills.<br /><br />
                    Feel free to explore my portfolio website to see some of my previous work. Enjoy!<br />
                </p>
                <a download="" href={Resume} className="button button--flex">
                    Download Resume&nbsp;
                    <i class="fa-regular fa-file"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About