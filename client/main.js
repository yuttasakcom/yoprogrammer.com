import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/scss/bootstrap.scss'
import './assets/styles/styles.scss'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
)
