import React from 'react';
import Particles from 'react-particles-js';

import Counter from './counter';

//images
import lanternImage1 from '../images/lantern1.png';
import lanternImage2 from '../images/lantern2.png';
import lanternImage3 from '../images/lantern3.png';
import lanternImage4 from '../images/lantern4.png';
import glowImage from '../images/glow.png';
import hangingLanternImage from '../images/hangingLantern.png';
import hangingLanternImage2 from '../images/hangingLantern2.png';

const About = (props) => {
    return(
        <>
            
            <div className='animation-wrapper'>
                <div className='particle-js-wrapper'>
                {window.innerWidth > 620 && <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 360,
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
                    // : <Particles
                    // params={{
                    //     "particles": {
                    //         "number": {
                    //             "value": 160,
                    //             "density": {
                    //                 "enable": false
                    //             }
                    //         },
                    //         "color" : {
                    //             "value": "#D4AF37"
                    //         },
                    //         "size": {
                    //             "value": 3,
                    //             "random": true,
                    //             "anim": {
                    //                 "speed": 4,
                    //                 "size_min": 0.3
                    //             }
                    //         },
                    //         "line_linked": {
                    //             "enable": false
                    //         },
                    //         "move": {
                    //             "random": true,
                    //             "speed": 1,
                    //             "direction": "top",
                    //             "out_mode": "out"
                    //         }
                    //     },
                    //     "interactivity": {
                    //         "events": {
                    //             "onhover": {
                    //                 "enable": true,
                    //                 "mode": "bubble"
                    //             },
                    //             "onclick": {
                    //                 "enable": true,
                    //                 "mode": "repulse"
                    //             }
                    //         },
                    //         "modes": {
                    //             "bubble": {
                    //                 "distance": 250,
                    //                 "duration": 2,
                    //                 "size": 0,
                    //                 "opacity": 0
                    //             },
                    //             "repulse": {
                    //                 "distance": 400,
                    //                 "duration": 4
                    //             }
                    //         }
                    //     }
                    // }} />
                }
                </div>
            
                {/* <div className='image'>
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
                </div> */}
            </div>
            <div className='section-content'>
                <div className='decoration-wrapper'>
                    {window.innerWidth < 620 ? <img src={hangingLanternImage2} alt='hanging lantern' /> : <img src={hangingLanternImage} alt='hanging lantern' />}
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
                        <span className='section-title--text-primary'>About Us</span >
                        {/* <span className='section-title--text-secondary'>Us</span> */}
                    </span>
                </div>
                <div className='main-content'>
                The wise have spoken and the plethora of events have been set. 
                We have fastened our seatbelts and advise the same as the launch is near. 
                Let us take you on an astral journey of psychedelic bliss and glee. 
                As Adhyaay19 unravels, its boarders will find exhilarating competition, entrancing talent, and gripping showbiz on their voyage. 
                We’ll climb through stairway to heaven and chase down the highway to hell. 
                We’ll witness the magic of Kavya Sandhya, mesmerising moments of celebrity night, and pulse synchronising EDM concert. 
                Join us on our expedition and you might unfold the best moments of your college life. 
                Get on board voyagers! 
                And count down to the dates 

                </div>
                <div className='countdown'>
                    <Counter />
                </div>
            </div>
        </>
    )
}

export default About;