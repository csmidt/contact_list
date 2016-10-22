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

	var person = Peeps.people.filter(function(person){
		return people.ID == ID
	})[0]

	this.setState({
		Name:people.Name,
		Email:people.Email,
		Phone:people.Phone,
		

	})

	},

	render:function(){
		return (
			<div className="profileDiv">
				<ul className="profileUl">
					<li>{this.state.Name}</li>
					<li>{this.state.Email}</li>
					<li>{this.state.Phone}</li>
				</ul>
			</div>

		)
	}
});


