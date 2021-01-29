import React from 'react'
import Logo from '../../Assets/Images/logo.png'
import './Header.css'
import SideNav from './SideNav'
export default function Header() {
    return (
        <div>
            <section id='banner'>
                <img src={Logo} alt='logo' className='logo' />
                <div className='banner-text'>
                    <h1>Hair Studio</h1>
                    <p>Style Your Hair Is Style Your Life </p>
                    <div className='banner-btn'>
                        <a href='#'><span></span>Find Out</a>
                        <a href='#'><span></span>Read More</a>
                    </div>
                </div>
            </section>
            <SideNav />
        </div>
    )
}
