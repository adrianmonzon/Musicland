import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Home.css'

class Home extends Component {

    render() {
        return (
            <Carousel>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100 home-img"
      src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Busca y encuentra músicos de todas partes</h3>
      <Link to="/usuarios" className="btn btn-outline-light home-button">Ver lista</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100 home-img"
      src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Regístrate y comienza tu aventura musical</h3>
      <Link to="/registro" className="btn btn-outline-light home-button">Registro</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3500}>
    <img
      className="d-block w-100 home-img"
      src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Inicia sesión y podrás contactar con tus futuros compañeros de grupo</h3>
      <Link to="/iniciar-sesion" className="btn btn-outline-light home-button">Iniciar sesión</Link>   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default Home