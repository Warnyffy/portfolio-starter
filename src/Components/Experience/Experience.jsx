import React from 'react'
import './Experience.css'
import {themeContext} from "../../Context"
import {useContext} from "react";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
        <div className="achievement">
            <div className="circle">8+</div>
            <span style={{color: darkMode? 'orange' : ''}}>Years</span>
            <span style={{color: darkMode? 'orange' : ''}}>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">20+</div>
            <span style={{color: darkMode? 'orange' : ''}}>Completed</span>
            <span style={{color: darkMode? 'orange' : ''}}>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span style={{color: darkMode? 'orange' : ''}}>Companies</span>
            <span style={{color: darkMode? 'orange' : ''}}>Work</span>
        </div>


    </div>
  )
}

export default Experience
