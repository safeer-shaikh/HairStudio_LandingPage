import React from 'react'
import './Features.css'
import barberImage from '../../Assets/Images/barber-man.jpg'
export default function Features() {
    return (
        <div>
            <section id='feature'>
                <div className='title-text'>
                    <p>FEATURES</p>
                    <h1>Why Choose Us</h1>
                </div>
                <div className='feature-box'>
                    <div className='features'>
                        <h1>Experienced Staff</h1>
                        <div className='features-desc'>
                            <div className='feature-icon'>
                                <i className="far fa-shield-alt"></i>
                            </div>
                            <div className='feature-text'>
                                <p>You are at the right place now elts get started with the best level of hair cutting </p>
                            </div>
                        </div>
                        <h1>Pre Booking Online</h1>
                        <div className='features-desc'>
                            <div className='feature-icon'>
                                <i class="far fa-check-square"></i>                           
                            </div>
                            <div className='feature-text'>
                                <p>You are at the right place now elts get started with the best level of hair cutting </p>
                            </div>
                        </div>
                        <h1>Affordable Cost</h1>
                        <div className='features-desc'>
                            <div className='feature-icon'>
                                <i class="far fa-dollar-sign"></i>                            
                            </div>
                            <div className='feature-text'>
                                <p>You are at the right place now elts get started with the best level of hair cutting </p>
                            </div>
                        </div>
                    </div>
                    <div className='feature-img'>
                        <img src={barberImage} alt='barber man' />
                    </div>
                </div>
            </section>
        </div>
    )
}
