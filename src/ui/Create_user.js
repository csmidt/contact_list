import React from 'react';
import { Link, hashHistory } from 'react-router';
import { createContact } from 'api/contacts'

import 'font-awesome/css/font-awesome.css'

const CreateContact = React.createClass ({
	goBack: function (){
			hashHistory.goBack()
	},

	getInitialState: function () {
		return {
			fname:"",
			lname:"",
			email:"",
			phone:"",
			city:"",
			state:"",
			large:"",
			thumbnail:""
		}
	}, 

	update: function(e,key) {
		var id = e.target.id
		var val = e.target.value

		var newState = this.state;

		newState[id] = val;

		this.setState(newState)
	},

	create: function(e) {
		e.preventDefault();

		var newObj = {
			name: {
				fname: this.state.fname,
				lname: this.state.lname
			},
			email: this.state.email,
			phone: this.state.phone,
			location: {
				city: this.state.city,
				state: this.state.state
			}, 
			picture: {
				large: this.state.large,
				thumbnail: this.state.thumbnail
			}
		}

		createContact(newObj).then(function(resp){
			console.log(resp)
			hashHistory.push('/')	
		})

	},


	render: function () {
		return (
			<div className="newUser">
				<button onClick={this.goBack}>Go Back</button>
				<h3 className="profileTitle">
				<div className="usericon">
				<i className="fa fa-user-circle-o" aria-hidden="true"></i>
				<br />
				</div>
				</h3>
				<form className="form" onSubmit={this.create}>
					<input id="fname" onChange={this.update} type="text" placeholder="First Name"/>
					<input id="lname" onChange={this.update} type="text" placeholder="Last Name"/>
					<input id="email" onChange={this.update} type="email" placeholder="Email"/>
					<input id="phone" onChange={this.update} type="text"  placeholder="Phone"/>
					<input id="city" onChange={this.update} type="text" placeholder="City"/>
					<input id="state" onChange={this.update} type="text" placeholder="State" />
					<input id="large" onChange={this.update} type="text" placeholder="large" />
					<input id="thumbnail" onChange={this.update} type="text" placeholder="thumbnail" />
					<button type="submit"> Create User </button>
				</form>
				
			</div>
		)
	}
})

export default CreateContact