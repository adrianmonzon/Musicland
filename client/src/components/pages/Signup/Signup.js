import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'

import './Signup.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            name: '',
            password: '',
            description: '',
            instrument: '',
            age: '',
            image: '',
            email: ''
        }
        this.authService = new AuthService()

    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/usuarios')        
            })
            .catch(err => console.log('Error', err))
    }

    // handleSubmit = e => {
    //     e.preventDefault()

    //     this.usersService
    //         .saveUser(this.state)
    //         .then(res => {
    //             this.props.updateList()
    //         })
    //         .catch(err => console.log(err))
    // }


    render() {

        return (
            <section className="signup">
            <Container>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Registro de usuario</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ej. amadeus1756" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre y apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Ej. Wolfgang Amadeus Mozart" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            {/* <Form.Group controlId="instrument">
                                <Form.Label>Instrumento</Form.Label>
                                <Form.Control type="text" name="instrument" value={this.state.instrument} onChange={this.handleInputChange} />
                            </Form.Group> */}
                            <Form.Group controlId="instrument">
                                <Form.Label>Instrumento</Form.Label>
                                <Form.Control as="select" name="instrument" value={this.state.instrument} onChange={this.handleInputChange}>
                                    <option>Seleccionar</option>
                                    <option>Guitarra eléctrica</option>
                                    <option>Guitarra española</option>
                                    <option>Batería</option>
                                    <option>Bajo</option>
                                    <option>Piano</option>
                                    <option>Voz</option>
                                    <option>Trompeta</option>
                                    <option>Acordeón</option>
                                    <option>Saxofón</option>
                                    <option>Trombón</option>
                                    <option>Tuba</option>
                                    <option>Gaita</option>
                                    <option>Violín</option>
                                    <option>Clarinete</option>
                                    <option>Violonchelo</option>
                                    <option>Contrabajo</option>
                                    <option>Fagot</option>
                                    <option>Ukelele</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Edad</Form.Label> <small>(Mínimo 16 años)</small>
                                <Form.Control type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Imagen(URL)</Form.Label>
                                <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                            </Form.Group>
                           <Button variant="light" type="submit">Registrarme</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default Signup