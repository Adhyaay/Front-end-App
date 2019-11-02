import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state= {
        navClassName: null
    }

    onClickNavButton = () => {
        if( this.state.navClassName === null){
            this.setState({ navClassName: 'change'});
        }else{
            this.setState({ navClassName: null});
        }
    }

    render(){
        return(
            <div className='navbar'>
                <div className={`nav-button ${this.state.navClassName}`} onClick={this.onClickNavButton} >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={`navbar-wrapper ${this.state.navClassName}`}>
                    <div className={`nav-button`} onClick={this.onClickNavButton} >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                    </div>
                    <ul>
                    <Link to='/' className='link'>
                        <li className='special'>Register</li>
                    </Link>
                    <Link to='/' className='link'>
                        <li>Home</li>
                    </Link>
                    <Link to='/events' className='link'>
                        <li>Events</li>
                    </Link>
                    <Link to='/' className='link'>
                        <li>Sponsers</li>
                    </Link>
                    <Link to='/' className='link'>
                        <li>Team</li>
                    </Link>
                    <Link to='/' className='link'>
                        <li>Login</li>
                    </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;