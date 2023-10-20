import React from 'react'
import WebDev from './WebDev'
import Design from './Design'

const Tab = () => {
  return (
    <div className="skill__content p-3">
        {/* Index UI */}
        <ul className="nav nav-tabs horizontal">
            <li className="nav-item">
                <a href="#skill_1" className="skills__title nav-link active" data-bs-toggle="tab"><h3>Web Development</h3></a>
            </li>
            <li className="nav-item">
                <a href="#skill_2" className="skills__title nav-link" data-bs-toggle="tab"><h3>Web/Graphic Design</h3></a>
            </li>
        </ul>

        {/* Skills Content */}
        <div className="tab-content">
            <div id="skill_1" className="tab-pane active">
                <WebDev />
            </div>
            <div id="skill_2" className="tab-pane">
                <Design />
            </div>
        </div>
    </div>
  )
}

export default Tab