import React from 'react';

import EventViewer from '../eventViewer';
import history from "../history";
import axios from "axios";
import { connect } from "react-redux";





//images
import breakTheCodeImage from '../../images/central-stage/smart-city.jpeg';
import dazzelCodeImage from '../../images/central-stage/tech-expo.jpeg';
import NCLImage from '../../images/central-stage/think.jpeg';

class CentralStageEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [breakTheCodeImage, dazzelCodeImage, NCLImage],
            eventNames: ['Smart City', 'Tech Expo', 'Think Before Throw'],
            eventTime: ['1:30 PM & 2:30 PM', '8:30 AM', '-'],
            eventDate: ['Day 2 & Day 3', 'Day 3', '-'],
            eventVenue: ['Civil Dept.', 'Main Building', 'Civil Dept.'],
            eventCoordinators:[
                [
                    {
                      name: "Rohit Yadav",
                      phone: "9793626076"
                    },
                    {
                      name: "Uvansh Srivastava",
                      phone: "8303899558"
                    },
                    {
                      name: "Shubhangi Rathi",
                      phone: "838488107"
                    }
                  ],
                  [
                    {
                      name: "Harshit Dubey",
                      phone: "7355166409"
                    },
                    {
                      name: "Yashdeep Yadav",
                      phone: "9660786533"
                    },
                    {
                      name: "Ajit Singh",
                      phone: "7351987812"
                    }
                  ],
                  [
                    {
                        name: "Vinay Kr. Tiwari",
                        phone: "8173943642"
                      },
                      {
                        name: "Tanya Gupta",
                        phone: "9260982358"
                      },
                    {
                      name: "Saloni Maurya",
                      phone: "8840722481"
                    }
                  ]
            ],
            eventDescription:[
               "Participants will be asked to create a map of city which will\
               have some basic requirements such as hospitals, fire\
               station etc. Winner will be decided according to\
               requirements fulfilled and to the conscience of jury.",
               "Tech expo shall be the display of exquisite and complete\
               technical skills.\
               Students from college as well as outside shall put their\
               complete working model/ working prototype and display the\
               operation to a jury panel consisting of faculty from different\
               departments. The criteria will be basically the level of tech\
               used, exclusiveness, ease of working, output of demo\
               operation and explanation and answers provided by the\
               exhibitor to the jury. It will be completely to the conscience of\
               the jury.",
               "In this event participants has to make a productive thing from\
               garbage like plastic, paper, etc. judging will be done according to\
               he idea. Students can participate in the team of 3 to 4 members."
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
                this.targetSecond.current.style.bottom = `${this.state.scrollPosition*(-1)}px`;
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
        this.props.buttonHide();
    }

    back = () => {
        this.setState({ viewEvent: false})
        this.props.buttonDisplay();
    }

    next = () => {
        if(this.state.event < 8){
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
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller diversos' ></div></div>
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
  )(CentralStageEvents);