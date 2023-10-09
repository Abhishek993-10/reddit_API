import React from 'react';
import './Card.css';

const Card = (props) => {
    return <div classname={`card ${props.className}`}>{props.children}</div>;
};

export default Card;