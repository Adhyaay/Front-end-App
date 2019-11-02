import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Loader from './loader';
import Home from './home';
import Events from './events';
import Navbar from "./navbar";
import Music from './music';

class  App extends React.Component{

  state = { loading: true };

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
 
  // 4 sec for loading screen
  componentDidMount(){
    this.wait(2000);
  }

  render(){
      if (this.state.loading) return <Loader/>;
      return (
        <>
          {/* <Music /> */}
          <BrowserRouter>
          <Navbar />
            <Route path='/' exact component={Home} />
            <Route path='/events' exact component={Events} />
          </BrowserRouter>
        </>
     );
    }
}

export default App;
