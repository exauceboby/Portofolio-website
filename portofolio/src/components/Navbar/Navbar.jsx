import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => (
  <div className='n-wrapper' id='Navbar'>
    <div className='n-left'>
      <div className='n-name'>Exaucé Boby Zakuda</div>
      <Toggle />
    </div>
    <div className='n-right'>
      <div className='n-list'>
        <ul style={{ listStyleType: 'none' }}>
          <Link spy to='Intro' smooth activeClass='activeClass'><li>Home</li></Link>
          <Link spy to='Services' smooth activeClass='activeClass'><li>Services</li></Link>
          <Link spy to='Experience' smooth activeClass='activeClass'><li>Experience</li></Link>
          <Link spy to='Portfolio' smooth activeClass='activeClass'><li>Portfolio</li></Link>
          <Link spy to='Career' smooth activeClass='activeClass'><li>Background</li></Link>
        </ul>
      </div>
      <Link to='Contact' smooth><button className='button n-button'>Contact</button></Link>
    </div>
  </div>
)

export default Navbar
