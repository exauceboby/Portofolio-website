import React, { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? 'white' : '' }}>Hello, I am</span>
          <span>Exaucé Boby Zakuda</span>
          <strong>Full-Stack Software Engineer</strong>
          <span>
            I design, build, and deploy secure, scalable web applications using React,
            Next.js, Node.js, TypeScript, PostgreSQL, and modern Linux infrastructure.
            My work spans business platforms, logistics systems, CRM applications,
            real-time features, dashboards, and role-based workflows.
          </span>
        </div>

        <Link to='Contact' smooth>
          <button className='button i-button'>Hire me</button>
        </Link>
        <div className='i-icons'>
          <a href='https://github.com/exauceboby' target='_blank' rel='noreferrer'>
            <img src={Github} alt='GitHub profile' />
          </a>
          <a href='https://www.linkedin.com/in/exauce-boby-2006ba2a4' target='_blank' rel='noreferrer'>
            <img src={LinkedIn} alt='LinkedIn profile' />
          </a>
        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={boy} alt='Software engineer illustration' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className='floating-div'
          style={{ top: '-4%', left: '68%' }}
        >
          <FloatingDiv image={Crown} txt1='Full-Stack' txt2='Engineer' />
        </motion.div>
        <motion.div
          initial={{ top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1='Production' txt2='Ready' />
        </motion.div>
        <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
        <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
      </div>
    </div>
  );
};

export default Intro;
