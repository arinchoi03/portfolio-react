import React, { Component } from 'react';
// import './App.css';
import NavBar from './NavBar'
import CollaboWrite from './CollaboWrite'
import RiseUp from './RiseUp'
import SpaceShopper from './SpaceShopper'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Projects</h1>
        <h4>From most recent to the oldest</h4>
        <CollaboWrite />
        <RiseUp />
        <SpaceShopper />
      </div>
    );
  }
}

export default App;
