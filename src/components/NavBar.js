import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
<nav className="navbar mb-5 navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/movies"> Movies <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">Customers</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Log In</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className='nav-link' to='/register'> Sign Up</NavLink>
      </li>
    </ul>

</nav>
  )
}
