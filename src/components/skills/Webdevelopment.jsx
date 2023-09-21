import React from 'react'

const Webdevelopment = () => {
  return (
    <div className="skill__content">
        <h3 className="skills__title">Web development</h3>
        <div className="skills__box">

            {/* Front-End Skills
            =============================================================== */}
            <div className="skills__inner-box">
                <h4 className="skills__title2">・Front-End・</h4>
                <div className="skills__group skills_frontend">
                    <div className="skills__data">
                        <i class="fa-brands fa-html5 fa-3x html"></i>
                        <h5 className="skills__name">HTML</h5>
                    </div>
                    <div className="skills__data">
                        <i class="fa-brands fa-css3-alt fa-3x css"></i>
                        <h5 className="skills__name">CSS</h5>
                    </div>
                    <div className="skills__data">
                        <i class="fa-brands fa-sass fa-3x scss"></i>
                        <h5 className="skills__name">SCSS</h5>
                    </div>
                    <div className="skills__data">
                        <i class="fa-brands fa-js fa-3x javascript"></i>
                        <h5 className="skills__name">Javascript</h5>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-typescript bx-lg typescript'></i>
                        <h5 className="skills__name">Typescript</h5>
                    </div>
                    <div className="skills__data">
                        <i class="fa-brands fa-react fa-3x react"></i>
                        <h5 className="skills__name">React</h5>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-redux bx-lg redux'></i>
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
                        <i class='bx bxl-tailwind-css bx-lg tailwind'></i>
                        <h5 className="skills__name">tailwind</h5>
                    </div>
                    <div className="skills__data">
                        <i class="fa-brands fa-bootstrap fa-3x bootstrap"></i>
                        <h5 className="skills__name">Bootstrap</h5>
                    </div>
                </div>
            </div>

            {/* Back-End Skills
            =============================================================== */}
            <div className="skills__inner-box">
                <h4 className="skills__title2">・Back-End・</h4>
                <div className="skills__group skills_backend">
                    <div className="skills__data">
                        <i class="fa-brands fa-node-js fa-3x nodejs"></i>
                        <h5 className="skills__name">Node.js</h5>
                    </div>
                    <div className="skills__data">
                        <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" className="express" alt="" />
                        <h5 className="skills__name">Express</h5>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-mongodb bx-lg mongodb'></i>
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
                        <i class="fa-brands fa-java fa-3x java"></i>
                        <h5 className="skills__name">Java</h5>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-postgresql bx-lg postgressql'></i>
                        <h5 className="skills__name">Postgres SQL</h5>
                    </div>
                </div>
            </div>

            {/* Other Skills for Web Development
            =============================================================== */}
            <div className="skills__inner-box">
                <h4 className="skills__title2">・Other・</h4>
                <div className="skills__group other_4_webDev">
                    <div className="skills__data">
                        <i class="fa-brands fa-github fa-3x github"></i>
                        <h5 className="skills__name">Github</h5>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxs-terminal bx-lg terminal'></i>
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
  )
}

export default Webdevelopment