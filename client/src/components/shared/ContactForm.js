import React, { Component } from 'react'
import MailService from './../../service/mail.service'


class ContactForm extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      contactEmail: this.props.contactUser.email,
      name: this.props.loggedUser.name,
      email: this.props.loggedUser.email,
    }
    this.mailService = new MailService()
}

  render () {

  
  return (
    <form id="contact-form" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
    <div className="form-group">
        <label for="name">Nombre</label>
        <input type="text" className="form-control" id="name" value={this.state.name} />
    </div>
    <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" className="form-control" id="email" value={this.state.email} aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label for="message">Mensaje</label>
        <textarea className="form-control" rows="5" id="message"></textarea>
    </div>
    <button type="submit" className="btn btn-dark btn-sm">Contactar</button>
</form>
  );
};
}

export default ContactForm