import React from 'react';
import './Intro.css';
import Githup from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro' id="Intro">
            <div className='i-left'>
                <div className='i-name'>
                    <span style={{ color: darkMode ? 'white' : '' }}>Hey! I Am</span>
                    <span>Exauce BOBY</span>
                    <span>Motivated Full-Stack Developer and
                        Attention to detail with a
                        Strong infrastructure experience
                        network and telecommunications.
                        Extensive experience in
                        design, development and
                        Maintenance of solutions
                        software, web applications, and
                        mobile applications. Expert
                        in the provision of support
                        computer science, maintenance of
                        systems and optimization of
                        Networks. Seeks to leverage
                        technical expertise and
                        Leadership Skills for
                        Contribute to innovative projects.</span>
                </div>

                <button className='button i-button'>Hire me</button>
                <div className='i-icons'>
                    <img src={Githup} alt="Github" />
                    <img src={LinkedIn} alt="LinkedIn" />
                    <img src={Instagram} alt="Instagram" />
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={boy} alt="boy" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt="glassesimoji" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1="Full " txt2="Stack " />
                </motion.div>
                <motion.div
                    initial={{ top: '18rem', left: '9rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    className='floating-div'
                    >
                    <FloatingDiv image={thumbup} txt1="Best Design " txt2="Award " />
                </motion.div>
                <div className='blur' style={{ background: 'rgb(238 210 255' }}></div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div>
    )
}

export default Intro
