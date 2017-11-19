import React from 'react'
import { Carousel } from 'react-bootstrap'

const ProjectCarousel = (props) => {
  return (
  <Carousel className="carousel-container">
    <Carousel.Item>
      <img className="screen-image" alt="one" src={ props.oneSrc } />
    </Carousel.Item>
    <Carousel.Item>
      <img className="screen-image" alt="two" src={ props.twoSrc }/>
      <Carousel.Caption>
        <h3>{ props.twoCap }</h3>
        <p>{ props.twoBody }</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="screen-image" alt="three" src={ props.threeSrc }/>
      <Carousel.Caption>
        <h3>{ props.threeCap }</h3>
        <p>{ props.threeBody }</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default ProjectCarousel
