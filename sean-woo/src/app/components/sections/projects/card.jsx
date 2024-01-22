// Card.jsx
import React from 'react';

const Card = ({ title, imageUrl, link, stack, color }) => {
    return (
        <div className="card" data-color={color}>
            <div className="project-title">{title}</div>
            <a target="_blank" href={link}>
                <img className="card-front-image card-image" src={imageUrl} alt={title} />
            </a>
            <div className="card-faders">
                {[...Array(8)].map((_, index) => (
                    <img key={index} className="card-fader card-image" src={imageUrl} alt={title} />
                ))}
            </div>
            <div className="stack">
                {stack.map((entry, index) => (
                    <div key={index} className="stack-entry">
                        {entry}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
