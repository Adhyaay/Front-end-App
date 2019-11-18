import React from 'react';
import Particles from 'react-particles-js';

//images
import footerImage from '../images/footer.png';

const Footer = (props) => {
    return(
        <>
            <div className='particle-js-wrapper'>
            {window.innerWidth > 620 && <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "color" : {
                                "value": "#D4AF37"
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />
                }
                </div>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <div className="logo"></div>
                </div>

                <div className="footer-center">
                    <span className='heading'>Contact Us</span>                    
                    <div className='contact-wrapper'>
                        <div>
                            <i className="fa fa-phone"></i>
                            <p>
                                <a href='tel:7417770521' target='_blank'>
                                    <span className='contact-name'>Ayush Kumar</span>
                                    <span className='contact-number'>9044467841</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='contact-wrapper'>
                            <div>
                                <i className="fa fa-phone"></i>
                                <p>
                                    <a href='tel:7417770521' target='_blank'>
                                        <span className='contact-name'>Shivam Kumar</span>
                                        <span className='contact-number'>7417770521</span>
                                    </a>
                                </p>
                            </div>
                        </div>

                </div>


                <div className="footer-right">
                    <div>
                        <span className='heading'>Get Direction</span>
                        <a href='https://goo.gl/maps/RiTDdsiFwGZVuqE36' target='_blank'>
                        <i className="fa fa-map-marker"></i>
                        <p><span>HBTU,Nawabganj</span> Kanpur, India</p>
                        </a>
                    </div>
                    
                        {/* <p className="footer-links">
                            <a href="#">Login</a>
                            
                            <a href="#">Register</a>
                            
                            <a href="#">Events</a>
                            
                            <a href="#">Team</a> 
                        </p> */}

                        {/* <p className="footer-company-name">copyright &copy; 2019</p> */}
                    

                    
                </div>
                <img src={footerImage} alt='celebration' />

                </footer>
        </>
    )
}

export default Footer;