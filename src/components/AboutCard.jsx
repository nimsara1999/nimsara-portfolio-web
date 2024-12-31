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
            <span key={index} className="badge rounded-pill custom-badge" style={{color:'#00ccff',fontWeight:'lighter'}}>
                {badge}
            </span>
        ));
    };
    

    return (
        <>

        <div
            className="card m-1 d-none d-md-block"
            style={{
                width: '15rem',
                transition: 'all 0.5s', // Smooth transition for all properties
                ...style // Spread the style object here
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="row no-gutters">
                <div className="col-md-3" style={{alignItems:'center', alignSelf:'center'}}>
                    <img
                        src={image}
                        className="card-img-top"
                        alt="Card Image"
                        style={{ transform: `scale(${scale})`, marginLeft: '0.6rem'}}
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


        <div
            className="card m-1 d-md-none"
            style={{
                width: '96%', // Adjust the width as needed
                transition: 'all 0.5s', // Smooth transition for all properties
                ...style // Spread the style object here
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="row no-gutters align-items-center"> {/* Use 'align-items-center' to align items vertically */}
                <div className="col-4"> {/* Allocate column size for the image */}
                    <img
                        src={image}
                        className="card-img-top"
                        alt="Card"
                        style={{ transform: `scale(${scale * 0.6})`, width: '100%' }} // Ensure the image covers the column width
                    />
                </div>
                <div className="col-8"> {/* Allocate column size for the description */}
                    <div className="card-body">
                        <p className="card-text custom-text-secondary" style={{ margin: 0 }}>{description}</p>
                        {handleBadges()}
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default AboutCard;
