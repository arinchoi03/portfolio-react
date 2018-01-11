import React from 'react';
import NavBar from './NavBar'

const CollaboWrite = (props) => {
  const captionOne = "CollaboWrite is an online web app for large scale writing projects and facilitates collaboration and organization."
  const captionTwo = "You can organize your project, communicate with others, and edit collaborative projects."
  const title = "CollaboWrite"
  const link="https://collabowriteapp.com/"
  const github="https://github.com/CollaboWrite/app"
  return (
    <div id="collabowrite" className="project-container">
      <NavBar />
      <div id="collabowrite-background">
        <div id="space-shopper-caption">
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


export default CollaboWrite;
