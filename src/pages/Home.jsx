import React, { Component } from 'react';
import './Home.css';  // Import the CSS file
import AboutCard from '../components/AboutCard';
import ProjectCard from '../components/ProjectCard';
import aboutData from '../data/AboutData'; // Import the aboutData array
import projectData from '../data/ProjectData'; // Import the projectData array
import '../components/ProjectCard.css'; // Import the CSS file

const about1 = "I'm a full-stack and embedded systems engineer with three years of experience. My skills span JavaScript, React, Node.js, Java, Spring Boot, and IoT integrations using diverse microcontrollers, actuators, and sensors. I deliver innovative and cost-effective solutions tailored to each project."
const about2 = "I hold a BSc Engineering Honours Degree in Computer Science and Engineering from the University of Moratuwa, specializing in Integrated Computer Engineering. My professional experience includes a role as a Trainee Software Engineer at Circles.Life Sri Lanka and a 5 star rating on Fiverr and Upwork platforms, underscoring my expertise across various technical domains."
const about3 = "My portfolio includes extensive work with fullstack technologies and embedded-systems based projects, also system debugging, ensuring optimal functionality and performance."

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

                <div className="container offset-sm-2 col-sm-3 mt-5" style={{ height: "100vh", position: 'fixed', overflowY: 'scroll' }}>
                    <h1 className='mt-5'>Nimsara Paramulla</h1>
                    <h5>Full-stack Engineer</h5>
                    <h5>Embedded Systems Engineer</h5>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size mt-3"
                        style={{ borderRadius: '50%',  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(247, 247, 247, 0.1)' }}
                    />
                    {/* <div className="embed-responsive embed-responsive-4by3 mt-5">
                        <iframe className="embed-responsive-item m-0" src="https://www.youtube.com/embed/Oq97EmuJA98?rel=0" allowFullScreen></iframe>
                    </div> */}
                    <div className="mt-5"/>
                    <h6 className='mt-5'>About</h6>
                    <h6>Background</h6>
                    <h6>Projects</h6>
                </div>
                
                <div className="container-fluid col-sm-5 offset-sm-5 right-column" style={{ height: "100vh", overflowY: 'auto' }}>
                    <div className="row mt-5">
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
