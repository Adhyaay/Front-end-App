import React from 'react';
// import MainLogo from '../images/test.svg';
import MainLogo2 from '../images/mainLogo.svg';


 class MainLogo extends React.Component{
    state = {
        addClassName : 'logo',
        position: this.props.position,
        prevPosition: 0
    }

    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    componentDidUpdate(){

        if(this.state.position !== this.props.position){
            this.setState({ position: this.props.position})
            const pageHeight = this.props.height;
            let scrollTop = this.props.position ;
                if(scrollTop > 100){
                    this.setState({
                        addClassName: 'logo aside'
                    });
                }
                if(scrollTop >= 4*pageHeight){
                    this.setState({
                        addClassName: 'logo footer'
                    });
                }
                if(scrollTop <= 100){
                    this.setState({
                        addClassName: 'logo'
                    });
                }
            
        }
        // const pageHeight = window.innerHeight;
        // let scrollTop = this.state.position;
        // if(scrollTop !== this.state.prevPosition){
        //     console.log('entered');
        //     if(scrollTop > 100){
        //         this.setState({
        //             addClassName: 'logo aside'
        //         });
        //     }
        //     if(scrollTop >= 4*pageHeight){
        //         console.log('true');
        //         this.setState({
        //             addClassName: 'logo footer'
        //         });
        //     }
        //     if(scrollTop <= 100){
        //         this.setState({
        //             addClassName: 'logo'
        //         });
        //     }
        //     this.setState({ prevPosition: this.props.position});
        // }
    }
    
    
    // handleScroll = (event) => {
    //     const pageHeight = window.innerHeight;
    //     let scrollTop = this.props.position;
    //     if(scrollTop > 100){
    //         this.setState({
    //             addClassName: 'logo aside'
    //         });
    //     }
    //     if(scrollTop >= 4*pageHeight){
    //         console.log('true');
    //         this.setState({
    //             addClassName: 'logo footer'
    //         });
    //     }
    //     if(scrollTop <= 100){
    //         this.setState({
    //             addClassName: 'logo'
    //         });
    //     } 
    // }
    render(){
        // if(this.state.position !== this.props.position){
        // this.setState({ position: this.props.position})
        // }
        return (
            <div className={this.state.addClassName}>
                {/* <img src={MainLogo} alt="test" /> */}
                <img src={MainLogo2} alt="test" />
            </div>
        );
    }
}

export default MainLogo;

