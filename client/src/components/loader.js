import React from 'react';
import { TimelineMax } from 'gsap';

import ad3 from '../images/ado3.svg';
import ad4 from '../images/ado4.svg';
import ad5 from '../images/ado5.svg';
import ad6 from '../images/ado6.svg';
import ad7 from '../images/ado7.svg';

//  loading screen LOGO
class showLoader extends React.Component {

    logo3 = null;
    logo4 = null;
    logo5 = null;
    logo6 = null;
    logo7 = null;
    myTransition = new TimelineMax({repeat:-1,delay:0.5});

    // for trasitions
    componentDidMount(){
        this.myTransition.fromTo(this.logo3,0.7, {opacity:1}, {opacity:1});
        this.myTransition.fromTo(this.logo4,0.7, {opacity:0}, {opacity:1});
        this.myTransition.fromTo(this.logo5,0.7, {opacity:0}, {opacity:1});
        this.myTransition.fromTo(this.logo6,0.7, {opacity:0}, {opacity:1});
        this.myTransition.fromTo(this.logo7,0.7, {opacity:0}, {opacity:1});
        this.myTransition.to(this.logo3,0.1, {opacity:1}, {opacity:0.5});
    }

    render(){
        return(
            <div className="container1">
                <div className='logo-adhyaay' >
                    <img src={ad3} alt="Logan" className="logo" ref={img => this.logo3 = img } />
                    <img src={ad4} alt="Logan" className="logo" ref={img => this.logo4 = img } />
                    <img src={ad5} alt="Logan" className="logo" ref={img => this.logo5 = img } />
                    <img src={ad6} alt="Logan" className="logo" ref={img => this.logo6 = img } />
                    <img src={ad7} alt="Logan" className="logo" ref={img => this.logo7 = img } />
                </div> 
            </div> 
        );
    }
}

export default showLoader;