import React, { Component } from 'react'
import UsersService from './../../../service/users.service'
import {Container, Row, Spinner} from 'react-bootstrap'

import UserCard from './User-card'

// import { Container, Row, Button, Modal } from 'react-bootstrap'

import './Users-list.css'
import './User-card.css'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined,
            // showModal: false
        }
        this.usersService = new UsersService()
    }

    componentDidMount = () => {            /* = () => this.refreshCoasters() */                              
        this.usersService
        .getUsers()
        .then(res => this.setState({users: res.data}))
        .catch(err => console.log(err))
    }                  

//     refreshCoasters = () => {
//         this.coastersService
//             .getCoasters()
//             .then(res => this.setState({ coasters: res.data }))
//             .catch(err => console.log(err))
//     }

//     handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
            <Container className="list-container">
                <h1>Listado de músicos</h1>
                <Row>
                {
                    this.state.users 
                        ?
                    this.state.users.map(elm => <UserCard key={elm._id} {...elm} />)
                    :
                    <Spinner animation="border" />
                }
                </Row>
           

            </Container>
            </>
//             <>
//                 <Container>

//                     <h1>Listado de montañas rusas</h1>

//                     <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Crear nueva montaña rusa</Button>

//                     <Row>
//                         {
//                             this.state.coasters
//                                 ?
//                                 this.state.coasters.map(elm => <CoasterCard key={elm._id} {...elm} />)
//                                 :
//                                 <Loader />
//                         }
//                     </Row>
//                 </Container>


//                 <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
//                     <Modal.Body>
//                         <CoasterForm closeModal={() => this.handleModal(false)} updateList={this.refreshCoasters} />
//                     </Modal.Body>
//                 </Modal>

//             </>
        )
    }
}

export default UsersList