import React from 'react'

const Webdevelopment = () => {
  return (
    <div className="skill__content">
        <h3 className="skills__title">Web development</h3>
        <div className="skills__box">

            {/* Front-End Skills
            =============================================================== */}
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
                    {/* <i class='bx bxl-redux bx-lg redux'></i> */}
                    <h5 className="skills__name">Next.js</h5>
                </div>
                <div className="skills__data">
                    {/* <i class='bx bxl-redux bx-lg redux'></i> */}
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

            {/* Back-End Skills
            =============================================================== */}
            <div className="skills__group skills_backend">
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Node.js</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Express</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Mongo DB</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Mongoose</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Grafbase</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Java</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">SQL</h5>
                </div>
            </div>

            {/* Other Skills for Web Development
            =============================================================== */}
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
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">Vercel</h5>
                </div>
                <div className="skills__data">
                    <i class="fa-brands fa-html5 fa-3x html"></i>
                    <h5 className="skills__name">あともう一つデプロイなんだっけ？</h5>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Webdevelopment