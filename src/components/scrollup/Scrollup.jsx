import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll", function(){
        const scrollUP = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUP.classList.add("show-scroll");
        else scrollUP.classList.remove("show-scroll");
    })
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scrollup