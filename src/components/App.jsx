import React, { Component } from 'react';
import { nanoid } from "nanoid";
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: ''
  };

  componentDidMount(){
  }

  nameInputId = nanoid();
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.setState({ name: e.target.value });
  }

  render() {
    const { contacts, name } = this.state;
    return (
      <>
      <Form/>
      </>
    );
  }
}
