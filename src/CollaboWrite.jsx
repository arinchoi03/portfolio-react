import React from 'react';
// import './App.css';
import NavBar from './NavBar'
import Carousel from './Carousel'

// pass down collabowrite info as props to carousel
// img src & caption

const CollaboWrite = () => {
  const oneSrc = "./collabowrite/front.jpeg"
  const twoSrc = "./collabowrite/projects.jpeg"
  const threeSrc = "./collabowrite/main.jpeg"
  return (
    <div id="collabowrite" className="project-container">
      <NavBar />
      <Carousel
        oneSrc = { oneSrc }
        twoSrc = { twoSrc }
        twoCap = { "List of Projects" }
        twoBody = { "allows user to choose from user's projects and collaborative projects" }
        threeSrc = { threeSrc }
        threeCap = { "Project Editor" }
        threeBody = { "main page for the project where you can edit/leave notes/communicate with other collaborators" }
      />
      <div className="project-caption">
        <a href="https://collabowriteapp.com/"><h2>CollaboWrite</h2></a>
        <p>
          CollaboWrite is an online web app for large scale writing projects and facilitates collaboration and organization.
        </p>
        <p>
          You can organize your project, communicate with others, and edit collaborative projects.
        </p>
      </div>
    </div>
    );
}

export default CollaboWrite;
