import React from 'react';

import EventViewer from '../eventViewer';
import history from "../history";
import axios from "axios";
import { connect } from "react-redux";





//images
import anadigilogixImage from '../../images/electromania/anadigilogix.jpeg';
import circuitronImage from '../../images/electromania/circuitron.jpg';
import hoverManiaImage from '../../images/electromania/hover-mania.jpeg';
import lFRImage from '../../images/electromania/LFR.jpeg';
import manoeuvreImage from '../../images/electromania/manoeuvre.jpeg';
import roboSoccerImage from '../../images/electromania/robo-soccer.jpeg';

class ElectromaniaEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [anadigilogixImage, circuitronImage, hoverManiaImage, lFRImage, manoeuvreImage, roboSoccerImage],
            eventNames: ['Anadigilogix', 'Circuitron', 'Hovermania', "LFR", 'Manoeuvre', 'Robo Soccer'],
            eventTime: ['1:00 PM/2:00 PM', '3:00 PM', '2:30 PM', '12:00 PM', '3:30 PM', '5:30 PM'],
            eventDate: ['Day 1 & Day 2', 'Day 2', 'Day 2', 'Day 2', 'Day 1', 'Day 1'],
            eventVenue: ['Electronics Dept.', 'Electronics Dept.', 'Garden of Bliss', 'Electronics Dept.', 'Garden of Bliss', 'Garden of Bliss'],
            eventCoordinators:[
                [
                    {
                      name: "Anuj Lavaniya",
                      phone: "8840034042"
                    },
                    {
                      name: "Prapti Singh",
                      phone: "8218519151"
                    },
                    {
                      name: "Prateek Gupta",
                      phone: "9149191886"
                    }
                  ],
                  [
                    {
                      name: "Somya Sharma",
                      phone: "7905019146"
                    },
                    {
                      name: "Navya Saxena",
                      phone: "7355273177"
                    },
                    {
                      name: "Priyanka Gautam",
                      phone: "8795108046"
                    }
                  ],
                  [
                    {
                      name: "Armaan",
                      phone: "9682650783"
                    },
                    {
                      name: "Himanshi Paliwal",
                      phone: "8447768049"
                    },
                    {
                      name: "Nancy Singh",
                      phone: "8707501884"
                    },
                    {
                        name: "Harshit Dubey",
                        phone: "7355166409"
                    }
                  ],
                  [
                    {
                      name: "Tarun",
                      phone: "7234841966"
                    },
                    {
                      name: "Muskan Gangwar",
                      phone: "9412166447"
                    },
                    {
                      name: "Sagar Gupta",
                      phone: "8707420418"
                    }
                  ],
                  [
                    {
                      name: "Ankit Gupta",
                      phone: "9473723424"
                    },
                    {
                      name: "Gaurang Shukla",
                      phone: "9887816683"
                    },
                    {
                      name: "Prateek Gautam",
                      phone: "7054152154"
                    },
                    {
                      name: "Amit Kumar",
                      phone: "9548066805"
                    }
                  ],
                  [
                      {
                          name: 'Ayushi Seth',
                          phone: '7014797937'
                      },
                      {
                        name: 'Sagar Gupta',
                        phone: '8707420418'
                      },
                      {
                          name: 'Vidit Karan Bhargava',
                          phone: '8383842036'
                      }
                  ]
            ],
            eventDescription:[
                "The participants will be required to design a digital circuit\
                based on the given problem statement. The problem\
                statement could be similar to any real life situation. A team\
                comprises of 3-4 members. Requirements:\
                Digital electronics laboratory\
                Digital IC kit, electroniccomponents",
                "This event will be organised in two phases:\
                First round: It will be a multiple choice written test on basic\
                Electrical circuits. Those who will qualify the first round is\
                eligible for second round.\
                Second round: Participants will be provided with a problem\
                statement on the basic electronics circuits using electronic components. Each team comprises of two\
                students. Requirements:\
                Electronics simulation lab\
                Basic electronics components.",
                "Gear yourself up and get ready to build a wrestler that could\
                hover over surfaces whether it be water or land. Puff the\
                hovercraft with air and using the great aerodynamic design\
                and control wrestle against one other to fill the air with\
                intoxicating spirit of victory",
                "A line following robot is basically a robot designed to follow\
                a line or path predetermined by the user. In order these\
                lines various sensing schemes can be employed. Usually,\
                the visual line will be a black line on a white surface.\
                Students will participate in a team of 3-4. It is most basic\
                type of autonomous robot. It will require :\
                A large room with white surface\
                A pre-designed sheet black taped sheet.",
                "Bot giants pick and carry objects like a feather, but have\
                you ever considered the mini worker bots brawling to be\
                conscientiously victorious. Welcome to GripBix event under\
                Mech-Marvels. Train yourself along with the bot to cross\
                hurdles and rugged paths into an exciting adventure.\
                Compete to prove your Bot as most efficient, swift well\
                crafted bot.",
                "Design and build one manual/autonomous robot .Train it to be\
                the STRIKER, DEFENDER and GOALIE, Competent enough to\
                participate in the soccer match. The team with maximum goals\
                after the match will be the winner. Each team can have at most\
                three robots for the full tournament. So, get your manual robots\
                ready to compete in the World biggest Robo Soccer Challenge.",
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
        if(this.state.event < 5){
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
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller electromania' ></div></div>
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
  )(ElectromaniaEvents);