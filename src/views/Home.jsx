import React from 'react'
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className='container'>
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <br />
      <span className='home-cake'>👩‍🍳🎂👨‍🍳</span>
    </Container>
  )
}

export default Home