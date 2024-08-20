import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {themeContext} from "../../Context"
import {useContext} from "react";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = React.useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oasob5b', 'template_1md6pov', form.current, {
        publicKey: 'AuUPn5-vKUpJ4AemO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur"
                style={{background: "#ABF1FF94"}}
                ></div>
            </div>
        </div>


        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message' />
                <input type="submit" value="send" className='button c-button1' />
                <span style={{color: darkMode? 'white' : ''}}>{done && "Thanks for getting in touch!"}</span>
                <div className="blur c-blur1"
                style={{background: "var(--purple)"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
