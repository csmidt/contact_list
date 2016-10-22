import React from 'react';
import { Link } from 'react-router';

// var arr = ["Michael", "Jeff", "Gabe"]

const ContactsContainer = React.createClass({
  getInitialState: function () {
    return {
      contacts: [{id:1, name:"Michael"}, {id:2,name:"Jeff"}, {id:3, name:"Gabe"}]
    }
  },
  render: function () {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }
})

const Contacts = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.contacts.map(function(contact){
          return <li key={contact.id}>{contact.name}</li>
        })}
      </ul>
    )
  }
})

export default ContactsContainer