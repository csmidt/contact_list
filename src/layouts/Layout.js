import React from 'react';
import { Link } from 'react-router';

import 'assets/styles/Style.css'




export default React.createClass({
  render: function() {
    return (
      <div className="app">
      	<nav>
      		
      	</nav>
        <main>
    		<Link to="/">Home</Link>
  			<Link to="Peeps">Peeps</Link>
  			<Link to="profile/1">Users</Link>
          {this.props.children}  
        </main>
      </div>
    )
  }
});