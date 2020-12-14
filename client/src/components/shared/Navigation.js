import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'

import AuthService from '../../service/auth.service'
import UsersService from '../../service/users.service'

import './Navigation.css'
import UserService from '../../service/users.service'


class Navigation extends Component {


    constructor(props) {
        super(props)
        this.authService = new AuthService()
        this.userService = new UserService()
    }

    logOut = () => {
        this.authService
            .logout()
            .then(res => {
                this.props.storeUser(undefined)
                // this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    deleteTheUser = () => {
        this.userService
            .deleteUser()
            .then(res => {
                this.props.history.push('/')
            .catch(err => console.log(err))
            })
    }

    render() {

        return (
            <Navbar bg="dark" variant="dark" expand="md" >
                <Link to="/">
                    <Navbar.Brand >
                        <img
                            alt="Logotipo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}MusicApp</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">
                            <Nav.Link as="div">Inicio</Nav.Link>
                        </Link>
                        <Link to="/usuarios">
                            <Nav.Link as="div">Músicos</Nav.Link>
                        </Link>
                        {
                            this.props.loggedUser
                                ?
                                // <Nav.Link as="div" onClick={this.logOut}>Cerrar sesión</Nav.Link>
                                <NavDropdown title={`Hola, ${this.props.loggedUser.username}`} id="collasible-nav-dropdown">
                                    <Link to="/editar-perfil" style={{ textDecoration: 'none' }}><NavDropdown.Item className="nav-dropdown">Editar perfil</NavDropdown.Item></Link>
                                    <Link to="/" style={{ textDecoration: 'none' }}><NavDropdown.Item className="nav-dropdown" onClick={this.logOut}>Cerrar sesión</NavDropdown.Item></Link>
                                    <NavDropdown.Divider />
                                    <Link to="#" style={{ textDecoration: 'none' }}><NavDropdown.Item className="nav-dropdown" onClick={this.deleteTheUser}>Eliminar perfil</NavDropdown.Item></Link>
                                </NavDropdown>
                                :
                                <>
                                    <Link to="/registro">
                                        <Nav.Link as="div">Registro</Nav.Link>
                                    </Link>
                                    <Link to="/iniciar-sesion">
                                        <Nav.Link as="div">Iniciar sesión</Nav.Link>
                                    </Link>
                                </>

                        }
                        {/* <Link to="/perfil">
                            <Nav.Link as="div">Hola, {this.props.loggedUser ? this.props.loggedUser.username : 'invitado'}</Nav.Link>
                        </Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}


export default Navigation