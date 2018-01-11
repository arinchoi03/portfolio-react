import React from 'react';
// import './App.css';
import NavBar from './NavBar'

const SpaceShopper =() => {
  const title = "Space Shopper"
  const captionOne = "Space Shopper is a e-commerce website to sell space vacations :)"
  const captionTwo = "Buy some tickets into space, book extraterrestial guides, and plan some activities!"
  const link = "https://space-shopper-app.herokuapp.com/"
  const github = "https://github.com/arinchoi03/Space-Shopper"
  return (
    <div id="space-shopper" className="project-container">
      <NavBar />
      <div id="space-shopper-background" >
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

export default SpaceShopper;
