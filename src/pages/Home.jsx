import React, { Component, useRef } from 'react';
import './Home.css';  // Import the CSS file
import AboutCard from '../components/AboutCard';
import ProjectCard from '../components/ProjectCard';
import aboutData from '../data/AboutData'; // Import the aboutData array
import projectData from '../data/ProjectData'; // Import the projectData array
import '../components/ProjectCard.css'; // Import the CSS file
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";
import { BsEnvelope,BsPhone } from "react-icons/bs"; // Import the email icon
import { useInView } from 'react-intersection-observer';
import { ScrollSpy } from 'bootstrap'; // Import ScrollSpy from bootstrap



const about1 = (
    <p className="text-light-grey mt-8" style={{textAlign:'justify',marginRight:5}}>
        I'm a <span className="tech-highlight">full-stack and embedded systems engineer</span>. My skills and experiences span with frontend, backend technologies, project management tools , and IoT integrations using diverse microcontrollers, actuators, sensors and different types of protocols. I deliver innovative and cost-effective solutions tailored to each project.
    </p>
);

const about2 = (
    <p className="text-light-grey" style={{textAlign:'justify',marginRight:5}}>
        I hold a <span className="tech-highlight">BSc Engineering Honours Degree in Computer Science and Engineering from the University of Moratuwa, Sri-Lanka</span>, specializing in Integrated Computer Engineering. My professional experience includes a role as a Trainee <span className="tech-highlight">Software Engineer at Circles.Life Technologies</span> and a <span className="tech-highlight">5 star rating on Fiverr and Upwork platforms</span>, underscoring my expertise across various technical domains.
    </p>
);

const about3 = (
    <p className="text-light-grey" style={{textAlign:'justify',marginRight:5}}>
        My portfolio includes extensive work with fullstack technologies and embedded-systems based projects, also system debugging, ensuring optimal functionality and performance.
    </p>
);



// Create a new component to track visibility
const VisibleDiv = ({ id, children, handleVisibilityChange }) => {
    const { ref, inView } = useInView({
        threshold: 0.5, 
    });

    React.useEffect(() => {
        if (inView) {
            handleVisibilityChange(id);
        }
    }, [inView, id, handleVisibilityChange]);

    return (
        <div ref={ref} id={id}>
            {children}
        </div>
    );
};



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentID: 'list-item-1'
        };
    }
    
    componentDidMount() {
        const spotlight = document.querySelector('.spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = `${e.pageX}px`;
            spotlight.style.top = `${e.pageY}px`;
        });

        // Scroll right side column from anywhere on the page
        document.addEventListener('wheel', this.handleScroll, { passive: false });

        const scrollSpyElement = document.querySelector("#scrollSpy");
        const scrollSpyInstance = new ScrollSpy(scrollSpyElement, {
          target: '#my-nav'
        });
        console.log(scrollSpyInstance);
    }

    componentWillUnmount() {
        document.removeEventListener('wheel', this.handleScroll);
    }

    handleScroll = (event) => {
        const rightColumn = document.querySelector('.right-column');
        if (rightColumn) {
            // Check if the wheel event should scroll the right column or propagate naturally
            if ((event.deltaY < 0 && rightColumn.scrollTop === 0) || // Scrolling up at the top
                (event.deltaY > 0 && rightColumn.scrollTop === rightColumn.scrollHeight - rightColumn.offsetHeight)) { // Scrolling down at the bottom
                // Allow default browser scroll if at the limits of the content
                event.stopPropagation(); // Stop the event from propagating to other elements
            } else {
                // Otherwise, perform custom scroll and prevent the default scroll
                rightColumn.scrollTop += event.deltaY;
                event.preventDefault(); // Prevent the browser's default scroll
            }
        }
    }
    

    handleVisibilityChange = (id) => {
        this.setState({ currentID: id });
    }
    render() {
        const { currentID } = this.state;
        return (
            <div className="bg-primary text-white container-fluid" style={{ height: "100vh", display: 'flex', flexDirection: 'row' }}>
                <div className="spotlight"/>

                <div className="container offset-md-2 col-sm-3 mt-5 d-none d-md-block" style={{ height: "100vh", position: 'fixed', overflowY: 'scroll' }}>
                    <h1 className='mt-5'>Nimsara Paramulla</h1>
                    <h5>Full-stack Engineer</h5>
                    <h5>Embedded Systems Engineer</h5>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size mt-3"
                        style={{ borderRadius: '50%',  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(247, 247, 247, 0.1)' }}
                    />
                    <div className="mt-5"/>

                    <div id="list-example">
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-1" style={currentID==='list-item-1'?{color:'white', marginLeft:15}:{color:'#959caf'}}>- About</a>
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-2" style={currentID==='list-item-2'?{color:'white',marginLeft:15}:{color:'#959caf'}}>- Background</a>
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-3" style={currentID==='list-item-3'?{color:'white',marginLeft:15}:{color:'#959caf'}}>- Projects</a>
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-4" style={currentID==='list-item-4'?{color:'white',marginLeft:15}:{color:'#959caf'}}>- Contact</a>
                    </div>

                    <div className="d-flex mt-6 col-8" >
                        <a className="list-group-item list-group-item-action icon-link github" href="https://github.com/nimsara1999?tab=repositories">
                            <BsGithub style={{fontSize:30}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link linkedin" href="https://www.linkedin.com/in/nimsara-thisal-166513239/">
                            <FaLinkedin style={{fontSize:30}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link email" href="mailto:nimsarathisalgcc@gmail.com">
                            <BsEnvelope style={{fontSize:30}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link phone" href="tel:+94710880133">
                            <BsPhone style={{fontSize:28}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link fiverr" href="https://www.fiverr.com/s/bd5wKjX">
                            <TbBrandFiverr style={{fontSize:30}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link upwork" href="https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share">
                            <FaSquareUpwork style={{fontSize:30}} />
                        </a>
                    </div>

                </div>

                
                <div className="container-fluid col-sm-5 offset-md-5 right-column">
                {/* Navigation bar */}
                <div id="list-example" className="d-md-none row-12 d-flex justify-content-around text-center mb-3 mt-3">
                    <a className={`list-group-item list-group-item-action `} href="#list-item-0" style={currentID==='list-item-1'?{color:'white'}:{color:'#959caf'}}>About</a>
                    <a className={`list-group-item list-group-item-action `} href="#list-item-2" style={currentID==='list-item-2'?{color:'white'}:{color:'#959caf'}} >Background</a>
                    <a className={`list-group-item list-group-item-action `} href="#list-item-3" style={currentID==='list-item-3'?{color:'white'}:{color:'#959caf'}}>Projects</a>
                    <a className={`list-group-item list-group-item-action `} href="#list-item-4" style={currentID==='list-item-4'?{color:'white'}:{color:'#959caf'}}>Contact</a>
                </div>

                <div id="scrollSpy" data-bs-spy="scroll" data-bs-target="#my-nav" data-bs-smooth-scroll="true" tabIndex="0" style={{ height: '100%', overflowY: 'scroll' }}>
                    
                    <div id="list-item-0" className='d-md-none text-center'>
                    <h1 className='mt-5'>Nimsara Paramulla</h1>
                    <h6 >Full-stack Engineer</h6>
                    <h6>Embedded Systems Engineer</h6>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size mt-3"
                        style={{ borderRadius: '50%',  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(247, 247, 247, 0.1)' }}
                    />
                    <div className="d-flex mt-5 col-8 offset-2 text-center">
                        <a className="list-group-item list-group-item-action icon-link github" href="https://github.com/nimsara1999?tab=repositories">
                            <BsGithub style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link linkedin" href="https://www.linkedin.com/in/nimsara-thisal-166513239/">
                            <FaLinkedin style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link email" href="mailto:nimsarathisalgcc@gmail.com">
                            <BsEnvelope style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link phone" href="tel:+94710880133">
                            <BsPhone style={{fontSize:18}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link fiverr" href="https://www.fiverr.com/s/bd5wKjX">
                            <TbBrandFiverr style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link upwork" href="https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share">
                            <FaSquareUpwork style={{fontSize:20}} />
                        </a>
                    </div>
                    </div>
                    
                    <VisibleDiv className="mb-5"  id="list-item-1" handleVisibilityChange={this.handleVisibilityChange}>
                        {about1}
                        {about2}
                        {about3}
                        </VisibleDiv>
                        <VisibleDiv className="mt-5" id="list-item-2" handleVisibilityChange={this.handleVisibilityChange}/>
                            <h4 className='mt-5 mb-3'>Background</h4>
                            <div className="about-cards-container">
                                {aboutData.map((about, index) => (
                                    <div className="about-card">
                                        <AboutCard key={index} {...about} />
                                    </div>
                                ))}
                            </div>

                        <VisibleDiv className="mt-5" id="list-item-3" handleVisibilityChange={this.handleVisibilityChange}/>
                        <h4 className='mt-7 mb-3'>Projects</h4>
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}

                        <VisibleDiv className="mt-5" id="list-item-4" handleVisibilityChange={this.handleVisibilityChange}>
                        <h4 className='mt-7 mb-3'>Contact Me</h4>
                        <p>Email: nimsarathisalgcc@gmail.com</p>
                        <p>Mobile: +94710880133</p>
                        <p>Address: (70294) Madampe, Atakalanpanna, Sri-Lanka.</p>
                        <div className="d-flex col-5 text-center mb-6">
                        <a className="list-group-item list-group-item-action icon-link github" href="https://github.com/nimsara1999?tab=repositories">
                            <BsGithub style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link linkedin" href="https://www.linkedin.com/in/nimsara-thisal-166513239/">
                            <FaLinkedin style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link email" href="mailto:nimsarathisalgcc@gmail.com">
                            <BsEnvelope style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link phone" href="tel:+94710880133">
                            <BsPhone style={{fontSize:18}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link fiverr" href="https://www.fiverr.com/s/bd5wKjX">
                            <TbBrandFiverr style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link upwork" href="https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share">
                            <FaSquareUpwork style={{fontSize:20}} />
                        </a>
                    </div>
                    </VisibleDiv>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
