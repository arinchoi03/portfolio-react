import React from 'react';
// import './App.css';
import NavBar from './NavBar'
import Carousel from './Carousel'

const SpaceShopper =() => {
  const oneSrc = "./space-shopper/front.png"
  const twoSrc = "./space-shopper/products.png"
  const threeSrc = "./space-shopper/checkout.png"
  return (
    <div id="space-shopper" className="project-container">
      <NavBar />
      <Carousel
        oneSrc = { oneSrc }
        twoSrc = { twoSrc }
        twoCap = { "List of Products" }
        twoBody = { "products available for purchase on each planet" }
        threeSrc = { threeSrc }
        threeCap = { "Checkout Page" }
        threeBody = { "reflects products in cart and takes credit card information" }
      />
      <div className="project-caption">
        <a href="https://space-shopper-app.herokuapp.com/"><h2>Space Shopper</h2></a>
        <p>
          Space Shopper is a e-commerce website to sell space vacations :)
        </p>
        <p>
        Buy some tickets into space, book extraterrestial guides, and plan some activities!
        </p>
      </div>
    </div>
    );
}

export default SpaceShopper;
