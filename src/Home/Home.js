import React from 'react'
import logo from '../Home/spacex.jpg'
import Header from './Header'
import Section1 from './Section1'
import Categories from './Categories'
import { Divider } from 'antd'
import Errorboundaries from '../Errorboundaries.'


function Home() {
  return (
    <div>
    <Errorboundaries>
     <Header/>
     <Divider/>
     <Section1/>
     <Divider/>
     <Categories/>
    </Errorboundaries>
    </div>
  )
}

export default Home
