import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

// Layout
import Layout from 'layouts/Layout'

// Components
import Peeps from 'ui/Peeps'
import Profile from 'ui/Profile'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route component={Layout}>
          <Route path="/" component={Peeps} />
          <Route path="/Profile/:id" component={Profile} />
        </Route>
      </Router>
    )
  }
})