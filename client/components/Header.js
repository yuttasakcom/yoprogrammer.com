import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-dark bg-inverse navbar-expand-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          YoProgrammer
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
