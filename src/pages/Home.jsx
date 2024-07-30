import React, { Component } from 'react';
import './Home.css';  // Import the CSS file
import AboutCard from '../components/AboutCard';

const about1 = "I am a full-stack developer and IoT-based web designer with over three years of experience in technologies like JavaScript, React, Node.js, Java, and Spring Boot, alongside expertise in IoT integrations using microcontrollers such as ESP32, Arduino, and Raspberry Pi. I offer tailored solutions to meet specific project needs, focusing on innovation and cost-effectiveness."
const about2 = "I hold a BSc Engineering Honours Degree in Computer Science and Engineering from the University of Moratuwa, specializing in Integrated Computer Engineering. My professional experience includes a role as a Software Engineer at Circles.Life Sri Lanka and a five-star rating on Fiverr, underscoring my expertise across various technical domains."
const about3 = "My portfolio includes extensive work with Arduino, microcontroller projects, and system debugging, ensuring optimal functionality and performance. "

class Home extends Component {
    componentDidMount() {
        const spotlight = document.querySelector('.spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.pageX}px`;
            spotlight.style.top = `${e.pageY}px`;
        });
    }

    render() {
        return (
            <div className="bg-primary text-white" style={{ height: "100vh" }}>
                <div className="spotlight"></div>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="mt-5"></div>
                        <div className="col-sm-4 mt-5">
                            <div style={{ overflow: 'hidden', border: '0.5px solid' }}>
                            <div className="mb-2">
                            </div>
                                
                                <h1>Nimsara Paramulla</h1>
                                <h5>Full-stack Developer</h5>
                                <h5>Embedded Systems Developer</h5>
                            </div>
                            

                            <div className='mt-5' style={{ overflow: 'hidden', border: '0.5px solid' }}>
                                Very long text here but will be truncated to fit the containersdfsfsfdfsdfdfsdfsdfsdfsdfsdf sadasd
                            </div>

                            <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size"
                            />
                        </div>

                        <div className="container-fluid col mt-5">
                            <div className="row">
                                <p mb-3>{about1}</p>
                                <p mb-3>{about2}</p>
                                <p mb-3>{about3}</p>

                                <AboutCard description= 'about1' image = "https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
