import  React, { useState } from 'react'
import BarLogo from '../../Assets/Images/menu.png'
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
export default function SideNav() {

    const [visiblity, setvisiblity] = useState('');
    const setStyle = () => {
        if (visiblity == '') {
            setvisiblity('navSee');
        }else{
            setvisiblity('');
        }
    };

    return (
        <>
        <div id='sideNav' className={visiblity}>
            <Router>
            <nav>
                <ul>
                    <li><Link to='#banner'><span></span>HOME</Link></li>
                    <li><Link to='#feature'><span></span>FEATURES</Link></li>
                    <li><Link to='#service'><span></span>SERVICES</Link></li>
                    <li><Link to='#testimonial'><span></span>TESTIMONIALS</Link></li>
                    <li><Link to='#footer'><span></span>MEET US</Link></li>
                </ul>
            </nav>
            </Router>
        </div>
        <div id='menuBtn' onClick={()=>setStyle()}>
            <img src={BarLogo} alt='Close Button' id='menu' />
        </div>
        </>
    )
}
