import React from 'react';
import NavBar from './NavBar'

const CollaboWrite = () => {
  const oneSrc = "./collabowrite/front.jpeg"
  const twoSrc = "./collabowrite/projects.jpeg"
  const threeSrc = "./collabowrite/main.jpeg"
  return (
    <div id="collabowrite" className="project-container">
      <NavBar />
      <div id="collabowrite-background">
      </div>
    </div>
    );
}

      // <div className="project-caption">
      //   <a href="https://collabowriteapp.com/"><h2>CollaboWrite</h2></a>
      //   <p>
      //     CollaboWrite is an online web app for large scale writing projects and facilitates collaboration and organization.
      //   </p>
      //   <p>
      //     You can organize your project, communicate with others, and edit collaborative projects.
      //   </p>
      // </div>


export default CollaboWrite;
