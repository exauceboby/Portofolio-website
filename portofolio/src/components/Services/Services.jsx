import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
  const transition = { duration: 1, type: 'spring' }
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='services' id='Services'>
      <div className='awesome'>
        <span style={{ color: darkMode ? 'white' : '' }}>Professional</span>
        <span>Services</span>
        <span>
          End-to-end software development for companies and organizations: frontend,
          backend, databases, APIs, authentication, deployment, and maintenance.
        </span>
        <a href={Resume} download='Exauce_Boby_Zakuda_Full_Stack_Software_Engineer_CV.pdf'>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1' style={{ background: '#abf1ff94' }}></div>
      </div>
      <div className='cards'>
        <motion.div initial={{ left: '25rem' }} whileInView={{ left: '14rem' }} transition={transition} style={{ left: '14rem' }}>
          <Card emoji={HeartEmoji} heading='Frontend Development' detail='React, Next.js, TypeScript, responsive interfaces, and accessible user experiences.' />
        </motion.div>
        <motion.div initial={{ left: '-11rem', top: '12rem' }} whileInView={{ left: '-4rem' }} transition={transition} style={{ top: '12rem', left: '-4rem' }}>
          <Card emoji={Glasses} heading='Backend & APIs' detail='Node.js, Express.js, NestJS, REST APIs, JWT authentication, RBAC, and real-time features.' />
        </motion.div>
        <motion.div initial={{ top: '19rem', left: '25rem' }} whileInView={{ left: '12rem' }} transition={transition} style={{ top: '19rem', left: '12rem' }}>
          <Card emoji={Humble} heading='Deployment & Maintenance' detail='PostgreSQL, MongoDB, Linux, Nginx, PM2, Git, CI/CD, optimization, and production support.' />
        </motion.div>
        <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  )
}

export default Services
