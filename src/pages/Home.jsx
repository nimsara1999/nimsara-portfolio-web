import React, { Component,img } from 'react';
import './Home.css';  // Import the CSS file
import AboutCard from '../components/AboutCard';
import ProjectCard from '../components/ProjectCard';
import aboutData from '../data/AboutData'; // Import the aboutData array
import projectData from '../data/ProjectData'; // Import the projectData array
import {reviewData} from '../data/reviewData';
import '../components/ProjectCard.css'; // Import the CSS file
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";
import { BsEnvelope,BsPhone } from "react-icons/bs"; // Import the email icon
import { useInView } from 'react-intersection-observer';
import { Carousel, ScrollSpy } from 'bootstrap'; // Import ScrollSpy from bootstrap
import Chatbot from '../components/ChatBot/Chatbot';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import GitHubCalendar from '../components/GithubCalendar';
import { BsFillStarFill } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";


const about1 = (
    <p className="text-light-grey mt-8" style={{textAlign:'justify',marginRight:5}}>
        I'm a <span className="tech-highlight">Full-stack, Mobile Applications and embedded systems engineer</span>. My skills and experiences span with frontend, backend technologies, project management tools, and IoT integrations using diverse microcontrollers, actuators, sensors and different types of protocols. I deliver innovative and cost-effective solutions tailored to each project.
    </p>
);

const about2 = (
    <p className="text-light-grey" style={{textAlign:'justify',marginRight:5}}>
        I am pursuing a <span className="tech-highlight">BSc Engineering Hons Degree in Computer Science and Engineering from the University of Moratuwa, Sri Lanka</span>, specializing in Integrated Computer Engineering. My professional experience includes a role as a Trainee <span className="tech-highlight">Software Engineer at Circles.Life Technologies</span> and <span className="tech-highlight">five-star ratings on </span> Fiverr and Upwork <span className="tech-highlight">freelancing platforms</span>, highlighting my expertise across various technical domains.
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
            currentID: 'list-item-1',
            selectedType: 'all'
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
            if ((event.deltaY < 0 && rightColumn.scrollTop === 0) ||
                (event.deltaY > 0 && rightColumn.scrollTop === rightColumn.scrollHeight - rightColumn.offsetHeight)) { 
                event.stopPropagation();
            } else {
                rightColumn.scrollTop += event.deltaY;
                event.preventDefault();
            }
        }
    }
    

    handleVisibilityChange = (id) => {
        this.setState({ currentID: id });
    }
    render() {
        const { currentID } = this.state;
        return (
            <div className="bg-primary text-white" style={{ height: "100vh", display: 'flex', flexDirection: 'row' }}>
                <div className="spotlight"/>
                <Chatbot/>

                <div className="container offset-md-2 col-sm-3 mt-5 d-none d-md-block" style={{ height: "100vh", position: 'fixed'}}>
                    <h1 className='mt-5'>Nimsara Thisal</h1>
                    <div className='mt-3'/>
                    <h5>
                        <Typewriter
                            words={['Full-stack Engineer', 'Embedded Systems Engineer']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h5>
                    <div className='mt-3'/>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size mt-3"
                        style={{ borderRadius: '50%',  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(247, 247, 247, 0.1)' }}
                    />
                    
                    <div className="mt-5"/>

                    <div id="list-example">
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-1" style={currentID==='list-item-1'?{color:'white', marginLeft:15}:{color:'#959caf'}}>- About</a>
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-5" style={currentID==='list-item-5'?{color:'white',marginLeft:15}:{color:'#959caf'}}>- Reviews</a>
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-3" style={currentID==='list-item-3'?{color:'white',marginLeft:15}:{color:'#959caf'}}>- Projects</a>
                        <a className="list-group-item list-group-item-action mb-2" href="#list-item-4" style={currentID==='list-item-4'?{color:'white',marginLeft:15}:{color:'#959caf'}}>- Contact</a>
                    </div>

                    <div className="d-flex mt-4 col-6" >
                        <a className="list-group-item list-group-item-action icon-link cv-download" 
                            target="_blank"
                            href="https://drive.google.com/file/d/1sSWPcJtMJztdsVywupiI5fYR_xJf-C-s/view?usp=sharing" 
                            title="CV">
                                <button type="button" class="btn btn-outline-info btn-sm rounded-4">view cv |></button>
                        </a>
                        <a className="list-group-item list-group-item-action icon-link cv-download" 
                            target="_blank"
                            href="https://drive.google.com/file/d/16NNLW_to7vedRpB5vBRT4M3ZTqFFJcRt/view?usp=sharing" 
                            title="Employment Certificate">
                                <button type="button" class="btn btn-outline-info btn-sm rounded-4">service letter</button>
                        </a>
                    </div>


                    <div className="d-flex mt-9 col-8" >
                        <a className="list-group-item list-group-item-action icon-link github" 
                        target="_blank"
                        href="https://github.com/nimsara1999?tab=repositories" 
                        title="GitHub">
                            <BsGithub style={{fontSize:28}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link linkedin" 
                        target="_blank"
                        href="https://www.linkedin.com/in/nimsara-thisal-166513239/" 
                        title="LinkedIn">
                            <FaLinkedin style={{fontSize:28}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link email" 
                        href="mailto:nimsarathisalgcc@gmail.com" 
                        title="Email: nimsarathisalgcc@gmail.com">
                            <BsEnvelope style={{fontSize:28}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link phone" 
                        href="tel:+94710880133" 
                        title="Call: +94710880133">
                            <BsPhone style={{fontSize:26}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link fiverr" 
                        target="_blank"
                        href="https://www.fiverr.com/s/bd5wKjX" 
                        title="Fiverr">
                            <TbBrandFiverr style={{fontSize:28}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link upwork" 
                        target="_blank"
                        href="https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share" 
                        title="Upwork">
                            <FaSquareUpwork style={{fontSize:28}} />
                        </a>
                    </div>
                    
                </div>

                
                <div className=" col-sm-7 offset-md-5 right-column px-2">
                {/* Navigation bar */}
                <div id="list-example" className="d-md-none row-12 d-flex justify-content-around text-center mb-3 mt-3">
                    <a className={`list-group-item list-group-item-action `} href="#list-item-0" style={currentID==='list-item-1'?{color:'white'}:{color:'#959caf'}}>About</a>
                    <a className={`list-group-item list-group-item-action `} href="#list-item-5" style={currentID==='list-item-5'?{color:'white'}:{color:'#959caf'}}>Reviews</a>
                    <a className={`list-group-item list-group-item-action `} href="#list-item-3" style={currentID==='list-item-3'?{color:'white'}:{color:'#959caf'}}>Projects</a>

                    <a className={`list-group-item list-group-item-action `} href="#list-item-4" style={currentID==='list-item-4'?{color:'white'}:{color:'#959caf'}}>Contact</a>
                </div>

                <div id="scrollSpy" data-bs-spy="scroll" data-bs-target="#my-nav" data-bs-smooth-scroll="true" tabIndex="0" style={{ height: '100%', overflowY: 'scroll' }}>
                    
                    <div id="list-item-0" className='d-md-none text-center'>
                    <h1 className='mt-5'>Nimsara Paramulla</h1>
                    <div className='mt-3'/>
                    <h6>
                        <Typewriter
                            words={['Full-stack Engineer', 'Embedded Systems Engineer']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h6>
                    <div className='mt-3'/>
                    <img src="https://drive.google.com/thumbnail?id=1xZeEK-zVG4JbZasJodlxg3Xcs26UtFuo" className="img-fluid double-size mt-3"
                        style={{ borderRadius: '50%',  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(247, 247, 247, 0.1)' }}
                    />
                    <div className="d-flex mt-5 col-8 offset-2 text-center">
                        <a className="list-group-item list-group-item-action icon-link github" target="_blank" href="https://github.com/nimsara1999?tab=repositories">
                            <BsGithub style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link linkedin" target="_blank" href="https://www.linkedin.com/in/nimsara-thisal-166513239/">
                            <FaLinkedin style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link email" href="mailto:nimsarathisalgcc@gmail.com">
                            <BsEnvelope style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link phone"  href="tel:+94710880133">
                            <BsPhone style={{fontSize:18}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link fiverr" target="_blank" href="https://www.fiverr.com/s/bd5wKjX">
                            <TbBrandFiverr style={{fontSize:20}} />
                        </a>
                        <a className="list-group-item list-group-item-action icon-link upwork" target="_blank" href="https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share">
                            <FaSquareUpwork style={{fontSize:20}} />
                        </a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <div className="d-flex col-6 ps-2">
                            <a className="list-group-item list-group-item-action icon-link cv-download" 
                                target="_blank"
                                href="https://drive.google.com/file/d/1sSWPcJtMJztdsVywupiI5fYR_xJf-C-s/view?usp=sharing" 
                                title="CV">
                                    <button type="button" class="btn btn-outline-info btn-sm rounded-4">view cv |></button>
                            </a>
                            <a className="list-group-item list-group-item-action icon-link cv-download" 
                                target="_blank"
                                href="https://drive.google.com/file/d/16NNLW_to7vedRpB5vBRT4M3ZTqFFJcRt/view?usp=sharing" 
                                title="Employment Certificate">
                                    <button type="button" class="btn btn-outline-info btn-sm rounded-4">service let.</button>
                            </a>
                        </div>
                    </div>

                    </div>

                    <div className='col-sm-8'>
                        <VisibleDiv className="mb-5"  id="list-item-1" handleVisibilityChange={this.handleVisibilityChange}>
                        {about1}
                        {about2}
                        {about3}
                        <h4 className='mt-5 mb-3'>Background</h4>
                        </VisibleDiv>

                        <div className="about-cards-container">
                            {aboutData.map((about, index) => (
                                <div className="about-card">
                                    <AboutCard key={index} {...about} />
                                </div>
                            ))}
                        </div>


                    <VisibleDiv id="list-item-5" handleVisibilityChange={this.handleVisibilityChange}>
                        <div className='mt-9'/>
                            <h4 className='mb-3'>Reviews and Feedback</h4>
                            <BsFillStarFill className='me-1' style={{color:'yellow'}} />
                            <BsFillStarFill className='me-1' style={{color:'yellow'}} />
                            <BsFillStarFill className='me-1' style={{color:'yellow'}} />
                            <BsFillStarFill className='me-1' style={{color:'yellow'}} />
                            <BsFillStarFill className='me-1' style={{color:'yellow'}} />
                            <p className="card-text mt-3 mb-4 text-light-grey justify-content-center">I have successfully completed numerous full-stack and IoT projects on freelancing platforms, consistently delivering high-quality results. My work has earned me excellent reviews from clients, reflecting their satisfaction and trust in my expertise.</p>
                            <a href='https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share' className='contributions-link' target='_blank' rel='noopener noreferrer'>
                                    <h6 className='custom-text-primary-1'>Reviews on Upwork platform.  <BsBoxArrowUpRight style={{fontSize:13,marginBottom:'5'}}/> </h6>
                                </a>
                                <a href='https://www.fiverr.com/s/bd5wKjX' className='contributions-link' target='_blank' rel='noopener noreferrer'>
                                     <h6 className='custom-text-primary-1 mt-4 mb-4'>Reviews on Fiverr platform.  <BsBoxArrowUpRight style={{fontSize:13,marginBottom:'5'}}/> </h6>
                                </a>

                                    <div id="carouselExampleRide" className="carousel carousel-dark slide ms-1 me-4 bg-white rounded" data-bs-ride="true">
                                    <div className="carousel-inner me-4 rounded">
                                        <div class="carousel-item active" data-bs-interval="4000"> <img src={reviewData[0].url} class="d-block rounded w-100" alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[1].url} class="d-block rounded w-100" alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[2].url} class="d-block rounded w-100 " alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[3].url} class="d-block rounded w-100" alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[4].url} class="d-block rounded w-100" alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[5].url} class="d-block rounded w-100" alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[6].url} class="d-block rounded w-100" alt="..."/></div>
                                        <div class="carousel-item" data-bs-interval="4000"> <img src={reviewData[7].url} class="d-block rounded w-100" alt="..."/></div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                    </div>
                    </VisibleDiv>

 



                            

                    <VisibleDiv id="list-item-3" handleVisibilityChange={this.handleVisibilityChange}>
                        <h4 className='mt-6'>Projects & Research</h4>
                            <GitHubCalendar/>

                            <div className="dropdown mb-3">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#014c678c',fontSize:'14px' }}>
                                    {this.state['selectedType'] === 'all' ? 'All Projects' : this.state['selectedType'] === 'fullstack_mobile' ? 'Mobile & Fullstack Projects': this.state['selectedType'] ===  'embedded' ? 'IOT & Embedded Projects' : this.state['selectedType'] ==='research' ? 'Research Projects' : 'null'}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button className="dropdown-item" type="button" onClick={() => this.setState({ selectedType: 'all' })}>All Projects</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => this.setState({ selectedType: 'fullstack_mobile' })}>Mobile & Fullstack Projects</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => this.setState({ selectedType: 'embedded' })}>IOT & Embedded Projects</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => this.setState({ selectedType: 'research' })}>Research Projects</button></li>
                                </ul>
                            </div>
                    </VisibleDiv>

                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} selectedType={this.state['selectedType']} />
                        ))}

                        <VisibleDiv className="mb-5" id="list-item-4" handleVisibilityChange={this.handleVisibilityChange}>
                        <h4 className='mt-9 mb-4'>Contact Me</h4>

                        <a className="list-group-item list-group-item-action icon-link email mb-3" href="mailto:nimsarathisalgcc@gmail.com" >
                            <BsEnvelope className='me-2' style={{fontSize:20}} />
                            nimsarathisalgcc@gmail.com
                        </a>
                        <a className="list-group-item list-group-item-action icon-link phone mb-3" href="tel:+94710880133" >
                            <BsPhone className='me-2' style={{fontSize:20}} />
                            +94 71 088 0133
                        </a>
                        <a className="list-group-item list-group-item-action icon-link github mb-3" target="_blank" href="https://github.com/nimsara1999?tab=repositories">
                            <BsGithub className='me-2' style={{fontSize:20}} />
                            github.com/nimsara1999
                        </a>
                        <a className="list-group-item list-group-item-action icon-link linkedin mb-3" target="_blank" href="https://www.linkedin.com/in/nimsara-thisal-166513239/">
                            <FaLinkedin className='me-2' style={{fontSize:20}} />
                            linkedin.com/in/nimsata-thisal
                        </a>
                        <a className="list-group-item list-group-item-action icon-link fiverr mb-3" target="_blank" href="https://www.fiverr.com/s/bd5wKjX">
                            <TbBrandFiverr className='me-2' style={{fontSize:20}} />
                            fiverr.com/nimsaraparamulla
                        </a>
                        <a className="list-group-item list-group-item-action icon-link upwork mb-6" target="_blank" href="https://www.upwork.com/freelancers/~01fc1fa3f32baa3d67?mp_source=share">
                            <FaSquareUpwork className='me-2' style={{fontSize:20}} />
                            upwork.com/nimsaraparamulla
                        </a>
                    
                        </VisibleDiv>
                    </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
