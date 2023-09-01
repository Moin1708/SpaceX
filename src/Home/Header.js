import React from 'react'
import logo from '../Home/spacex.jpg'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
<div>
  {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid ">
    <img src={logo} height='50px' width='120px'/>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active m-2" aria-current="page" href="https://moin-spacex.netlify.app/">Home</a>
        </li>
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link m-2" to={'/rocket'}>Rockets</NavLink>
        </li>
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link m-2" to={'/launches'}>Launches</NavLink>
        </li>
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link m-2" to={'/capsule'}>Ships SpaceX</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </nav> */}

  {/* ///////////////////// */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={logo} height='50px' width='120px'/>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler setNav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link m-2 m-3 st1" to={'/rocket'}>Rockets</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link m-2 m-3 st1" to={'/launches'}>Launches</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link m-2 m-3 st1" to={'/capsule'}>Ships SpaceX</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Header
