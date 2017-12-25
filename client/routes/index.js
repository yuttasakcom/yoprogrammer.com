import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'

const Router = () => (
  <div>
    <Header />
    <Route path="/" component={HomePage} exact />
    <Route path="/user" component={UserPage} />
  </div>
)

export default Router
