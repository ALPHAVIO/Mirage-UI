import React from 'react';
import "./card.css"; // CSS related to this component
import image from './asset/logo.png'; // source of this component

const Card = () => {
    return (
        <div className="wrapper">
        <img src={image} className="rotate" alt="Rotating"/>
        </div>
    );
  }
  
  export default Card;