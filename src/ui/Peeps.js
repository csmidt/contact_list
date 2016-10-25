import React from 'react';
import { Link } from 'react-router';
import { getContacts, deleteContact } from 'api/contacts'

import 'font-awesome/css/font-awesome.css'




const ContactsLlistContainer = React.createClass ({
	getInitialState: function (){
		return {
			contacts: []
		}
	},

	componentWillMount:function () {
		this.rerender()
	},
	rerender: function () {
		getContacts().then(resp => {
			console.log(resp)
			this.setState({
				contacts: resp.data
			})
		})
	},
	render: function () {
		return (
			<ContactList rerender={this.rerender} contacts={this.state.contacts} />
		)
	}
}) 

const ContactList = React.createClass ({
	deleteContact: function (e) {
		var id = e.target.id.substring(1)

		deleteContact(id).then(resp => {
			this.props.rerender()

		})
	},
	render: function () {
		return (
			<div >
				<h3 className="peepsTitle">My Peeps</h3>
				<button><Link to="form">Create New User </Link></button>
					<div className="peepsList">
						{this.props.contacts.map(contact => {
							return (
								<div className="myPeeps"key={contact.id}> 	
									<Link className="peepsLink" to={`/Profile/${contact.id}`}> 
									<img className="listImg" src={contact.picture.thumbnail} /> 
										{contact.name.first} {contact.name.last} 
									</Link> 
									<button className="delete" id={`d${contact.id}`} onClick={this.deleteContact}>Delete Contact</button>
								</div>
							)
						})}
					</div>
			</div>
		)
	}
})

export default ContactsLlistContainer