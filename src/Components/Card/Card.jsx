import React from 'react'
import "./Card.css"
const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <div className="c-button">Learn more</div>
    </div>
  )
}

export default Card
