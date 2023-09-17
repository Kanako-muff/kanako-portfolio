import React from 'react'
import "./skills.css"
import Webdevelopment from './Webdevelopment'
import Design from './Design'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <Webdevelopment />
            <Design />
        </div>
    </section>
  )
}

export default Skills