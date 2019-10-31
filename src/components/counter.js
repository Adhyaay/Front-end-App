import React from 'react';

class Counter extends React.Component{
    state={
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount(){
        const year = new Date().getFullYear();
        const ninthOfNov = new Date((year ), 10, 9).getTime();

        // countdown
        this.timer = setInterval(() => {
        const today = new Date().getTime();
        const diff = ninthOfNov - today;

        // math
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="balloon white">
                        <div className="star-red"></div>
                    <div className="face">
                        <div className="eye"></div>
                        <div className="mouth happy"></div>
                    </div>
                    <div className="triangle"></div>
                    <div className="string"></div>
                    </div>

                    <div className="balloon red">
                    <div className="star"></div>
                    <div className="face">
                        <div className="eye"></div>
                        <div className="mouth happy"></div>
                    </div>
                    <div className="triangle"></div>
                    <div className="string"></div>
                    </div>

                    <div className="balloon blue">
                    <div className="star"></div>
                    <div className="face">
                        <div className="eye"></div>
                        <div className="mouth happy"></div>
                    </div>
                    <div className="triangle"></div>
                    <div className="string"></div>
                    </div>
                    <div id="timer">
                        <div className='days'>
                            <div className='numbers'>{this.state.days}</div>
                            days
                        </div>
                        <div className='hours'>
                            <div className='numbers'>{this.state.hours}</div>
                            hours
                        </div>
                        <div className='minutes'>
                            <div className='numbers'>{this.state.minutes}</div>
                            minutes
                        </div>
                        <div className='seconds'>
                            <div className='numbers'>{this.state.seconds}</div>
                            seconds
                        </div>
                    </div>
                    </div>
            </>
        )
    }
}

export default Counter;