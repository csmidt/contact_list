import React from 'react';
import { Link } from 'react-router';
import Peeps from 'data/Peeps.json'




const Contacts = React.createClass ({
	render: function () {
		return (
			<div>
				<h3 className="peepsTitle">My Peeps</h3>
					<ul className="peepsList">
						{Peeps.people.map(function(contact){
							console.log(contact)
							return <li key={contact.ID}>{contact.Name}
							</li>
						})}
					</ul>
			</div>
		)
	}
})

export default Contacts