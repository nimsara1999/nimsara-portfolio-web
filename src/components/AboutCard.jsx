import React, { useState } from 'react';
import './ProjectCard.css'; // Import the CSS file

const AboutCard = ({description, image, scale, badges }) => {
    // Use object for multiple style changes
    const [style, setStyle] = useState({
        backgroundColor: 'rgba(247, 247, 247, 0.05)', // Fully transparent
        boxShadow: 'none' // No shadow initially
    });

    const handleMouseEnter = () => {
        setStyle({
            backgroundColor: 'rgba(247, 247, 247, 0.1)', // Semi-transparent white for the matte effect
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            borderColor: 'rgba(247, 247, 247, 0.1)' // Subtle shadow for depth
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            backgroundColor: 'rgba(247, 247, 247, 0.05)', // Back to initial state
            boxShadow: 'none' // Remove shadow
        });
    };

    const handleBadges = () => {
        if (badges === undefined) return;
        return badges.map((badge, index) => (
            <span key={index} className="badge rounded-pill custom-badge">
                {badge}
            </span>
        ));
    };
    

    return (
        <div
            className="card m-1"
            style={{
                width: '20rem',
                transition: 'all 0.5s', // Smooth transition for all properties
                ...style // Spread the style object here
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="row no-gutters">
                <div className="col-md-3" style={{alignItems:'center', alignSelf:'center' }}>
                    <img
                        src={image}
                        className="card-img-top"
                        alt="Card Image"
                        style={{ transform: `scale(${scale})`, marginLeft: '1rem'}}
                    />
                </div>
                <div className="col">
                    <div className="card-body">
                        <p className="card-text custom-text-secondary" style={{margin:0}}>{description}</p>
                        {handleBadges()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
