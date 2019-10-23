import React from 'react';
import Particles from 'react-particles-js';

//images
import lanternImage1 from '../images/lantern1.png';
import lanternImage2 from '../images/lantern2.png';
import lanternImage3 from '../images/lantern3.png';
import lanternImage4 from '../images/lantern4.png';
import glowImage from '../images/glow.png';
import hangingLanternImage from '../images/hangingLantern.png';

const About = (props) => {
    return(
        <>
            
            <div className='animation-wrapper'>
                <div className='particle-js-wrapper'>
                <Particles
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
                </div>
            
                <div className='image'>
                    <img src={lanternImage1} alt='lantern' />
                    <img src={glowImage} alt='glow' />
                </div>
                <div className='image'>
                    <img src={lanternImage2} alt='lantern' />
                    <img src={glowImage} alt='glow' />
                </div>
                <div className='image'>
                    <img src={lanternImage3} alt='lantern' />
                    <img src={glowImage} alt='glow' />
                </div>
                <div className='image'>
                    <img src={lanternImage4} alt='lantern' />
                    <img src={glowImage} alt='glow' />
                </div>

                <div className='image'>
                    <img src={glowImage} alt='lantern' />
                </div>
                <div className='image'>
                    <img src={glowImage} alt='lantern' />
                </div>
                <div className='image'>
                    <img src={glowImage} alt='lantern' />
                </div>
                <div className='image'>
                    <img src={glowImage} alt='lantern' />
                </div>
                <div className='image'>
                    <img src={glowImage} alt='lantern' />
                </div>
            </div>
            <div className='section-content'>
                <div className='decoration-wrapper'>
                    <img src={hangingLanternImage} alt='hanging lantern' />
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                    <div className='image'>
                        <img src={glowImage} alt='lantern' />
                    </div>
                </div>
                <div className='section-title'>
                    <span className='section-title--text'>
                        ABOUT <br /> US
                    </span>
                </div>
                <div className='main-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </>
    )
}

export default About;