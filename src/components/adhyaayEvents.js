import React from 'react';

import EventViewer from './eventViewer';

//images
import rapBattleImage from '../images/adhyaay/rap-battle.jpg';
import standUpImage from '../images/adhyaay/stand-up.jpg';
import fashionImage from '../images/adhyaay/fashion.jpg';
import gotTalentImage from '../images/adhyaay/got-talent.jpg';
import openMicImage from '../images/adhyaay/open-mic.jpg';
import sargamImage from '../images/adhyaay/sargam.jpeg';
import groupDanceImage from '../images/adhyaay/group-dance.gif';
import danceFaceOffImage from '../images/adhyaay/dance-faceoff.jpeg';
import sumoImage from '../images/adhyaay/sumo.jpg';


class AdhyaayEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [rapBattleImage, standUpImage, fashionImage, gotTalentImage, openMicImage, sargamImage, groupDanceImage, danceFaceOffImage, sumoImage],
            eventNames: ['Rap Battle', 'Comique', 'Defile De Moda', "HBTU's Got Talent", 'Open Mic', 'Sargam', 'Danse De Groupe', 'Dance Face Off', 'Sumo Wrestling'],
            eventVenue: ['Auditorium', 'Auditorium', 'Auditorium', 'BE/FT Lawn', 'BE/FT Lawn', 'Auditorium', 'Auditorium', '-', '-'],
            eventCoordinators:[
                [
                    {
                      name: "Ayushi Seth",
                      phone: "7014797937"
                    },
                    {
                      name: "Siddhi Sharma",
                      phone: "9870698949"
                    },
                    {
                      name: "Rishab Shukla",
                      phone: "8787236589"
                    }
                  ],
                  [
                    {
                      name: "Adishree",
                      phone: "9598644255"
                    },
                    {
                      name: "Priyanshu",
                      phone: "8756645595"
                    },
                    {
                      name: "Kanchan",
                      phone: "8299740931"
                    }
                  ],
                  [
                    {
                      name: "Disha",
                      phone: "8707054840"
                    }
                  ],
                  [
                    {
                      name: "Rishabh Shukla",
                      phone: "8787236589"
                    },
                    {
                      name: "Nikita Singh",
                      phone: "8318721284"
                    }
                  ],
                  [
                    {
                      name: "Adishree",
                      phone: "9598644255"
                    },
                    {
                      name: "Priyanshu",
                      phone: "8756645595"
                    },
                    {
                      name: "Kanchan",
                      phone: "8299740931"
                    }
                  ],
                  [
                    {
                      name: "Ashtha Gaur",
                      phone: "8318283637"
                    },
                    {
                      name: "Divyank",
                      phone: "8953598218"
                    }
                  ],
                  [
                    {
                      name: "Pranav Tyagi",
                      phone: "9540957752"
                    },
                    {
                      name: "Nikita Chaudhary",
                      phone: "9412226665"
                    },
                    {
                      name: "Rikki Chauhan",
                      phone: "7985924803"
                    }
                  ],
                  [
                    {
                      name: "Pranav Tyagi",
                      phone: "9540957752"
                    },
                    {
                      name: "Nikita Chaudhary",
                      phone: "9412226665"
                    },
                    {
                      name: "Rikki Chauhan",
                      phone: "7985924803"
                    }
                  ],
                  [
                    {
                      name: "Nikita Singh",
                      phone: "9554957217"
                    },
                    {
                      name: "Anchi Rai",
                      phone: "8004523955"
                    },
                    {
                      name: "Ayushi Seth",
                      phone: "7014797937"
                    },
                    {
                      name: "Siddhi Sharma",
                      phone: "9870698949"
                    }
                  ]
            ],
            eventDescription:[
                "This is the clash of hearts, the war of bragging, the fight of serenity, the conflicts of words. HBTU is organising Rap Battle and Beat Boxing for all those vocal artists out there. Unveil the best mix of music and lyrics in you and fight this war to prove yourself.",
                "Stand-Up Comedy is a comic style in which a comedian will be performing in front of live audience, usually speaking directly to them.",
                "Fashion is a way to speak who you are without having to speak. With the adage”Classy and Fabulous”on back of your minds, we have this event planned out to cater to the fashionista in all of us.Gorgeous females sizzle the ramp with their display of sensational apparels, radiating confidence and mystique and sculpted males. ",
                "A singer? A dancer? Love mimicking? A poet? We appreciate every form of talent. So come and show us what you've got! The best talent gets to win exciting goodies! Gear up and smash the stage with that talent ",
                "Open mic is an event where anyone can grab the mic and perform. The performer is handed the mic to perform live on the stage in front of the audience. The event is focussed on performance arts like poetry, song, stand-up comedy etc. ",
                "Billy Joel says-“I think music in itself is healing. It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.” Here’s an opportunity to get on stage and tell you story through your singing . It’s a singing contest. If you believe in yourself then come compete with the elite. You can sing and play an instrument. Just be your best self and the own the stage ",
                "Dancers are instruments, like a piano, the choreographer plays. So, come prepared with your groups to make an everlasting impression on the audience in the cultural night ",
                "Dance like no one is watching. Dance to random songs and compete with others. Let's see who has got the best instant moves ",
                "This is the game of technique and power.Two persons dressed with an enormous thong pushing each other inside a small ring “dohyo” . And by making your opponent touch the ground with any part of the body other than soles of feet or forcing him out of sumo ring you will become champion ",
      
            ]


        }

    

    componentDidMount(){

        // this.myInterval = setInterval( () => {
        //     if(this.state.scrollPosition !== this.scroller.current.scrollTop){
        //     this.setState({ scrollPosition: this.scroller.current.scrollTop})
        //     }
        // }, 10);

        this.myInterval = setInterval( () => {
            if(this.state.scrollPosition !== this.scroller.current.scrollTop){
                if(this.state.scrollPosition < this.scroller.current.scrollTop){
                this.setState({ scrollPosition: this.state.scrollPosition + window.innerHeight })
                }
                else{
                    this.setState({ scrollPosition: this.state.scrollPosition - window.innerHeight })
                }
            }
        }, 1000);
        
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    componentDidUpdate(){
        const position = this.targetFirst.current.scrollTop;
        if(this.state.scrollPosition !== position ){
            console.log(this.state.scrollPosition);
            this.scroller.current.scrollTo(0, this.state.scrollPosition);
            this.targetFirst.current.scrollTo(0, this.state.scrollPosition);
            this.targetSecond.current.scrollTo(0, this.state.scrollPosition);
            this.targetThird.current.scrollTo(0, this.state.scrollPosition);
            this.targetSecond.current.style.bottom = `${this.state.scrollPosition*(-1)}px`;
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

    render(){
        return(
            <>
            {this.state.viewEvent && 
                <EventViewer  
                    back={this.back}
                    next={this.next}
                    previous={this.previous}
                    image={this.state.eventImages[this.state.event]} 
                    name={this.state.eventNames[this.state.event]} 
                    venue={this.state.eventVenue[this.state.event]} 
                    coordinator={this.state.eventCoordinators[this.state.event]} 
                    description={this.state.eventDescription[this.state.event]}
                />}
            <div className='events-wrapper' >
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller adhyaay' ></div></div>
                <div className='fixed-div'>
                    <div className='events-section' ref={this.targetFirst}>
                        <div className='section' id='1'  style={{ backgroundImage : `url(${this.state.eventImages[0]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>Rap Battle</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='1' onClick={this.viewEvent}>View Event</button>
                            </div>
                            
                        </div>
                        <div className='section' id='4' style={{ backgroundImage : `url(${this.state.eventImages[3]})`}}>
                        <div className='section-content' >
                                <div className='section-content--title'>HBTU Got Talent</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='4' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='7' style={{ backgroundImage : `url(${this.state.eventImages[6]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>Danse De Groupe</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='7' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                    </div>
                    <div className='events-section' >
                        <div className='events-section--container' ref={this.targetSecond} >
                            <div className='section' id='8' style={{ backgroundImage : `url(${this.state.eventImages[7]})`}}>
                                <div className='section-content' >
                                <div className='section-content--title'>Dance Face Off</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='8' onClick={this.viewEvent}>View Event</button>
                            </div>
                            </div>
                            <div className='section' id='5' style={{ backgroundImage : `url(${this.state.eventImages[4]})`}}>
                                <div className='section-content' >
                                    <div className='section-content--title'>Open Mic</div>
                                    
                                </div>
                                <div className='button' onClick={this.onClickEvent}>
                                    <button id='5' onClick={this.viewEvent}>View Event</button>
                                </div>
                            </div>
                            <div className='section' id='2' style={{ backgroundImage : `url(${this.state.eventImages[1]})`}}>
                                <div className='section-content' >
                                    <div className='section-content--title'>Comique</div>
                                    
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
                                <div className='section-content--title'>Defile De Moda</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='3' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='6' style={{ backgroundImage : `url(${this.state.eventImages[5]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>Sargam</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='6' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                        <div className='section' id='9' style={{ backgroundImage : `url(${this.state.eventImages[8]})`}}>
                            <div className='section-content' >
                                <div className='section-content--title'>Sumo Wrestling</div>
                                
                            </div>
                            <div className='button' onClick={this.onClickEvent}>
                                <button id='9' onClick={this.viewEvent}>View Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default AdhyaayEvents;