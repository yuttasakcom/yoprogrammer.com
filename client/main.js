import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './pages/HomePage'

ReactDOM.hydrate(<HomePage />, document.getElementById('root'))
