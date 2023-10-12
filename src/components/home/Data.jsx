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
        <h1 className="home__title">Kanako Kawakami</h1>
        <span className="home__subtitle" ref={el} />
        <p className="home__description">I transitioned from a web designer, where I used Photoshop/Illustrator and coded with HTML/CSS/JavaScript, to a full-stack developer through training at a Cornerstone College in Vancouver.</p>
        <a href="#contact" className="button button--flex">
            Say Hello&nbsp;
            <i className="fa-regular fa-paper-plane"></i>
        </a>
    </div>
  )
}

export default Data
