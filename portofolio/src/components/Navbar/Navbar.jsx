import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const navItems = [
  ['Intro', 'Home'],
  ['Services', 'Services'],
  ['Portfolio', 'Projects'],
  ['Experience', 'Impact'],
  ['Career', 'Background']
]

const Navbar = () => (
  <header className='n-wrapper' id='Navbar'>
    <div className='site-shell n-inner'>
      <Link to='Intro' smooth className='n-brand' aria-label='Go to hero section'>
        <span>EB</span>
        <strong>Exaucé Boby Zakuda</strong>
      </Link>

      <nav className='n-list' aria-label='Main navigation'>
        {navItems.map(([target, label]) => (
          <Link key={target} spy to={target} smooth activeClass='activeClass'>
            {label}
          </Link>
        ))}
      </nav>

      <div className='n-actions'>
        <Toggle />
        <Link to='Contact' smooth>
          <button className='button n-button'>Contact</button>
        </Link>
      </div>
    </div>
  </header>
)

export default Navbar
