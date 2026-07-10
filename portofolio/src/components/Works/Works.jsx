import React, { useContext } from 'react'
import './Works.css'
import { themeContext } from '../../Context'

const stacks = [
  ['Frontend', 'React', 'Next.js', 'TypeScript'],
  ['Backend', 'Node.js', 'Express', 'NestJS'],
  ['Data', 'PostgreSQL', 'MongoDB', 'Prisma'],
  ['DevOps', 'Linux', 'Nginx', 'PM2'],
  ['APIs', 'REST', 'JWT', 'Socket.IO']
]

const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='works'>
      <div className='awesome'>
        <span style={{ color: darkMode ? 'white' : '' }}>Technology</span>
        <span>Stack</span>
        <span>
          A production-focused stack covering modern interfaces, backend services,
          relational and document databases, real-time communication, and Linux deployment.
        </span>
      </div>
      <div className='w-right'>
        <div className='w-mainCircle'>
          {stacks.map(([title, ...items]) => (
            <div className='w-secCircle' key={title}>
              <strong>{title}</strong>
              <small>{items.join(' • ')}</small>
            </div>
          ))}
        </div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  )
}

export default Works
