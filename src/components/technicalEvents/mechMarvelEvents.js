import React from 'react';

import EventViewer from '../eventViewer';
import history from "../history";
import axios from "axios";
import { connect } from "react-redux";





//images
import aeronaveImage from '../../images/mechmarvel/aeronave.jpg';
import armageddonImage from '../../images/mechmarvel/armageddon.jpeg';
import blazingWheelImage from '../../images/mechmarvel/blazing-wheel.jpeg';
import freeFlyImage from '../../images/mechmarvel/free-fly.jpeg';
import waterRocketImage from '../../images/mechmarvel/water-rocket.jpeg';

class MechMarvelEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [aeronaveImage, armageddonImage, blazingWheelImage, freeFlyImage, waterRocketImage],
            eventNames: ['Aeronave', 'Armageddon', 'Blazing Wheels', "Free Fly", 'Water Rocket'],
            eventTime: ['9:30 AM', '4:30 PM/4:00 PM', '1:00 PM', '8:30 AM', '7:00 AM'],
            eventDate: ['Day 1', 'Day 2 & Day 3', 'Day 2', 'Day 1', 'Day 1'],
            eventVenue: ['Ramanujan Ground', 'Tennis Ground', 'Behind Auditorium', 'Ramanujan Ground', 'Ramanujan Ground', 'Auditorium', 'Auditorium', '-', '-'],
            eventCoordinators:[
                [
                    {
                      name: "Kavish Rana",
                      phone: "9599304977"
                    },
                    {
                      name: "Aayush Agarwal",
                      phone: "7355727646"
                    },
                    {
                      name: "Deepsikha Singh",
                      phone: "6306965078"
                    }
                  ],
                  [
                    {
                      name: "Piyush Verma",
                      phone: "8318690201"
                    },
                    {
                      name: "Sanskriti Sharma",
                      phone: "9260962763"
                    },
                    {
                      name: "Anjali Singh",
                      phone: "8853134605"
                    },
                    {
                        name: "Ritesh Mishra",
                        phone: "8004677499"
                    }
                  ],
                  [
                    {
                      name: "Astha Sharma",
                      phone: "7007019667"
                    },
                    {
                      name: "Rinku Yadav",
                      phone: "7374092573"
                    },
                    {
                      name: "Manish Yadav",
                      phone: "6394311376"
                    },
                    {
                        name: "Utkarsh Somvanshi",
                        phone: "7376360140"
                    }
                  ],
                  [
                    {
                      name: "Aman Khare",
                      phone: "7023513189"
                    },
                    {
                      name: "Kashi Nath Tripathi",
                      phone: "7355928864"
                    },
                    {
                      name: "Mayank Singh",
                      phone: "9120067347"
                    }
                  ],
                  [
                    {
                      name: "Hari Pandey",
                      phone: "9936776029"
                    },
                    {
                      name: "Shraddha Yadav",
                      phone: "9984856567"
                    },
                    {
                      name: "Shalini Gautam",
                      phone: "8429354661"
                    },
                    {
                      name: "Vivek Maurya",
                      phone: "7880966406"
                    }
                  ]
            ],
            eventDescription:[
               "Here comes Adhyaay-2019 with Aeronave- an event providing all the aeromodellers a platform to quench their dreams of flying an aircraft. An event where we call upon engineers and aero designers to design an electric powered RC aircraft and put their skills and technicality to the test. So, give your imaginations wings. Build your own RC aircraft and sour high up in sky.",
                "Witness sparks fly as metal crushes metal in the most glorious robot battles interspersed with magnificent artist performances for non-stop entertainment. Stay tuned and brace yourselves to be a part of robotic extravaganza at HBTU this year!",
                "This is a track event. Put your engineering and coding skills to attest by building a wired or wireless bot that will run on our custom designed track but beware, the track will be filled with various fixed and moving obstacles on which the robot will have to overcome. And failing to do so many incur in penalties it’s a race so judging will be done based on points scored and time taken.",
                "The competition involves RC aircraft with electric motors. The competition provides a platform to compete for different flyers through a series of different rounds doing different manoeuvres and showing their talent in flying like payload dropping, limbo flying and on spot landing. The competition is launched with the vision to provide a unified national platform for students interested in aerospace and related engineering disciplines - to demonstrate their aero-modelling expertise",
                "A water rocket is a type of model rocket using water as its reaction mass. The water is forced out by a pressurized gas, typically compressed air. Like all rocket engines, it operates on the principle of Newton's third law of motion. Build your own water rocket using few common objects and let it shoot to the sky to cross the orbit."
            ]


        }

    

    componentDidMount(){

        // this.myInterval = setInterval( () => {
        //     if(this.state.scrollPosition !== this.scroller.current.scrollTop){
        //     this.setState({ scrollPosition: this.scroller.current.scrollTop})
        //     }
        // }, 10);
        if(window.innerWidth > 620){
            const height = document.querySelector('.fixed-div').clientHeight;
            console.log(height)
            this.myInterval = setInterval( () => {
                if(this.state.scrollPosition !== this.scroller.current.scrollTop){
                    if((this.state.scrollPosition  ) < this.scroller.current.scrollTop - 100){
                    this.setState({ scrollPosition: this.state.scrollPosition + height })
                    
                    }
                    else if((this.state.scrollPosition ) > this.scroller.current.scrollTop){
                        this.setState({ scrollPosition: this.state.scrollPosition - height })
                    }
                }
            }, 1000);
        }
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    componentDidUpdate(){
        if(window.innerWidth > 620){
            const position = this.targetFirst.current.scrollTop;
            const height = document.querySelector('.fixed-div').clientHeight;
            if(this.state.scrollPosition !== position ){
                console.log(this.state.scrollPosition);
                this.scroller.current.scrollTo(0, this.state.scrollPosition);
                this.targetFirst.current.scrollTo(0, this.state.scrollPosition);
                this.targetSecond.current.scrollTo(0, this.state.scrollPosition);
                this.targetThird.current.scrollTo(0, this.state.scrollPosition);
                // this.targetSecond.current.style.bottom = `${this.state.scrollPosition*(-1)}px`;
            }
        }
    }

    handleScroll = (event) => {
        // let scrollTop = this.scroller.current.pageYOffset;
        // this.setState({ scrollPosition : scrollTop});
        // console.log(this.state.scrollPosition);

        
    }

    onClickEvent = (e) => {
        // console.log(e.target.id);
        this.setState({ event: e.target.id -1})
    }

    viewEvent = () => {
        this.setState({ viewEvent: true})
    }

    back = () => {
        this.setState({ viewEvent: false})
    }

    next = () => {
        if(this.state.event < 4){
            this.setState({ event: this.state.event +1 })
        }
        document.querySelector('.event-viewer').scrollTo(0,0);
    }

    previous = () => {
        if( this.state.event > 0){
            this.setState({ event: this.state.event - 1 })
        }
        document.querySelector('.event-viewer').scrollTo(0,0);
    }

    onCancelClick = () => {
      this.setState({
        message: ""
      });
    };
  

    onRegisterClick = () => {
        const { isAuthenticated, user } = this.props;
    
        if (!isAuthenticated) {
          history.push("/login");
        } else {
          const self = this;
          axios
            .post("https://gentle-dusk-33875.herokuapp.com/api/event/register", {
              email: user.email,
              event: this.state.eventNames[this.state.event],
              mainevent: 'technical',
              name: user.name,
              phone: user.phone
            })
            .then(function(res) {
              self.setState({
                message: res.data.message
              });
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      }

    render(){
        return(
            <>
            {this.state.viewEvent && 
                <EventViewer 
                    cancel={this.onCancelClick}
                    message={this.state.message}
                    registration={this.onRegisterClick} 
                    back={this.back}
                    next={this.next}
                    previous={this.previous}
                    image={this.state.eventImages[this.state.event]} 
                    name={this.state.eventNames[this.state.event]} 
                    venue={this.state.eventVenue[this.state.event]} 
                    coordinator={this.state.eventCoordinators[this.state.event]} 
                    description={this.state.eventDescription[this.state.event]}
                    date={this.state.eventDate[this.state.event]} 
                    time={this.state.eventTime[this.state.event]}
                />}
            {
            window.innerWidth > 620 ?
            <div className='events-wrapper' >
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller mech-marvel' ></div></div>
                <div className='fixed-div'>
                    <div className='events-section' ref={this.targetFirst}>
                        <div className='section' id='1'  style={{ backgroundImage : `url(${this.state.eventImages[0]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[0]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='1' onClick={this.viewEvent}>View Event</button>
                            </div>
                            
                        </div>
                        <div className='section' id='4' style={{ backgroundImage : `url(${this.state.eventImages[3]})`}}>
                        <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[3]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='4' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                    </div>
                    <div className='events-section' >
                        <div className='events-section--container' ref={this.targetSecond} >
                            <div className='section' id='2' style={{ backgroundImage : `url(${this.state.eventImages[1]})`}}>
                                <div className='section-content' >
                                    <div className='section-content--title'>{this.state.eventNames[1]}</div>
                                    
                                </div>
                                <div className='button' onClick={this.onClickEvent}>
                                    <button id='2' onClick={this.viewEvent}>View Event</button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='events-section' ref={this.targetThird} >
                        <div className='section' id='3' style={{ backgroundImage : `url(${this.state.eventImages[2]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[2]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='3' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='5' style={{ backgroundImage : `url(${this.state.eventImages[4]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[4]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='5' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className='events-wrapper'>
              <div className='events-wrapper--mobile'>
                <div className='section' id='1'  style={{ backgroundImage : `url(${this.state.eventImages[0]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[0]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='1' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='2'  style={{ backgroundImage : `url(${this.state.eventImages[1]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[1]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='2' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='3'  style={{ backgroundImage : `url(${this.state.eventImages[2]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[2]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='3' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='4'  style={{ backgroundImage : `url(${this.state.eventImages[3]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[3]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='4' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='5'  style={{ backgroundImage : `url(${this.state.eventImages[4]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[4]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='5' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
              </div>
            </div>
            }
            </>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(
    mapStateToProps,
    null
  )(MechMarvelEvents);