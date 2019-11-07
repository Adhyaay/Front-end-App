import React from 'react';

import EventViewer from '../eventViewer';
import history from "../history";
import axios from "axios";
import { connect } from "react-redux";





//images
import breakTheCodeImage from '../../images/gameOfCodes/break-the-code.jpeg';
import dazzelCodeImage from '../../images/gameOfCodes/dazzel-code.jpeg';
import NCLImage from '../../images/gameOfCodes/NCL.jpeg';
import programingDateImage from '../../images/gameOfCodes/programing-date.jpeg';
import RasterizeImage from '../../images/gameOfCodes/rasterize.jpeg';
import redPencilImage from '../../images/gameOfCodes/red-pencil.jpeg';
import swapifyImage from '../../images/gameOfCodes/swapify.jpeg';

class GameOfCodesEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [breakTheCodeImage, dazzelCodeImage, NCLImage, programingDateImage, RasterizeImage, redPencilImage, swapifyImage],
            eventNames: ['Break The Code', 'Dazzle Code', 'NCL', "Programming Date", 'Rasterize', 'Red Pencil', 'Swapify'],
            eventTime: ['10:30 AM', '3:00 PM & 1:00 PM', '9:00 PM & 2:30 PM', '2:00 PM', '11:45 AM', '2:00 PM', '12:00 PM'],
            eventDate: ['Day 1', 'Day 1 & Day 2', '08/11 & Day 2', 'Day 3', 'Day 2', 'Day 1','Day 3'],
            eventVenue: ['CSE Dept.', 'CSE Dept.', 'CSE Dept.', 'CSE Dept.', 'CSE Dept.', 'CSE Dept.', 'CSE Dept.'],
            eventCoordinators:[
                [
                    {
                      name: "Shivam negi",
                      phone: "7982357400"
                    },
                    {
                      name: "Prateek gupta",
                      phone: "9650147985"
                    },
                    {
                      name: "Shubham Athwani",
                      phone: "8707545977"
                    },
                    {
                        name: "Animesh Shukla",
                        phone: "9473999609"
                      }
                  ],
                  [
                    {
                      name: "Gaurang shukla",
                      phone: "9887816683"
                    },
                    {
                      name: "Siddharth",
                      phone: "9460555742"
                    },
                    {
                      name: "Kajal Shukla",
                      phone: "9415259115"
                    },
                    {
                        name: "Aviral Bajpai",
                        phone: "7905463658"
                    }
                  ],
                  [
                    {
                        name: "Shivam negi",
                        phone: "7982357400"
                      },
                      {
                        name: "Prateek gupta",
                        phone: "9650147985"
                      },
                      {
                        name: "Abhishek verma",
                        phone: "8112242035"
                      },
                      {
                          name: "Yatharth Maheshwari",
                          phone: "9756361188"
                      }
                  ],
                  [
                    {
                      name: "Anik Gupta",
                      phone: "8765893504"
                    },
                    {
                      name: "Ankit Gupta",
                      phone: "9473723424"
                    }
                  ],
                  [
                    {
                      name: "Sarthak",
                      phone: "7052510463"
                    },
                    {
                      name: "Varun",
                      phone: "6394211050"
                    },
                    {
                      name: "Sundaram Dubey",
                      phone: "8924896688"
                    },
                    {
                      name: "Mohd Afzal",
                      phone: "9889549891"
                    }
                  ],
                  [
                      {
                          name: 'Bhawna Golani',
                          phone: '8604615903'
                      },
                      {
                        name: 'Muskan Gangwar',
                        phone: '9412166447'
                      },
                      {
                          name: 'Saurabh',
                          phone: '8299844808'
                      },
                      {
                          name: "Varun",
                          phone: "6394211050"
                      }
                  ],
                  [
                      {
                          name: 'Animesh shukla',
                          phone: '9473999609'
                      },
                      {
                        name: 'Tripti gupta',
                        phone: '7007551242'
                      },
                      {
                          name: 'Dhairy tripathi',
                          phone: '9936790544'
                      },
                      {
                          name: "Vasu Agarwal",
                          phone: "9455077270"
                      }
                  ]
            ],
            eventDescription:[
               "In the first round, there will be a quiz from which 5 teams will\
               advance to next round. In 2nd round clues will be given which will\
               lead to other clues. In total there will be 5-6 clues and the team\
               solving the last clue first will win.",
               "In first round each participant will be given a code with\
               some errors. Participants will have to debug the code and\
               then write it with MONITOR OFF. 50 participants will\
               advance to the next round. In the next round a basic coding\
               problem will be given and winners will then be decided.\
               Ties will be broken by the amount of time taken.",
               "NCL is a two round event. The first online round will be a\
               Qualifier. Top 30 teams (at max) in the online round will\
               qualify for the onsite round.",
               "It’s a two round event. The first round will be a written round in\
               which a quiz related to coding as well as personal interest\
               combined will be conducted. Based on the answers given pairs of a\
               girl and a boy will be made. The second round will be Oral where\
               some task(problem based on code)is given to each pair. The pair\
               whose task will be most resonating will be the winner. It’s a date!",
               "In this event participants will get an opportunity to show off\
               their front-end web design skills (HTML/CSS/JAVASCRIPT).\
               All the participants will be shown a web design for a brief\
               time and will be provided all relevant data (dimensions, color\
               codes, etc).\
               They have to replicate the original web design. Participant\
               whose web design is closest to the original web design\
               in the beginning will be considered winner.",
               "This event will be organized in two phases.\
               First round : Participants will be given an idea. They have to\
               implement that idea into an Android Application, Based on their\
               app, they will be screened for the next round.\
               Second round : Selected participants will be given a code sample\
               of app. They have to debug the errors and winner will be decided\
               accordingly.",
               "There will be a team of 2 in this. Both the participants will\
               be made to sit in different rooms and separate questions\
               will be given to them. After 15-20 minutes they will be\
               swapped. The first one will now work on code of 2nd\
               person and vice versa. Team getting maximum points will\
               win. Ties will be broken by amount of time taken."
            ],
            registrationLink: "http://www.hackerrank.com/harcourtian-coding-league"


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
        if(this.state.event < 6){
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
                    registrationLink={this.state.registrationLink} 
                    event={this.state.event}
                    date={this.state.eventDate[this.state.event]} 
                    time={this.state.eventTime[this.state.event]}
                />}
            {
            window.innerWidth > 620 ?
            <div className='events-wrapper' >
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller game-of-code' ></div></div>
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
                            <div className='section' id='7' style={{ backgroundImage : `url(${this.state.eventImages[6]})`}}>
                                <div className='section-content' >
                                    <div className='section-content--title'>{this.state.eventNames[6]}</div>
                                    
                                </div>
                                <div className='button' onClick={this.onClickEvent}>
                                    <button id='7' onClick={this.viewEvent}>View Event</button>
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
                        <div className='section' id='6' style={{ backgroundImage : `url(${this.state.eventImages[5]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[5]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='6' onClick={this.viewEvent}>View Event</button>
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
                <div className='section' id='6'  style={{ backgroundImage : `url(${this.state.eventImages[5]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[5]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='6' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='7' style={{ backgroundImage : `url(${this.state.eventImages[6]})`}}>
                    <div className='section-content' >
                        <div className='section-content--title'>{this.state.eventNames[6]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='7' onClick={this.viewEvent}>View Event</button>
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
  )(GameOfCodesEvents);