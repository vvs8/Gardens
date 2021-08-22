import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Estimate from './components/Estimate';
import Services from './components/Services';
import ScrollToTop from './components/support/ScrollTop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import './App.css';


class App extends Component {
   render() {
    return (
        <>
        <BrowserRouter>
        <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/estimate' exact component={Estimate}  />
              <Route path='/services' exact component={Services}  />
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
        </>
    );
  }
}

export default App;
