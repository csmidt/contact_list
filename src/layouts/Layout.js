import React from 'react';
import { Link } from 'react-router';

import 'assets/styles/Style.css'
import Header from 'ui/Header'
import Peeps from 'ui/Peeps'




export default React.createClass({
  render: function() {
    return (
      <div className="app"> 
        <main>
          {this.props.children}  
        </main>
      </div>
    )
  }
});
