import React from 'react'
import Logo from '../../Assets/Images/logo.png'
import './Header.css'
import SideNav from './SideNav'
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <section id='banner'>
                <img src={Logo} alt='logo' className='logo' />
                <div className='banner-text'>
                    <h1>Hair Studio</h1>
                    <p>Style Your Hair Is Style Your Life </p>
                    <div className='banner-btn'>
                        <Router>
                            <Link to='#'><span></span>Find Out</Link>
                            <Link to='#'><span></span>Read More</Link>
                        </Router>
                    </div>
                </div>
            </section>
            <SideNav />
        </div>
    )
}
