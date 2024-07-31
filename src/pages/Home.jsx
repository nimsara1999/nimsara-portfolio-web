import React, { Component } from 'react';
import './Home.css';  // Import the CSS file
import AboutCard from '../components/AboutCard';

const about1 = "I am a full-stack developer and IoT-based web designer with over three years of experience in technologies like JavaScript, React, Node.js, Java, and Spring Boot, alongside expertise in IoT integrations using microcontrollers such as ESP32, Arduino, and Raspberry Pi. I offer tailored solutions to meet specific project needs, focusing on innovation and cost-effectiveness."
const about2 = "I hold a BSc Engineering Honours Degree in Computer Science and Engineering from the University of Moratuwa, specializing in Integrated Computer Engineering. My professional experience includes a role as a Trainee Software Engineer at Circles.Life Sri Lanka and a five-star rating on Fiverr, underscoring my expertise across various technical domains."
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
            <div className="bg-primary text-white container-fluid" style={{ height: "100vh", display: 'flex', flexDirection: 'row' }}>
                <div className="spotlight"/>

                <div className="container offset-sm-2 col-sm-3" style={{ height: "100vh", position: 'fixed', overflowY: 'scroll' }}>
                        <h1 className='mt-5'>Nimsara Paramulla</h1>
                        <h5>Full-stack Engineer</h5>
                        <h5>Embedded Systems Engineer</h5>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size"/>
                    <div className="embed-responsive embed-responsive-4by3 mt-5" style={{ }}>
                        <iframe className="embed-responsive-item m-0" src="https://www.youtube.com/embed/Oq97EmuJA98?rel=0" allowFullScreen style={{}}></iframe>
                    </div>

                </div>
                
                <div className="container-fluid col-sm-5 offset-sm-5" style={{ height: "100vh", overflowY: 'auto' }}>
                    <div className="row">
                        <p className='mt-5 fw-lighter lh-lg'>{about1}</p>
                        <p className='mt-2 fw-lighter lh-lg'>{about2}</p>
                        <p className='mt-2 fw-lighter lh-lg mb-5'> {about3}</p>
                        <h4 className='mt-5'>Background</h4>
                        <AboutCard description='BSc.Engineering UG CSE, University of Moratuwa, Sri-Lanka' image="https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png" scale={1}/>
                        <AboutCard description='GCE(A/L) Examination 2019, District Rank - 1 Island Rank - 7' image="https://grace-academy.in/wp-content/uploads/2022/04/man-with-laptop-showing-ok-gesture-4927667-4122903.png" scale={1.5}/>
                        <AboutCard description='Sucessfully completed internship as a full-stack developer at Circles Life.' image="https://upload.wikimedia.org/wikipedia/commons/a/aa/Circles_Life_RGB_Color_Logo.svg" scale={1}/>
                        <AboutCard description='Founder - Softnx Technologies by Nimsara' image="https://drive.google.com/thumbnail?id=1qF3Q4nrnD4KdxsgV04x5Prw8MsEBb20L" scale={1.7} badges={['iot','fullstack','mobile-app']}/>
                        <AboutCard description='3yr+ experience with IOT technologies.' image="https://drive.google.com/thumbnail?id=12AWUU-oRPl3xs4ugkf2Ddc1yP_yhUmbp" scale={1.6} badges={["microcontroller","C++","mqtt","sensor","actuator","nodered"]}/>
                        <AboutCard description='2yr+ experience with Fullstack technologies.' image="https://drive.google.com/thumbnail?id=1yOw8d4Lxns4hDyz6eqQWS3JfjzmhK_Qp" scale={1.6} badges={["react","html","css","native","javascript","python","java","springboot","mysql","firebase"]}/>
                        <AboutCard description='Freelancer - Five Star rated IOT based Fullstack developer at Fiverr.' image="https://freelogopng.com/images/all_img/1656738600fiverr-app-logo.png" scale={1}/>
                        <AboutCard description='Freelancer - Five Star rated IOT based Fullstack developer at Upwork.' image="https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg" scale={1}/>

                        <h4 className='mt-5'>Projects</h4>
                    </div>
                </div>
                <div className="container-fluid col-sm-5 offset-sm-5" style={{ height: "100vh", overflowY: 'auto'}}></div>
            </div>
        );
    }
}

export default Home;
