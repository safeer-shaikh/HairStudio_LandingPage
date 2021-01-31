import React from 'react'
import './Services.css'
import Service1 from '../../Assets/Images/pic-1.jpg';
import Service2 from '../../Assets/Images/pic-2.jpg';
import Service3 from '../../Assets/Images/pic-3.jpg';
import Service4 from '../../Assets/Images/pic-4.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Services() {
    return (
        <>
            <section id='service'>
                <div className='title-text'>
                    <p>SERVICES</p>
                    <h1>We Provide Better</h1>
                </div>
                <div className='service-box'>
                    <div className='single-service'>
                        <img src={Service1} alt='Service-1' />
                        <div className='overlay'></div>
                        <div className='service-desc'>
                            <h3>Hair Styling</h3>
                            <hr />
                            <p>This is test under description of barber 
                            foundation this is test under description</p>
                        </div>
                    </div>
                    <div className='single-service'>
                        <img src={Service2} alt='Service-2' />
                        <div className='overlay'></div>
                        <div className='service-desc'>
                            <h3>Beared Trim</h3>
                            <hr />
                            <p>This is test under description of barber 
                            foundation this is test under description</p>
                        </div>
                    </div>
                    <div className='single-service'>
                        <img src={Service3} alt='Service-3' />
                        <div className='overlay'></div>
                        <div className='service-desc'>
                            <h3>Hair Cut</h3>
                            <hr />
                            <p>This is test under description of barber 
                            foundation this is test under description</p>
                        </div>
                    </div>
                    <div className='single-service'>
                        <img src={Service4} alt='Service-4' />
                        <div className='overlay'></div>
                        <div className='service-desc'>
                            <h3>Dry Shampoo</h3>
                            <hr />
                            <p>This is test under description of barber 
                            foundation this is test under description</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
