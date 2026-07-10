import React from 'react'
import './Testimonial.css'

const highlights = [
  {
    title: 'Full-Stack Software Engineering',
    text: 'Experience building production applications with React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, REST APIs, JWT, and Socket.IO.'
  },
  {
    title: 'IT & Digital Transformation',
    text: 'Technology Officer experience covering IT strategy, government digital services, infrastructure, cybersecurity, and system administration.'
  },
  {
    title: 'Education & Certifications',
    text: 'Bachelor’s Degree and Associate Degree in Computer Networks and Telecommunications, plus CCNAv7, IT Essentials, and Get Connected certifications.'
  }
]

const Testimonial = () => (
  <div className='t-wrapper' id='Career'>
    <div className='t-heading'>
      <span>Professional</span>
      <span>Background</span>
      <span>Software engineering supported by infrastructure, data, and telecommunications experience.</span>
      <div className='blur t-blur1' style={{ background: 'var(--purple)' }}></div>
      <div className='blur t-blur2' style={{ background: 'skyblue' }}></div>
    </div>
    <div className='career-grid'>
      {highlights.map((item) => (
        <article className='career-card' key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  </div>
)

export default Testimonial
