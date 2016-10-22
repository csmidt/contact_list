import React from 'react';
import { Link } from 'react-router';
import people from 'data/Peeps.json'

export default React.createClass ({
	getInitialState: function () {
		return {

			Name:'',
			Email:'',
			Phone:'',

		}
	},

	componentWillMount: function () {
	var id = this.props.params.ID;

	var person = people.people.filter(function(contactFromArray){
		return contactFromArray.ID == id
	})[0]

	this.setState({
		Name:person.Name,
		Email:person.Email,
		Phone:person.Phone,


	})
	},

	render:function(){
		return (
			<div className="profileDiv">
				<h3 className="profileTitle"></h3>
				<ul className="profileUl">
					<li>{this.state.Name}</li>
					<li>{this.state.Email}</li>
					<li>{this.state.Phone}</li>
				</ul>

			</div>

		)
	}
});


