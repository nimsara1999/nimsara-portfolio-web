import React, { useState } from 'react';

const AboutCard = ({ description, image }) => {
    // Use object for multiple style changes
    const [style, setStyle] = useState({
        backgroundColor: 'rgba(0, 0, 0, 0)', // Fully transparent
        borderTop: '0px', // Initial margin top
        boxShadow: 'none' // No shadow initially
    });

    const handleMouseEnter = () => {
        setStyle({
            backgroundColor: 'rgba(247, 247, 247, 0.1)', // Semi-transparent white for the matte effect
            borderTop: '0.6px solid', // Add margin on top to create a raised effect
            borderTopColor: 'rgba(255, 255, 255, 0.1)', // Slightly visible border
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)' // Subtle shadow for depth
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            backgroundColor: 'rgba(0, 0, 0, 0)', // Revert to transparent
            borderTop: '0px', // Remove top margin
            boxShadow: 'none' // Remove shadow
        });
    };

    return (
        <div
            className="card"
            style={{
                width: '18rem',
                transition: 'all 0.8s', // Transition for all properties
                ...style // Spread the style object here
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={image}
                className="card-img-top double-size"
                alt="Card Image"
            />
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default AboutCard;
