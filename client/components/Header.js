import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Yo Programmer
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
