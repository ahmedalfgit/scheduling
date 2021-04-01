import React, { Component } from 'react';
import NavBar from '../src/components/navBar';
import './App.scss';
import Footer from "../src/components/footer";
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './components/Project'
import Prices from './components/prices'
import VCita from './components/vcita'

ReactGA.initialize('G-WES73M7M9D');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
    return (
      <div>
        <NavBar />
        <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/prices" render={(props) => <Prices {...props} />} />
        <Route exact path="/vcita" render={(props) => <VCita {...props} />} />
        </Switch>
        <Footer/>
      </div>
    );
  }


