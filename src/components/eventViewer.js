import React from "react";
import M from "materialize-css";
import { useSwipeable, Swipeable } from 'react-swipeable';

//images
import arrowImage from "../images/arrow.png";
import arrowDownImage from '../images/arrow-down.png';

class EventViewer extends React.Component {
  componentDidMount() {
    M.AutoInit();
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  renderCoordinators = () => {
    const length = this.props.coordinator.length;
    return this.props.coordinator.map(el => {
      return (
        <div
          className="event-viewer--coordinators-wrapper-coordinator"
          style={
            window.innerWidth > 620
              ? { width: `calc(100%/${length})` }
              : { width: `100%` }
          }
        >
          {el.name && (
            <span className="event-viewer--coordinators-wrapper-coordinator-name">
              {el.name}
            </span>
          )}
          {el.name && (
            <span className="event-viewer--coordinators-wrapper-coordinator-post">
              Event Co-ordinator
            </span>
          )}
          <span className="event-viewer--coordinators-wrapper-coordinator-contact">
            <a href={`tel:${el.phone}`}>{el.phone}</a>
          </span>
        </div>
      );
    });
  };

  render() {
    return (
      <Swipeable 
          onSwipedRight={(event) => {
            console.log('swiped')
            this.props.previous();
          }}
          onSwipedLeft={(event) => {
            console.log('swiped')
            this.props.next();
          }}
        >
      <div
        className="event-viewer"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <button className="back-button" onClick={this.props.back}>
          {" "}
          <img src={arrowImage} alt="back" />{" "}
        </button>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content" style={{ background: "black" }}>
            {this.props.message ? (
              <p style={{ color: "red" }}>{this.props.message}</p>
            ) : (
              <p style={{ color: "red" }}>Please Wait</p>
            )}
            <br />
            <div className="row">
              <div className="col s6 btn-1">
                <button
                  href="#"
                  className="modal-close waves-effect waves-red btn-flat red btn-small"
                  onClick={this.props.cancel}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="event-viewer--header">
        
          <div className="event-viewer--header-container">
            <span className="event-viewer--header-container--heading">
              {this.props.name}
            </span>
            <button
              className="register modal-trigger"
              data-target="modal1"
              onClick={this.props.event === 2 ? this.props.registration : null}
            >
            {this.props.event === 2 ? <a href={this.props.registrationLink}> Register</a> : <p>Register</p> }
              
            </button>
            {this.props.event === 2 && this.props.name === 'NCL' ? 
            <a href={this.props.registrationLink} target="_blank">
            <button
              className="register"
              
            >
              Register
              
            </button>
            </a>
            :
            <button
              className="register modal-trigger"
              data-target="modal1" 
              onClick={this.props.registration}
            >
              Register
              
            </button>}
            <div className='arrow-down'>
              <img src={arrowDownImage} alt='Down' />
            </div>
          </div>
         
        </div>
      
        <div className="event-viewer--about">
          <span className="event-viewer--about-heading">
            About{" "}
            <span className="event-viewer--about-heading-second">Event</span>
          </span>
          <div className="event-viewer--about-description">
            {this.props.description}
          </div>
          <div className="event-viewer--about-details-wrapper">
            <div className="event-viewer--about-details-wrapper-details">
              <span className="event-viewer--about-details-wrapper-details-value">
                {this.props.date ? this.props.date : 'Contact Coordinator'}
              </span>
              <span className="event-viewer--about-details-wrapper-details-name">
                Date
              </span>
            </div>
            <div className="event-viewer--about-details-wrapper-details">
              <span className="event-viewer--about-details-wrapper-details-value">
                {this.props.venue}
              </span>
              <span className="event-viewer--about-details-wrapper-details-name">
                Venue
              </span>
            </div>
            <div className="event-viewer--about-details-wrapper-details">
              <span className="event-viewer--about-details-wrapper-details-value">
              {this.props.time ? this.props.time : 'Contact Coordinator'}
              </span>
              <span className="event-viewer--about-details-wrapper-details-name">
                Time
              </span>
            </div>
          </div>
        </div>
        <div className="event-viewer--coordinators">
          <div className="event-viewer--coordinators-heading">
            Contact{" "}
            <span className="event-viewer--coordinators-heading-second">
              Us
            </span>
          </div>
          <div className="event-viewer--coordinators-wrapper">
            {this.renderCoordinators()}
          </div>
        </div>
        {this.props.note && (
          <div className="event-viewer--note">
            <span className="event-viewer--note-heading">Note : </span>
            <span className="event-viewer--note-content">
               {this.props.note}
            </span>
          </div>
        )}
        <div className="event-viewer--links">
          <div className="event-viewer--links-register">
          {this.props.event === 2 && this.props.name === 'NCL' ? 
            <a href={this.props.registrationLink} target="_blank">
            <button
              className="register"
              
            >
              Register
              
            </button>
            </a>
            :
            <button
              className="register modal-trigger"
              data-target="modal1" 
              onClick={this.props.registration}
            >
              Register
              
            </button>}
          </div>
          <div className="event-viewer--links-events">
            <button className="previous" onClick={this.props.previous}>
              Previous
            </button>
            <button className="next" onClick={this.props.next}>
              Next
            </button>
          </div>
        </div>
      </div>
      </Swipeable>
    );
  }
}

export default EventViewer;
