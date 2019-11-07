import React from 'react';

import EventViewer from '../eventViewer';
import history from "../history";
import axios from "axios";
import { connect } from "react-redux";





//images
import breakTheCodeImage from '../../images/design/bridge.jpeg';
import dazzelCodeImage from '../../images/design/city-maestro.jpeg';
import NCLImage from '../../images/design/egg-drop.jpeg';

class DesignEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [breakTheCodeImage, dazzelCodeImage, NCLImage],
            eventNames: ['Bridge It Up', 'City Maestro', 'Egg Drop Challenge'],
            eventTime: ['12:00 PM', '-', '10:00 AM'],
            eventDate: ['Day 1', '-', 'Day 1'],
            eventVenue: ['Civil Dept.', 'Civil Dept.', 'Infront of DSW Office'],
            eventCoordinators:[
                [
                    {
                      name: "Shruti Raypa",
                      phone: "8318807207"
                    },
                    {
                      name: "Mahima Rajput",
                      phone: "7235890260"
                    },
                    {
                      name: "Amrisha Srivastva",
                      phone: "9870798930"
                    }
                  ],
                  [
                    {
                      name: "Rahil Ushmani",
                      phone: "9519970808"
                    },
                    {
                      name: "Anshika Pipal",
                      phone: "7895614438"
                    },
                    {
                      name: "Ashtha Kapoor",
                      phone: "7392821617"
                    }
                  ],
                  [
                    {
                      name: "Shakti Singh Patel",
                      phone: "7275655323"
                    },
                    {
                      name: "Harshvardhan",
                      phone: "8090465846"
                    },
                    {
                      name: "Vanshika Poddar",
                      phone: "9696446948"
                    },
                    {
                        name: "Devesh Jadwani",
                        phone: "9453153307"
                    }
                  ]
            ],
            eventDescription:[
               "An event in which knowledge of mechanics and structure\
               analysis of frames and truss is going to be tested. Contestants\
               have to build a bridge from ice-cream sticks and it will be\
               tested for how much load it can take. Winner will be declared\
               based on fair play and strength of the bridge.",
               "Participants will be asked to create a map of city which will\
               have some basic requirements such as hospitals, fire\
               station etc. Winner will be decided according to\
               requirements fulfilled and to the conscience of jury.",
               "As the name suggests, the basic idea is to create a platform\
               on which eggs will be dropped from a certain height and it\
               should not break from the impact. The participant will be\
               declared winner based on fair play and conscience of judges."
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
  )(DesignEvents);