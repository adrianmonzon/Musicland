import React, { Component } from "react";
import UsersService from "./../../../service/users.service";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import UserCard from './User-card';
import Filter from "./Filter";
import SimpleMap from './Map'

import "./Users-list.css";
import "./User-card.css";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      // showModal: false
    };
    this.usersService = new UsersService();
  }

  componentDidMount = () => {
    /* = () => this.refreshCoasters() */
    this.usersService
      .getUsers()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  };

  //     refreshCoasters = () => {
  //         this.coastersService
  //             .getCoasters()
  //             .then(res => this.setState({ coasters: res.data }))
  //             .catch(err => console.log(err))
  //     }

  //     handleModal = visible => this.setState({ showModal: visible })

  filterByInstrument = (instrument) => {
    this.usersService
      .filterByInstrument(instrument)
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <section className="users-list">
        <Container className="list-container">
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="list-top">
              <h1>Listado de músicos</h1>
              <Filter filterUsers={this.filterByInstrument} />
            </Col>
          </Row>
          <Row>
            {this.state.users ? (
              this.state.users.map((elm) => <UserCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} />)
            ) : (
              <Spinner animation="border" />
            )}
          </Row>
          <SimpleMap users={this.state.users}/>
        </Container>
      </section>
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
    );
  }
}

export default UsersList;
