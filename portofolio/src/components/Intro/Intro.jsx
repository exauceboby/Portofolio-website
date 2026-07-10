import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Portrait from '../../img/boy.png'
import { Link } from 'react-scroll'

const heroStats = [
  ['5+', 'Years of practical experience'],
  ['8+', 'Software and IT projects'],
  ['Full-stack', 'Frontend, backend, data and deployment']
]

const Intro = () => (
  <section className='intro site-shell' id='Intro'>
    <div className='i-left'>
      <span className='section-eyebrow'>Full-Stack Software Engineer</span>
      <h1>I build secure software for real business operations.</h1>
      <p>
        I design, develop, and deploy maintainable web applications with React, Next.js,
        Node.js, APIs, databases, authentication, dashboards, and Linux-based delivery.
      </p>
      <div className='i-actions'>
        <Link to='Portfolio' smooth><button className='button'>View Projects</button></Link>
        <Link to='Contact' smooth><button className='button button-secondary'>Hire Me</button></Link>
      </div>
      <div className='i-icons' aria-label='Professional profiles'>
        <a href='https://github.com/exauceboby' target='_blank' rel='noreferrer'><img src={Github} alt='GitHub profile' /></a>
        <a href='https://www.linkedin.com/in/exauce-boby-2006ba2a4' target='_blank' rel='noreferrer'><img src={LinkedIn} alt='LinkedIn profile' /></a>
      </div>
    </div>
    <div className='i-right'>
      <div className='hero-portrait-card'>
        <div className='hero-glow' />
        <img src={Portrait} alt='Exaucé Boby Zakuda, Full-Stack Software Engineer' />
        <div className='hero-card-copy'>
          <strong>Exaucé Boby Zakuda</strong>
          <span>Full-Stack Software Engineer</span>
        </div>
      </div>
      <div className='hero-snapshot'>
        <span>Current focus</span>
        <strong>Business platforms, transport systems, APIs and dashboards</strong>
      </div>
    </div>
    <div className='hero-stats' aria-label='Professional summary'>
      {heroStats.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  </section>
)
export default Intro
