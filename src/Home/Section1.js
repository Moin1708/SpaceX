import React from 'react'
import img1 from '../Home/undraw.svg'
import Typewriter from 'typewriter-effect/dist/core';
import { NavLink } from 'react-router-dom';
import spacexbg from '../Home/spacex_bg.jpg'


function Section1() {
  return (

  <div className="container main">
    <div className="row d-flex align-items-center">
      <div className="col-md-6 mq2 mq3">
      <h3 className='text-left s1' >Welcome to spaceX</h3>
      <h4>Launch into the future with spaceX rockets</h4>
      <button className='b1'> <NavLink  className="anchor1"  to="https://www.spacex.com/"> Experience the future</NavLink> </button>
      </div>
      <div className="col-md-6 ">
        <img src={img1} width='500px'  alt="" className='mq2'/>
      </div>
    </div>
  </div>

  )
}

export default Section1
