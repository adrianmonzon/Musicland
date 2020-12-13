// import React, { Component } from 'react'
// import MailService from './../../service/mail.service'


// class ContactForm extends Component  {

//   constructor(props) {
//     super(props)
//     this.state = {
//       contactEmail: this.props.contactUser.email,
//       name: this.props.loggedUser.name,
//       // email: this.props.loggedUser.email,
//     }
//     this.mailService = new MailService()
// }

// handleSubmit = e => {
//   e.preventDefault()

//   this.mailService
//       .sendMail(this.state)
//       .then(theLoggedInUser => {
//           // this.props.storeUser(theLoggedInUser.data)
//           this.props.history.push('/usuarios')        
//       })
//       .catch(err => console.log('Error', err))
// }

//   render () {


//   return (
//     <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
//     <div className="form-group">
//         <label for="name">Nombre</label>
//         <input type="text" className="form-control" id="name" value={this.state.name} />
//     </div>
//     <div className="form-group">
//         <label for="exampleInputEmail1">Email</label>
//         <input type="email" className="form-control" id="email" value={this.state.contactEmail} aria-describedby="emailHelp" />
//     </div>
//     <div className="form-group">
//         <label for="message">Mensaje</label>
//         <textarea className="form-control" rows="5" id="message"></textarea>
//     </div>
//     <button type="submit" className="btn btn-dark btn-sm">Contactar</button>
// </form>
//   );
// };
// }

// export default ContactForm

import React, { Component } from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap'

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactEmail: this.props.contactUser.email,
      name: this.props.loggedUser.name,
      subject: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/mail",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ name: '', contactEmail: '', message: '' })
  }

  render() {
    return (
      <section>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>De</Form.Label>
              <Form.Control type="text" placeholder="Enter email" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Para</Form.Label>
              <Form.Control type="text" placeholder="Password" value={this.state.contactEmail} onChange={this.onEmailChange.bind(this)} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Asunto</Form.Label>
            <Form.Control type="text" value={this.state.subject} onChange={this.onMessageChange.bind(this)} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </Form.Group>
          <Button variant="btn btn-sm btn-light" type="submit">Contactar</Button>
        </Form>
      </section>
    )
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

  export default ContactForm

        /* // <div className="App">
      //   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      //     <div className="form-group">
      //         <label htmlFor="name">De</label>
      //         <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      //     </div>
      //     <div className="form-group">
      //         <label htmlFor="exampleInputEmail1">Para</label>
      //         <input type="email" className="form-control" id="contactEmail" aria-describedby="emailHelp" value={this.state.contactEmail} onChange={this.onEmailChange.bind(this)} />
      //     </div>
      //     <div className="form-group">
      //         <label htmlFor="message">Mensaje</label>
      //         <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      //     </div>
      //     <button type="submit" className="btn btn-light">Contactar</button>
      //   </form>
      // </div> */