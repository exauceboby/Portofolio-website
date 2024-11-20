import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className='f-content'>

            <a href="mailto:exauceboby3@gmail.com" style={{color:"white"}}><span>exauceboby3@gmail.com</span> </a>
            <div className='f-icons'>
            <Insta color='white' size='3rem'/>
            <Facebook color='white' size='3rem'/>
            <Github color='white' size='3rem'/>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
