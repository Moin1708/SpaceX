import React from 'react'
import logo from '../Home/spacex.jpg'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid ">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <img src={logo} height='50px' width='120px'/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active m-2" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2" to={'/rocket'}>Rockets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2" to={'/launches'}>Launches</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2" to={'/capsule'}>Ships</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
