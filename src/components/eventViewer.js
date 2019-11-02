import React from 'react';

//images
import arrowImage from '../images/arrow.png';

class EventViewer extends React.Component{
    renderCoordinators = () => {
        const length = this.props.coordinator.length;
        return this.props.coordinator.map( (el) => { 
            return(
                <div className='event-viewer--coordinators-wrapper-coordinator' style={{ width: `calc(100%/${length})`}}>
                    {el.name && <span className='event-viewer--coordinators-wrapper-coordinator-name'>{el.name}</span>}
                    {el.name && <span className='event-viewer--coordinators-wrapper-coordinator-post'>Event Co-ordinator</span>}
                    <span className='event-viewer--coordinators-wrapper-coordinator-contact'>
                        <a href={`tel:${el.phone}`}>{el.phone}</a>
                    </span>
                </div>
            )

        })
    }

    render(){
        return(
            <div className='event-viewer'style={{ backgroundImage : `url(${this.props.image})`}}>
                <button className='back-button' onClick={this.props.back}> <img src={arrowImage} alt='back' /> </button>
                <div className='event-viewer--header' >
                    <div className='event-viewer--header-container'>
                        <span className='event-viewer--header-container--heading'>{this.props.name}</span>
                        <button className='register'>Register</button>
                    </div>
                </div>
                <div className='event-viewer--about'>
                    <span className='event-viewer--about-heading'>About <span className='event-viewer--about-heading-second'>Event</span></span>
                    <div className='event-viewer--about-description'>
                        {this.props.description}
                    </div>
                    <div className='event-viewer--about-details-wrapper'>
                        <div className='event-viewer--about-details-wrapper-details'>
                            <span className='event-viewer--about-details-wrapper-details-value'>09-11-2019</span>
                            <span className='event-viewer--about-details-wrapper-details-name'>Date</span>
                        </div>
                        <div className='event-viewer--about-details-wrapper-details'>
                            <span className='event-viewer--about-details-wrapper-details-value'>{this.props.venue}</span>
                            <span className='event-viewer--about-details-wrapper-details-name'>Venue</span>
                        </div>
                        <div className='event-viewer--about-details-wrapper-details'>
                            <span className='event-viewer--about-details-wrapper-details-value'>09:00</span>
                            <span className='event-viewer--about-details-wrapper-details-name'>Time</span>
                        </div>
                    </div>
                </div>
                <div className='event-viewer--coordinators'>
                    <div className='event-viewer--coordinators-heading'>
                        Contact <span className='event-viewer--coordinators-heading-second'>Us</span>
                    </div>
                    <div className='event-viewer--coordinators-wrapper'>
                        {this.renderCoordinators()}
                    </div>
                </div>
                {this.props.note && <div className='event-viewer--note'>
                        <span className='event-viewer--note-heading'>Note :</span>
                        <span className='event-viewer--note-content'>{this.props.note}</span>
                </div>}
                <div className='event-viewer--links'>
                    <div className='event-viewer--links-register'>
                        <button className='register'>Register</button>
                    </div>
                    <div className='event-viewer--links-events'>
                        <button className='previous' onClick={this.props.previous}>Previous</button>
                        <button className='next' onClick={this.props.next}>Next</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default EventViewer;