import React from 'react';
import './ProjectCard.css'; // Import the CSS file
import { ContributionCalendar } from 'react-contribution-calendar';
import moment from 'moment';

const data = [
    { '2024-04-20': { level: 2 } },
    { '2024-04-21': { level: 3 } },
    { '2023-07-08': { level: 1 } },
    { '2023-08-08': { level: 1 } },
    { '2023-07-09': { level: 4, data: {} } },
    {
        '2023-03-31': {
            level: 3,
            data: {
                myKey: 'my data',
            },
        },
    },
];

const today = moment().format('YYYY-MM-DD');
const sixMonthsAgo = moment().subtract(6, 'months').format('YYYY-MM-DD');
const eightMonthsAgo = moment().subtract(8, 'months').format('YYYY-MM-DD');
const tenMonthsAgo = moment().subtract(10, 'months').format('YYYY-MM-DD');

const GitHubCalendar = () => {
    return (
        <>
            {/* Large screens (>= 1200px) */}
            <div className="mt-5 mb-5 d-none d-xl-block" style={{marginLeft:-10, zIndex:5, opacity:0.8}}>
            <h6>--  GitHub Contribution Calendar</h6>
                <ContributionCalendar
                    data={data}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="grass"
                    cx={13}
                    cy={13}
                    cr={0}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>

            {/* Medium screens (>= 768px and < 1200px) */}
            <div className="mt-5 mb-5 d-none d-md-block d-xl-none" style={{marginLeft:-10}}>
            <h6>--  GitHub Contribution Calendar</h6>
                <ContributionCalendar
                    data={data}
                    start="2024-01-01"
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="grass"
                    cx={10}
                    cy={10}
                    cr={0}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>

            {/* Small screens (< 768px) */}
            <div className="mt-5 mb-5 d-md-none" style={{marginLeft:-10}}>
            <h6>--  GitHub Contribution Calendar</h6>
            <ContributionCalendar
    data={data}
    start="2024-02-17"
    end={today}
    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
    textColor="white"
    startsOnSunday={true}
    includeBoundary={true}
    theme={{
        background: 'transparent',
        text: 'white',
        grade4: '#196127', // highest level
        grade3: '#239a3b',
        grade2: '#7bc96f',
        grade1: '#c6e48b',
        grade0: '#d6d6d6', // grey color for the lowest level
    }}
    cx={11}
    cy={11}
    cr={0}
    onCellClick={(e, data) => console.log(data)}
    scroll={false}
/>

            </div>
        </>
    );
};

export default GitHubCalendar;