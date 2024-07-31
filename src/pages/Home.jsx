import React, { Component } from 'react';
import './Home.css';  // Import the CSS file
import AboutCard from '../components/AboutCard';
import ProjectCard from '../components/ProjectCard';
import aboutData from '../data/AboutData'; // Import the aboutData array
import projectData from '../data/ProjectData'; // Import the projectData array

const about1 = "I am a full-stack developer and IoT-based web designer with over three years of experience in technologies like JavaScript, React, Node.js, Java, and Spring Boot, alongside expertise in IoT integrations using microcontrollers such as ESP32, Arduino, and Raspberry Pi. I offer tailored solutions to meet specific project needs, focusing on innovation and cost-effectiveness."
const about2 = "I hold a BSc Engineering Honours Degree in Computer Science and Engineering from the University of Moratuwa, specializing in Integrated Computer Engineering. My professional experience includes a role as a Trainee Software Engineer at Circles.Life Sri Lanka and a five-star rating on Fiverr, underscoring my expertise across various technical domains."
const about3 = "My portfolio includes extensive work with Arduino, microcontroller projects, and system debugging, ensuring optimal functionality and performance."

class Home extends Component {
    componentDidMount() {
        const spotlight = document.querySelector('.spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.pageX}px`;
            spotlight.style.top = `${e.pageY}px`;
        });

        // Scroll right side column from anywhere on the page
        document.addEventListener('wheel', this.handleScroll, { passive: false });
    }

    componentWillUnmount() {
        document.removeEventListener('wheel', this.handleScroll);
    }

    handleScroll = (event) => {
        const rightColumn = document.querySelector('.right-column');
        if (rightColumn) {
            rightColumn.scrollTop += event.deltaY;
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="bg-primary text-white container-fluid" style={{ height: "100vh", display: 'flex', flexDirection: 'row' }}>
                <div className="spotlight"/>

                <div className="container offset-sm-2 col-sm-3" style={{ height: "100vh", position: 'fixed', overflowY: 'scroll' }}>
                    <h1 className='mt-5'>Nimsara Paramulla</h1>
                    <h5>Full-stack Engineer</h5>
                    <h5>Embedded Systems Engineer</h5>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size"/>
                    <div className="embed-responsive embed-responsive-4by3 mt-5">
                        <iframe className="embed-responsive-item m-0" src="https://www.youtube.com/embed/Oq97EmuJA98?rel=0" allowFullScreen></iframe>
                    </div>
                </div>
                
                <div className="container-fluid col-sm-5 offset-sm-5 right-column" style={{ height: "100vh", overflowY: 'auto' }}>
                    <div className="row">
                        <p className='mt-5 fw-lighter lh-lg'>{about1}</p>
                        <p className='mt-2 fw-lighter lh-lg'>{about2}</p>
                        <p className='mt-2 fw-lighter lh-lg mb-5'> {about3}</p>
                        <h4 className='mt-5'>Background</h4>
                        {aboutData.map((about, index) => (
                            <AboutCard key={index} {...about} />
                        ))}
                        <h4 className='mt-5'>Projects</h4>
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
