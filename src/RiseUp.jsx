import React from 'react';
// import './App.css';
import NavBar from './NavBar'

const RiseUp = (props) => {
  const captionOne = "Have you ever needed elevator access at a NYC subway stop?"
  const captionTwo = "How great would it be if you can check the status of the elevator for the stop you want to get on/off the subway from? This is an app that allows crowd-sourcing of current status of elevators in NYC."
  const title = "Rise Up"
  const link="https://rise-nyc.firebaseapp.com/"
  const github="https://github.com/arinchoi03/rise-nyc"
  return (
    <div id="riseup" className="project-container">
      <NavBar />
      <div id="riseup-background" >
        <div className="project-caption">
          <h2>{title}</h2>
          <p>{captionOne}</p>
          <p>{captionTwo}</p>
          <a href={github}>Github</a>
          <a href={link}>Visit</a>
        </div>
      </div>
    </div>
    );
}

export default RiseUp;
