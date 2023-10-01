import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kanako</h1>
                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                    <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                    <li><a href="#contact" className="footer__link">Contact</a></li>
                </ul>
                <div className="footer__social">
                    <a href="https://github.com/Kanako-muff" className="footer__social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://dribbble.com/Kanako_k35" className="footer__social-link" target="_blank">
                        <i className="uil uil-dribbble"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kanako-kawakami-92868825a" className="footer__social-link" target="_blank">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/kana_coordinate" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
            <span className="footer__copy">©KanakoKawakami All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer