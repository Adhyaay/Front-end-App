import React from 'react';

import EventViewer from './eventViewer';
import history from "./history";
import axios from "axios";
import { connect } from "react-redux";


//images
import dashRaceImage from '../images/hobby/dash-race.jpg';
import expressoImage from '../images/hobby/expresso.jpg';
import facePaintingImage from '../images/hobby/face-painting.jpg';
import frogRaceImage from '../images/hobby/frog-race.jpg';
import gullyCricketImage from '../images/hobby/gully-cricket.jpg';
import gullyFootballImage from '../images/hobby/gully-football.jpg';
import khoKhoImage from '../images/hobby/kho-kho.jpg';
import lemonSpoonRace from '../images/hobby/lemon-spoon-race.jpg';
import livingOnTheEdgeImage from '../images/hobby/living-on-the-edge.jpg';
import minuteToWinItImage from '../images/hobby/minute-to-win-it.jpg';
import murderMysteryImage from '../images/hobby/murder-mystery.jpg';
import musicalChairImage from '../images/hobby/musical-chair.jpeg';
import pehchankaunImage from '../images/hobby/pehchan-kaun.jpg';
import pubgImage from '../images/hobby/pubg.jpg';
import sackRaceImage from '../images/hobby/sack-race.jpg';
import scavengerHuntImage from '../images/hobby/scavenger-hunt.jpg';
import threeLeggedRaceImage from '../images/hobby/three-legged-race.jpg';
import triviaImage from '../images/hobby/trivia.jpg';
import tugOfWarImage from '../images/hobby/tug-of-war.jpg';



class HobbyEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [dashRaceImage, expressoImage, facePaintingImage, frogRaceImage, gullyCricketImage, gullyFootballImage, khoKhoImage, lemonSpoonRace, livingOnTheEdgeImage, minuteToWinItImage, murderMysteryImage, musicalChairImage, pehchankaunImage, pubgImage, sackRaceImage, scavengerHuntImage, threeLeggedRaceImage, triviaImage, tugOfWarImage],
            eventNames: ['Dash Race', 'Expresso', 'Face Painting', "Frog Race", 'Gully Cricket', 'Gully Football', 'Kho Kho', 'Lemon Spoon', 'Living On The Edge', 'Minute To Win It', 'Murder Mystery', 'Musical Chairs', 'Pehchan Kaun', 'PubG', 'Sack Race', 'Beg, Borrow Or Steal', 'Three Legged Race', 'Trivia', 'Dum Laga Ke Haisa'],
            eventVenue: ['BE/FT Lawn', 'Infront of Main Building', 'Infront of Main Building', 'BE/FT Lawn', 'Lawn Tennis Ground', 'Lawn Tennis Ground', 'BE/FT Lawn', 'BE/FT Lawn', 'BE/FT Lawn', 'Infront of Main Building', 'Infront of Main Building', 'Canteen', 'Infront of Main Building', 'Civil Department', 'BE/FT Lawn', 'BE/FT Lawn', 'BE/FT Lawn', 'Infront of Main Building', 'BE/FT Lawn'],
            eventCoordinators:[
                [
                    {
                      name: "Harshvardhan",
                      phone: "7830080357"
                    },
                    {
                      name: "Avantika Singh Parihar",
                      phone: "7376851380"
                    },
                    {
                      name: "Nikita Devi",
                      phone: "9810809853"
                    }
                  ],
                  [
                    {
                      name: "Deeksha Lala",
                      phone: "8935031035"
                    },
                    {
                      name: "Ritika Maurya",
                      phone: "7408115660"
                    },
                    {
                      name: "Parvika Gupta",
                      phone: "9045421736"
                    },
                    {
                      name: "Krati Bharti",
                      phone: "9559800788"
                    }
                  ],
                  [
                    {
                      name: "Stuti Saini",
                      phone: "6398113411"
                    },
                    {
                      name: "Parvika Gupta",
                      phone: "9045421736"
                    }
                  ],
                  [
                    {
                      name: "Manya Pandey ",
                      phone: "6393227629"
                    },
                    {
                      name: "Anurag Yadav",
                      phone: "9456447767"
                    },
                    {
                      name: "Shashwat",
                      phone: "7390809099"
                    }
                  ],
                  [
                    {
                      name: "Deepak Yadav",
                      phone: "8299708935"
                    },
                    {
                      name: "Pranjal Shukla",
                      phone: "8696458611"
                    },
                    {
                      name: "Rohit",
                      phone: "9354717504"
                    },
                    {
                      name: "Ritika Maurya",
                      phone: "Ritika Maurya"
                    }
                  ],
                  [
                    {
                      name: "Divyansh Tripathi",
                      phone: "8299848712"
                    },
                    {
                      name: "Milind Kaushal",
                      phone: "9582053354"
                    },
                    {
                      name: "Shiv Tomar",
                      phone: "9675798707"
                    }
                  ],
                  [
                    {
                      name: "Krishnam Dhawan",
                      phone: "7379739956"
                    },
                    {
                      name: "Ritika Maurya",
                      phone: "7408115660"
                    },
                    {
                      name: "Archit Garg",
                      phone: "9452396775"
                    }
                  ],
                  [
                    {
                      name: "Ritu Singh ",
                      phone: "8400193611"
                    },
                    {
                      name: "Muskaan Dubey",
                      phone: "9129176677"
                    },
                    {
                      name: "Shiksha Dwivedi",
                      phone: "6388543320"
                    }
                  ],
                  [
                    {
                      name: "Kajal Sahu",
                      phone: "7733991675"
                    },
                    {
                      name: "Amaan Anjum ",
                      phone: "9473904707"
                    }
                  ],
                  [
                    {
                        name: "Amaan Anjum ",
                        phone: "9473904707"
                    }
                  ],
                  [
                    {
                      name: "Aayush Gupta",
                      phone: "9599492231"
                    },
                    {
                      name: "Abhishek Chaudhary",
                      phone: "7302182930"
                    },
                    {
                      name: "Akashdeep",
                      phone: "9354054362"
                    }
                  ],
                  [
                    {
                      name: "Satyam Kumar",
                      phone: "9984103106"
                    },
                    {
                      name: "Saumya Chaudhary",
                      phone: "7905235485"
                    },
                    {
                      name: "Aakriti Kaithwas",
                      phone: "7571039324"
                    }
                  ],
                  [
                    {
                      name: "Yashvi Jain",
                      phone: "8004164516"
                    },
                    {
                      name: "Saransh Bhardwaj",
                      phone: "8840493395"
                    },
                    {
                      name: "Deeksha Lala",
                      phone: "8935031035"
                    }
                  ],
                  [
                    {
                      name: "Parth Shukla",
                      phone: "7408938703"
                    },
                    {
                      name: "Harsh Verma",
                      phone: "6386182610"
                    },
                    {
                      name: "Deepak Yadav",
                      phone: "8127926008"
                    }
                  ],
                  [
                    {
                      name: "Richa Singh",
                      phone: "8318538099"
                    },
                    {
                      name: "Upaggya Dixit",
                      phone: "9935685535"
                    },
                    {
                      name: "Priyanshi Omer",
                      phone: "9616201717"
                    }
                  ],
                  [
                    {
                      name: "Krati Bharti",
                      phone: "9559800788"
                    },
                    {
                      name: "Stuti Saini",
                      phone: "6398113419"
                    },
                    {
                      name: "Jaya Tomar",
                      phone: "9760334951"
                    }
                  ],
                  [
                    {
                      name: "Avantika Singh Parihar",
                      phone: "7376851380"
                    },
                    {
                      name: "Ayush Panday",
                      phone: "6388872090"
                    },
                    {
                      name: "Akshay",
                      phone: "6387690292"
                    }
                  ],
                  [
                    {
                      name: "Abhinav Mehrotra",
                      phone: "9682465510"
                    },
                    {
                      name: "Samyak Srivastava",
                      phone: "08004001517"
                    }
                  ],
                  [
                    {
                      name: "Amaan Anjum ",
                      phone: "9473904707"
                    },
                    {
                      name: "Vaishnavi Sachan ",
                      phone: "6307097848"
                    },
                    {
                      name: "Aagman Dwivedi",
                      phone: "7266832256"
                    }
                  ]
            ],
            eventDescription:[
                "It is a multi-tasking event race. It consists of various stages which includes various fun and awesome tasks to complete the race. It will be one of the most awaited events of the day.",
                "It is an event which amplifies and tests your marketing skills. Participants (team of 4) will be provided with a product which they need to sell to the given list of persons provided. The team with the most selling points wins.",
                "Team consists of two members in which one will paint on the face of the other. Show your creativity that flows through your veins and brushes ",
                "Participants need to jump like a frog and reach the finishing line",
                "Simple cricket with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)",
                "Simple football with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)",
                "Ever played Kho-Kho before? Make your team and come to play the most adrenaline filled game.",
                "Presenting you the one of the interested events of the day. Participants will be provided a spoon and a lemon and they need to race with each other balancing the lemon on spoon and spoon being hold in the mouth.",
                "An event which tests your all-round strength in every field. It includes task doing capability, your emotional and external strength, intelligence and knowledge. Participants are allowed to participate in solo and need to clear all the stages to proceed further.",
                "Bunch of fun games with the sole purpose of entertainment will be organized for the students. So it’s just a minute to win it. ",
                "An event which shows your investigation skills along with the presence of mind. Participants(team of 4) will be provided with clues and hints to solve a crime or murder mystery and find the weapon used. The team to solve the mystery in minimum time duration lifts the title.",
                "A simple fun event where some chairs will be kept and music will be played, when the music stops the participants will have to be seated on the chairs and one will be left out and knocked out. One chair is removed after every round. And the person who survives till last wins",
                "Each participant will be given a set of instructions regarding a particular Harcourtian. Using the clues he/she has to find that Harcourtian and get a selfie. Better Luck!!! ",
                "Come and show your talents in gaming if that’s what you are fond of. Beat your opponent in your particular game of interest and finally the title is all yours",
                "It is a fun event in which participants need to race with other opponents but with the legs inside a sack. The first one to cross the finish line wins",
                "Participants (team of 4) will be provided with a list of some objects which they need to collect in a given time slot. The team who reaches first with the maximum no. of items will win the game",
                "Presenting you the race on three legs. Yes ever imagined two persons with three legs, each participant’s (team of 2) one leg is tied together and they need to race with other opponents to cross the finish line.",
                "Come and show your knowledge in fields of movies, sports, science, TV series and much more. It will be a quiz competition with more fun and twists and tasks",
                "Participants (team of 6) are provided with a rope with a line of reference. The team who drags the opposite team in their area wins and proceeds further for the final round. Don't forget to plant your feet and pull until your last breath."
      
            ],
            eventNote:[
              " This is a Team Event. A Team of 3 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              " This is a Team Event. A Team of 4 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              " This is a Team Event. A Team of 2 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              ,
              " This is a Team Event. A Team of 4 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              " This is a Team Event. A Team of 4 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              " This is a Team Event. A Team of 6 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              ,
              ,
              ,
              " This is a Team Event. A Team of 4 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              ,
              " Individual or Team Event. you can also make onSpot Teams",
              ,
              " This is a Team Event. A Team of 4 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              " This is a Team Event. A Team of 3 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              ,
              " This is a Team Event. A Team of 6 members is required for this Event. Only Team leader needs to Register here. Please come along with your team at event spot",
              
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
        this.myInterval = setInterval( () => {
            if(this.state.scrollPosition !== this.scroller.current.scrollTop){
                if(this.state.scrollPosition < this.scroller.current.scrollTop - 100){
                this.setState({ scrollPosition: this.state.scrollPosition + height })
                }
                else if(this.state.scrollPosition > this.scroller.current.scrollTop){
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
        if(this.state.scrollPosition !== position ){
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

    onCancelClick = () => {
      this.setState({
        message: ""
      });
    };

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
        if(this.state.event < 18){
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
            mainevent: 'hobby',
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
                    note={this.state.eventNote[this.state.event]}
                />}
            { window.innerWidth > 620 ?
            <div className='events-wrapper' >
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller hobby' ></div></div>
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
                        <div className='section' id='7' style={{ backgroundImage : `url(${this.state.eventImages[6]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[6]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='7' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='10' style={{ backgroundImage : `url(${this.state.eventImages[9]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[9]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='10' onClick={this.viewEvent}>View Event</button>
                            </div>
                            
                        </div>
                        
                        
                        <div className='section' id='13' style={{ backgroundImage : `url(${this.state.eventImages[12]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[12]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='13' onClick={this.viewEvent}>View Event</button>
                            </div>
                            
                        </div>
                        <div className='section' id='16' style={{ backgroundImage : `url(${this.state.eventImages[15]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[15]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='16' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                    </div>
                    <div className='events-section' >
                        <div className='events-section--container' ref={this.targetSecond} >
                            <div className='section' id='17' style={{ backgroundImage : `url(${this.state.eventImages[16]})`}}>
                                <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[16]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='17' onClick={this.viewEvent}>View Event</button>
                            </div>
                            </div>
                            <div className='section' id='14' style={{ backgroundImage : `url(${this.state.eventImages[13]})`}}>
                                <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[13]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='14' onClick={this.viewEvent}>View Event</button>
                            </div>
                            </div>
                            <div className='section' id='11' style={{ backgroundImage : `url(${this.state.eventImages[10]})`}}>
                                <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[10]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='11' onClick={this.viewEvent}>View Event</button>
                            </div>
                            </div>
                            <div className='section' id='8' style={{ backgroundImage : `url(${this.state.eventImages[7]})`}}>
                                <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[7]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='8' onClick={this.viewEvent}>View Event</button>
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
                        <div className='section' id='9' style={{ backgroundImage : `url(${this.state.eventImages[8]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[8]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='9' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='12' style={{ backgroundImage : `url(${this.state.eventImages[11]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[11]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='12' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='15' style={{ backgroundImage : `url(${this.state.eventImages[14]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[14]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='15' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='18' style={{ backgroundImage : `url(${this.state.eventImages[17]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>{this.state.eventNames[17]}</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='18' onClick={this.viewEvent}>View Event</button>
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
                <div className='section' id='7'  style={{ backgroundImage : `url(${this.state.eventImages[6]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[6]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='7' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='8'  style={{ backgroundImage : `url(${this.state.eventImages[7]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[7]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='8' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='9'  style={{ backgroundImage : `url(${this.state.eventImages[8]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[8]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='9' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='10'  style={{ backgroundImage : `url(${this.state.eventImages[9]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[9]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='10' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='11'  style={{ backgroundImage : `url(${this.state.eventImages[10]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[10]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='11' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='12'  style={{ backgroundImage : `url(${this.state.eventImages[11]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[11]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='12' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='13'  style={{ backgroundImage : `url(${this.state.eventImages[12]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[12]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='13' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='14'  style={{ backgroundImage : `url(${this.state.eventImages[13]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[13]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='14' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='15'  style={{ backgroundImage : `url(${this.state.eventImages[14]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[14]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='15' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='16'  style={{ backgroundImage : `url(${this.state.eventImages[15]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[15]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='16' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='17'  style={{ backgroundImage : `url(${this.state.eventImages[16]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[16]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='17' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='18'  style={{ backgroundImage : `url(${this.state.eventImages[17]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[17]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='18' onClick={this.viewEvent}>View Event</button>
                    </div>
                </div>
                <div className='section' id='19'  style={{ backgroundImage : `url(${this.state.eventImages[18]})`}}>
                    <div className='section-content' >
                    <div className='section-content--title'>{this.state.eventNames[18]}</div>
                        
                    </div>
                    <div className='button' onClick={this.onClickEvent}>
                        <button id='19' onClick={this.viewEvent}>View Event</button>
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
)(HobbyEvents);