import React from 'react';
import '../styles/card.scss';

function Card(props: any) {
  return (
    <div className = "card-container">
        <h2>{props.title}</h2>

        <img 
        src = {props.imgSrc} 
        alt = {props.alt ?? ""} 
        className = "card-img"/>

        <p className = "card-desc">
          {props.description}
        </p>

        <a href = {props.projectUrl} target = "_blank" rel = "noreferrer">
            <input type = "submit" value = "Learn More" />
        </a>
    </div>
  );
}

export default Card;