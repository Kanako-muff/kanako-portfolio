import React from 'react'
import Typed from 'typed.js'

const Data = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-end Developer.', 'Web Designer.', 'Graphic Designer.'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="home__data">
        <h1 className="home__title">KATE KAWAKAMI</h1>
        <span className="home__subtitle" ref={el} />
        <p className="home__description">Loving front-end development, from design to coding. Specialize in simple, easy-to-understand, and stylish designs. Passionate in React, Photoshop, Illustrator and Figma.</p>
        <a href="#contact" className="button button--flex">
            Say Hello&nbsp;
            <i className="fa-regular fa-paper-plane"></i>
        </a>
    </div>
  )
}

export default Data
