import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import MailService from './../../../service/mail.service'

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contactEmail: this.props.contactUser.email,
      name: this.props.loggedUser.name,
      subject: '',
      message: ''
    }
    this.mailService = new MailService()
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // this.mailService.sendMail(this.state)
  //   // .then((response) => {
  //   //   if (response.data.status === 'success') {
  //   //     alert("Message Sent.");
  //   //     this.resetForm()
  //   //   } else if (response.data.status === 'fail') {
  //   //     alert("Message failed to send.")
  //   //   }
  //   // })
  //   console.log(this.mailService)
  // }

  handleSubmit = e => {
    e.preventDefault()
    this.mailService.sendMail(this.state)
    .then((response) => {
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

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value })


  render() {
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>De</Form.Label>
              <Form.Control type="text" placeholder="Enter email" readOnly value={this.state.name}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Para</Form.Label>
              <Form.Control type="text" placeholder="Password" readOnly value={this.state.contactEmail}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Asunto</Form.Label>
            <Form.Control type="text" name="subject" value={this.state.subject}  onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" value={this.state.message} onChange={this.handleInputChange} />
          </Form.Group>
          <Button variant="btn btn-sm btn-light" type="submit">Contactar</Button>
        </Form>
      </section>
    )
  }
}

export default ContactForm