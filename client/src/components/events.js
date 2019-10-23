import React from 'react';

import AdhyaayEvents from './adhyaayEvents';

//images
import arrowImage from '../images/arrow.png';

class Events extends React.Component{
    state={
        className: null,
        timeOut: false
    }

    onClickFirstDiv = () => {
        this.setState({ className: 'first'});
        this.timeOut();
    }

    onClickSecondDiv = () => {
        this.setState({ className: 'second'})
    }

    onClickThirdDiv = () => {
        this.setState({ className: 'third'})
    }

    buttonClick = () => {
        this.setState({ className: null, timeOut: false })
    }

    timeOut = () => {
        setTimeout(() => { this.setState({ timeOut: true})}, 1000);
    }

    render(){
        return(
            <div className='events-page'>
                <div className={`councils ${this.state.className}`}  onClick={this.state.className === null ? this.onClickFirstDiv: null}>
                    <div className='content-wrapper'>
                        Adhyaay
                        { this.state.className && <button onClick={this.buttonClick}> <img src={arrowImage} alt='back' /> </button>}
                        { (this.state.className === 'first' && this.state.timeOut) && <AdhyaayEvents />}
                        
                    </div>
                </div>
                <div className={`councils ${this.state.className}`} onClick={this.state.className === null ? this.onClickSecondDiv: null}>
                    <div className='content-wrapper'>
                        Ruchihaar
                        { this.state.className &&<button onClick={this.buttonClick}> <img src={arrowImage} alt='back' /> </button>}
                    </div>
                </div>
                <div className={`councils ${this.state.className}`} onClick={this.state.className === null ? this.onClickThirdDiv: null}>
                    <div className='content-wrapper'>
                        Lit
                        { this.state.className && <button onClick={this.buttonClick}> <img src={arrowImage} alt='back' /> </button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;