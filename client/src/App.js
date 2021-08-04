import React, {Component, useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Estimate from './components/Estimate';
import ScrollToTop from './components/support/ScrollTop';
import UploadComponent from './components/support/ImageUpload';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
            </Switch>
            <Footer />
        </BrowserRouter>
        </>
    );
  }
}

export default App;
