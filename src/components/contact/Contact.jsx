import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css"

const Contact = () => {
    const form = useRef();

    // EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.sendForm(serviceId ,templateId , form.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    // React-Toastify
    const notify = () => toast("Thank you for your message!");


    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        {/* card Email */}
                        <div className="contact__card">
                            <i className="bx bx-mail-send content__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            {/* <span className="contact__card-data">kanako.design00@gmail.com</span> */}
                            <a href="mailto:kanako.design00@gmail.com" className="contact__button">
                                kanako.design00@gmail.com{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        {/* card Whatsapp */}
                        <div className="contact__card">
                            <i className='bx bxl-whatsapp-square content__card-icon'></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            {/* <span className="contact__card-data">+1(778)233-3497</span> */}
                            <a href="******" className="contact__button">
                                +1(778)233-3497{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        {/* card LinkedIn */}
                        <div className="contact__card">
                            <i className='bx bxl-linkedin-square content__card-icon'></i>
                            <h3 className="contact__card-title">LinkedIn</h3>
                            {/* <span className="contact__card-data"></span> */}
                            <a href="www.linkedin.com/in/kanako-kawakami-92868825a" className="contact__button">
                                Connect & Message me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Leave Me Your Message</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        {/* input Name */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Name"
                            />
                        </div>

                        {/* input Email */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Email address"
                            />
                        </div>

                        {/* textarea Message */}
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea 
                                name="message" 
                                id="" 
                                cols="30" 
                                rows="10"
                                className='contact__form-input'
                                placeholder="Write your message here!"
                            ></textarea>
                        </div>

                        <button href="#contact" onClick={notify} className="button button--flex">
                            Send Message&nbsp;
                            <i className="fa-regular fa-paper-plane"></i> 
                        </button>
                        <ToastContainer />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact