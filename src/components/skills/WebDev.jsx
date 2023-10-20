import React from 'react'

const WebDev = () => {
  return (
    <div className="skills__box">
        <div class="accordion" id="accordionPanelsStayOpenExample">

            {/* Front-End Skills
            =============================================================== */}
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        ・Front-End・
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body skills__group skills_frontend">
                        <div className="skills__data">
                            <i className="fa-brands fa-html5 fa-3x html"></i>
                            <h5 className="skills__name">HTML</h5>
                        </div>
                        <div className="skills__data">
                            <i className="fa-brands fa-css3-alt fa-3x css"></i>
                            <h5 className="skills__name">CSS</h5>
                        </div>
                        <div className="skills__data">
                            <i className="fa-brands fa-sass fa-3x scss"></i>
                            <h5 className="skills__name">SCSS</h5>
                        </div>
                        <div className="skills__data">
                            <i className="fa-brands fa-js fa-3x javascript"></i>
                            <h5 className="skills__name">Javascript</h5>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-typescript bx-lg typescript'></i>
                            <h5 className="skills__name">Typescript</h5>
                        </div>
                        <div className="skills__data">
                            <i className="fa-brands fa-react fa-3x react"></i>
                            <h5 className="skills__name">React</h5>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-redux bx-lg redux'></i>
                            <h5 className="skills__name">Redux</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" className='nextjs' alt="" />
                            <h5 className="skills__name">Next.js</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png" className='mui' alt="" />
                            <h5 className="skills__name">MUI</h5>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-tailwind-css bx-lg tailwind'></i>
                            <h5 className="skills__name">tailwind</h5>
                        </div>
                        <div className="skills__data">
                            <i className="fa-brands fa-bootstrap fa-3x bootstrap"></i>
                            <h5 className="skills__name">Bootstrap</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back-End Skills
            =============================================================== */}
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        ・Back-End・
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body skills__group skills_backend">
                        <div className="skills__data">
                            <i className="fa-brands fa-node-js fa-3x nodejs"></i>
                            <h5 className="skills__name">Node.js</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" className="express" alt="" />
                            <h5 className="skills__name">Express</h5>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-mongodb bx-lg mongodb'></i>
                            <h5 className="skills__name">Mongo DB</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://icon.icepanel.io/Technology/svg/Mongoose.js.svg" className="mongoose" alt="" />
                            <h5 className="skills__name">Mongoose</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://seeklogo.com/images/G/grafbase-logo-7A9E1E0D04-seeklogo.com.png" className="grafbase" alt="" />
                            <h5 className="skills__name">Grafbase</h5>
                        </div>
                        <div className="skills__data">
                            <i className="fa-brands fa-java fa-3x java"></i>
                            <h5 className="skills__name">Java</h5>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-postgresql bx-lg postgressql'></i>
                            <h5 className="skills__name">Postgres SQL</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Skills for Web Development
            =============================================================== */}
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        ・Other・
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body skills__group other_4_webDev">
                        <div className="skills__data">
                            <i className="fa-brands fa-github fa-3x github"></i>
                            <h5 className="skills__name">Github</h5>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxs-terminal bx-lg terminal'></i>
                            <h5 className="skills__name">Terminal</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png" className="vercel" alt="" />
                            <h5 className="skills__name">Vercel</h5>
                        </div>
                        <div className="skills__data">
                            <img src="https://seeklogo.com/images/R/render-logo-818C47ACCA-seeklogo.com.png" className="render" alt="" />
                            <h5 className="skills__name">render</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default WebDev