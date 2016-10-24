import React from 'react';
import { Link } from 'react-router';
import people from 'data/Peeps.json';
import Icons from 'font-awesome/css/font-awesome.css'

export default React.createClass ({
	getInitialState: function () {
		return {

			Name:'',
			Email:'',
			Phone:'',
			large:'',

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
		large:person.large,


	})
	},

	render:function(){
		return (
			<div className="profileDiv">
				<h3 className="profileTitle">
					<img className ="profileImg" src={this.state.large} />	
				</h3>
				<div className="profileUl">
					<p className="profileInfo"><i className="fa fa-user" aria-hidden="true"></i>{this.state.Name}</p>
					<p className="profileInfo"><i className="fa fa-envelope" aria-hidden="true"></i>{this.state.Email}</p>
					<p className="profileInfo"><i className="fa fa-mobile" aria-hidden="true"></i>{this.state.Phone}</p>
				</div>

			</div>

		)
	}
});


