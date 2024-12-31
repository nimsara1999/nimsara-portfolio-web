import React, { useState } from 'react';
import './ProjectCard.css'; // Import the CSS file
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ title, description, image, scale, badges, link, type, selectedType }) => {
    // Use object for multiple style changes
    const [style, setStyle] = useState({
        backgroundColor: 'rgba(247, 247, 247, 0.05)', // Fully transparent
        boxShadow: 'none' // No shadow initially
    });

    const [isHovering, setIsHovering] = useState(false); // New state to track hover

    const handleMouseEnter = () => {
        setStyle({
            backgroundColor: 'rgba(247, 247, 247, 0.1)', // Semi-transparent white for the matte effect
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            borderColor: 'rgba(247, 247, 247, 0.1)' // Subtle shadow for depth
        });
        setIsHovering(true); // Set hovering to true
    };

    const handleMouseLeave = () => {
        setStyle({
            backgroundColor: 'rgba(247, 247, 247, 0.05)', // Back to initial state
            boxShadow: 'none' // Remove shadow
        });
        setIsHovering(false); // Set hovering to false
    };

    const handleBadges = () => {
        if (!badges) return null;
        return badges.map((badge, index) => (
            <span key={index} className="badge rounded-pill custom-badge" style={{color:'#00ccff',fontWeight:'lighter'}}>
                {badge}
            </span>
        ));
    };

    return (
        <>
        { type.includes(selectedType) || selectedType== 'all' ?
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
        >  
            <div
                className="card m-1 d-none d-md-block mt-3"
                style={{
                    width: '96%',
                    transition: 'all 0.5s', // Smooth transition for all properties
                    ...style // Spread the style object here
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img
                            src={image}
                            className="card-img-top"
                            alt="Card"
                            style={{ transform: `scale(${scale})`, marginTop: '1.6rem', marginLeft: '1rem' }}
                        />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h6 className={isHovering ? 'custom-text-primary-2' : 'custom-text-primary-1'} style={{margin:0, transition: 'all 0.5s'}}>
                                {title}   {link?<BsBoxArrowUpRight style={{'color':isHovering? '#00ccff':'white', transition: 'all 0.5s',marginBottom:'5',marginLeft:isHovering?'10':'5'}} />:null}
                            </h6>
                            <p className="card-text mt-2 mb-2 custom-text-secondary-2" style={{margin:0}}>
                                {description}
                            </p>
                            {handleBadges()}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="card m-1 d-md-none"
                style={{
                    width: '96%',
                    transition: 'all 0.5s', // Smooth transition for all properties
                    ...style // Spread the style object here
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img
                            src={image}
                            className="card-img-top"
                            alt="Card"
                            style={{ transform: `scale(${scale * 0.7})`}}
                        />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h6 className={isHovering ? 'custom-text-primary-2' : 'custom-text-primary-1'} style={{margin:0, transition: 'all 0.5s'}}>
                                {title}   {link?<BsBoxArrowUpRight style={{'color':isHovering? '#00ccff':'white', transition: 'all 0.5s',marginBottom:'5',marginLeft:isHovering?'10':'5'}} />:null}
                            </h6>
                            <p className="card-text mt-2 mb-2 custom-text-secondary-2" style={{margin:0}}>
                                {description}
                            </p>
                            {handleBadges()}
                        </div>
                    </div>
                </div>
            </div>
        </a>
        :null}
        </>
    );
    
};

export default ProjectCard;
