import React from 'react';
import { Link, hashHistory } from 'react-router';
import { getContact } from 'api/contacts'

import 'font-awesome/css/font-awesome.css'


const ContactViewContainer = React.createClass ({
	getInitialState: function () {
		return {
			Fname:'',
			Lname:'',
			Email:'',
			Phone:'',
			large:'',
			city:''
		}
	},

	componentWillMount: function () {
		var id = this.props.params.id

		getContact(id).then(resp => {
			this.setState({
			fname:resp.data.name.first,
			lname:resp.data.name.last,
			email:resp.data.email,
			phone:resp.data.phone,
			large:resp.data.picture.large,
			city:resp.data.location.city,
			state:resp.data.location.state
			})
		})
	},
	render: function () {
		return (
			<ContactView contact={this.state} />
		)

	}
})

		const ContactView = React.createClass ({
		goBack: function (){
			hashHistory.goBack()
		},

		render: function() {
			return (
				<div className="profileDiv">
					<button onClick={this.goBack}>Go Back</button><br />
					<h3 className="profileTitle">
						<img className ="profileImg" src={this.props.contact.large} />	
					</h3>
					<div className="profileUl">
						<p className="profileInfo"><i className="fa fa-user" aria-hidden="true"></i>{this.props.contact.fname}&nbsp;{this.props.contact.lname}</p>
						<p className="profileInfo"><i className="fa fa-envelope" aria-hidden="true"></i>{this.props.contact.email}</p>
						<p className="profileInfo"><i className="fa fa-mobile" aria-hidden="true"></i>{this.props.contact.phone}</p>
						<p className="ProfileInfo"><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.contact.city}, {this.props.contact.state}</p>

					</div>

				</div>

			)
		}
	})

export default ContactViewContainer

