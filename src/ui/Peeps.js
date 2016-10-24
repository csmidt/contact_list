import React from 'react';
import { Link } from 'react-router';
import Peeps from 'data/Peeps.json'




const Contacts = React.createClass ({
	render: function () {
		return (
			<div >
				<h3 className="peepsTitle">My Peeps</h3>

					<div className="peepsList">
						{Peeps.people.map(function(contact){
							console.log(contact)
							return 	<div className="myPeeps"key={contact.ID}> 	
										<Link className="peepsLink" to={"/Profile/"+ contact.ID}> 
											<img className="listImg" src={contact.thumbnail} /> 
											{contact.Name} 
										</Link> 
									</div>
						})}
					</div>


			</div>
		)
	}
}) 

export default Contacts