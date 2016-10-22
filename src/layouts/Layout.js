import React from 'react';
import { Link } from 'react-router';

import 'assets/styles/Style.css'



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