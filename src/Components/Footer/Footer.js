import React from 'react'
import './Footer.css'
import FooterImage from '../../Assets/Images/footer-img.png' 
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <section id='footer'>
                <img src={FooterImage} className='footer-img' />
                <div className='title-text'>
                    <p>CONTACT</p>
                    <h1>Visit Shop Today</h1>
                </div>
                <div className='footer-row'>
                    <div className='footer-left'>
                        <h1>Opening Hours</h1>
                        <p><i class="fal fa-clock"></i>Monday to Friday - 9am to 9pm</p>
                        <p><i class="fal fa-clock"></i>Saturday to Sunday - 8am to 11pm</p>
                    </div>
                    <div className='footer-right'>
                        <h1>Get In Touch</h1>
                        <p>#30 abc Colony, xyz City IN<i class="fal fa-map-marker-alt"></i></p>
                        <p>example@website.com<i class="fal fa-link"></i></p>
                        <p>+90123456789<i class="fal fa-phone"></i></p>
                    </div>
                </div>
                <div className='social-links'>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                    <p>Copyright &copy; Safeer Shaikh</p>
                </div>
            </section>   
        </>
    )
}
