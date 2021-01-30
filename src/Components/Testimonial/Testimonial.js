import React from 'react'
import './Testimonial.css'
import user1 from '../../Assets/Images/img-1.jpg';
import user2 from '../../Assets/Images/img-2.jpg';
import user3 from '../../Assets/Images/img-3.jpg';
export default function Testimonial() {
    return (
        <>
            <section id='testimonial'>
                <div className='title-text'>
                    <p>TESTIMONIAL</p>
                    <h1>What Client Says</h1>
                </div>
                <div className='testimonial-row'>
                    <div className='testimonial-col'>
                        <div className='user'>
                            <img src={user1} alt='user 1' />
                            <div className='user-info'>
                                <h4>KEN NORMAN<i class="fab fa-twitter"></i></h4>
                                <small>@kennorman</small>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, orci vel sagittis malesuada, libero augue
                        ornare orci, dignissim pretium lectus mauris eget arcu. Curabitur malesuada tristique iaculis. Donec eleifend sit
                        amet purus at luctus.</p>
                    </div>
                    <div className='testimonial-col'>
                        <div className='user'>
                            <img src={user2} alt='user 2' />
                            <div className='user-info'>
                                <h4>LIARA KARIAN<i class="fab fa-twitter"></i></h4>
                                <small>@liarakarien</small>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, orci vel sagittis malesuada, libero augue .</p>
                    </div>
                    <div className='testimonial-col'>
                        <div className='user'>
                            <img src={user3} alt='user 3' />
                            <div className='user-info'>
                                <h4>Ricky Daniel<i class="fab fa-twitter"></i></h4>
                                <small>@rickydaniel</small>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, orci vel sagittis malesuada, libero augue
                        ornare orci, dignissim pretium lectus mauris eget arcu. Curabitur malesuada tristique iaculis. Donec eleifend sit
                        amet purus at luctus.</p>
                    </div>
                </div>
            </section>   
        </>
    )
}
