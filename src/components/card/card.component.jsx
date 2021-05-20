import React from "react";
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img className="card-image" alt="contact" src={`https://picsum.photos/id/${props.contact.id * 7}/200`} />
    <h2>{props.contact.name}</h2>
    <p>{props.contact.phone}</p>
    <p>{props.contact.email}</p>
  </div>
)