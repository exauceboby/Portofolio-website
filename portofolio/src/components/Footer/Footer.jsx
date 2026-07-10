import React from 'react'
import './Footer.css'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Envelope from '@iconscout/react-unicons/icons/uil-envelope'
import Wave from '../../img/wave.png'

const Footer = () => (
  <div className='footer'>
    <img src={Wave} alt='' style={{ width: '100%' }} />
    <div className='f-content'>
      <a href='mailto:exauceboby15@gmail.com' style={{ color: 'white' }}>
        <span>exauceboby15@gmail.com</span>
      </a>
      <div className='f-icons'>
        <a href='mailto:exauceboby15@gmail.com' aria-label='Email'><Envelope color='white' size='2.6rem' /></a>
        <a href='https://www.linkedin.com/in/exauce-boby-2006ba2a4' target='_blank' rel='noreferrer' aria-label='LinkedIn'><Linkedin color='white' size='2.6rem' /></a>
        <a href='https://github.com/exauceboby' target='_blank' rel='noreferrer' aria-label='GitHub'><Github color='white' size='2.6rem' /></a>
      </div>
    </div>
  </div>
)

export default Footer
