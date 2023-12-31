import React, { useState } from 'react'
import "./header.css"

const Header = () => {
    /* Change Background Header
    =============================================================== */    
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /* Toggle Menu
    =============================================================== */
    const[Toggle, showMenu] = useState(false);
    // const[activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">K▲TE</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        {/* <a 
                            href="#home" 
                            onClick={() => setActiveNav("#home")} 
                            className={
                                activeNav === "#home" ? "nav__link active-link hover-underline-animation active-nav-weight"
                                : "nav__link"
                            }
                        > */}
                            <a href="#home" className="nav__link  hover-underline-animation">
                            <i className="uil uil-estate nav__icon"></i>
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link  hover-underline-animation">
                            <i className="uil uil-user nav__icon"></i>
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link  hover-underline-animation">
                            <i className="uil uil-file-alt nav__icon"></i>
                            Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link  hover-underline-animation">
                            <i className="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link  hover-underline-animation">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                    <li className="nav__item">
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                            <label class="btn btn-outline-primary btn_color" for="btnradio1">ENG</label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                            <label class="btn btn-outline-primary btn_color" for="btnradio3">JPN</label>
                        </div>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header