import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png"
import Glasses from "../../img/glasses.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import {themeContext} from "../../Context"
import {useContext} from "react";
import {motion} from 'framer-motion'
const Services = () => {
    const transition = {duration: 3, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
        {/* left side*/}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
            <span>Services</span>
            <span style={{color: darkMode? 'white' : ''}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id qui, possimus assumenda,
                 <br />facere ipsam, officiis excepturi repellat cum laborum sed optio eum provident culpa 
                 <br />accusamus vel voluptas eveniet iusto incidunt.
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{
                    background: "#ABF1FF94"
                }}>
            </div>
        </div>
        {/*right side*/}
        <div className="cards">
            <motion.div
            initial={{left: '25rem'}}
            whileInView={{left: '14rem'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading ={'Design'}
                detail = {"Figma, Sketch, Adobe Photoshop, Adobe XD"}
                />
            </motion.div>
                    {/* the second button*/}
            <motion.div 
            initial={{top: '12rem', left: '-8rem'}}
            whileInView={{left: '-4rem'}}
            transition={transition}
            style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading ={'Developer'}
                detail = {"Html, CSS, JavaScript, React, Flutter, Machine Learning"}
                />
            </motion.div>
                    {/* the third card*/}
            <motion.div 
            initial={{top: '19rem', left: '17rem'}}
            whileInView={{left: '12rem'}}
            transition={transition}
            style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Humble}
                heading ={'UI/UX'}
                detail = {"I am a skilled designer who is very deligent to accomplish the specific design needs of clients"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services
