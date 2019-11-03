import React from 'react';

import EventViewer from './eventViewer';

//images
import bakhanImage from '../images/lit/bakhan.jpg';
import bangTheBenchImage from '../images/lit/bang-the-bench.jpg';
import chitrVichitrImage from '../images/lit/chitr-vichitr.jpeg';
import jamImage from '../images/lit/jam.jpg';
import jinglingImage from '../images/lit/jingling.jpg';
import kavyamayImage from '../images/lit/kavyamay.jpeg';
import litratiImage from '../images/lit/litrati.jpg';
import naziWolfImage from '../images/lit/nazi-wolf.jpeg';
import netaImage from '../images/lit/neta.jpg';
import posterImage from '../images/lit/poster.jpg';
import professorImage from '../images/lit/professor.jpg';
import quizImage from '../images/lit/quiz.jpg';
import situationReactionImage from '../images/lit/situation-reaction.jpg';
import slamPoetryImage from '../images/lit/slam-poetry.jpg';
import turnCoatImage from '../images/lit/turn-coat.jpg';


class LitEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0,
            viewEvent: false,
            event: null,
            eventImages: [bakhanImage, bangTheBenchImage, chitrVichitrImage, jamImage, jinglingImage, kavyamayImage, litratiImage, naziWolfImage, netaImage, posterImage, professorImage, quizImage, situationReactionImage, slamPoetryImage, turnCoatImage],
            eventNames: ['Bakhan', 'Bang The Bench', 'Chitr Vichitr', 'JAM', 'Jingling', 'Kavyamay', 'Mr. & Ms. Litrati', 'Nazi Wolf', 'Hmara Neta Kaisa Ho', 'Poster Presentation', 'Potential Professor', 'Quizes', 'Situation Reaction', 'Poesy Pinnacle', 'Turn Coat'],
            eventVenue: ['G-series', 'Civil seminar hall', 'FT Seminar Hall', 'Auditorium', '-', '-', 'Civil seminar hall', '-', 'BE Seminar Hall', '-', 'G- Series', '-', '-', 'Auditorium', '-'],
            eventCoordinators:[
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ],
                [
                    {
                      name: "Contact:",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    },
                    {
                      name: "Contact",
                      phone: "123456789"
                    }
                ]

            ],
            eventDescription:[
                "We are nothing but an amalgamation of short stories. Each day we live,we write a story",
                "Event to exhibit your spunky and spontaneous take on the topic and to prove your mettle against your opponent on the given topic",
                "Participants will be given a picture and they will have to write story or any poem about what they think the picture depicts.",
                "Can you speak without hesitation, repetition ,deviation ,fumbling and grammatical error straight for 60 seconds? If yes! Then lets JAM.",
                "Might not you be the fan of Mentos ,Vicco  or Nirma but you have grown up singing their melodies .Got the guts to challenge them? Come and then Jingle up and exhibit the marketing maniac inside you.",
                "‘Jaha na pahuche ravi waha pahuche kavi’ Likhne ka hai jajba wo bhi matrabhasha me to hai mauka aapke paas dikhao apni panktibaddh shabdo ki piroyi hui khoobsurat  mala ko aur bana do mahol ko kavyamay.",
                "Literary and quintessential personality quest ",
                "THINK YOU ARE THE BIGGEST GRAMMAR NAZI GANGSTA IN THE TOWN? You will be provided with content, you’ll have to spot the errors and correct them.",
                "Participants will choose a leader of their choice and Give a speech(HINDI & ENGLISH)",
                "The speed of light is faster than sound and thus eyes understand what ears can’t. Make a poster and speak your heart out on a given topic and let your words and strokes boom together",
                "Ever thought that the lectures you attend can be any more interactive? The competition to judge your creative communication skills on board with chalk and duster is corner around. Choose any topic under the sky from politics to religion or technology to astrology and let the professor inside you get recognized.",
                "When we go quizzing, we go in style, we set out the facts, play fair and avoid the ambiguity",
                " A questionnaire will be given and participants will have to answer how will they react in different situations. Short listing for the next round will be done based on the responses",
                "Bring your self- composed English composition and spread the fragrance of your words beyond the limits of firmament",
                "Turncoat is a rhetoric event where the speakers contradict themselves. The speaker starts by taking a stance on the topic and switches sides after a specific duration of time"
      
            ]


        }

    

    componentDidMount(){

        // this.myInterval = setInterval( () => {
        //     if(this.state.scrollPosition !== this.scroller.current.scrollTop){
        //     this.setState({ scrollPosition: this.scroller.current.scrollTop})
        //     }
        // }, 10);
      if(window.innerWidth > 620){
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
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    componentDidUpdate(){
      if(window.innerWidth > 620){
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
        this.setState({ viewEvent: true});
        this.props.buttonHide();
    }

    back = () => {
        this.setState({ viewEvent: false})
        this.props.buttonDisplay();
    }

    next = () => {
        if(this.state.event < 14){
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
            {
            window.innerWidth > 620 ?
            <div className='events-wrapper' >
                <div className='scroll-wrapper' ref={this.scroller}><div className='scroller lit' ></div></div>
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
                    </div>
                    <div className='events-section' >
                        <div className='events-section--container' ref={this.targetSecond} >
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

              </div>
            </div>
            }
            </>
        )
    }
}

export default LitEvents;