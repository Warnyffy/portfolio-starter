import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper"  >
        <div className="n-left">
            <div className="n-name">Warren</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                        <li>Home</li>
                    </Link>
                    <Link to="Services" spy={true} smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link to="Experience" spy={true} smooth={true}>
                        <li>Experience</li>
                    </Link>
                    <Link to="Portfolio" spy={true} smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link to="Testimonials" spy={true} smooth={true}>
                        <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar
