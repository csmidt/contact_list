import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

// Layout
import Layout from 'layouts/Layout'

// Components
import Header from 'ui/Header'
import Peeps from 'ui/Peeps'
import Profile from 'ui/Profile'
import Create_user from 'ui/Create_user'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route component={Layout}>
          <Route path="/" component={Peeps} />
          <Route path="/form" component={Create_user} />
          <Route path="/Profile/:id" component={Profile} />
        </Route>
      </Router>
    )
  }
});


 //