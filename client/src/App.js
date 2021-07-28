import React, {Component, useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Estimate from './components/Estimate';
import ScrollTop from './components/support/ScrollTop';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  

   render() {
    
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <ScrollTop>
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/estimate' exact component={Estimate}  />
            </Switch>
            </ScrollTop>
            <Footer />
        </BrowserRouter>
        </>
    );
  }
}

export default App;
