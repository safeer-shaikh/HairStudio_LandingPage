import React from 'react'
import BarLogo from '../../Assets/Images/menu.png'
// import CrossLogo from '../../Assets/Images/close.png'
export default function SideNav() {

    const openClose=()=>{
        if(document.getElementById('sideNav').style.right == '-250px'){
            document.getElementById('sideNav').style.right='0';
            // document.getElementById('menu').src = {CrossLogo};
        }else{
            document.getElementById('sideNav').style.right = '-250px';
            // document.getElementById('menu').src = {BarLogo};
        }
    }

    return (
        <>
        <div id='sideNav'>
            <nav>
                <ul>
                    <li><a href='#banner'>HOME</a></li>
                    <li><a href='#feature'>FEATURES</a></li>
                    <li><a href='#service'>SERVICES</a></li>
                    <li><a href='#testimonial'>TESTIMONIALS</a></li>
                    <li><a href='#footer'>MEET US</a></li>
                </ul>
            </nav>
        </div>
        <div id='menuBtn' onClick={()=>openClose()}>
            <img src={BarLogo} alt='Close Button' id='menu' />
        </div>
        </>
    )
}
