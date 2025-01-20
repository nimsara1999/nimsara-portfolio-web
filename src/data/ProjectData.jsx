// projectData.js

const projectData = [
    {
        title: "Statics Management System - Colombo Bandaranaike International Airport",
        description: "Developed a comprehensive Statistics Management System, enhancing data collection, real-time reporting, and error tracking, while collaborating on backend, frontend, and database components within Docker containers.",
        image: "https://www.nuevopudahuel.cl/sites/all/themes/vinci_airport/images/asistencia_equipaje/asistencia-eq.jpg",
        scale: 1,
        badges: ['springboot', 'java', 'postgresql', 'javascript', 'tailwindcss','docker'],
        type:['fullstack_mobile']
    },
    {
        title: "Smart Gas Project - Overleap (Pvt) Ltd.",
        description: "Developed firmware for an IoT gateway with a React Native mobile app, managing the team, UI design, Google Maps integration, authentication, API handling, and wifi communication stabilization.",
        image: "https://drive.google.com/thumbnail?id=1qb6jWkreqFOsWVxshHwcCwn_snw31zn2",
        scale: 1,
        badges: ['react-native', 'javascript', 'google-maps ', 'platformIO', 'esp32','ble','wifi'],
        type:['fullstack_mobile','embedded']
    },
    {
        title: "Concrete Process Monitor - Freelancing(United States) ",
        description: "Developed a Raspberry Pi-based dashboard for controlling and monitoring a concrete block making process, including door control, ingredient mixing by weight, block formation tracking, and irrigation management with real-time data visualization and remote operation capabilities.",
        image: "https://drive.google.com/thumbnail?id=1MdQttCBgIuMaUCgPRmf6mlPTEc5Mr_8q",
        scale: 1.2,
        badges: ['python', 'flask', 'bootstrap', 'mqtt', 'socketIO','platformIO','raspberrypi','esp32'],
        type:['fullstack_mobile','embedded']
    },
    {
        title: "Custom Chatbot",
        description: "This custom chatbot boosts my portfolio website's interactivity, offering real-time, automated responses to visitors. Built with Java and Spring Boot, it integrates Astra DB for data management, LangChain4j for enhanced language processing, and the ChatGPT API for natural interactions. The application runs in a Docker container, providing a scalable and efficient deployment environment.",
        image: "https://drive.google.com/thumbnail?id=1xVmd6NMmKmOUFnli3iptBUwY6h2Nyg7d",
        scale: 1.1,
        badges: ['springboot', 'java', 'langChain4j', 'astraDB', 'chatgptapi','docker'],
        link: "https://github.com/nimsara1999/nimsara-portfolio-bot",
        type:['fullstack_mobile']
    },
    {
        title: "Vision Way Preschool Web-site",
        description: "The Preschool website is an interactive platform that showcases the preschool's mission, values, and events. It features pages on curriculum, faculty, and facilities, alongside a registration form for secure enrollments. The site also includes a gallery of events and activities, providing a comprehensive view of the preschool's offerings and engaging prospective parents and the community.",
        image: "https://drive.google.com/thumbnail?id=1yojNzX7PN57y-hFE4j_1tkq3beEsIrT_",
        scale: 1.1,
        badges: ['javascript', 'react', 'bootstrap', 'html', 'css','responsive-design'],
        link: "https://youtu.be/U0uUUjpdOJ4",
        type:['fullstack_mobile']
    },
    {
        title: 'Intellimate Voice Assistant',
        description:  "The voice management component of intellimate robot, which identifies user emotions from their voice and responds accordingly. The project utilizes a Node.js server to handle external APIs like speech-to-text and emotion detection, reducing latency and dependency on user's Wi-Fi.",
        image: "https://drive.google.com/thumbnail?id=1ORopuoU-H9JHoewhbw7XaLypkL5LSUl2",
        scale: 1.15,
        badges: ['c++','esp32', 'i2c/i2s protocol', 'wifi', 'nodejs', 'chatgpt api', 'google cloud console', 'speech-to-text', 'text-to-speech','emotion prediction api'],
        link:"https://youtu.be/EcGdtz8JKoo",
        type:['embedded']
    },
    {
        title: 'Easy Boarding Place Finder Mobile-app',
        description: 'The Boarding Place Finder app leverages React Native for seamless mobile performance, integrating Google Maps for precise location tracking. It utilizes Firebase for backend services, ensuring robust data handling and user authentication. The app provides an intuitive user interface for easy navigation and efficient boarding place discovery.',
        image: "https://drive.google.com/thumbnail?id=1e6snZYlE8RAYNn9jTyQRIZYKxRFQ1i99",
        scale: 1.5,
        badges: ['ios','android','react-native', 'javascript', 'firestore', 'firebase-authentication' ,'google-maps api','google-cloud',],
        link:'https://github.com/nimsara1999/easyBoarding',
        type:['fullstack_mobile']
    },
    {
        title: 'Predictive Collision Avoidance Using Dashcams(Ongoing)',
        description:  "This research aims to improve traffic accident anticipation and drivable area forecasting for autonomous vehicles using dashcam video input. By employing advanced machine learning models like CNNs and LSTMs, the project seeks to enhance cross-dataset generalization and develop a real-time collision forecasting system, boosting the safety and decision-making of autonomous driving systems through predictive modeling and real-world testing.",
        image: "https://drive.google.com/thumbnail?id=1eqtVDhm7NVDbYTvOLmCc6sqknwJ9O7qz",
        scale: 1.2,
        badges: ['machine-learning','deep-learning','python','google-vm','research'],
        type:['research']
    },
    {
        title: 'Full-stack Email Management System. (Ongoing)',
        description:  "The email management system, built with Node.js for the backend, React for the frontend, and MySQL for the database, features dynamic dashboards for admin and normal users. It supports user management, email composition, inbox and sent items, personal settings, and a birthday notification system, ensuring efficient communication and personalized user experiences.",
        image: "https://drive.google.com/thumbnail?id=1NixLg-S_jDk0x-NxyZyuLoDapMAuVLik",
        scale: 1.2,
        badges: ['javascript', 'react', 'bootstrap', 'html', 'css', 'nodejs', 'mysql', 'rest-api', 'jwt-authentication'],
        link:'https://github.com/nimsara1999/EmailManagerJs',
        type:['fullstack_mobile']
    },
    {
        title: 'Smart Home mobile app with Apple and Alexa',
        description:  "The project involves the development and scaling of a smart RGB LED device, designed for integration with a custom application, Apple HomeKit, and Amazon Alexa Initially, the device pairs with a custom mobile app to facilitate Wi-Fi configuration through user authentication. This is achieved using Firebase for secure user registration and device association. Post configuration, the device transitions from setup to operational mode, where it automatically connects to the specified Wi-Fi network.",
        image: "https://drive.google.com/thumbnail?id=1B4HctNpLEMHJs6X5CQ_DBUTSyMen58uk",
        scale: 1.15,
        badges: ['c++', 'esp32','wifi', 'mqtt', 'firebase', 'apple-homekit', 'amazon-alexa','java','android-studio'],
        link:'https://github.com/nimsara1999/Smart_bulb',
        type:['fullstack_mobile','embedded']
    },
    {
        title: 'Bicycle Rent System',
        description:  "Developed a bicycle rental management system using RFID technology. The web app enables users to pay and rent bicycles seamlessly. Post-payment, users unlock bicycles via RFID tags, ensuring a secure and efficient rental experience. The project combines RFID with modern web development for a user-centric solution.",
        image: "https://drive.google.com/thumbnail?id=1CaQspdOW_goyLADp8SgbXPCO6KHznerG",
        scale: 1.15,
        badges: ['c++', 'esp8266','wifi', 'rest-api', 'rfid','lcd-display'],   
        link:'https://github.com/nimsara1999/Bicycle-Rent-System',
        type:['embedded']
    },
    {
        title: 'Smart Medibox Project',
        description:  "A medibox, which is use to store and protect medicines. User can set alarms to medicine times using web dashboard or inbuild OLED display. Medibox inside temperature, humidity, intensity monitoring system using Node-red live dashboard with MQTT brokers. Medibox intensity controlling system using LDR, special door and servo motors.",
        image: "https://drive.google.com/thumbnail?id=1NRGW2wMLyjQdL5qTLpJXR08BCGVdE5y1",
        scale: 1.15,
        badges: ['c++', 'esp32','oled-display', 'sensors', 'wokwi','mqtt','node-red'],   
        link:'https://wokwi.com/projects/363440445411658753',
        type:['embedded']
    },
    {
        title: 'Portfolio Website',
        description:  "My portfolio website showcases my expertise in web development, crafted using React, Bootstrap, HTML, and CSS. Designed with mobile responsiveness in mind, it provides a seamless viewing experience on various devices. The site is structured into distinct sections, each highlighting different aspects of my professional skills and projects, ensuring that visitors can easily navigate and explore my work.",
        image: "https://drive.google.com/thumbnail?id=1mR8-VRpUiLNDFXGXVLhrfVX07jVbXM8A",
        scale: 1.15,
        badges: ['javascript', 'react', 'bootstrap', 'html', 'css', 'responsive-design'],
        link:'/',
        type:['fullstack_mobile']
    },
    {
        title: 'Robot Arm Control Project',
        description:  "My batchmate and I developed a Rhino Robot Arm for EXMO'23 at the University of Moratuwa, Sri Lanka. We completely overhauled the old arm, replacing wires, encoders, and motors, and programmed it using microcontrollers. Each motor had encoders with two interrupt pins, requiring six Arduino Uno boards. We used I2C communication for control and implemented PID for smooth arm movements.",
        image: "https://drive.google.com/thumbnail?id=1rZx8U8wwjF4y44eQaQqECYCBK6B1nzxA",
        scale: 1.1,
        badges: ['arduino', 'i2c-bus','pid', 'motor-drivers', 'robot-arm','encoders'],   
        link:'https://www.linkedin.com/posts/nimsara-thisal-166513239_i-am-thrilled-to-announce-our-latest-achievement-activity-7092454856975667200-yssp?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
        type:['embedded']
    },
    {
        title: 'Email Management System CLI',
        description:  "The email management system utilizes Java, OOP principles, and design patterns to manage official and personal recipients. It reads recipient data from a text file, creates objects, and tracks counts with static members. The system sends birthday greetings, logs emails with object serialization, and offers command-line operations for adding recipients, sending emails, and retrieving sent emails by date.",
        image: "https://drive.google.com/thumbnail?id=1NixLg-S_jDk0x-NxyZyuLoDapMAuVLik",
        scale: 1.2,
        badges: ['java','oop','design-patterns','serialization','email-management'],
        link:'https://github.com/nimsara1999/Email_manager1.java',
        type:['fullstack_mobile']
    },
];

export default projectData;


