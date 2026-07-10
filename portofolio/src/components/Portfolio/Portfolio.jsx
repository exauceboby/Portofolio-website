import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'

const projects = [
  {
    image: Sidebar,
    title: 'Transport Management System',
    description: 'Multi-role logistics platform for fleet, drivers, missions, offices, documents, approvals, chat, and live tracking.',
    stack: 'Next.js • NestJS • PostgreSQL • Prisma • JWT • Socket.IO'
  },
  {
    image: Ecommerce,
    title: 'NEXORA Business Platform',
    description: 'Modular business platform with secure APIs, responsive dashboards, role-based administration, and Linux deployment.',
    stack: 'React • Next.js • Node.js • PostgreSQL • MongoDB'
  },
  {
    image: MusicApp,
    title: 'Goyetu Platform',
    description: 'Web and mobile social platform with responsive interfaces, secure user management, and real-time notifications.',
    stack: 'React • Flutter • Node.js • Socket.IO • JWT'
  },
  {
    image: HOC,
    title: 'CRM & Business Analytics',
    description: 'Customer relationship and sales platform with workflow automation and real-time business reporting dashboards.',
    stack: 'JavaScript • PHP • MySQL • Bootstrap • REST APIs'
  }
]

const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='portfolio' id='Portfolio'>
      <span style={{ color: darkMode ? 'white' : '' }}>Selected Software</span>
      <span>Projects</span>
      <Swiper spaceBetween={30} slidesPerView='auto' grabCursor className='portfolio-slider'>
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <article className='project-card'>
              <img src={project.image} alt={`${project.title} preview`} />
              <div className='project-content'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Portfolio
