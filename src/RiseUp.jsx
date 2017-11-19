import React from 'react';
// import './App.css';
import NavBar from './NavBar'

const RiseUp = (props) => {
  const oneSrc = "./riseup/front.png"
  const twoSrc = "./riseup/stations.png"
  const threeSrc = "./riseup/station.png"
  return (
    <div id="riseup" className="project-container">
      <NavBar />
      <div className="project-caption">
        <a href= "https://rise-nyc.firebaseapp.com/"><h2>RISE UP nyc</h2></a>
        <p>
          Have you ever needed elevator access at a NYC subway stop?
        </p>
        <p>
          How great would it be if you can check the status of the elevator for the stop you want to get on/off the subway from?
        </p>
        <p>
          This is an app that allows crowd-sourcing of current status of elevators in NYC.
        </p>
      </div>
    </div>
  );
}

export default RiseUp;
