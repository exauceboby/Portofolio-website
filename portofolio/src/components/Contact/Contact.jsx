import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { themeContext } from '../../Context'

const Contact = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const form = useRef()
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event) => {
    event.preventDefault()
    setDone(false)
    setError(false)

    emailjs.sendForm('service_1cq2kck', 'template_gmvpumf', form.current, {
      publicKey: 'l0QaTSxMo5_hRiHG4'
    }).then(
      () => {
        setDone(true)
        form.current.reset()
      },
      () => setError(true)
    )
  }

  return (
    <div className='contact-form' id='Contact'>
      <div className='c-left'>
        <div className='awesome'>
          <span style={{ color: darkMode ? 'white' : '' }}>Let’s build</span>
          <span>Something valuable</span>
          <span>
            Available for remote Full-Stack Software Engineer roles, international collaborations,
            and software development contracts.
          </span>
          <a href='mailto:exauceboby15@gmail.com'>exauceboby15@gmail.com</a>
          <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input required type='text' name='user_name' className='user' placeholder='Name' />
          <input required type='email' name='user_email' className='user' placeholder='Email' />
          <textarea required name='message' className='user' placeholder='Message' />
          <input type='submit' value='Send message' className='button' />
          <span>{done && 'Thank you. Your message has been sent.'}</span>
          <span>{error && 'The message could not be sent. Please email me directly.'}</span>
          <div className='blur c-blur1' style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
