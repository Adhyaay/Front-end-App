import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import MainLogo from './mainLogo';

import About from './about';
import Gallery from './gallery';
import Navbar from './navbar';
import Footer from './footer';
import Council from './council';


//images
import lightRaysImage from '../images/lightRays.png'


class Home extends React.Component{

    scroller = React.createRef();
    target = React.createRef();

    state={
        scrollPosition: 0
    }

    componentDidMount(){
        this.myInterval = setInterval( () => {
            if(this.state.scrollPosition !== this.scroller.current.scrollTop){
                if(this.state.scrollPosition < this.scroller.current.scrollTop){
                this.setState({ scrollPosition: this.state.scrollPosition + window.innerHeight })
                }
                else{
                    this.setState({ scrollPosition: this.state.scrollPosition - window.innerHeight })
                }
            }
        }, 1200)
    }

    componentDidUpdate(){
        const position = this.target.current.scrollTop;
        if(this.state.scrollPosition !== position ){
            console.log(this.state.scrollPosition);
            this.scroller.current.scrollTo(0, this.state.scrollPosition);
            this.target.current.scrollTo(0, this.state.scrollPosition);
        }
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }


    render(){
        return(
            // 
            <div className='body-wrapper' ref={this.target}>
                <div className='page-wrapper' ref={this.scroller}>
                    <div className='page-scroller' >

                    </div>
                </div>
                <Navbar />
                <div className='section-main'>
                    <div className='stars-wrapper'>
                        <div className='night'>
                            <div className='shooting_star'></div>
                            <div className='shooting_star'></div>
                            <div className='shooting_star'></div>
                        </div>
                    </div>
                    <div className='particle-js-wrapper'>
                    <MainLogo position={this.state.scrollPosition}/>
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 250,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1500
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "opacity": 0.02
                                },
                                "move": {
                                    "direction": "right",
                                    "speed": 0.05
                                },
                                "size": {
                                    "value": 1,
                                    // "random": true,
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": true
                        }} />
                    </div>
                    <div className='section-main--logo'>

                    </div>
                
                    <div className='section-main--title'>
                        <div className='section-main--title_letter'>
                            <span className='main'>A</span>
                            <span className='shadow'>A</span>
                        </div>
                        <div className='section-main--title_letter'>
                            <span className='main'>D</span>
                            <span className='shadow'>D</span>
                        </div>
                        <div className='section-main--title_letter'>
                            <span className='main'>H</span>
                            <span className='shadow'>H</span>
                        </div>
                        <div className='section-main--title_letter'>
                            <span className='main'>Y</span>
                            <span className='shadow'>Y</span>
                        </div>
                        <div className='section-main--title_letter'>
                            <span className='main'>A</span>
                            <span className='shadow'>A</span>
                        </div>
                        <div className='section-main--title_letter'>
                            <span className='main'>A</span>
                            <span className='shadow'>A</span>
                        </div>
                        <div className='section-main--title_letter'>
                            <span className='main'>Y</span>
                            <span className='shadow'>Y</span>
                        </div>
                        
                    </div>
                    <div className='rays-wrapper'>
                        <img src={lightRaysImage} alt='emiting rays' />
                    </div>
                    <div className='section-main--year'>
                        <div className='section-main--year-letters'> 
                            2K
                        </div>
                        <div className='section-main--year-letters'>
                            19
                        </div>
                    </div>
                    <div className='mountains'>
                        <div className='mountains-one'></div>
                        <div className='mountains-two'></div>
                        <div className='mountains-three'></div>
                    </div>
                    
                </div>
                <div className='section-about'>
                    <About />
                </div>
                <div className='section-gallery'>
                    <Gallery />
                </div>
                <div className='section-council'>
                    <Council />
                </div>
                <div className='section-footer'>
                    <Footer />
                </div>
            </div>
            // </div>
        );
    }
}

export default Home;