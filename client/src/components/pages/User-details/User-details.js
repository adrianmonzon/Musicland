import React, { Component } from 'react'
import UsersService from './../../../service/users.service'


import './User-details.css'

import { Container, Row, Col, Spinner } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import ContactForm from '../../shared/ContactForm'

class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined
        }
        this.usersService = new UsersService()
    }

    componentDidMount = () => {

        const user_id = this.props.match.params.user_id

        this.usersService
            .getUser(user_id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
            <Container className="user-details">
                {this.state.user
                    ?
                    <>
                        <h1>Detalles</h1>
                        <Row>
                            <Col md={4} >
                                <img src={this.state.user.image} alt={this.state.user.username} />
                            </Col>
                            <Col md={4}>
                                <h3>{this.state.user.name}</h3>
                                <p>{this.state.user.description}</p>
                                <hr />
                                <p>Instrumento: {this.state.user.instrument}</p>
                                <p>Edad: {this.state.user.age} años</p>
                                <Link to="/usuarios" className="btn btn-sm btn-dark">Volver</Link>
                            </Col>
                            <Col md={4}>
                            {this.props.loggedUser && <ContactForm loggedUser={this.props.loggedUser} contactUser={this.state.user}/>}  
                            </Col>
                        </Row>              
                    </>
                    :
                    <Spinner animation="border" />
                }

            </Container>
            </>
        )
    }
}

export default UserDetails