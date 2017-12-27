import React from 'react'
import { Route } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'

const Router = () => (
  <div id="routes">
    <Route path="/" component={HomePage} exact />
    <Route path="/login" component={LoginPage} />
    <Route path="/user" component={UserPage} />
  </div>
)

export default Router
