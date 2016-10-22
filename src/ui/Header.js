import React from 'react';
import { Link } from 'react-router';


var Header = React.createClass ({
	render: function () {
		return (
			<div className="header">
				<ul className="headerTitles">
					<li className="headerLi"> List View </li>
					<li className="headerLi"> Single View </li>
				</ul>
			</div>
		)
	}
})

export default Header 