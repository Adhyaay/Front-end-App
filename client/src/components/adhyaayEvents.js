import React from 'react';

class AdhyaayEvents extends React.Component{
    scroller = React.createRef();
    targetFirst = React.createRef();
    targetSecond = React.createRef();
    targetThird = React.createRef();
    state={
            scrollPosition: 0
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

    render(){
        return(
            <div className='events-wrapper' ref={this.scroller}>
                <div className='scroll-wrapper' ></div>
                <div className='fixed-div'>
                    <div className='events-section' ref={this.targetFirst}>
                        <div className='section1'>
                            <div className='section1-content'>
                                event1
                            </div>
                            
                        </div>
                        <div className='section2'>
                            <div className='section2-content'>
                                event2
                            </div>
                        </div>
                        <div className='section3'>
                            <div className='section3-content'>
                                event7
                            </div>
                        </div>
                    </div>
                    <div className='events-section' >
                        <div className='events-section--container' ref={this.targetSecond} >
                            <div className='section3'>
                                event8
                            </div>
                            <div className='section1'>
                                event4
                            </div>
                            <div className='section2'>
                                event3
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='events-section' ref={this.targetThird} >
                    <div className='section1'>
                            event5
                        </div>
                        <div className='section2'>
                            event6
                        </div>
                        <div className='section3'>
                            event9
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdhyaayEvents;